import React, { useState } from 'react';

// Попап события (можно вынести в отдельный компонент)
const EventPopup: React.FC<{ event: any }> = ({ event }) => {
  return (
    <div className="event-popup">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
};

const HomePage: React.FC = () => {
  // Состояние для управления попапами и событиями
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Чебурашка в КИНО',
      description: 'Показ в Ивановском драм-театре',
      image: 'images/chebu.png'
    },
    {
      id: 2,
      title: 'Концерт Басты',
      description: 'Концерт в Иваново',
      image: 'images/basta.jpg'
    },
    {
      id: 3,
      title: 'Спектакль Буратино',
      description: 'Постановка в Ивановском драм-театре',
      image: 'images/burat.jpg'
    }
  ]);

  // Обработчик открытия попапа события
  const openEventPopup = (event: any) => {
    setSelectedEvent(event);
  };

  // Обработчик закрытия попапа
  const closeEventPopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="home-page">
      <div className="welcome-section">
        <h2>Добро пожаловать на Веб-Афишу!</h2>
        <p>Доступные мероприятия</p>
      </div>

      <div className="events-grid">
        {events.map(event => (
          <div 
            key={event.id} 
            className="event-card"
            onClick={() => openEventPopup(event)}
          >
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>Ивановский драм-театр</p>
          </div>
        ))}
      </div>

      {/* Попап события */}
      {selectedEvent && (
        <div className="event-popup-overlay">
          <div className="event-popup-content">
            <button onClick={closeEventPopup}>Закрыть</button>
            <EventPopup event={selectedEvent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
