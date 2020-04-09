import React from 'react';
import './style.css';
import Card from '../UI/Card';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
    return (

        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful is always Beautiful</h1>
                    <span className="postedBy">Posted on December 2019 by Jimmy Griddle Blogging Tips</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/elephants.jpg')} alt="Post Image" />
                </div>
            </Card>
        </div>

    )

}

export default BlogPost