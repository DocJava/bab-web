import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearModal, selectCourtNumber} from "../../actions";
import {Modal, ModalHeader} from '../Modal';
import {IonCardTitle, IonItem, IonList} from "@ionic/react";
import ReservationSlider from './ReservationSlider';

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
        <Modal modalId="courtEditModal" onCancel={handleCancel}>
            <ModalHeader>
                <IonItem lines="none">
                    <IonCardTitle>Court {courtNumber}</IonCardTitle>
                </IonItem>
            </ModalHeader>

            <IonList>
                {reservations && reservations.map(reservation => <ReservationSlider reservation={reservation}/>)}
            </IonList>
        </Modal>
    );
}
