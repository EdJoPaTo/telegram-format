import type {Formatter} from './types.js';

function escape(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function bold(text: string): string {
	return `<b>${text}</b>`;
}

function italic(text: string): string {
	return `<i>${text}</i>`;
}

function strikethrough(text: string): string {
	return `<s>${text}</s>`;
}

function underline(text: string): string {
	return `<u>${text}</u>`;
}

function spoiler(text: string): string {
	return `<span class="tg-spoiler">${text}</span>`;
}

function monospace(text: string): string {
	return `<code>${escape(text)}</code>`;
}

function monospaceBlock(text: string, programmingLanguage?: string): string {
	if (programmingLanguage) {
		return `<pre><code class="language-${programmingLanguage}">${escape(text)}</code></pre>`;
	}

	return `<pre>${escape(text)}</pre>`;
}

function url(label: string, url: string): string {
	return `<a href="${url}">${label}</a>`;
}

function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`);
}

/** https://core.telegram.org/bots/api#html-style */
export const html: Formatter = {
	parse_mode: 'HTML',
	escape,
	bold,
	italic,
	strikethrough,
	underline,
	spoiler,
	monospace,
	monospaceBlock,
	url,
	userMention,
};
