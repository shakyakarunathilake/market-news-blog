import { useToast } from "@/context/ToastContext";
import { FC, useEffect } from "react";

interface ErrorHandlerProps {
  error?: string;
}

const ErrorHandler: FC<ErrorHandlerProps> = ({ error }) => {
  const { showToast } = useToast();

  useEffect(() => {
    if (error) {
      showToast("error", error);
    }
  }, [error, showToast]);

  if (error) {
    return (
      <div className="flex h-full max-h-[200px] w-full flex-col items-center justify-center gap-4">
        <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Oops! Something went wrong.
        </h6>
        <p className="w-full text-center text-gray-600 md:w-2/3 dark:text-gray-400">
          Unable to load news at this time. Our team has been notified and is
          working to restore the service. <br />
          Please try again later.
        </p>
      </div>
    );
  }

  return null;
};

export default ErrorHandler;
