import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestPlayers} from "../../actions";
import PlayerListItem from "../../components/player/PlayerListItem";

import PlayerEditModal from "../../components/player/PlayerEditModal";
import PlayerCreateModal from "../../components/player/PlayerCreateModal";
import {Layout, List} from "antd";
import {PlayerPanelFooter} from "../../components/player/PlayerPanelFooter";

const { Content, Footer } = Layout;

export default function PlayerPanel() {
    const [reservedPlayers, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const dispatch = useDispatch();

    function updateScreenInformation() {
        return dispatch(requestPlayers());
    }

    useEffect(() => {
        updateScreenInformation();
    }, []);

    return (
        <Layout>
            <Content>
                <List className="pb-5">
                    <div className="list-header">Available players</div>
                    {availablePlayers.map(player => <PlayerListItem player={player} key={player._id}/>)}

                    <div className="list-header">Players in use</div>
                    {reservedPlayers.map(player => <PlayerListItem player={player} key={player._id}/>)}
                </List>
            </Content>

            <Footer>
                <PlayerPanelFooter/>
            </Footer>

            <PlayerEditModal/>
            <PlayerCreateModal/>
        </Layout>
    );
}
