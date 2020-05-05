import React from 'react';
import {
    Layout, Row, Col,

} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
export default class BookDetail extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <br />
                <Row>
                    <img src={this.props.book.picture} />
                </Row>
                {/* {
                    (typeof this.props.book.detail === typeof []) ?
                        this.props.book.detail.map((element, i) => {
                            <Row key={i}>
                                {console.log(element.title)}
                                <Col span={10} offset={2}>
                                    <h6>{element.title}</h6>
                                </Col>
                                <Col span={10} offset={1}>
                                    <h6>{element.content}</h6>
                                </Col>
                            </Row>

                        })
                        :
                        <center>
                            {console.log(this.props.book.detail)}
                            <h1>HI</h1>
                        </center>
                } */}
            </div>
        );
    }
}