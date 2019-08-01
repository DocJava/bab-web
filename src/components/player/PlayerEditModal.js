import {useDispatch, useSelector} from "react-redux";
import {cancelPlayerUpdate, updatePlayer} from "../../actions";
import React, {useState} from "react";
import PasswordSelector from "../../containers/PasswordSelector";
import {Modal} from "../Modal";
import {Divider, Input} from "antd";

export default function PlayerEditModal() {
    const dispatch = useDispatch();

    const player = useSelector(state => state.selected.playerToUpdate);
    const [newPlayerPassword, updateNewPlayerPassword] = useState(player.password);
    const [newPlayerName, updateNewPlayerName] = useState(player.name);

    const handleCancel = () => dispatch(cancelPlayerUpdate());
    const handlePlayerUpdate = () => dispatch(updatePlayer(player, newPlayerName, newPlayerPassword));
    const handleNameChange = (e) => updateNewPlayerName(e.target.value);

    const title = <>
        {player.name} : {player.password}
    </>;

    return (
        <Modal modalId="playerEditModal"
               onCancel={handleCancel}
               onSuccess={handlePlayerUpdate}
               title={title}>

            <Input className="mb-2"
                   addonBefore="Name:"
                   placeholder="Enter Name"
                   value={newPlayerName}
                   onChange={handleNameChange}/>

            <PasswordSelector selectedPassword={newPlayerPassword}
                              updatePassword={updateNewPlayerPassword}/>

            <Divider/>

            <span className="text-muted">Is this correct?</span> {newPlayerName} : {newPlayerPassword}
        </Modal>
    );
}