import React from "react";

interface HelloWorldProps {
  name: string;
}

const HelloWorld: React.FunctionComponent<HelloWorldProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default HelloWorld;
