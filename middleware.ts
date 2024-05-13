import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// All routes public routes should be listed here.:
// const isProtectedRoute = createRouteMatcher([
// 	'/',
// 	'/api/account',
// 	'/api/lead-magnet',
// 	'/api/webhooks/stripe',
// 	'/api/lead-magnet/publish',
// 	'/api/lead-magnet/unpublish',
// ]);

export default clerkMiddleware();
// (auth, req) => {
// 	if (isProtectedRoute(req)) auth().protect();
// },
// { debug: process.env.NODE_ENV === 'development' }

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
