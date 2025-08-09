"use client";

import ErrorHandler from "@/components/atoms/ErrorHandler/ErrorHandler";

interface ContentWrapperProps {
  error?: string;
  children: React.ReactNode;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ error, children }) => {
  return (
    <>
      <ErrorHandler error={error} />
      {!error && children}
    </>
  );
};

export default ContentWrapper;
