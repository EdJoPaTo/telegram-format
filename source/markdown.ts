import type {Formatter} from './types.js';

function escape(text: string): string {
	return text.replace(/[*_`[\]()]/g, '');
}

function bold(text: string): string {
	return `*${text.replace(/\*/g, '')}*`;
}

function italic(text: string): string {
	return `_${text.replace(/_/g, '')}_`;
}

function strikethrough(_text: string): string {
	throw new Error('strikethrough is not supported by Markdown. Use MarkdownV2 instead.');
}

function underline(_text: string): string {
	throw new Error('underline is not supported by Markdown. Use MarkdownV2 instead.');
}

function spoiler(_text: string): string {
	throw new Error('spoiler is not supported by Markdown. Use MarkdownV2 instead.');
}

function monospace(text: string): string {
	return '`' + text.replace(/`/g, '') + '`';
}

function monospaceBlock(text: string, programmingLanguage?: string): string {
	let result = '';
	result += '```';

	if (programmingLanguage) {
		result += programmingLanguage;
	}

	result += '\n';
	result += text.replace(/```/g, '');
	result += '\n';
	result += '```';
	return result;
}

function url(label: string, url: string): string {
	return `[${label.replace(/]/, '')}](${url.replace(/\)/, '')})`;
}

function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`);
}

/** https://core.telegram.org/bots/api#markdown-style */
export const markdown = {
	parse_mode: 'Markdown',
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
} as const satisfies Formatter;
