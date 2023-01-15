import { Card } from "react-bootstrap"

function TicketCard(props){
return(
    <Card style={{marginRight:5 , borderRadius: 0 }}>
                <Card.Img variant="top" src={`/images/${props.ticket.name}.png`} />
                <Card.Body>
                    <Card.Title> ticket {props.ticket.name}</Card.Title>
                    <Card.Text>
                        Nice ticket.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <input defaultValue={0} type="number" min={0} max={props.available} style={{width:`50%`}} onChange={(e)=>props.onChange(e)}/>
                </Card.Footer>
            </Card>
)
}
export default TicketCard