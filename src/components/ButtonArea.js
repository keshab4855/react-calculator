import React from "react";
import Button from "./Button";

const ButtonArea = () => {
  const buttons = [
    {
      className: "item-1",
      label: "AC",
    },
    {
      className: "item-2",
      label: "C",
    },
    {
      className: "item-3",
      label: "/",
    },
    {
      className: "item-4",
      label: "*",
    },
    {
      className: "item5",
      label: "7",
    },
    {
      className: "item-6",
      label: "8",
    },
    {
      className: "item-7",
      label: "9",
    },
    {
      className: "item-8",
      label: "+",
    },
    {
      className: "item-9",
      label: "4",
    },
    {
      className: "item-10",
      label: "5",
    },
    {
      className: "item-11",
      label: "6",
    },
    {
      className: "item-12",
      label: "-",
    },
    {
      className: "item-13",
      label: "1",
    },
    {
      className: "item-14",
      label: "2",
    },
    {
      className: "item-15",
      label: "3",
    },
    {
      className: "item-16",
      label: "=",
    },
    {
      className: "item-17",
      label: "0",
    },
    {
      className: "item-18",
      label: ".",
    },
  ];
  return (
    <>
      {" "}
      <ul className="buttons">
        {buttons.map((item, i) => {
          return (
            <Button key={i} className={item.className} label={item.label} />
          );
        })}
      </ul>
    </>
  );
};

export default ButtonArea;
