import react from 'react';
import './App.css';
import Basic1 from './Session2/basic/Basic 1/Basic1';
import Basic2 from './Session2/basic/Basic 2/Basic2';
import Intro from './Session1/Intro/Intro';
import ChartBar1 from './Session2/block-ui/BlockUI1/ChartBar1';
import SocialBlock from './Session2/block-ui/BlockUI3/SocialBlock';
import ChartColumn from './Session2/block-ui/BlockUI4/ChartColumn';

function App() {
  return (
    <>
      <ChartColumn
        text = 'total visitor'
        total = '290302'
        unit= '$'
        percentage = {[20, 45, 30, 80, 75]}
      ></ChartColumn>
    </>
  );
}

export default App;
