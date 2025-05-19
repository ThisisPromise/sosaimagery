
import React, { useState, useEffect } from 'react';
import '../styles/BookingOptions.css';


interface SessionType {
  id: string;
  name: string;
  duration: string;
  description: string;
}

const BookingPage: React.FC = () => {

  const sessionTypes: SessionType[] = [
    {
      id: 'portrait',
      name: 'Portrait Session',
      duration: '1 hour',
      description: 'Professional portraits ideal for individuals, couples, or professional headshots.'
    },
    {
      id: 'family',
      name: 'Family Session',
      duration: '2 hours',
      description: 'Capture precious family moments in a relaxed and fun environment.'
    },
    {
      id: 'event',
      name: 'Event Coverage',
      duration: '4 hours',
      description: 'Professional coverage for special events, celebrations, and gatherings.'
    },
    {
      id: 'wedding',
      name: 'Wedding Package',
      duration: '8 hours',
      description: 'Comprehensive wedding photography to document your special day.'
    }
  ];

 
  const whatsappNumber = "+1234567890";
  
  const [selectedSession, setSelectedSession] = useState<string>('portrait');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (name.trim() !== '' && date.trim() !== '') {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, date]);


  const handleSessionSelect = (sessionId: string) => {
    setSelectedSession(sessionId);
  };


  const generateWhatsAppLink = () => {
    const selectedSessionDetails = sessionTypes.find(session => session.id === selectedSession);

    const messageText = encodeURIComponent(
      `Hello! I'm interested in booking a ${selectedSessionDetails?.name}.\n` +
      `Name: ${name}\n` +
      `Preferred Date: ${date}\n` +
      `Looking forward to hearing from you!`
    );
    
    const formattedNumber = whatsappNumber.replace(/\s+/g, '');
    return `https://wa.me/${formattedNumber}?text=${messageText}`;
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="section-title">
          <h2>Book Your Session</h2>
          <p>Select your preferred session type and reach out directly via WhatsApp to discuss details and availability.</p>
        </div>

        <div className="booking-content">
          <div className="session-types">
            <h3>Available Sessions</h3>
            <div className="session-cards">
              <div className="session-card-row">
               
                <div 
                  className={`session-card ${selectedSession === 'portrait' ? 'selected' : ''}`}
                  onClick={() => handleSessionSelect('portrait')}
                >
                  <h4>Portrait Session</h4>
                  <div className="session-details">
                    <p className="session-duration"><span>1 hour</span></p>
                  </div>
                  <p className="session-description">Professional portraits ideal for individuals, couples, or professional headshots.</p>
                </div>
                
               
                <div 
                  className={`session-card ${selectedSession === 'family' ? 'selected' : ''}`}
                  onClick={() => handleSessionSelect('family')}
                >
                  <h4>Family Session</h4>
                  <div className="session-details">
                    <p className="session-duration"><span>2 hours</span></p>
                  </div>
                  <p className="session-description">Capture precious family moments in a relaxed and fun environment.</p>
                </div>
              </div>
              
              <div className="session-card-row">
               
                <div 
                  className={`session-card ${selectedSession === 'event' ? 'selected' : ''}`}
                  onClick={() => handleSessionSelect('event')}
                >
                  <h4>Event Coverage</h4>
                  <div className="session-details">
                  </div>
                  <p className="session-description">Professional coverage for special events, celebrations, and gatherings.</p>
                </div>
                
                <div 
                  className={`session-card ${selectedSession === 'wedding' ? 'selected' : ''}`}
                  onClick={() => handleSessionSelect('wedding')}
                >
                  <h4>Wedding Package</h4>
                  <div className="session-details">
                    
                  </div>
                  <p className="session-description">Comprehensive wedding photography to document your special day.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-container">
            <div className="whatsapp-booking">
              <h3>Quick Booking via WhatsApp</h3>
              <p>Provide your details and we'll continue the conversation on WhatsApp</p>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email (optional)"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  style={{ colorScheme: "light" }}
                  onClick={(e) => {
            
                    const target = e.target as HTMLInputElement;
                    target.showPicker();
                  }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <input
                  type="text"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any specific requests? (optional)"
                />
              </div>
              
              <a 
                href={generateWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`whatsapp-btn ${!isFormValid ? 'disabled' : ''}`}
                onClick={(e) => !isFormValid && e.preventDefault()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact Us on WhatsApp
              </a>
              
              <div className="whatsapp-note">
                <p>Please fill in your name and preferred date to proceed with booking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;