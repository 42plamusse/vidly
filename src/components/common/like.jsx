import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <div>
      <span onClick={onClick} className="btn">
        <i className={`${classes} aria-hidden="true"`} />
      </span>
    </div>
  );
};

export default Like;
