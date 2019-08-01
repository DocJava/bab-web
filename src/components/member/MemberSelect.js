import React from 'react';
import {useDispatch} from 'react-redux';
import {displayModal, selectMember} from "../../actions";

export default function MemberSelect({ member, highlighted: isNewMember }) {
    const dispatch = useDispatch();

    const handleSelectMember = () => {
        if (!isNewMember) {
            dispatch(selectMember(member));
        }
        dispatch(displayModal());
    };

    let displayName = member.isNew ? `Create password for: "${member.name}"` : member.name;

    return (
        <span
            onClick={handleSelectMember}
        >
            {displayName}
        </span>
    )
}
