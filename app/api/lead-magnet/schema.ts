import { z } from 'zod';

export const leadMagnetCreateRequest = z.object({
	name: z.nullable(z.string()),
	status: z.nullable(z.string()),
	draftBody: z.nullable(z.string()),
	draftTitle: z.nullable(z.string()),
	draftSubtitle: z.nullable(z.string()),
	draftPrompt: z.nullable(z.string()),
	draftFirstQuestion: z.nullable(z.string()),
	publishedBody: z.nullable(z.string()),
	publishedTitle: z.nullable(z.string()),
	publishedSubtitle: z.nullable(z.string()),
	publishedPrompt: z.nullable(z.string()),
	publishedFirstQuestion: z.nullable(z.string()),
	draftEmailCapture: z.nullable(z.string()),
	publishedEmailCapture: z.nullable(z.string()),
	slug: z.nullable(z.string()),
});

export const leadMagnetUpdateRequest = leadMagnetCreateRequest.extend({
	id: z.nullable(z.string()),
	userId: z.nullable(z.string()),
});
