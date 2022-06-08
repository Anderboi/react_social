import React from "react";
import common from "../../../Common.module.css";

class StatusComponent extends React.Component {
  state = {
    editMode: false,
    statusInput: this.props.profileStatus,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.profileStatus !== this.props.profileStatus) {
      this.setState({
        statusInput: this.props.profileStatus,
      });
    }
  }

  activateEditMode = () => {
    if (this.props.userId === this.props.authId) {
      this.setState({
        editMode: true,
      });
    }
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  setProfileStatus = () => {
    this.setState({
      editMode: false,
    });
    this.props.setUserStatusTC(this.state.statusInput);
  };

  updateStatusBar = (text) => {
    this.setState({
      statusInput: text.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <input
              autoFocus
              onChange={this.updateStatusBar}
              value={this.state.statusInput}
              placeholder="Enter your status"
              onBlur={this.setProfileStatus}
              className={common.input}
            />
            <input
              className={common.button}
              type="button"
              value="Save"
              onClick={this.setProfileStatus}
            />
          </div>
        )}
        {!this.state.editMode && (
          <div onDoubleClick={this.activateEditMode}>
            <b>About me:</b> {this.props.profileStatus || "Nothing"}
          </div>
        )}
      </div>
    );
  }
}

export default StatusComponent;
