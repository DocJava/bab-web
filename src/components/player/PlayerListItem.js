import React from 'react';
import {useDispatch} from 'react-redux';
import {displayModal, removePlayer, startUpdatingPlayer} from "../../actions";
import {List, Popover, Icon, Divider} from 'antd';

export default function PlayerListItem({ player }) {
    const dispatch = useDispatch();

    const handleEditButton = () => {
        dispatch(startUpdatingPlayer(player));
        dispatch(displayModal("playerEditModal"));
    };

    const handleRemoveButton = () => {
        dispatch(removePlayer(player));
    };

    const playerOptions = (
        <>
            <Icon type="edit" style={{ fontSize: '20px' }} onClick={handleEditButton}/>
            <Divider type="vertical"/>
            <Icon type="delete" style={{ fontSize: '20px', color: 'red' }} onClick={handleRemoveButton}/>
        </>
    );

    const moreButton = (
        <Popover placement="left"
                 content={playerOptions}
                 trigger="click">
            <Icon type="more"/>
        </Popover>
    );

    return (
        <List.Item
            actions={[moreButton]}
            className="pl-2"
            key={player._id}>
            <List.Item.Meta
                description={player.name}
            />
            <div>
                {player.password}
            </div>
        </List.Item>
    );
}