import {useDispatch, useSelector} from "react-redux";
import {playerFilterChanged} from "../../actions";
import {Input, Icon} from 'antd';
import React from "react";


export function PlayerPanelFooter() {
    const dispatch = useDispatch();
    const playerNameFilter = useSelector(state => state.selected.playerNameFilter);

    const updateFilter = (event) => dispatch(playerFilterChanged(event.target.value));

    return (
        <Input
            placeholder="Filter or add Player"
            size="large"
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            value={playerNameFilter}
            onChange={updateFilter}
        />
    );
}