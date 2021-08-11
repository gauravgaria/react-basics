import React from 'react'

const getTime = () =>{
    return new Date().toLocaleTimeString();
}

const Comment = () =>{
    return(
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"/>
                </a>
            </div>
            <div className="content">
                <a href="/" className="author">Gaurav</a>
                <div className="metadata">
                    <span className="date">Today at {getTime()}</span>
                </div>
                <div className="text">Nice Post, was very helpful</div>
            </div>
        </div>
    );
}

export default Comment