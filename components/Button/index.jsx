import React from "react";
import styled from "@emotion/styled";

export default function Button({ label, size, color, ...props }) {
  return (
    <Styled.Button size={size} color={color}>
      {label}
    </Styled.Button>
  );
}

const Styled = {
  Button: styled.button`
    width: ${({ size }) => (size === "large" ? "10rem" : "5rem")};
    background-color: ${({ color }) => color};
  `,
};
