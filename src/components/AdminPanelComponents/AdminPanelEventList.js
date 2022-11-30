import React from "react";
import AdminPanelEventCard from "./AdminPanelEventCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AdminPanelEventList(props){
    return (
       
        <Row sm={1} xs={'auto'} md={'auto'} lg={'auto'}>
        {props.eventsList.map(event => (
            <Col key={ event.id } className="pt-3">
            <AdminPanelEventCard  event={event}/>
            </Col>
            ))}
        </Row>
       
    )
}
export default AdminPanelEventList;