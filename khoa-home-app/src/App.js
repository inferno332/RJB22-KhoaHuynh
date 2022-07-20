import react from 'react';
import './App.css';
import Basic1 from './Session2/basic/Basic 1/Basic1';
import Basic2 from './Session2/basic/Basic 2/Basic2';
import Intro from './Session1/Intro/Intro';
import ChartBar1 from './Session2/block-ui/BlockUI1/ChartBar1';
import SocialBlock from './Session2/block-ui/BlockUI3/SocialBlock';
import ChartColumn from './Session2/block-ui/BlockUI4/ChartColumn';
import LikeButton from './Session3/LikeButton/LikeButton';
import RatingButton from './Session3/RatingButton/RatingButton';
import Tabs from './Session3/TABS';
import Accordions from './Session3/Accordions/Accordions';
import ImageSlider from './Session3/ImageSlider/ImageSlider';
import SimpleForm from './Components/Form Example/SimpleForm';

import axios from 'axios';
import UseEffect from './Components/useEffect';
import FormDB from './Components/FormDB/index';
import TodoList from './Components/TodoList/TodoList';
import LinkTest from './Components/React Router/Link';
import Session8 from './Session8';
import Navigation from './Session8/components/Navigation';

// set base
axios.defaults.baseURL = 'https://62d16f46d4eb6c69e7dd5d81.mockapi.io/'

function App() {
  return (
    <>
      {/* <Intro></Intro> */}
      {/* <Basic1
          imageUrl = '/images/basic-images/1.jpg'
          heading = 'Shirt'
          category1 = 'asdad'
          category2 = 'asdasd'
          category3 = 'asdsdad'
          category4 = 'asdad'
      ></Basic1> */}

      {/* <Basic2></Basic2> */}

      {/* <ChartBar1
          text ='charbar'
          percentage={20}
          color= '#17a2b8'
      ></ChartBar1>
      <ChartBar1
          text ='charbar2'
          percentage={50}
          color= '#dc3545'
      ></ChartBar1> */}

      {/* <SocialBlock
          text ='Facebook'
          color ='#007bff'
          iconName ='fa-brands fa-facebook-f'
          total ='3000000'
          unit ='Likes'
      ></SocialBlock> */}

      {/* <ChartColumn 
          text = 'TODAY VISITOR'
          total = {24999}
          unit = '$'
          percentage = {[24, 50, 42, 44, 80]}
          ></ChartColumn> */}

      {/* <LikeButton></LikeButton> */}

      {/* <RatingButton></RatingButton> */}

      {/* <Tabs></Tabs> */}

      {/* <Accordions/> */}
      
      {/* <ImageSlider/> */}

      {/* <SimpleForm/> */}

      {/* <UseEffect/> */}

      {/* <FormDB/> */}

      {/* <TodoList/> */}

      {/* <LinkTest/> */}

      <Session8/>
    </>
  );
}

export default App;
