import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {displayModal, playerFilterChanged, requestPlayers} from "../../actions";
import PlayerListItem from "../../components/player/PlayerListItem";

import PlayerEditModal from "../../components/player/PlayerEditModal";
import PlayerCreateModal from "../../components/player/PlayerCreateModal";
import {Layout, List, Input, Icon, Button} from "antd";
import App from "../../components/App";

const { Content, Footer, Header } = Layout;

export default function PlayerPanel() {
    const dispatch = useDispatch();
    const [reservedPlayers, availablePlayers] = useSelector(state => state.people.filteredPlayers || state.people.partitionedPlayers);
    const playerNameFilter = useSelector(state => state.selected.playerNameFilter);

    const updateFilter = (event) => dispatch(playerFilterChanged(event.target.value));
    const handleAddClick = () => dispatch(displayModal());

    const updateScreenInformation = () => dispatch(requestPlayers());

    useEffect(() => {
        updateScreenInformation();
    }, []);

    return (
        <App>
            <Header>
                <Input
                    className="pr-2 pl-2"
                    placeholder="Filter or add Player"
                    size="large"
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                    value={playerNameFilter}
                    onChange={updateFilter}
                />
            </Header>

            <Content className="h-100">
                <List className="pb-5">
                    <div className="list-header">Available Players</div>
                    {availablePlayers.map(player => <PlayerListItem player={player} key={player._id}/>)}

                    <div className="list-header">Players in use</div>
                    {reservedPlayers.map(player => <PlayerListItem player={player} key={player._id}/>)}
                </List>
            </Content>

            <Footer>
                <Button className="w-100"
                        onClick={handleAddClick}>
                    Add Player
                </Button>
            </Footer>

            <PlayerEditModal/>
            <PlayerCreateModal/>
        </App>
    );
}
