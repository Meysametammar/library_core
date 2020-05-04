import React from 'react';
import {
    Layout, Row, Col,
    Form, Input, Button, Checkbox,
} from 'antd';

import BookDetail from './NewBook/BookDetail';

export default class NewBook extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            book: {
                picture: "",
                detail: []
            },
            isbn: "",
            checkStatus: false,
            disableSubmit: true
        };
        this.onIsbnChange = this.onIsbnChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }




    onCheck(e) {
        if (this.state.isbn == "") {
            return null;
        }
        fetch('api/book/search_book_by_isbn/' + this.state.isbn, {
            method: 'get',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
            .then(res => { return res.json(); })
            .then(book => {
                console.log("there");
                if (typeof book.ok === typeof true && book.ok === true)
                    this.setState({ book: book, disableSubmit: false });
                else
                    console.log(book);
            })
            .catch(err => console.log(err));
    }


    onSubmit(e) {
        if (!this.state.checkStatus)
            return null;
        fetch('api/books/', {
            method: 'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ isbn: this.state.isbn })
        })
            .then(res => { return res.json(); })
            .then(book => {
                console.log(book)
            })
            .catch(err => console.log(err));

    }


    onReset(e) {
        this.setState({ isbn: "" });
    }


    onIsbnChange(e) {
        this.setState({ isbn: e.target.value });
    }



    render() {
        return (
            <div>
                <Row>
                    <Col span={10} offset={2}>
                        <BookDetail book={this.state.book} />
                    </Col>
                    <Col span={10}>
                        <br /><br /><br />
                        <Form
                            layout="horizontal"
                        >
                            <Form.Item label="شابک">
                                <Input value={this.state.isbn} onChange={this.onIsbnChange} placeholder="964-7956-27-0" />
                            </Form.Item>
                            <Form.Item >
                                <Button onClick={this.onCheck} type="primary">Cehck</Button>&nbsp;
                                <Button onClick={this.onSubmit} type="primary" disabled={this.state.disableSubmit}>Submit</Button>&nbsp;
                                <Button onClick={this.onReset} type="danger">Refresh</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div >
        );
    }
}