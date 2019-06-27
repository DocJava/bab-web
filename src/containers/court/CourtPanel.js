import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCourts, requestPlayers} from "../../actions";
import CourtSelect from "../../components/court/CourtSelect";
import {IonLabel, IonList, IonListHeader} from "@ionic/react";

import {CourtCreateModal} from '../../components/court/CourtCreateModal';
import {CourtEditModal} from "../../components/court/CourtEditModal";

export default function Courts() {
    const { current, upcoming } = useSelector(state => state.courts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCourts());
        dispatch(requestPlayers());
    }, []);

    const courtsFor = (courtList, isCurrentCourt) => {
        return (
            <>
                {courtList.map(court => (
                    <CourtSelect court={court}
                                 isCurrentCourt={isCurrentCourt}
                                 key={court.id}/>
                ))}
            </>
        );
    };

    return (
        <>
            <IonList>
                <IonListHeader>
                    <IonLabel>Current Courts</IonLabel>
                </IonListHeader>

                {courtsFor(current, true)}

                <IonListHeader>
                    <IonLabel>Upcoming Courts</IonLabel>
                </IonListHeader>

                {courtsFor(upcoming, false)}
            </IonList>

            <CourtCreateModal/>
            <CourtEditModal/>
        </>
    );
}
