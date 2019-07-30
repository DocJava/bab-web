import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deselectPlayers, requestPlayers, selectCourtRandoms} from "../../actions";
import PlayerSelect from "../../components/player/PlayerSelect";

import {List, Radio} from 'antd';

export default function PlayerSelector() {
    const [_, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const useCourtRandoms = useSelector(state => state.selected.useCourtRandoms);
    const dispatch = useDispatch();

    const handleRandomsChecked = () => {
        const futureUsingRandoms = !useCourtRandoms;
        if (futureUsingRandoms) {
            dispatch(deselectPlayers());
        }

        dispatch(selectCourtRandoms());
    };

    useEffect(() => {
        dispatch(requestPlayers());
    }, []);

    return (
        <List>
            <Radio.Group className="mb-1 d-flex justify-content-center"
                         onChange={handleRandomsChecked}
                         defaultValue={useCourtRandoms}>
                <Radio.Button value={false} checked={!useCourtRandoms}>Use Players?</Radio.Button>
                <Radio.Button value={true} checked={useCourtRandoms}>Use Randoms?</Radio.Button>
            </Radio.Group>

            <div className="list-header">Available players</div>

            {availablePlayers.map(player => (
                <PlayerSelect player={player} key={player._id}/>
            ))}
        </List>
    );
}
