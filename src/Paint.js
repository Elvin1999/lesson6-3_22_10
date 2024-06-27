import React, { useState } from "react";

export default function Paint() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [points, setPoints] = useState([{ x: 0, y: 0 }]);

  function addPosition() {
    setPoints([...points, { x: position.x, y: position.y }]);
  }

  return (
    <div
      id="area"
      style={{
        position: "relative",
        width: "800px",
        height: "70vh",
        margin: "auto",
        marginTop: "100px",
        border: "10px solid deepskyblue",
      }}
      onPointerMove={(e) => {
        // can change to automatically get width of area
        let differX = (window.innerWidth - 800) / 2;

        setPosition({ x: e.clientX - differX, y: e.clientY - 100 });
        addPosition();
      }}
    >
      {points.map((p) => (
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${p.x}px,${p.y}px)`,
            left: 0,
            top: 0,
            width: "20px",
            height: "20px",
          }}
        ></div>
      ))}
    </div>
  );
}
