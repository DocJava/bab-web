import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from '../../components/Modal';
import {cancelCreatingMember, createPlayer} from "../../actions";
import PasswordSelector from "../../containers/PasswordSelector";

export function MemberCreateModal() {
    const dispatch = useDispatch();

    const member = useSelector(state => state.selected.memberToCreate);
    const [memberPassword, updateMemberPassword] = useState("");

    const handleCancel = () => dispatch(cancelCreatingMember());
    const handlePlayerCreate = () => dispatch(createPlayer({ name: member.name, password: memberPassword }));

    return (
        <Modal
            onCancel={handleCancel}
            onSuccess={handlePlayerCreate}
            title={member.name}>

            <PasswordSelector selectedPassword={memberPassword}
                              updatePassword={updateMemberPassword}/>
        </Modal>
    );
}
