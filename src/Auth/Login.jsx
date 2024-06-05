import React from 'react';
import { Link } from 'react-router-dom';
import {Alert, Spin, Card, Flex, Form, Typography, Input, Button} from 'antd';
import useLogin from '../Hooks/useLogin';


const Login = () =>{

    const {error, loading, loginUser} = useLogin();
    const handleLogin =async (values)=>{
        await loginUser(values);
    }

    return <Card className='form-container'>
        <Flex>
            {/* form */}

            <Flex vertical flex={1} >
                <Typography.Title level={3} strong className="title">
                    Sign In
                </Typography.Title>

                <Typography.Text type="secondary" strong className='slogan'>
                    Continue to your trip
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
                        label='Password' 
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

                    {/* <Form.Item 
                        label='Password' 
                        name="passwordConfirm"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your confirm password'
                            },
                        ]}
                        >

                        <Input size="large" placeholder="Re-enter your Password" />

                    </Form.Item> */}

                    {error && <Alert description={error} type='error' showIcon closable className='alert' />}

                    <Form.Item>
                        <Button 
                            type={`${loading ? '': 'primary'}`}
                            htmlType='submit'
                            size='large'
                            className='btn'
                            >
                            {loading ? <Spin/> : 'Sign In'}
                            
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Link to="/">
                            <Button 
                            
                            htmlType='submit'
                            size='large'
                            className='btn'
                            >
                                Create an account
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

export default Login;
