import React from "react";
import { useSelector } from "react-redux";
import { Sideinfo } from "./components/sideinfo";
export const Information = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <div>information</div>
      <div>
        <Sideinfo />
      </div>
    </div>
  );
};
