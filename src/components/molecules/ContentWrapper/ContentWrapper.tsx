"use client";

import ErrorHandler from "@/components/atoms/ErrorHandler/ErrorHandler";
import { FC, ReactNode } from "react";

interface ContentWrapperProps {
  error?: string;
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ error, children }) => {
  return (
    <>
      <ErrorHandler error={error} />
      {!error && children}
    </>
  );
};

export default ContentWrapper;
