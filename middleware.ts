import { clerkMiddleware } from "@clerk/nextjs/server";

const publishableKey = "pk_test_b3B0aW1hbC1lZ3JldC0xNS5jbGVyay5hY2NvdW50cy5kZXYk";

export default clerkMiddleware({
  publishableKey,
}
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};