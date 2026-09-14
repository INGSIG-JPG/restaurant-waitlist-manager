import React, { useState, useEffect } from 'react';

export default function App() {
  const [waitlist, setWaitlist] = useState([]);
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState(2);

  useEffect(() => {
    fetch('http://localhost:8000/waitlist')
      .then(res => res.json())
      .then(data => setWaitlist(data))
      .catch(err => console.error(err));
  }, []);

  const addParty = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, party_size: Number(partySize) })
    })
    .then(res => res.json())
    .then(newItem => {
      setWaitlist([...waitlist, newItem]);
      setName('');
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Restaurant Waitlist Manager</h1>
      <form onSubmit={addParty} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Customer Name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          value={partySize} 
          onChange={e => setPartySize(e.target.value)} 
          min="1" 
          required 
        />
        <button type="submit">Add to Waitlist</button>
      </form>
      <ul>
        {waitlist.map((item, index) => (
          <li key={index}>{item.name} - Party of {item.party_size} ({item.status})</li>
        ))}
      </ul>
    </div>
  );
}
