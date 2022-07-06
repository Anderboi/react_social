import React from "react";
import { useForm } from "react-hook-form";
import cn from "classnames";
import form from "./PostForm.module.css";
import base from "../../../Common.module.css";

type Props = {
  sendPost: (data: string) => void;
};

export const PostForm: React.FC<Props> = (props): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { post: "" } });

  const onSubmit = (data: any) => {
    props.sendPost(data.post);
    reset();
  };

  return (
    <div className={form.post_form}>
      <h4>Make new post</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("post", {
            maxLength: {
              value: 100,
              message: "Max length must be 100 symbols",
            },
          })}
          type="text"
          name="post"
          id="post"
          placeholder="Type your text here..."
          className={cn(base.input, form.input)}
        />

        <button type="submit" className={cn(base.button, form.button)}>
          Send post
        </button>
      </form>
      {errors.post && <div>Error</div>}
    </div>
  );
};
