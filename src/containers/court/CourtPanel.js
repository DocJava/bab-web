import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCourts, requestPlayers} from "../../actions";
import CourtSelect from "../../components/court/CourtSelect";
import {List} from 'antd';

import {CourtCreateModal} from '../../components/court/CourtCreateModal';
import {CourtEditModal} from "../../components/court/CourtEditModal";

const twoMinutesMillis = 120000;

export default function CourtPanel() {
    const { current, upcoming } = useSelector(state => state.courts);
    const dispatch = useDispatch();

    function updateScreenInformation() {
        return dispatch(requestCourts()).then(() => dispatch(requestPlayers()));
    }

    useEffect(() => {
        updateScreenInformation();
    }, []);

    useEffect(() => {
        const interval = setInterval(updateScreenInformation, twoMinutesMillis);
        return () => clearInterval(interval);
    }, []);

    const courtsFor = (courtList) => {
        return courtList.map(court => (
            <CourtSelect court={court}
                         key={court._id}/>
        ));
    };

    return (
        <>
            <List>
                <div className="list-header">Current Courts</div>

                {courtsFor(current)}

                <div className="list-header">Upcoming Courts</div>

                {courtsFor(upcoming)}
            </List>

            <CourtCreateModal/>
            <CourtEditModal/>
        </>
    );
}
