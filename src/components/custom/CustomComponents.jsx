import * as React from "react";
import { TextField, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { red } from "@mui/material/colors";


const inputStyle = {
  fontSize: "15px",
  fontFamily: "Helvetica"
};


export const TextFieldCustom = ({ name, defaultValue, ...rest }) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        
       ( <TextField
          {...rest}
          {...field}
          sx={inputStyle}
          variant="outlined"
          size="small"
          value={defaultValue ? defaultValue : ''}
          helperText={errors[name]?.message || rest.helperText}
          error={!!errors[name]}
        />
       )
      )}
    />
  );
};


export const RadioGroupCustom = ({ name, buttons, defaultValue, ...rest }) => {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  rest = { row: true, ...rest };
  console.log(defaultValue);
  return (

    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => {
        const handleSelect = (e) => {
          const selectedValue = e.target.value;
          field.onChange(selectedValue);
        };
        return (
          <div>
            <RadioGroup
              {...rest}
              {...field}
              onChange={handleSelect}
              defaultValue={`"${defaultValue}"`}
            >
              {buttons.map((button) => (
                <FormControlLabel
                  key={button.id}
                  value={button.id}
                  control={<Radio inputProps={{ error: !!errors[name] }} />}
                  label={button.label}
                />
              ))}
            </RadioGroup>
            {errors[name] && <Typography sx={{
              color: red[500],
              ...inputStyle
            }}>{errors[name].message}</Typography>}
          </div>
        );
      }}
    />
  );
};

