import React, { useEffect, useState } from "react";
import common from "../../../Common.module.css";

const StatusComponent = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusInput, setStatusInput] = useState(props.displayInfo);

  useEffect(() => {
    setStatusInput(props.displayInfo);
  }, [props.displayInfo]);

  const setProfileStatus = () => {
    setEditMode(false);
    props.setInfoState(statusInput);
  };

  const handleEditMode = () => {
    if (props.authId === props.userId) {
      setEditMode(true);
    }
  };

  return (
    <div>
      {editMode && (
        <div>
          <input
            autoFocus
            value={statusInput}
            onChange={(e) => setStatusInput(e.currentTarget.value)}
            placeholder="Enter your status"
            onBlur={setProfileStatus}
            className={common.input}
            data-testid="status-input"
          />
        </div>
      )}
      {!editMode && (
        <div onDoubleClick={handleEditMode} data-testid="status-div">
          <b>{props.children}</b> {props.displayInfo || "Nothing"}
        </div>
      )}
    </div>
  );
};

export default StatusComponent;
