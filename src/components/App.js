/* eslint-disable default-case */
import React, {useState} from 'react';
import '../style/App.css';
import MemberPanel from '../containers/member/MemberPanel';
import PlayerPanel from '../containers/player/PlayerPanel';
import CourtPanel from '../containers/court/CourtPanel';
import Toast from "./Toast";
import {FloatingActionButton} from "./FloatingActionButton";
import {Col, Layout, Row, Typography} from 'antd';

const { Title} = Typography;

const { Header, Content} = Layout;

const PLAYER_PANE = "PLAYER_PANE";
const COURT_PANE = "COURT_PANE";
const MEMBER_PANE = "MEMBER_PANE";

export default function App() {
    const [selectedPane, setSelectedPane] = useState(COURT_PANE);

    let pane = null;

    let floatingActionButton = <FloatingActionButton/>;

    switch (selectedPane) {
        case PLAYER_PANE:
            pane = <PlayerPanel/>;
            break;

        case COURT_PANE:
            pane = <CourtPanel/>;
            break;

        case MEMBER_PANE:
            pane = <MemberPanel/>;
            floatingActionButton = null;
    }

    const headerCol = (PANE, text) => (
        <Col span={8} onClick={() => setSelectedPane(PANE)}>
            <Title level={3}>{text}</Title>
        </Col>
    );

    const header = (
        <Header className="bg-light main-header">
            <Row justify="space-around" align="middle">
                {headerCol(COURT_PANE, "Courts")}
                {headerCol(PLAYER_PANE, "Players")}
                {headerCol(MEMBER_PANE, "Members")}
            </Row>
        </Header>
    );

    const body = (
        <>
            {pane}

            {floatingActionButton}

            <Toast/>
        </>
    );

    return (
        <Layout className="main-layout">
            {header}

            <Content>
                {body}

                {floatingActionButton}
            </Content>
        </Layout>
    );
}
