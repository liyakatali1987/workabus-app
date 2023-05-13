import React from "react";
import { TextFieldCustom } from "../TextFieldCustom";
export default function Step2() {
  return (
    <div>
      <TextFieldCustom label="Phone Number" name="phoneNumber" />
      <br />
      <br />
      <TextFieldCustom label="Mobile Phone" name="mobilePhone" />
      <br />
      <br />
      <TextFieldCustom label="Address" name="address" />
    </div>
  );
}
