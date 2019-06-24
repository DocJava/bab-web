import React, {useState} from 'react';
import '../style/App.css';
import MemberSelector, {MemberAddModal, MemberSelectorFooter} from '../containers/MemberSelector';
import PlayerPanel, {PlayerAddModal, PlayerSelectorFooter} from '../containers/PlayerPanel';
import Courts, {CourtAddModal} from "../containers/Courts";
import {
    IonApp,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonToolbar
} from '@ionic/react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const PLAYER_PANE = "PLAYER_PANE";
const COURT_PANE = "COURT_PANE";
const MEMBER_PANE = "MEMBER_PANE";

export default function App() {
    const [selectedPane, setSelectedPane] = useState(PLAYER_PANE);
    const [showModal, setShowModal] = useState(false);

    const handlePanelSelection = (e) => {
        setShowModal(false);
        setSelectedPane(e.detail.value);
    };

    let customFooter = null;
    let pane = null;
    let modal = null;

    switch (selectedPane) {
        case PLAYER_PANE:
            customFooter = <PlayerSelectorFooter/>;
            pane = <PlayerPanel/>;
            modal = <PlayerAddModal showModal={showModal} setShowModal={setShowModal}/>;
            break;

        case COURT_PANE:
            pane = <Courts/>;
            modal = <CourtAddModal/>;
            break;

        case MEMBER_PANE:
            customFooter = <MemberSelectorFooter/>;
            pane = <MemberSelector/>;
            modal = <MemberAddModal showModal={showModal} setShowModal={setShowModal}/>;
    }

    const header = (
        <IonHeader>
            <IonToolbar class="header">
                <IonSegment onIonChange={handlePanelSelection} value={selectedPane}>
                    <IonSegmentButton value={PLAYER_PANE}>
                        <IonLabel>Players</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value={COURT_PANE}>
                        <IonLabel>Courts</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value={MEMBER_PANE}>
                        <IonLabel>Members</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </IonToolbar>
        </IonHeader>
    );

    const body = (
        <IonContent fullScreen>
            {pane}

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton onClick={() => setShowModal(true)} data-toggle="modal" data-target="#pageModal">
                    <IonIcon name="add"/>
                </IonFabButton>
            </IonFab>

            {modal}
        </IonContent>
    );

    return (
        <IonApp>
            {header}

            {body}

            {customFooter}
        </IonApp>
    );
}
