import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPlayer} from "../../actions";
import _ from 'lodash';

import {List, Checkbox} from 'antd';

export default function PlayerSelect({ player, ignoreEdit }) {
    const selectedPlayers = useSelector(state => state.selected.players);
    const dispatch = useDispatch();

    const isSelected = _.has(selectedPlayers, player._id);

    const handleSelectPlayer = () => dispatch(selectPlayer(player));

    const selectedColor = isSelected ? "text-primary" : "text-dark";

    return (
        <List.Item onClick={handleSelectPlayer}>
            <List.Item.Meta
                description={
                    <Checkbox checked={isSelected}>
                        <span className={selectedColor}>{player.name}</span>
                    </Checkbox>}
            />
            <div>
                <span className={selectedColor}>{player.password}</span>
            </div>
        </List.Item>
    )
}