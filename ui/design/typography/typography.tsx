import React from "react";

interface Props {
  variant:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "overline";
  children: React.ReactNode;
}

export const Typography: React.FC<Props> = ({ variant, children }) => {
  return (
    <div className={`typography-${variant}`}>
      {children}
    </div>
  );
};

export default Typography;