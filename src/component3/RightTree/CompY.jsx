import  { useContext } from "react";
import { NameContext } from "../App3";

export const CompY = () => {
  const NameValue = useContext(NameContext);
  return (
    <>
      <div>CompY</div>
      <div>City:-{NameValue.city}</div>
    </>
  );
};
