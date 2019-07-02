import {CLEAR_TOAST, SET_TOAST} from "../actions/index";
import {CLEAR_MODAL, DISPLAY_MODAL} from "../actions";

export default function (state = { toast: null, modal: false }, action) {

    switch (action.type) {
        case SET_TOAST:
            return { ...state, toast: action.payload };

        case CLEAR_TOAST:
            return { ...state, toast: null };

        case DISPLAY_MODAL:
            const modalToDisplay = action.payload;
            return { ...state, modalToDisplay };

        case CLEAR_MODAL:
            return { ...state, modalToDisplay: false };
    }

    return state;
}