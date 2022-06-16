import { Divider , Button } from 'antd';
import {Col, Row} from 'antd';
import 'antd/dist/antd.min.css';

const styles = {
    title : {
        fontSize: "20px" , 
        margin:"12px 40px",
        color:"#06283D"
    }
}
const Navbar = () => {
    
    return (
        <div>
            <Row >
                <Col span={3}>
                    <p style={styles.title}>
                        <b>Atools</b>
                        <span style={{color:"#F77E21"}}><b>.</b></span>
                    </p>
                </Col>
                <Col className='gutter-row'  span={3} offset={14}>
                    <Button type='primary' style={{width: "11vw", marginTop:"15px", backgroundColor:"#06283D"}}><span style={{fontSize:"1.2vw"}}>Start Free Trial</span></Button>
                </Col>
                <Col className='gutter-row' span={3}>
                    <Button  type='primary'  style={{ width:"11vw" ,marginTop:"15px", backgroundColor:"#F77E21"}}>Login</Button>
                </Col>
            </Row>
            <Divider style={{marginTop : '10px', marginBottom:0}} />  

        </div>

        
    );
}

export default Navbar;