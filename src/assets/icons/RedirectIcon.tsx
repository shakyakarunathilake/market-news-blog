import React from "react";

interface Props {
  color?: string;
}

const RedirectIcon = ({ color = "currentColor" }: Props) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.1422" cy="12" r="9.5" stroke={color} />
      <path
        d="M9.8565 14.2861L14.1422 10.0004M14.1422 10.0004H9.14221M14.1422 10.0004V15.0004"
        stroke={color}
      />
    </svg>
  );
};

export default RedirectIcon;
