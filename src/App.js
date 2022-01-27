import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';
import { useState } from 'react';

function App() {
  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  const [lightColor, setLightColor] = useState('red');
  // lizardSize should be a number that starts out as 10
  const [lizardSize, setLizardSize] = useState(10);
  // alienSize should be a number that starts out as 10
  const [alienSize, setAlienSize] = useState(10);
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']
  const [traffic, setTraffic] = useState(['car', 'truck']);

  const handleAlienIncrementSize = () => {
    setAlienSize(alienSize + 1);
  };

  const handleAlienDecrementSize = () => {
    setAlienSize(alienSize - 1);
  };

  const handleLizardIncrementSize = () => {
    setLizardSize(lizardSize + 1);
  };

  const handleLizardDecrementSize = () => {
    setLizardSize(lizardSize - 1);
  };

  const handleColorChange = (color) => {
    setLightColor(color);
  };

  const handleTrafficChange = (vehicle) => {
    setTraffic([...traffic, vehicle]);
  };

  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          {/* the width of the alien should be ten times whatever the alien size is in state */}
          <img src="alien.png" width={alienSize * 10} />
          <div className='buttons'>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleAlienIncrementSize}>Oh no! The alien is gobblin up all the electricity!</button>
            {/* when you click this button, the lizard's size in state should go down by one */}
            <button onClick={handleLizardDecrementSize}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          {/* the width of the lizard should be ten times whatever the alien size is in state */}
          <img src="lizard.png" width={lizardSize * 10} />
          <div className="buttons">
            {/* when you click this button, the lizard's size in state should go up by one */}
            <button onClick={handleLizardIncrementSize}>Yegads! The lizard is ramping up to its final form!</button>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleAlienDecrementSize}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        {/* when you click this button, the color of the light in state should be set to 'red' */}
        <button onClick={() => {handleColorChange('red');}}>Red</button>
        {/* when you click this button, the color of the light in state should be set to 'yellow' */}
        <button onClick={() => {handleColorChange('yellow');}}>Yellow</button>
        {/* when you click this button, the color of the light in state should be set to 'green' */}
        <button onClick={() => {handleColorChange('green');}}>Green</button>
      </div>
      {/* 
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop? 
      */}
      <VehicleList vehicles={traffic}/>
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button onClick={() => handleTrafficChange('car')}>Car</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button onClick={() => handleTrafficChange('bus')}>Bus</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button onClick={() => handleTrafficChange('truck')}>Truck</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button onClick={() => handleTrafficChange('motorcycle')}>Motorcycle</button>
      </div>

    </div>
  );
}

export default App;

