import { useRef } from "react";
import { QueryClient } from "react-query";

// Create a client
const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      // 캐시 정책
      client = new QueryClient({
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
    return client;
  };
})();
export default getClient;
