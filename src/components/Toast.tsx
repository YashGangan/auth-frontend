import { FC, useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number; 
}

const Toast: FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration); 

    return () => clearTimeout(timer); 
  }, [onClose, duration]);

  return (
    <div
      className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg z-20"
      role="status"
      aria-live="polite"
    >
      <div className="flex p-4">
        <div className="shrink-0">
          <svg
            className="shrink-0 size-4 text-teal-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
          </svg>
        </div>
        <div className="ms-3">
          <p className="text-sm text-gray-700">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="toast-close ml-auto text-gray-500 hover:text-gray-700"
          aria-label="Close notification"
        >
          
        </button>
      </div>
    </div>
  );
};

export default Toast;
