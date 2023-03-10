import React from "react";

interface Props {
  show: boolean;
  children: React.ReactNode
}

const ConditionalWrapper: React.FC<Props> = ({ show, children }) => {
  return show ? <div>{children}</div> : null;
};

export default ConditionalWrapper;