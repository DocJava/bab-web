import React from 'react';
import {IonCard, IonCardSubtitle, IonItem} from "@ionic/react";
import {selectCourt} from "../../actions";

export default function CourtSelect({ court }) {

    return (
        <IonCard onclick={() => selectCourt(court)}
                 data-toggle="modal"
                 data-target="#courtEditModal">
            <IonItem>
                <IonCardSubtitle>Court {court.courtNumber}</IonCardSubtitle>
            </IonItem>

            <div className="card-body py-3">
                {court.time}
            </div>
        </IonCard>
    )
}