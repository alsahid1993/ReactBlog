import React from 'react'
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
    return (
        <div style={props.style}>
            <Card style={{ marginBottom: '20px' }}>
                <div className="phostImageWrapper">
                <img src={require('../../../blogPostImages/bridge.jpg')} alt="Post" />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span>Featured</span>
                    <h2>Fitness Manatra To Live Fit Life</h2>
                    <span>Posted on Jan 20 2020 by Keith Blogging'R us</span>
                    <p>Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do.
                    Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.
               Suspicion neglected he resolving agreement perceived at an. </p>

                    <button>Read More</button>
                </div>

            </Card>
            <Card style={{ marginBottom: '20px' }}>
                <div className="phostImageWrapper">
                <img src={require('../../../blogPostImages/police.jpg')} alt="Post" />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <span>Featured</span>
                    <h2>Fitness Manatra To Live Fit Life</h2>
                    <span>Posted on Jan 20 2020 by Keith Blogging'R us</span>
                    <p>messages.env.summary_text</p>

                    <button>Read More</button>
                </div>

            </Card>

        </div>
    )

}

export default RecentPosts