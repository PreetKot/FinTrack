import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/api/webhook(.*)",
    "/api/webhooks(.*)",
  ],
  // Routes that are completely ignored by the auth middleware
  ignoredRoutes: [
    "/api/webhook(.*)",
    "/api/webhooks(.*)",
    "/((?!api|trpc))(_next|.+\\..+)(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};