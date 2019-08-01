import {useDispatch} from "react-redux";
import {createPlayer} from "../../actions";
import React, {useState} from "react";
import {Input, Divider} from 'antd';
import PasswordSelector from "../../containers/PasswordSelector";
import {Modal} from "../Modal";

export default function PlayerAddModal() {
    const dispatch = useDispatch();

    const [password, updatePassword] = useState("");
    const [name, updateName] = useState("");

    const clearChanges = () => {
        updatePassword("");
        updateName("");
    };
    const handlePlayerCreate = () => {
        dispatch(createPlayer({ name, password }));
        clearChanges();
    };
    const handleNameChange = (e) => updateName(e.target.value);
    const playerCreatable = name && password;

    return (
        <Modal
            onCancel={clearChanges}
            onSuccess={handlePlayerCreate}
            successEnabled={playerCreatable}
            title="Create new Player">

            <Input className="mb-2"
                   addonBefore="Name:"
                   placeholder="Enter Name"
                   value={name}
                   onChange={handleNameChange}/>

            <PasswordSelector selectedPassword={password}
                              updatePassword={updatePassword}/>

            <Divider/>

            <span className="text-muted">Is this correct?</span> {name} : {password}
        </Modal>
    );

}