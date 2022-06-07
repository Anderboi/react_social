import React from "react";

class StatusComponent extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus
              value={this.props.aboutMe}
              placeholder="Enter some status"
              onBlur={this.deactivateEditMode.bind(this)}
            />
            <input
              type="button"
              value="Save"
              onClick={this.deactivateEditMode.bind(this)} //TODO Add status saving logic
            />
          </div>
        ) : (
          <div onDoubleClick={this.activateEditMode.bind(this)}>
            <b>About me:</b> {this.props.aboutMe}
          </div>
        )}
      </div>
    );
  }
}

export default StatusComponent;
