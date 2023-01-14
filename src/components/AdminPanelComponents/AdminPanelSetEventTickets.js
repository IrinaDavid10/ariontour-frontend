import { useEffect } from "react";
import { useState } from "react";
import { Form, FormGroup, InputGroup, FormControl, Button, Container, Row, Col } from "react-bootstrap";
import EventAPI from "../../APIs/EventAPI";
import TicketAPI from "../../APIs/TicketAPI";

function AdminPanelSetEventTickets(props) {
    const [bronzeTickets, setBronzeTickets] = useState();
    const [silverTickets, setSilverTickets] = useState();
    const [goldTickets, setGoldTickets] = useState();

    const [addedBronzeTickets, setAddedBronzeTickets] = useState();
    const [addedSilverTickets, setAddedSilverTickets] = useState();
    const [addedGoldTickets, setAddedGoldTickets] = useState();
    const [bronzePrice, setBronzePrice] = useState(0);
    const [silverPrice, setSilverPrice] = useState(0);
    const [goldPrice, setGoldPrice] = useState(0);

    const fetchBronzeTickets = async () => {
        await EventAPI.getEventTicketsAmountByType(props.event.id, 1)
            .then(response => {
                setBronzeTickets(response.data.numberOfTickets);
            })
            .catch(err => console.error(err))

    }
    const fetchSilverTickets = async () => {
        await EventAPI.getEventTicketsAmountByType(props.event.id, 2)
            .then(response => {
                setSilverTickets(response.data.numberOfTickets);
            })
            .catch(err => console.error(err))
    }

    const fetchGoldTickets = async () => {
        await EventAPI.getEventTicketsAmountByType(props.event.id, 3)
            .then(response => {
                setGoldTickets(response.data.numberOfTickets);
            })
            .catch(err => console.error(err))
    }

    const handleOnChange = (event, ticketType, setTicketType) => {
        setTicketType(event.target.value);
    }
    const handleOnSubmit = (data) => {
        data.preventDefault();
        const bronzeValue = data.target.elements.bronze.value;
        const silverValue = data.target.elements.silver.value;
        const goldValue = data.target.elements.gold.value;
        const BronzeTickets = ({
            eventId : props.event.id,
            ticketType: 0,
            price: bronzePrice,
            numberOfTickets:bronzeValue
        });
        const SilverTickets = ({
            eventId : props.event.id,
            ticketType: 1,
            price: silverPrice,
            numberOfTickets:silverValue
        });
        const GoldTickets = ({
            eventId : props.event.id,
            ticketType: 2,
            price: goldPrice,
            numberOfTickets:goldValue
        });
        console.log(JSON.stringify(BronzeTickets));
        console.log(JSON.stringify(SilverTickets));
        console.log(JSON.stringify(GoldTickets));
        TicketAPI.createTickets(BronzeTickets).then((response) =>console.log(response));
        TicketAPI.createTickets(SilverTickets).then((response) =>console.log(response));
        TicketAPI.createTickets(GoldTickets).then((response) =>console.log(response));
        
    }
    const handleOnPriceChange = (event, priceType, setPriceState) => {
        setPriceState(event.target.value);
      };
    useEffect(() => {
        fetchSilverTickets();
    }, [silverTickets]);

    useEffect(() => {
        fetchGoldTickets();
    }, [goldTickets]);

    useEffect(() => {
        fetchBronzeTickets();
    }, [bronzeTickets]);
    return (
        <Form onSubmit={handleOnSubmit}>
            <Container>
                <Row><label>Current number of tickets</label></Row>
                <Col>
          <label><a style={{color: '#CD7F32'}}>Bronze: </a>{bronzeTickets}&nbsp;</label>
          
          <label><a style={{color: '#C0C0C0'}}>Silver: </a> {silverTickets}&nbsp;</label>
         
          <label><a style={{color: '#FFD700'}}>Gold: </a> {goldTickets}</label>
          </Col>
          </Container>
          <Container>
          <Row  style={{backgroundColor: '#CD7F32', paddingBottom: '10px'}}>
                <Col>
                <label>Number of tickets</label>
          <FormControl name="bronze" type="number" min={0} required onChange={(event) => handleOnChange(event, "bronze", setAddedBronzeTickets)} />
          </Col>
          <Col>
          <label>Price per ticket</label>
          <FormControl name="bronzePrice"  type="number" min={0} required onChange={(event) => handleOnPriceChange(event, "bronzePrice", setBronzePrice)} />
          </Col>
          </Row>
          <Row  style={{backgroundColor:'#C0C0C0' , paddingBottom: '10px'}}>
                <Col>
                <label>Number of tickets</label>
          <FormControl name="silver" type="number" min={0} required onChange={(event) => handleOnChange(event, "silver", setAddedSilverTickets)} />
          </Col>
          <Col>
          <label>Price per ticket</label>
          <FormControl name="silverPrice" type="number" min={0} required onChange={(event) => handleOnPriceChange(event, "silverPrice", setSilverPrice)} />
          </Col>
          </Row>
          <Row  style={{backgroundColor:'#FFD700' , paddingBottom: '10px'}}>
                <Col>
                <label>Number of tickets</label>
          <FormControl name="gold" type="number" min={0} required onChange={(event) => handleOnChange(event, "gold", setAddedGoldTickets)} />
          </Col>
          <Col>
          <label>Price per ticket</label>
          <FormControl name="goldPrice" type="number" min={0} required onChange={(event) => handleOnPriceChange(event, "goldPrice", setGoldPrice)} />
          </Col>
          </Row>
          </Container>
          <Button variant="primary" type="submit" >Submit</Button>
        </Form>
      );
}
export default AdminPanelSetEventTickets;