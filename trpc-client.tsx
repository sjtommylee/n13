import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({
  unstable_overrides: {
    useMutation: {
      async onSuccess(opt) {
        await opt.originalFn();
        await opt.queryClient.invalidateQueries();
      },
    },
  },
});
