import css from "./Inputs.module.css";
import common from "../../../Common.module.css";


const HookFormInput = ({ register, name, ...rest }: any) => {
  return <input className={common.input} {...register(name)} {...rest} />;
};

export default HookFormInput;
