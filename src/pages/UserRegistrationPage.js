import RegistrationForm from "../components/RegistrationForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function UserRegistrationPage(){
    return(
        <div className='mt-5'> 
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={0} sm={10} md={7} lg={5} xl={6} xxl={5}><RegistrationForm/></Col>
            </Row>
        </Container>
        </div>

    )
}
export default UserRegistrationPage;