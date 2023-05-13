import * as React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const TextFieldCustom = ({ name, defaultValue, ...rest }) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <TextField
          {...rest}
          {...field}
          variant="outlined"
          size="small"
          helperText={errors[name]?.message || rest.helperText}
          error={!!errors[name]}
        />
      )}
    />
  );
};