import React from 'react';
import {
    Layout, Row, Col,

} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class BookDetail extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>

                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </div>
        );
    }
}