import {message} from "antd";

export default function Toast(toastMessage) {
    if (toastMessage) {
        message.error(toastMessage);
    }
}