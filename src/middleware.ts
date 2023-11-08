import { defineMiddleware, sequence } from "astro:middleware";

const errorHandler = defineMiddleware(async ({ locals, redirect }, next) => {
  try {
    const response = await next();

    if (response.status >= 400) {
      locals.httpStatus = response.status;

      return redirect("/error");
    }

    return response;
  } catch (_) {
    redirect("/error");
  }
});

export const onRequest = sequence(errorHandler);
