import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {memberFilterChanged, requestMembers} from "../../actions";
import MemberSelect from "../../components/member/MemberSelect";

import {MemberCreateModal} from '../../components/member/MemberCreateModal';
import {Layout, Row, Col, Input, Icon} from "antd";
import App from "../../components/App";

const { Content, Header } = Layout;

export default function MemberSelector(props) {
    const dispatch = useDispatch();
    const memberChunks = useSelector(state => state.people.filteredMembers || state.people.chunkedMembers);
    const memberNameFilter = useSelector(state => state.selected.memberNameFilter);

    const updateFilter = (event) => dispatch(memberFilterChanged(event.target.value));

    const updateScreenInformation = () => dispatch(requestMembers());

    useEffect(() => {
        updateScreenInformation()
    }, []);

    const createRow = (memberChunk, index) => (
        <Row key={index}>
            {memberChunk.map((member, index) => (
                <Col className="p-2" span={8} key={index}>
                    <MemberSelect member={member} key={member._id} isNewMember={member.isNew}/>
                </Col>
            ))}
        </Row>
    );

    return (
        <App {...props}>
            <Header>
                <Input className="pr-2 pl-2"
                       placeholder="Filter or add Member"
                       size="large"
                       prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                       value={memberNameFilter}
                       onChange={updateFilter}
                />
            </Header>

            <Content>
                {memberChunks.map(createRow)}

                <MemberCreateModal/>
            </Content>
        </App>
    );
}
