import React from "react";
import { CompY } from "./CompY";
import { useContext } from "react";
import { NameContext } from "../App3";
export const CompX = () => {
  const NameValue = useContext(NameContext);
  return (
    <>
      <div>CompX</div>
      <div>Name={NameValue.name}</div>
      <CompY/>
    </>
  );
};
