import { useRef } from "react";
import { QueryClient } from "react-query";

// Create a client
const getClient = (() => {
  const clientRef = useRef(null);

  return () => {
    if (!clientRef.current)
      // 캐시 정책
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: Infinity,
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return clientRef.current;
  };
})();
export default getClient;
