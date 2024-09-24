import React from 'react';

const EventDetails = ({ event, selectedSection }) => {
  if (!event) {
    return <p className="text-White">Loading event details...</p>;
  }

  const renderSection = () => {
    switch (selectedSection) {
      case 'description':
        return <p>{event.description}</p>;
      case 'members':
        return <p>{event.number_of_members}</p>;
      case 'prerequisites':
        return (
          <ul>
            {event.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        );
      case 'rounds':
        return (
          <ul>
            {event.rounds.map((round, index) => (
              <li key={index}>{round}</li>
            ))}
          </ul>
        );
      case 'instructions':
        return (
          <ul>
            {event.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        );
      case 'venue':
        return <p>{event.venue}</p>;
      case 'prize':
        return (
          <ul>
            <li>First: {event.prize.first}</li>
            <li>Second: {event.prize.second}</li>
            <li>Third: {event.prize.third}</li>
          </ul>
        );
      default:
        return <p className="text-white">Select a section to display details.</p>;
    }
  };

  return (
    <div className=" bg-White h-80 p-5 rounded-lg shadow-lg w-full">
      <h2 className="text-xl font-bold mb-4">{event.name}</h2>
      <div>{renderSection()}</div>
    </div>
  );
};

export default EventDetails;
