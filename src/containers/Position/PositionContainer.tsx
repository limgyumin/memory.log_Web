import React from "react";
import { observer } from "mobx-react";
import Position from "../../components/Position/Position";

const PositionContainer = ({}) => {
  return (
    <>
      <Position />
    </>
  );
};

export default observer(PositionContainer);