import React, { useState, useEffect } from 'react';
import EventDetails from './EventDetail'; 

const Event = ({ eventName }) => {
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [selectedSection, setSelectedSection] = useState('description'); 

  useEffect(() => {
    fetch('/Detail.json')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.events);
        const eventToShow = data.events.find(event => event.name === eventName);
        if (eventToShow) {
          setCurrentEvent(eventToShow); 
        }
      })
      .catch((error) => console.error('Error fetching event data:', error));
  }, [eventName]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-5">
      <div className="flex space-x-4 mb-4">
        <button className="btn bg-White" onClick={() => setSelectedSection('description')}>Description</button>
        <button className="btn bg-White" onClick={() => setSelectedSection('prerequisites')}>Prerequisites</button>
        <button className="btn bg-White" onClick={() => setSelectedSection('members')}>No of Members</button>
        <button className="btn bg-White" onClick={() => setSelectedSection('rounds')}>Rounds</button>
        <button className="btn bg-White" onClick={() => setSelectedSection('instructions')}>Instructions</button>
        <button className="btn bg-White" onClick={() => setSelectedSection('venue')}>Venue</button>
        <button className="btn bg-White" onClick={() => setSelectedSection('prize')}>Prize</button>
      </div>

      <EventDetails event={currentEvent} selectedSection={selectedSection} />
    </div>
  );
};

export default Event;
