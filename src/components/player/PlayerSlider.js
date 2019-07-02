import React from 'react';
import {useDispatch} from 'react-redux';
import {displayModal, removePlayer, startUpdatingPlayer} from "../../actions";
import {IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from '@ionic/react';

export default function PlayerSlider({ player }) {
    const dispatch = useDispatch();

    const handleEditButton = () => {
        dispatch(startUpdatingPlayer(player));
        dispatch(displayModal("playerEditModal"));
    };
    const handleRemoveButton = () => dispatch(removePlayer(player));

    return (
        <IonItemSliding value={player._id}>
            <IonItem>
                <IonLabel>{player.name}</IonLabel>
                <span slot="end" className="text-muted">{player.password}</span>
            </IonItem>

            <IonItemOptions side="end">
                <IonItemOption color="light"
                               onClick={handleEditButton}>
                    <IonIcon slot="icon-only" name="create"/>
                </IonItemOption>

                <IonItemOption color="danger" onClick={handleRemoveButton}>
                    <IonIcon slot="icon-only" name="close"/>
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
}