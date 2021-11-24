import React from "react";

const Header = (props) => {
  let title = props.title;
  return <h1 className="text-center bg-gray-100 text-purple-600 text-4xl py-6 font-semibold">{title}</h1>;
};
export default Header;
