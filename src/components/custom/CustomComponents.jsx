import React, { useEffect, useState } from "react";
import { TextField, RadioGroup, FormControlLabel, Radio, Typography, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import { customFormContext } from "./CustomFomContext";
import { DateField } from '@mui/x-date-pickers/DateField';
import { red } from "@mui/material/colors";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'
import get from 'lodash/get';
import dayjs from "dayjs";

const inputStyle = {
  fontSize: "15px",
  fontFamily: "Helvetica"
};


export const TextFieldCustom = ({ name, values, handleFormInput, ...rest }) => {
  const { control, errors } = customFormContext();
  const isNestedField = name.includes('.');
  const defaultValue = isNestedField ? get(values, name, '') : '';
  const error = get(errors, name);
  const errorMessage = error ? error.message : '';
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => {
        const handleChange = (e) => {
          const fieldValue = e.target.value;
          field.onChange(fieldValue);
          handleFormInput(name)(fieldValue); // Modify this line
        };

        return (
          <TextField
            fullWidth
            {...rest}
            {...field}
            onChange={handleChange}
            value={field.value || ''}
            variant="outlined"
            size="small"
            helperText={errorMessage}
            error={Boolean(errorMessage)}
          />
        );
      }}
    />
  );
};

export const RadioGroupCustom = ({ values, name, buttons, handleFormInput, ...rest }) => {
  const { control, errors } = customFormContext();
  rest = { row: true, ...rest };
  return (

    <Controller
      name={name}
      control={control}
      defaultValue={values[name]}
      render={({ field }) => {
        return (
          <div>
            <RadioGroup
              {...rest}
              {...field}
              value={values[name]}
              onChangeCapture={field.onChange}
              onChange={handleFormInput(name)}
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

export const CustomDatePicker = ({ values, name, label, handleFormInput, ...rest }) => {
  const { control, errors } = customFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...rest}
                {...field}
                label={label}
                value={values[name]}
                defaultValue={values[name]}
                onChangeCapture={field.onChange}
                onChange={handleFormInput(name)}
                error={Boolean(errors[name])}
                helperText={errors[name]?.message}
                sx={{
                  marginTop: 2,
                }}
              />
            </LocalizationProvider>
            {errors[name] && (
              <Typography
                sx={{
                  color: red[500],
                  ...inputStyle
                }}
              >
                {errors[name].message}
              </Typography>
            )}
          </div>
        );
      }}
    />
  );
};

export const CustomDropdown = ({ values, name, label, handleFormInput, defaultValue, menuItems, ...rest }) => {
  const { control, errors } = customFormContext();

  return (<Controller
    name={name}
    control={control}
    render={({ field }) => {
      return (
        <div>
          <Select
            labelId={name}
            id={name}
            value={values[name] || defaultValue}
            defaultChecked={values[name] === true}
            displayEmpty
            onBlur={field.onChange}
            onChangeCapture={field.onChange}
            onChange={handleFormInput(name)}
            sx={{
              marginTop: 2,
              width: 250,
              size: 'small'
            }}
            error={!!errors[name]}
          >
            {menuItems.map((menu) => (
              <MenuItem key={menu.id} value={menu.name}>{menu.name}</MenuItem>)
            )}
          </Select>
          {errors[name] && (
            <Typography
              sx={{
                color: red[500],
                ...inputStyle
              }}
            >
              {errors[name].message}
            </Typography>
          )}
        </div>
      );
    }}
  />)
};

export const CustomDateField = ({ values, name, label, handleFormInput, ...rest }) => {
  const { control, errors } = customFormContext();
  
  // const formatValue = (value) => {
  //   return value ? dayjs(value).format('DD/MM/YYYY') : null;
  // };

  return (<Controller
    name={name}
    control={control}
    render={({ field }) => {
      return (

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              sx={{
                marginTop: 2,
                width: 250,
                size: 'small'
              }}
              format="DD/MM/YYYY"
              defaultValue={values[name]}
              label={label}
              value={values[name] ? values[name] : null}
              onChangeCapture={(day) => field.onChange(day)}
              onChange={(day) => {
                const formattedValue = day;
                field.onChange(formattedValue);
                handleFormInput(name)(formattedValue);
              }}
            />
          </LocalizationProvider>
          {errors[name] && (
            <Typography
              sx={{
                color: red[500],
                ...inputStyle
              }}
            >
              {errors[name].message}
            </Typography>
          )}
        </div>
      );
    }}
  />)

}

export const CustomPhoneNumber = ({ values, name, handleFormInput, ...rest }) => {
  const { control, errors } = customFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <PhoneInput
            {...rest}
            {...field}
            country="au"
            international
            value={values[name]?? null}
            onFocus={(event) => field.onChange(event)}
            onChange={(event) => {
              field.onChange(event);
              handleFormInput(name)(event);
            }}
            error={Boolean(errors[name])}
          />


          {errors[name] && (
            <Typography sx={{ color: red[500], ...inputStyle }}>
              {errors[name]?.message}
            </Typography>
          )}
        </div>
      )}
    />
  );
};
