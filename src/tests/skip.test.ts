import { render } from '@testing-library/svelte/svelte5';
import { expect, it } from 'vitest';
import Markdown from '../lib/Markdown.svelte';

it('should skip rendering p or em element', async () => {
	const ctx = render(Markdown, {
		md: 'test',
		plugins: [{ renderer: { p: null } }]
	});

	expect(ctx.container.textContent).toBe('');

	await ctx.rerender({
		md: 'test *em*',
		plugins: [{ renderer: { em: null } }]
	});
	expect(ctx.container.textContent).toBe('test ');
});
