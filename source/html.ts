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

function url(label: string, url: string): string {
	return `<a href="${url}">${escape(label)}</a>`
}

export const html: Formatter = {
	parse_mode: 'HTML',
	escape,
	bold,
	italic,
	url
}
