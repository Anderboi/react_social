import css from "./Inputs.module.css";
import common from "../../../Common.module.css";

type InputType = {
  inputName: string;
  value: string;
  labelText: string;
};

const TextareaWithLabel: React.FC<InputType> = (props) => {
  return (
    <div className={css.inputblock_item}>
      <label htmlFor={props.inputName}>{props.labelText}</label>
      <textarea
        value={props.value}
        name={props.inputName}
        id={props.inputName}
        className={`${common.input} ${css.inputblock_item_textarea}`}
      />
    </div>
  );
};

export default TextareaWithLabel;
