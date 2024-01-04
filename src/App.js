
import './App.css';
import { TravelList } from './TravelList';
import background from './globe.jpg';

function App() {
  return (
  <div style={{backgroundImage:`url(${background})`,
  height: "97vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
  }}>
    <div className="container">
      <h1>My Travel Bucket List</h1>
    </div>
    <TravelList />
  </div>
    
  );
}

export default App;
