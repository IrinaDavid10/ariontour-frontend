import React, {useState, useEffect} from "react";
import EventList from "../components/EventList";
import EventAPI from "../APIs/EventAPI";

function AllEventsPage(){
    
    const[eventsList, setEventsList] = useState([]);

    const fetchEvents = async () => {  
        EventAPI.getEvents()
                    .then(response =>{
                        setEventsList(response.data.events);
                    })
                    .catch(err => console.error(err))
        
    }
    useEffect(()  =>{
        fetchEvents();
    },[]);
    
    return(
        <EventList eventsList={eventsList}/>
    )
}
export default AllEventsPage;