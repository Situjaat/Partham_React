import React from 'react';
import { Col, Button, Row, Form, Input } from 'antd';


const { TextArea } = Input;


function Contact() {

    return (
        <Row>
            <Col span={16}>
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        labelAlign="left"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        labelAlign="left"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Subject"
                        name="subject"
                        labelAlign="left"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Message"
                        name="message"
                        labelAlign="left"
                    >
                        <TextArea rows={4}  />
                    </Form.Item>
              

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Send Message
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={8}>col-8</Col>
        </Row>
    );
}

export default Contact;