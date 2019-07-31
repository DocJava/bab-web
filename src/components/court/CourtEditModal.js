import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearModal, selectCourtNumber} from "../../actions";
import {Modal} from '../Modal';
import {List} from 'antd';
import ReservationListItem from './ReservationListItem';

export function CourtEditModal() {
    const dispatch = useDispatch();

    const courtNumber = useSelector(state => state.selected.courtNumber);
    const reservations = useSelector(state => state.courts.courtGroups[courtNumber]);
    const modalToDisplay = useSelector(state => state.displays.modalToDisplay);

    if (modalToDisplay === "courtEditModal" && !reservations) {
        dispatch(clearModal());
    }

    const handleCancel = () => dispatch(selectCourtNumber(-1));

    return (
        <Modal modalId="courtEditModal"
               onCancel={handleCancel}
               title={`Court ${courtNumber}`}>

            <List>
                {reservations && reservations.map(reservation => <ReservationListItem reservation={reservation}/>)}
            </List>
        </Modal>
    );
}
