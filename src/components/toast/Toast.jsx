"use client";
import { useEffect, useState } from "react";

const Toast = ({ title, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toastClass = type === "success" ? "bg-green-600" : "bg-red-500";

  return (
    <div
      className={`z-50 fixed left-1/2 -translate-x-1/2 rounded-lg px-20 py-6 shadow-2xl shadow-brand_primary_dark text-white text-2xl font-semibold text-center transition-all duration-300 ${toastClass} ${
        visible ? "top-40 opacity-100" : "-top-0 opacity-0"
      }`}
    >
      {title}
    </div>
  );
};

export default Toast;
