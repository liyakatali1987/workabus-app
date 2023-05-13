import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const CustomAbn = ({ name, defaultValue, ...rest }) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;

  const formatABN = (value) => {
    const abn = value.replace(/\D/g, "");
    const parts = abn.match(/(\d{1,2})(\d{1,3})(\d{1,3})(\d{1,3})/);
    if (parts) {
      return `${parts[1]} ${parts[2]} ${parts[3]} ${parts[4]}`;
    }
    return value;
  };

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
          onChange={(e) => {
            const inputValue = e.target.value;
            const formattedValue = formatABN(inputValue);
            e.target.value = formattedValue;
            field.onChange(formattedValue);
          }}
        />
      )}
    />
  );
};
