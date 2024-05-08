import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
	'/',
	'/api/account',
	'/api/lead-magnet',
	'/api/webhooks/stripe',
	'/api/lead-magnet/publish',
	'/api/lead-magnet/unpublish',
]);

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) auth().protect();
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
