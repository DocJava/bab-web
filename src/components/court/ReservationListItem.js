import React from 'react';
import {useDispatch} from "react-redux";
import {removeReservation} from "../../actions";
import {List, Popover, Icon} from 'antd';

export default function ReservationListItem({ reservation }) {
    const dispatch = useDispatch();

    const names = (reservation.players.join(" ")) || "randoms";

    const handleReservationDelete = () => {
        dispatch(removeReservation(reservation));
    };

    const reservationOption = (
        <Icon type="delete" style={{ fontSize: '20px', color: 'red' }} onClick={handleReservationDelete}/>
    );

    const moreButton = (
        <Popover placement="left"
                 content={reservationOption}
                 trigger="click">
            <Icon type="more"/>
        </Popover>
    );

    return (
        <List.Item value={reservation._id}
                   actions={[moreButton]}>
            <List.Item.Meta description={names}/>
            <div className="text-muted">
                {reservation.time}
            </div>
        </List.Item>
    );
}
