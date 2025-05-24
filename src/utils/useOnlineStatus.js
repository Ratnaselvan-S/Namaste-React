import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [checkOnlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return checkOnlineStatus;
};

export default useOnlineStatus;
