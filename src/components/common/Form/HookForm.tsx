import React from "react";
import { DeepPartial, SubmitHandler, UnpackNestedValue, useForm } from "react-hook-form";

interface IFormProps<T> {
  defaultValues?: UnpackNestedValue<DeepPartial<T>> ;
  onSubmit: SubmitHandler<any>;
}

export default function HookForm<T>({
  defaultValues,
  children,
  onSubmit,
}: IFormProps<T> & { children: React.ReactElement | React.ReactElement[] }) {
  const { register, handleSubmit } = useForm<T>({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}

