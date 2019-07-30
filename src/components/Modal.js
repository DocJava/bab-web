import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearModal} from "../actions";
import closeOpenSlider from "../utils/closeOpenSlider";
import {Modal as AntModal, Row} from 'antd';

export function Modal({ children, modalId = "pageModal", onCancel, onSuccess, successEnabled = true, title }) {
    const dispatch = useDispatch();
    const modalToDisplay = useSelector(state => state.displays.modalToDisplay);

    const handleCloseModal = () => dispatch(clearModal());
    const isOpen = modalToDisplay === modalId;
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
        // deprecated in favor of moving to routing
        <AntModal
            visible={isOpen}
            onDidDismiss={handleCloseModal}
            title={title}
            onOk={handleSuccess}
            onCancel={handleCancel}
            okButtonProps={{ disabled: !successEnabled }}
        >
            {children}
        </AntModal>
    );
}

export function ModalHeader({ children }) {
    return (
        <Row>
            {children}
        </Row>
    );
}