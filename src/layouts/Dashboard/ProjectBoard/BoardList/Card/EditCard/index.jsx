import React from "react";

const EditCard = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="edit-card">
      <div className="edit-card-header _df _jc-sb">
        <h2 className="_capitalize">{props.title}</h2>
        <button className="button _fr">Delete card</button>
      </div>
      <div className="edit-card-body">
        <div className="edit-card-body-desc">
          <h4>Description</h4>
          <textarea row="5" col="10" />
        </div>
        <div className="edit-card-body-comments">
          <h4>Comments</h4>
        </div>
      </div>
    </div>
  );
});

export default EditCard;
