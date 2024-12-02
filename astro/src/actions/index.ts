import { defineAction } from "astro:actions";

export const server = {
  getGreeting: defineAction({
    accept: "form",
    handler: async (_, { cookies }) => {
      cookies.set("greeting", "HelloCookie", {
        sameSite: "none",
        secure: false,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
      return "Hello";
    },
  }),
};
