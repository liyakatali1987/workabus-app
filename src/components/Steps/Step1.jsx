import React from "react";
import { TextFieldCustom } from "../TextFieldCustom";
import { CustomAbn } from "../CustomAbn";

function Step1() {

  return (
    <div>
      <TextFieldCustom label="Company name" name="companyName" />
      <br />
      <br />      
      <TextFieldCustom label="About" name="about"  multiline rows={4}/>
      <br />
      <br />
      <CustomAbn label="ABN" name="abn"/>
    </div>
  );
}

export default Step1;