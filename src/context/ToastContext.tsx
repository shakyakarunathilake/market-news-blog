"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  FC,
  ReactNode,
} from "react";
import ToastMessage from "@/components/atoms/ToastMessage/ToastMessage";

type ToastVariant = "success" | "error" | "warning";

interface ToastContextType {
  showToast: (variant: ToastVariant, message: string) => void;
}

interface ToastState {
  isVisible: boolean;
  message: string;
  variant: ToastVariant;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    message: "",
    variant: "success",
  });

  const showToast = useCallback((variant: ToastVariant, message: string) => {
    setToast({ isVisible: true, variant, message });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 5000);
  }, []);

  const handleClose = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.isVisible && (
        <div className="fixed right-4 bottom-4 z-50">
          <ToastMessage
            variant={toast.variant}
            message={toast.message}
            onClose={handleClose}
          />
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
