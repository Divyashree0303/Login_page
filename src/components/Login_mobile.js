import { useState } from 'react';
import {Typography, Input, Button, Checkbox, Form,} from 'antd';
import 'antd/dist/antd.min.css';
import axios from 'axios';


const {Title,Paragraph} = Typography;
const url = "https://reqres.in/api/login";

const Login_mobile = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        const output = document.querySelector(".output");

        try{
            const resp = await axios.post(url,{email:email,password:password});
            console.log(resp.data);
            
        }catch(err){
            console.log(err.response.data);
        }

    };

    return(
    
        <div style={{ margin: " 100px auto",width:"300px"}}>
            <div style={{textAlign: "center", width: '100%'}} >
                <Title style={{marginBottom: 0}} level={2}><b>Welcome back</b></Title>
                <Paragraph>Sub-title text goes here</Paragraph>
            </div>
            <div style={{justifyContent: "center"}}>
                <Form
                style={{width : "100%" }}
                initialValues={{ remember: true }}
                >
                <Form.Item
                    rules={[{ required: true}]}
                >
                    <Input 
                        placeholder="Email Address*"
                        value={email}
                        onChange={ e => setEmail(e.target.value)} />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true }]}
                >
                    <Input
                    placeholder="Password*"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleClick} style={{width : "100%", backgroundColor: "#06283D"}} type="primary" htmlType="submit">
                    Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Form.Item style={{float : "left" , color: "#06283D"}} noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                    <a style={{float:"right" , color: "#06283D"}} href=''>
                    Forgot password?
                    </a>
                </Form.Item>

                </Form>
            </div>
            
        </div>

    )
}

export default Login_mobile;