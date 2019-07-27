import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createCourt, deselectPlayers} from "../../actions";
import PlayerSelector from '../../containers/player/PlayerSelector';
import {Modal, ModalHeader} from '../Modal';
import {IonCol, IonInput, IonItem} from "@ionic/react";

export function CourtCreateModal() {
    const dispatch = useDispatch();

    const [courtNumber, setCourtNumber] = useState(0);
    const [delay, setDelay] = useState(0);
    const names = useSelector(state => state.selected.playerNames);
    const randoms = useSelector(state => state.selected.useCourtRandoms);
    const courtCreatable = useSelector(state => state.selected.courtCreatable);

    const handleCancel = () => dispatch(deselectPlayers());
    const handleCreateCourt = () => {
        dispatch(createCourt({ courtNumber, names, delay, randoms }));
        dispatch(deselectPlayers());
    };

    return (
        <Modal
            onCancel={handleCancel}
            onSuccess={handleCreateCourt}
            successEnabled={courtCreatable}>
            <ModalHeader>
                <IonCol>
                    <IonItem lines="none">
                        <span className="mr-2 text-muted">Court Number:</span>
                        <IonInput placeholder="Enter Court Number"
                                  type="number"
                                  value={courtNumber}
                                  onIonChange={(e) => setCourtNumber(e.target.value)}/>
                    </IonItem>
                </IonCol>

                <IonCol slot="end">
                    <IonItem lines="none">
                        <span className="mr-2 text-muted">Delay:</span>
                        <IonInput placeholder="Enter Delay"
                                  type="number"
                                  value={delay}
                                  onIonChange={(e) => setDelay(e.target.value)}/>
                    </IonItem>
                </IonCol>
            </ModalHeader>

            <PlayerSelector/>

        </Modal>
    );
}
