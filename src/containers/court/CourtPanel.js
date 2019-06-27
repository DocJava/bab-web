import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCourts, requestPlayers} from "../../actions";
import CourtSelect from "../../components/court/CourtSelect";
import {IonLabel, IonList, IonListHeader} from "@ionic/react";

import {CourtCreateModal} from '../../components/court/CourtCreateModal';
import Refresher from "../../components/Refresher";
import {CourtEditModal} from "../../components/court/CourtEditModal";

const twoMinutesMillis = 120000;

export default function CourtPanel() {
    const { current, upcoming } = useSelector(state => state.courts);
    const dispatch = useDispatch();

    function updateScreenInformation() {
        return dispatch(requestCourts()).then(() => dispatch(requestPlayers()));
    }

    useEffect(() => {
        updateScreenInformation()
    }, []);

    useEffect(() => {
        const interval = setInterval(updateScreenInformation, twoMinutesMillis);
        return () => clearInterval(interval);
    }, []);

    const courtsFor = (courtList) => {
        return (
            <>
                {courtList.map(court => (
                    <CourtSelect court={court}
                                 key={court.id}/>
                ))}
            </>
        );
    };

    return (
        <>
            <Refresher updateScreenInfoCallBack={updateScreenInformation}/>

            <IonList>
                <IonListHeader>
                    <IonLabel>Current Courts</IonLabel>
                </IonListHeader>

                {courtsFor(current)}

                <IonListHeader>
                    <IonLabel>Upcoming Courts</IonLabel>
                </IonListHeader>

                {courtsFor(upcoming)}
            </IonList>

            <CourtCreateModal/>
            <CourtEditModal/>
        </>
    );
}
