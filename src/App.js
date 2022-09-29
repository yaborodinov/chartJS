import { BarChart } from './components/BarChart';
import './App.css';
import { useState } from 'react';
import { UserData } from './Data'

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
      label: 'Users gained',
      data: UserData.map(data => data.userGain)
    }]
  })
  return ( 
    <div className="App">
      <BarChart chartData={userData}/>
    </div>
  );
}

export default App;
