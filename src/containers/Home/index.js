import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';


const Home = props => {

  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight / 3;

  return (
    <div>
      <Card style = {{margin:'20px 0'}}>
        <div className="galleryPost" style={galleryStyle}>
          <section style={{ width: '70%' }}>
            <div>
              <img src={require('../../blogPostImages/flight.jpg')} alt="Post" />
            </div>
          </section>
          <section className="sideImageWrapper" style={{ width: '30%' }}>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={require('../../blogPostImages/atlanta.jpg')} alt="Post" />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={require('../../blogPostImages/miami.jpg')} alt="Post" />
            </div>
            <div style={{ height: `${sideImageHeight}px` }}>
              <img src={require('../../blogPostImages/police.jpg')} alt="Post" />
            </div>
          </section>
        </div>
      </Card>

      <Card style = {{margin:'20px 0'}}>
        Post 1
        </Card>
      <Card style =  {{margin:'20px 0'}}>
        Post 1
        </Card>

    </div>
  );
}

export default Home;