import { CloseIcon, ErrorIcon, SuccessIcon, WarningIcon } from "@/assets/icons";
import React, { FC } from "react";

type ToastVariant = "success" | "error" | "warning";

interface ToastMessageProps {
  variant: ToastVariant;
  message: string;
  onClose?: () => void;
}

const variantConfig = {
  success: {
    id: "toast-success",
    iconBg: "bg-green-100 dark:bg-green-800",
    iconColor: "text-green-500 dark:text-green-200",
    icon: <SuccessIcon />,
  },
  error: {
    id: "toast-error",
    iconBg: "bg-red-100 dark:bg-red-800",
    iconColor: "text-red-500 dark:text-red-200",
    icon: <ErrorIcon />,
  },
  warning: {
    id: "toast-warning",
    iconBg: "bg-orange-100 dark:bg-orange-700",
    iconColor: "text-orange-500 dark:text-orange-200",
    icon: <WarningIcon />,
  },
};

const ToastMessage: FC<ToastMessageProps> = ({
  variant,
  message,
  onClose,
}) => {
  const config = variantConfig[variant];

  return (
    <div
      id={config.id}
      className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow-sm dark:bg-gray-800 dark:text-gray-400"
      role="alert"
    >
      <div
        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${config.iconBg} ${config.iconColor}`}
      >
        {config.icon}
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={onClose}
        aria-label="Close"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default ToastMessage;
