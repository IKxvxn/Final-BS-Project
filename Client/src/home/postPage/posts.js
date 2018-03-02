import React from 'react';
import Post from './post';

const posts = (props) => {
    return (
        <div >
            {props.posts.map(function(post) {return <Post post={post} handleChangeState={props.handleChangeState}/>}) }    
        </div>
    );
}

export default posts