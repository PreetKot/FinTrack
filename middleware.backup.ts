// BACKUP: Working Clerk v4 middleware configurations
// Use one of these if the current middleware fails

// Option 1: Minimal Clerk middleware (recommended)
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Option 2: More permissive middleware
/*
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/(.*)"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
*/

// Option 3: Most basic working configuration
/*
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
*/
