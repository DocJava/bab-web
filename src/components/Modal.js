import React from 'react';
import {IonButton, IonIcon, IonItem, IonPopover, IonRow} from "@ionic/react";
import {useDispatch, useSelector} from "react-redux";
import {clearModal} from "../actions";
import closeOpenSlider from "../utils/closeOpenSlider";

export function Modal({ children, modalId = "pageModal" }) {
    const dispatch = useDispatch();
    const modalToDisplay = useSelector(state => state.displays.modalToDisplay);

    const handleCloseModal = () => dispatch(clearModal());
    const isOpen = modalToDisplay === modalId;

    return (
        <IonPopover
            isOpen={isOpen}
            onDidDismiss={handleCloseModal}
        >
            {children}
        </IonPopover>
    );
}

export function ModalHeader({ children }) {
    return (
        <IonRow>
            {children}
        </IonRow>
    );
}

export function ModalFooter({ onCancel, onSuccess, successEnabled = true }) {
    const dispatch = useDispatch();

    const handleCancel = () => {
        closeOpenSlider();
        dispatch(clearModal()).then(() => {
            if (onCancel) {
                onCancel();
            }
        });
    };

    const handleSuccess = () => {
        dispatch(clearModal()).then(() => {
            if (onSuccess) {
                onSuccess();
            }
        });
    };

    return (
        <IonItem className="w-100 pt-2 pb-2" lines="none">
            <IonButton color="danger"
                       onClick={handleCancel}
                       slot="start"
                       size="medium"
            >
                <IonIcon slot="icon-only" name="close-circle"/>
            </IonButton>

            <IonButton color="success"
                       onClick={handleSuccess}
                       disabled={!successEnabled}
                       slot="end"
                       size="medium"
            >
                <IonIcon slot="icon-only" name="checkmark-circle"/>
            </IonButton>
        </IonItem>
    );
}