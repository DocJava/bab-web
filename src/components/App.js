import React from 'react';
import '../style/App.css';
import {Col, Layout, Row, Typography} from 'antd';
import { withRouter } from "react-router";

const { Title } = Typography;

const { Header, Content } = Layout;

function App({ match, history, children }) {
    const handlePanelSelection = (e) => () => {
        return history.push(e.toLowerCase());
    };

    const headerCol = (text) => (
        <Col span={8} onClick={handlePanelSelection(text)}>
            <Title level={3}>{text}</Title>
        </Col>
    );

    const header = (
        <Header className="bg-light main-header">
            <Row justify="space-around" align="middle">
                {headerCol("Courts")}
                {headerCol("Players")}
                {headerCol("Members")}
            </Row>
        </Header>
    );

    const body = (
        <Content>
            <Layout>
                {children}
            </Layout>
        </Content>
    );

    return (
        <Layout className="main-layout">
            {header}

            {body}
        </Layout>
    );
}

export default withRouter(App);