import React from "react";

interface Props {
  name: string;
}

const HelloWorld: React.FunctionComponent<Props> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default HelloWorld;
