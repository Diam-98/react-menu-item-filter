import React from "react";

const MenuItem = ({ categories }) => {
  return (
    <ul>
      {categories.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default MenuItem;
