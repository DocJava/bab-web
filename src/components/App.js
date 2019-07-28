import React from 'react';
import '../style/App.css';
import MemberPanel from '../containers/member/MemberPanel';
import PlayerPanel from '../containers/player/PlayerPanel';
import CourtPanel from '../containers/court/CourtPanel';
import {Col, Layout, Row, Typography} from 'antd';

const { Title} = Typography;

const { Header, Content} = Layout;

const PLAYER_PANE = "players";
const COURT_PANE = "courts";
const MEMBER_PANE = "members";

const DEFAULT_PANE = "courts";

export default function App({ match, history }) {
    const selectedPane = match.params.pane || DEFAULT_PANE;

    const handlePanelSelection = (e) => history.replace(e.detail.value);

    let pane = null;

    switch (selectedPane) {
        case PLAYER_PANE:
            pane = <PlayerPanel/>;
            break;

        case COURT_PANE:
            pane = <CourtPanel/>;
            break;

        case MEMBER_PANE:
            pane = <MemberPanel/>;

        default:
            pane = <CourtPanel/>;
    }

    const headerCol = (PANE, text) => (
        <Col span={8} onClick={handlePanelSelection}>
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
        <Content>
            {pane}
        </Content>
    );

    return (
        <Layout className="main-layout">
            {header}

            {body}
        </Layout>
    );
}
