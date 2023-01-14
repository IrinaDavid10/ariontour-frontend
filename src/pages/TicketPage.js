import TicketList from "../components/TicketList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TicketPage(){
  return(
       
    <div className='mt-5 mb-5'> 
    <Container>
        <Row className="justify-content-md-center">
            <Col xs={0} sm={10} md={8} lg={6} xl={5} xxl={5}><TicketList/></Col>
        </Row>
    </Container>
</div>
)
}
export default TicketPage;