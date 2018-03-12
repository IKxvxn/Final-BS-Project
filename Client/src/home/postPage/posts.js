import React from 'react';
import Post from './post';

const posts = (props) => {
    return (
        <div className="postsContainer">
            {props.posts.map(function(post) {return <Post key={post._id} post={post} deletePost={props.deletePost} color={props.color} handleChangeState={props.handleChangeState}/>}) }    
        </div>
    );
}

export default posts