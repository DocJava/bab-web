import React from 'react';
import {IonCard, IonCardSubtitle, IonItem} from "@ionic/react";
import {displayModal, selectCourtNumber} from "../../actions";
import {useDispatch} from "react-redux";

export default function CourtSelect({ court }) {
    const dispatch = useDispatch();

    const handleSelection = () => {
        dispatch(selectCourtNumber(court));
        dispatch(displayModal("courtEditModal"));
    }

    return (
        <IonCard onclick={handleSelection}>
            <IonItem>
                <IonCardSubtitle>Court {court.courtNumber}</IonCardSubtitle>
            </IonItem>

            <div className="card-body py-3">
                {court.time}
            </div>
        </IonCard>
    )
}