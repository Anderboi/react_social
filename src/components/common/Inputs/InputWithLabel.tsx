import css from "./Inputs.module.css";
import common from "../../../Common.module.css";

type InputType = {
  inputName: string;
  type: "text" | "email" | "date";
  value: string;
  labelText: string;
  placeholder?: string;
};

const InputWithLabel: React.FC<InputType> = (props) => {
  return (
    <div className={css.inputblock_item}>
      <label htmlFor={props.inputName}>{props.labelText}</label>
      <input
        value={props.value}
        type={props.type}
        name={props.inputName}
        id={props.inputName}
        className={common.input}
        placeholder={props.placeholder}
        
      />
    </div>
  );
};

export default InputWithLabel;
