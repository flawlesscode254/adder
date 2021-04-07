import { useState } from 'react'
import './App.css';
import { db } from './Firebase';

function App() {
  const[name, setName] = useState('');
  const[spaces, setSpaces] = useState(0);
  const[latitude, setLatitude] = useState(0);
  const[longitude, setLongitude] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection("parking").add({
      name: name,
      spaces: parseInt(spaces),
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    })
    .then(
      setName(''),
      setSpaces(''),
      setLatitude(''),
      setLongitude(''),
    )
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Name">Name of Site</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
        <label htmlFor="spaces">Spaces Available</label>
        <input value={spaces} onChange={(e) => setSpaces(e.target.value)} type="number" name="spaces" id="spaces"/>
        <label htmlFor="latitude">Latitude of the site</label>
        <input value={latitude} onChange={(e) => setLatitude(e.target.value)} type="number" name="lat" id="lat"/>
        <label htmlFor="longitude">Longitude of the site</label>
        <input value={longitude} onChange={(e) => setLongitude(e.target.value)} type="number" name="long" id="long"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
