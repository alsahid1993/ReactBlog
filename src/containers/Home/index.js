import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

const SideImage = props =>{
  return(
  <div style= {{height: `${props.sideImageHeight}px`}}>
    <img src={props.src} alt="" />
    </div>
  );
}

const ImageGallery = props => (
  <div className= "galleryPost" style= {props.galleryStyle}>
    <section style = {{width: props.largeWidth}}>
      <div className = "mainImageWrapper">
      <img src = {require('../../blogPostImages' + props.imagesArray[1])} alt=""/>
      </div>
    </section>
    <section className = {"sideImageWrapper"} style = {{width: props.smallWidth}}>
      {
        props.imagesArray.map(image =>
          <SideImage
          height = {props.sideImageHeight}
          src = {require('../../blogPostImages/'+ image)}
          alt = ""/>
          )
      }
    </section>
  </div>
);


const Home = props => {

  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card >
        <div className="galleryPost" style={galleryStyle}>

          <section style={{ width: '70%' }}>
            <div>
              <img src={require('../../blogPostImages/flight.jpg')} alt="Post" />
            </div>
          </section>
          <section className="sideImageWrapper" style={{ width: '30%' }}>
           <SideImage 
           height = {sideImageHeight}
            src={require('../../blogPostImages/atlanta.jpg')} alt=""
             />
           <SideImage 
           height = {sideImageHeight}
            src={require('../../blogPostImages/miami.jpg')} alt=""
             />
           <SideImage 
           height = {sideImageHeight}
            src={require('../../blogPostImages/police.jpg')} alt=""
             />
          </section>
        </div>
      </Card>

      <section className="HomeContainer">

        <RecentPosts style= {{ width: '70%' }} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;