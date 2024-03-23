import { useState, useEffect } from "react";
import Toast from "@/components/toast/Toast";

const useToast = () => {
  const [showToast, setShowToast] = useState(false);

  const showToastWithTimeout = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return [showToast, showToastWithTimeout, Toast];
};

export default useToast;
