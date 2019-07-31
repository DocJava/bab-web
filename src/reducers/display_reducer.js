import {SET_TOAST} from "../actions/index";
import {CLEAR_MODAL, DISPLAY_MODAL} from "../actions";
import toast from "../utils/toast";

export default function (state = { toast: null, modal: false }, action) {

    switch (action.type) {
        case SET_TOAST:
            toast(action.payload);
            return state;

        case DISPLAY_MODAL:
            const modalToDisplay = action.payload;
            return { ...state, modalToDisplay };

        case CLEAR_MODAL:
            return { ...state, modalToDisplay: false };
    }

    return state;
}