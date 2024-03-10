import React, { useState } from 'react';

const CarRentalForm = () => {
  const [car, setCar] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier könnten Sie die eingegebenen Daten verarbeiten
    console.log('Form submitted with data:', {
      car,
      startDate,
      endDate,
      pickupLocation,
      returnLocation,
      name,
      lastName,
      email,
      phone
    });
    // Hier könnten Sie eine Anfrage an Ihren Server senden, um die Buchung zu verarbeiten
    setSubmitted(true); // Setze submitted auf true, um die eingegebenen Daten anzuzeigen
  };

  return (
    <div>
      <h2>Autovermietung</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Wählen Sie ein Fahrzeug:</label>
          <select value={car} onChange={(e) => setCar(e.target.value)}>
            <option value="car1">Auto 1</option>
            <option value="car2">Auto 2</option>
            <option value="car3">Auto 3</option>
          </select>
        </div>
        <div>
          <label>Startdatum:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>Enddatum:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div>
          <label>Abholort:</label>
          <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
        </div>
        <div>
          <label>Rückgabeort:</label>
          <input type="text" value={returnLocation} onChange={(e) => setReturnLocation(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Nachname:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Telefonnummer:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit">Buchen</button>
      </form>
      {submitted && (
        <div>
          <h3>Ihre Buchungsinformationen:</h3>
          <p><strong>Auto:</strong> {car}</p>
          <p><strong>Startdatum:</strong> {startDate}</p>
          <p><strong>Enddatum:</strong> {endDate}</p>
          <p><strong>Abholort:</strong> {pickupLocation}</p>
          <p><strong>Rückgabeort:</strong> {returnLocation}</p>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Nachname:</strong> {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Telefonnummer:</strong> {phone}</p>
        </div>
      )}
    </div>
  );
};

export default CarRentalForm;
