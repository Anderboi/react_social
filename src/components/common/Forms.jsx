import base from "../../Common.module.css";

export const TextForm = ({ ...props }) => {
  return (
    <div>
      <input
        className={base.input}
        autoFocus
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        validate={props.validate}
        onBlur={props.onBlur}
      ></input>
    </div>
  );
};
