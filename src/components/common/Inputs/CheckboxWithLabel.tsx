import css from "./Inputs.module.css";
import common from "../../../Common.module.css";

type InputType = {
  inputName: string;
  value: boolean;
  labelText: string;
};

const CheckboxWithLabel: React.FC<InputType> = (props) => {
  return (
    <div className={css.inputblock_item_checkbox}>
      <input
        checked={props.value}
        type="checkbox"
        name={props.inputName}
        id={props.inputName}
        className={common.checkbox}
      />
      <label htmlFor={props.inputName}>{props.labelText}</label>
    </div>
  );
};

export default CheckboxWithLabel;
