import { Divider} from 'antd';
import {Col, Row} from 'antd';
import 'antd/dist/antd.min.css';

const styles = {
    title : {
        fontSize: "20px" , 
        margin:"12px 40px",
        color:"#06283D"
    }
}
const Navbar_mobile = () => {
    
    return (
        <div >
            <Row style={{width : "100%"}}>
                <Col span={3}>
                    <p style={styles.title}>
                        <b>Atools</b>
                        <span style={{color:"#F77E21"}}><b>.</b></span>
                    </p>
                </Col>
            </Row>
            <Divider style={{marginTop : '10px', marginBottom:0}} />  

        </div>

        
    );
}

export default Navbar_mobile;