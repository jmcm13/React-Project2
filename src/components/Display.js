import React from "react";
import BasicCard from "./BasicCard";

const Display = ({ formData }) => { 
  const userList = formData.map((item) => {
    return (
      <BasicCard formData={item} />
    );
  });

  return <>{userList}</>;
};

export default Display;