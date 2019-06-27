import React from 'react';
import {IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel} from "@ionic/react";

export default function Reservation({ reservation }) {

    return (
        <IonItemSliding value={reservation._id}>
            {/*<IonItem>*/}
                {/*<IonLabel>{player.name}</IonLabel>*/}
                {/*<span slot="end" className="text-muted">{player.password}</span>*/}
            {/*</IonItem>*/}

            {/*<IonItemOptions side="end">*/}
                {/*<IonItemOption color="light"*/}
                               {/*onClick={handleEditButton}*/}
                               {/*data-toggle="modal"*/}
                               {/*data-target="#playerEditModal">*/}
                    {/*<IonIcon slot="icon-only" name="create"/>*/}
                {/*</IonItemOption>*/}

                {/*<IonItemOption color="danger" onClick={handleRemoveButton}>*/}
                    {/*<IonIcon slot="icon-only" name="close"/>*/}
                {/*</IonItemOption>*/}
            {/*</IonItemOptions>*/}
        </IonItemSliding>
    );
}
