import base from "../../Common.module.css";

export const TextForm = ({ ...props }) => {
  return (
    <div>
      <input
        className={base.input}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        validate={props.validate}
      ></input>
    </div>
  );
};
