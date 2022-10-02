import { BarChart } from './components/BarChart';
import { LineChart } from './components/LineChart';
import { PieChart } from './components/PieChart';
import './App.css';
import { useState } from 'react';
import { UserData } from './Data'

function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
      label: 'Users gained',
      data: UserData.map(data => data.userGain),
      backgroundColor: ["rgba(137, 113, 211, 0.2)", "#D3F3ED", "#D8EFFA", "#FFEECC", "#FFDECC", "#FBD3D3", "#F5D0F8", "#CFF9FE"],
      borderColor: "#ccc",
      borderWidth: 1,
    }]
  })
  
  const [lostData, setLostData] = useState({
    labels: UserData.map(data => data.year),
    datasets: [{
      label: 'Users losted',
      data: UserData.map(data => data.userLost),
      backgroundColor: [ "#FFDECC", "#FBD3D3", "#F5D0F8", "#CFF9FE", "rgba(137, 113, 211, 0.2)", "#D3F3ED", "#D8EFFA", "#FFEECC",],
      borderColor: "black",
      borderWidth: 2,
    }]
  })
  return ( 
    <div className="App">
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={lostData} />
    </div>
  );
}

export default App;
