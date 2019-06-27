import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectCourt} from "../../actions";
import {Modal, ModalBody, ModalFooter, ModalHeader} from '../Modal';
import {IonCardTitle, IonItem, IonList} from "@ionic/react";
import Reservation from './Reservation';

export function CourtEditModal() {
    const dispatch = useDispatch();

    const court = useSelector(state => state.selected.court);
    const reservations = court.reservations || [];


    const handleCancel = () => dispatch(selectCourt());
    const handleUpdateCourt = () => {
        // todo: dispatch update court here
    };

    return (
        <Modal modalId="courtEditModal">
            <ModalHeader>
                <IonItem lines="none">
                    <IonCardTitle>Court {court.courtNumber}</IonCardTitle>
                </IonItem>
            </ModalHeader>

            <ModalBody>
                <IonList>
                    {reservations.map(reservation => <Reservation reservation={reservation}/>)}
                </IonList>
            </ModalBody>

            <ModalFooter onCancel={handleCancel}
                         onSuccess={handleUpdateCourt}/>

        </Modal>
    );
}
