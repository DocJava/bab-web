import {useDispatch} from "react-redux";
import {IonFab, IonFabButton, IonIcon} from "@ionic/react";
import React from "react";
import {displayModal} from "../actions";


export function FloatingActionButton() {
    const dispatch = useDispatch();

    const handleFabClick = () => dispatch(displayModal());

    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onclick={handleFabClick}>
                <IonIcon name="add"/>
            </IonFabButton>
        </IonFab>
    );
}