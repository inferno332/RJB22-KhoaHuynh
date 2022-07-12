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

      <Tabs></Tabs>
    </>
  );
}

export default App;
