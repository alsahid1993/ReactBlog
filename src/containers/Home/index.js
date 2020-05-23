import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';
import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';

const SideImage = props => {
  return (
    <div style={{ height: `${props.height}px` }}>
      <img src={props.src} alt="" />
    </div>
  );
}


const ImageGallery = props => (<div className="galleryPost" style={props.galleryStyle}>

  <section style={{ width: '70%' }}>
    <div className="mainImageWrapper">
      <img src={require('../../blogPostImages/flight.jpg')} alt="" />
    </div>
  </section>
  <section className="sideImageWrapper" style={{ width: props.largeWidth }}>
    <SideImage
      height={props.sideImageHeight}
      src={require('../../blogPostImages/' + props.imagesArray[1])} alt=""
    />
    <SideImage
      height={props.sideImageHeight}
      src={require('../../blogPostImages/' + props.imagesArray[2])} alt=""
    />
    <SideImage
      height={props.sideImageHeight}
      src={require('../../blogPostImages/' + props.imagesArray[3])} alt=""
    />
  </section>
</div>)

const Home = props => {

  const galleryHeight = 450;
  const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: 'hidden'
  }

  const sideImageHeight = galleryHeight / 3;

  const imageAr = blogData.data.map(post => post.blogImage)
  console.log(blogData)
  return (
    <div>
      <Card >
        <ImageGallery
          largeWidth="70%"
          smallWidth="30%"
          //images{{}}
          sideImageHeight={sideImageHeight}
          galleryStyle={galleryStyle}
          imagesArray={imageAr}
        />
      </Card>
        <Layout>
          <RecentPosts style={{ width: '70%' }} />
        </Layout>

    </div>
  );
}

export default Home;