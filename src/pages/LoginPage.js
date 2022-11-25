import LoginForm2 from "../components/LoginForm2";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginPage(){
    return(
       
        <div className='mt-5'> 
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={0} sm={10} md={8} lg={6} xl={5} xxl={5}><LoginForm2/></Col>
            </Row>
        </Container>
    </div>
    )
}
export default LoginPage;