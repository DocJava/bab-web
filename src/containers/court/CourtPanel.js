import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {displayModal, requestCourts, requestPlayers} from "../../actions";
import CourtSelect from "../../components/court/CourtSelect";
import {List, Layout, Button} from 'antd';

import {CourtCreateModal} from '../../components/court/CourtCreateModal';
import {CourtEditModal} from "../../components/court/CourtEditModal";
import App from "../../components/App";

const { Content, Footer } = Layout;

const twoMinutesMillis = 120000;

export default function CourtPanel() {
    const dispatch = useDispatch();
    const { current, upcoming } = useSelector(state => state.courts);

    const handleAddClick = () => dispatch(displayModal());

    function updateScreenInformation() {
        return dispatch(requestCourts()).then(() => dispatch(requestPlayers()));
    }

    useEffect(() => {
        updateScreenInformation();
    }, []);

    useEffect(() => {
        const interval = setInterval(updateScreenInformation, twoMinutesMillis);
        return () => clearInterval(interval);
    }, []);

    const courtsFor = (courtList) => {
        return courtList.map(court => (
            <CourtSelect court={court}
                         key={court._id}/>
        ));
    };

    return (
        <App>
            <Content>
                <List>
                    <div className="list-header">Current Courts</div>

                    {courtsFor(current)}

                    <div className="list-header">Upcoming Courts</div>

                    {courtsFor(upcoming)}
                </List>
            </Content>

            <Footer>
                <Button className="w-100"
                        onClick={handleAddClick}>
                    Add Court
                </Button>
            </Footer>

            <CourtCreateModal/>
            <CourtEditModal/>
        </App>
    );
}
