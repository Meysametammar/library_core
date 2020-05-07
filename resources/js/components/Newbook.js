import React from 'react';
import {
    Layout, Row, Col,
    Form, Input, Button, Checkbox,
    Spin, notification
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
            loading: false,
        };
        this.onIsbnChange = this.onIsbnChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }




    onCheck() {
        this.setState({ loading: true });
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
                if (typeof book.ok === typeof true && book.ok === true) {
                    this.setState({ book: book, checkStatus: true, loading: false });
                    notification.success({
                        message: 'جستجو با موفقیت انجام شد.',
                        placement: 'bottomRight',
                        bottom: 50,
                        duration: 3,
                        rtl: true,
                    });
                }
                else {
                    this.setState({ loading: false });
                    notification.error({
                        message: 'يافت نشد',
                        placement: 'bottomRight',
                        bottom: 50,
                        duration: 3,
                        rtl: true,
                    });
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false });
                notification.error({
                    message: 'خطای سرور',
                    placement: 'bottomRight',
                    bottom: 50,
                    duration: 3,
                    rtl: true,
                });
            });
    }


    onSubmit() {
        if (!this.state.checkStatus)
            return null;
        this.setState({ loading: true, checkStatus: false });
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
                this.setState({ loading: false });
                console.log(book);
                if (book.ok === true) {
                    notification.success({
                        message: 'کتاب با موفقیت اضافه‌شد',
                        placement: 'bottomRight',
                        bottom: 50,
                        duration: 3,
                        rtl: true,
                    })
                } else {
                    notification.error({
                        message: 'ثبت نمیشه',
                        placement: 'bottomRight',
                        bottom: 50,
                        duration: 3,
                        rtl: true,
                    });

                }
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false });
                notification.error({
                    message: 'خطای سرور',
                    placement: 'bottomRight',
                    bottom: 50,
                    duration: 3,
                    rtl: true,
                });
            });

    }


    onReset() {
        this.setState({
            book: {
                picture: "",
                detail: []
            },
            isbn: "",
            checkStatus: false,
            loading: false
        });
    }


    onIsbnChange(e) {
        this.setState({ isbn: e.target.value });
    }


    onKeyDown(e) {
        if (e.key !== 'Enter') {
            return null;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.state.checkStatus) {
            this.onSubmit();
        }
        else {
            this.onCheck();
        }
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
                        <Row>
                            <Form
                                layout="horizontal"
                            >
                                <Form.Item label="شابک">
                                    <Input
                                        value={this.state.isbn}
                                        onChange={this.onIsbnChange}
                                        placeholder="964-7956-27-0"
                                        onKeyDown={this.onKeyDown}
                                    />
                                </Form.Item>
                                <Form.Item >
                                    <Button onClick={this.onCheck} type="primary">Cehck</Button>&nbsp;
                                <Button onClick={this.onSubmit} type="primary" >Submit</Button>&nbsp;
                                <Button onClick={this.onReset} type="danger">Refresh</Button>
                                </Form.Item>
                            </Form>
                        </Row>
                        <br /><br />
                        <Row>
                            {this.state.loading && <Spin />}
                        </Row>
                    </Col>

                </Row>
            </div >
        );
    }
}