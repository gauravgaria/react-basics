import React from "react";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
/*  props-> (propName = "value")
 */

const Comment = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Gaurav"
          text="Nice Blog"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Nimesh"
          text="Your blog was quite helpful"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Shilpa"
          text="Amazing blog"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Deepesh"
          text="nice blog dude"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

export default Comment;
