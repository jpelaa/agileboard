import React, { useState, useRef } from "react";
import DescIcon from "./DescIcon";
import { useStyleForDrag, useOnClickOutside } from "helper/customhooks";
import Modal from "components/Modal";
import EditCard from "./EditCard";

const Card = (props) => {
  const [shouldShowModal, setModalShow] = useState(false);

  useStyleForDrag();
  const onDragStart = (e, dragIndex) => {
    e.dataTransfer.setData("dragIndex", dragIndex);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropIndex) => {
    props.swapTasks({
      dragTaskId: e.dataTransfer.getData("dragIndex"),
      dropTaskId: dropIndex,
    });
  };

  const ref = useRef(null);

  useOnClickOutside(ref, () => setModalShow(false));

  return (
    <>
      <div
        className="project-board-card-content-list"
        draggable={true}
        onDragStart={(e) => onDragStart(e, props.id)}
        onDragOver={(e) => onDragOver(e, props.id)}
        onDrop={(e) => onDrop(e, props.id)}
        onClick={(e) => setModalShow(!shouldShowModal)}
      >
        <div>
          <p>{props.title}</p>
        </div>
        <div className="project-board-card-content-list-footer">
          <div className="task-id">{props.description && <DescIcon />}</div>
          <div className="assignee">{props.assignee || "ram"}</div>
        </div>
      </div>
      {shouldShowModal && (
        <Modal>
          <EditCard
            ref={ref}
            title={props.title}
            id={props.id}
            description={props.description}
            comments={props.comments}
          />
        </Modal>
      )}
    </>
  );
};

export default Card;
