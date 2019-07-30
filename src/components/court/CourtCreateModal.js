import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createCourt, deselectPlayers} from "../../actions";
import PlayerSelector from '../../containers/player/PlayerSelector';
import {Modal} from '../Modal';

import {Input} from 'antd';

export function CourtCreateModal() {
    const dispatch = useDispatch();

    const [courtNumber, setCourtNumber] = useState(0);
    const [delay, setDelay] = useState(0);
    const names = useSelector(state => state.selected.playerNames);
    const randoms = useSelector(state => state.selected.useCourtRandoms);
    const courtCreatable = useSelector(state => state.selected.courtCreatable);

    const handleCancel = () => dispatch(deselectPlayers());
    const handleCreateCourt = () => {
        dispatch(createCourt({ courtNumber, names, delay, randoms }));
        dispatch(deselectPlayers());
    };

    return (
        <Modal
            onCancel={handleCancel}
            onSuccess={handleCreateCourt}
            successEnabled={courtCreatable}
            title="Create Court">

            <Input
                addonBefore="Court Number:"
                placeholder="Enter Court Number"
                type="number"
                value={courtNumber}
                onChange={(e) => setCourtNumber(e.target.value)}/>

            <Input
                className="mb-2"
                addonBefore="Court Delay:"
                placeholder="Enter Delay"
                type="number"
                value={delay}
                onChange={(e) => setDelay(e.target.value)}/>

            <PlayerSelector/>

        </Modal>
    );
}
