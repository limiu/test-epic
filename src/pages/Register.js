import React from 'react'
import {observer} from 'mobx-react';
import {Form, Input, Button} from "antd";
import styled from 'styled-components';
const Wrapper = styled.div`
  width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 20px;
`

const Title = styled.h1`
 text-align: center;
  margin-bottom: 30px;
`
const layout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 20
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};
const Component = observer(() => {
    const onFinish = values => {
        console.log('success', values)
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed', errorInfo)
    }
    return (
        <Wrapper>
            <Title>注册</Title>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: '请再次确认密码!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    )
})
export default Component;
