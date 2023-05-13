import React from "react";
export default function Step3({ formData }) {
  return (
    <div>
      <h2>Review your information:</h2>
      <p>Company Name: {formData.companyName}</p>
      <p>ABN Number: {formData.abn}</p>
      <p>About: {formData.about}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Mobile Phone: {formData.mobilePhone}</p>
      <p>Company Address: {formData.address}</p>
    </div>
  );
}
