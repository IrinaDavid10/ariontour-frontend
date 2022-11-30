import AdminPanelEventCreationForm from './AdminPanelEventCreationForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AdminPanelCreateEvent(){
return(

    <div className='mt-5'> 
    <Container>
        <Row>
            <Col xs={0} sm={10} md={7} lg={5} xl={6} xxl={5}><AdminPanelEventCreationForm/></Col>
        </Row>
    </Container>
    </div>

)
}
export default AdminPanelCreateEvent;