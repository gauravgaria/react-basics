import React from "react";

/*  Accessing component within component 
    ApprovalCard is the parent component of CommentDetails component and to traverse into child we do -> props.children
 */

const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprrove</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
