import React from "react";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const CommentDetails = (props) => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.img} />
        </a>
      </div>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at {getTime()}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
