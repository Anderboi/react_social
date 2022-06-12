import React, { useEffect, useState } from "react";
import common from "../../../Common.module.css";

const StatusComponent = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusInput, setStatusInput] = useState(props.profileStatus);

  useEffect(() => {
    setStatusInput(props.profileStatus);
  }, [props.profileStatus]);
    
  const setProfileStatus = () => {
    setEditMode(false);
    props.setUserStatusTC(statusInput);
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
          />
          <input
            className={common.button}
            type="button"
            value="Save"
            onClick={() => {
              setEditMode(false);
            }}
          />
        </div>
      )}
      {!editMode && (
        <div onDoubleClick={handleEditMode}>
          <b>About me:</b> {props.profileStatus || "Nothing"}
        </div>
      )}
    </div>
  );
};

export default StatusComponent;
