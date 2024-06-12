import React from 'react';
import { Link } from 'react-router-dom';
import {Alert, Spin, Card, Flex, Form, Typography, Input, Button} from 'antd';
import useReset from '../Hooks/useReset.jsx';


const Reset = () =>{

    const {error, loading, resetUser} = useReset();
    const handleLogin =async (values)=>{
        await resetUser(values);
    }

    return <Card className='form-container'>
        <Flex>
            {/* form */}

            <Flex vertical flex={1} >
                <Typography.Title level={3} strong className="title">
                    Password Reset
                </Typography.Title>

                <Typography.Text type="secondary" strong className='slogan'>
                    Forgot your password!
                </Typography.Text>

                <Form layout = "vertical" onFinish={handleLogin} autoComplete='off'>

                    {/* <Form.Item 
                        label='Full Name' 
                        name="name"
                        rules={[
                            {
                            required: true,
                            message: 'please input your full name'
                            },
                        ]}
                        >

                        <Input placeholder="Enter your full name" />

                    </Form.Item> */}

                    <Form.Item 
                        label='Email' 
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'please input your Email'
                            },
                            {
                                type: 'email',
                                message: 'The input is not valid Email'
                            }
                        ]}
                        >

                        <Input size="large" placeholder="Enter your full name" />

                    </Form.Item>

                    <Form.Item 
                        label='new Password' 
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'please input your Password'
                            },
                        ]}
                        >

                        <Input.Password size="large" placeholder="Enter your Password" />

                    </Form.Item>

                     <Form.Item 
                        label='Confirm Password' 
                        name="passwordConfirm"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your confirm password'
                            },
                        ]}
                        >

                        <Input.Password size="large" placeholder="Re-enter your Password" />

                    </Form.Item>

                    {error && <Alert description={error} type='error' showIcon closable className='alert' />}

                    <Form.Item>
                        <Button 
                            type={`${loading ? '': 'primary'}`}
                            htmlType='submit'
                            size='large'
                            className='btn'
                            >
                            {loading ? <Spin/> : 'Reset Password'}
                            
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Link to="/login">
                            <Button 
                            
                            htmlType='submit'
                            size='large'
                            className='btn'
                            >
                                Login
                            </Button>
                        </Link>
                    </Form.Item>


                </Form>

            </Flex>

            {/* Image*/}

            <Flex></Flex>

        </Flex>
    </Card>
}

export default Reset;
