import React from 'react';
import { Event } from '../../types/Event';

interface EventCardProps {
  event: Event;
  onClick?: () => void; 
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div 
      className="event-card" 
      onClick={onClick}
    >
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="event-card-image" 
      />
      <div className="event-card-content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className="event-card-details">
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
