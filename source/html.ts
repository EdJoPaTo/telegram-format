// https://core.telegram.org/bots/api#html-style

import {Formatter} from './interface'

function escape(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
}

function bold(text: string): string {
	return `<b>${escape(text)}</b>`
}

function italic(text: string): string {
	return `<i>${escape(text)}</i>`
}

function monospace(text: string): string {
	return `<code>${text}</code>`
}

function monospaceBlock(text: string, programmingLanguage?: string): string {
	if (programmingLanguage) {
		return `<pre><code class="language-${programmingLanguage}">${text}</code></pre>`
	}

	return `<pre>${text}</pre>`
}

function url(label: string, url: string): string {
	return `<a href="${url}">${escape(label)}</a>`
}

function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`)
}

export const html: Formatter = {
	parse_mode: 'HTML',
	escape,
	bold,
	italic,
	monospace,
	monospaceBlock,
	url,
	userMention
}
