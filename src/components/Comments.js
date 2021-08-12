import React from "react";
import Image from "../logo.svg";
import CommentDetails from "./CommentDetails";

/*  props-> (propName = "value")
 */

const Comment = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Gaurav" text="Nice Blog" img={Image} />
      <CommentDetails
        author="Nimesh"
        text="Your blog was quite helpful"
        img={Image}
      />
      <CommentDetails author="Shilpa" text="Amazing blog" img={Image} />
      <CommentDetails author="Deepesh" text="nice blog dude" img={Image} />
    </div>
  );
};

export default Comment;
