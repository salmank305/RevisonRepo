import React, { useContext } from "react";
import { NameContext } from "../App3";
import { CompB } from "./CompB";

export const CompA = () => {
  const NameValue= useContext(NameContext)
  return (
    <>
      <div>CompA</div>
      <div>ROLE:-{NameValue.role}</div>
      <CompB/>
    </>
  );
};
