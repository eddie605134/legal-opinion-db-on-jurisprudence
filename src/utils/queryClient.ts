import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      enabled: false,
      onError: (error) => {
        // 若 error 是一個 Error 物件，您可能想要使用 error.message
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    },
  }
});

export default queryClient;
