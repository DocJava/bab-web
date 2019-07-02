/* eslint-disable default-case */
import {CREATE_COURT, FETCH_COURTS, REMOVE_RESERVATION} from "../actions/index";
import _ from 'lodash';
import moment from 'moment-timezone';

const now = () => new Date();

export default function (state = { current: [], upcoming: [], reservations: [], courtGroups: {} }, action) {

    let reservations;

    switch (action.type) {
        case FETCH_COURTS:
            reservations = action.payload.data.reservations;
            return splitReservations(reservations);

        case CREATE_COURT:
            const court = action.payload.data.reservation;
            reservations = state.reservations;

            reservations.push(court);

            return splitReservations(reservations);

        case REMOVE_RESERVATION:
            const reservationToken = action.payload.token;

            reservations = _.reject(state.reservations, ({ token }) => token === reservationToken);

            return splitReservations(reservations);
    }

    return state;
}

function splitReservations(reservations, state) {
    const formattedReservations =  _.map(reservations, preformattedReservation);

    const courtGroups = _.groupBy(_.map(formattedReservations, formatReservation), 'courtNumber');

    const randomlessReservations = _.reject(formattedReservations, 'randoms');

    const sortedReservations = _.sortBy(randomlessReservations, ['courtNumber', 'startAt']);
    const courts = mergeReservations(sortedReservations);
    const sortedCourts = _.sortBy(courts, ['startAt']);
    const courtsWithReservations = _.each(sortedCourts, (court) => court.reservations = courtGroups[court.courtNumber]);
    const [currentCourts, upcomingCourts] = _.partition(courtsWithReservations, 'isCurrentCourt');

    const current = _.map(currentCourts, formatCurrentCourt);
    const upcoming = _.map(upcomingCourts, formatUpcomingCourt);

    return {
        ...state,
        current,
        upcoming,
        reservations,
        courtGroups
    };
}

function preformattedReservation(court) {
    return {
        ...court,
        courtNumber: court.courtNumber,
        startAt: moment(court.startAt).tz('America/Los_Angeles'),
        endAt: moment(court.endAt).tz('America/Los_Angeles'),
        randoms: court.randoms,
        isCurrentCourt: now() - court.startAt >= 0,
        reservations: []
    }
}

function reservationsCanBeCombined(previous, next) {
    return previous &&
        previous.courtNumber === next.courtNumber &&
        previous.randoms === next.randoms &&
        previous.startAt.isSame(next.endAt)
}

function mergeReservations(reservations) {
    return _.reduceRight(reservations, function (flattened, next) {
        const previous = _.last(flattened);
        if (reservationsCanBeCombined(previous, next)) {
            previous.endAt = next.startAt;
            previous.isCurrentCourt |= next.isCurrentCourt;
            return flattened;
        }
        return flattened.concat(next);
    }, []);
}

function formatReservation(reservation) {
    const startString = reservation.isCurrentCourt ? "Started at " : "Starting at ";

    return {
        ...reservation,
        time: startString + reservation.startAt.format("hh:mm")
    }
}

function formatCurrentCourt(court) {
    const duration = moment.duration(court.endAt - now());

    return {
        ...court,
        time: `${formatTime(duration)} remaining`
    };
}

function formatUpcomingCourt(court) {
    const duration = moment.duration(court.startAt - now());

    return {
        ...court,
        time: `${formatTime(duration)} wait`
    };
}

function formatTime(duration) {
    let formatString = "mm";

    if (duration.hours) {
        formatString = "HH:mm";
    }

    return moment.utc(duration.asMilliseconds()).format(formatString);
}
