// https://core.telegram.org/bots/api#markdown-style

import {Formatter} from './interface'

function escape(text: string): string {
	return text.replace(/[*_`[\]()]/g, '')
}

function bold(text: string): string {
	return `*${text.replace(/\*/, '')}*`
}

function italic(text: string): string {
	return `_${text.replace(/_/, '')}_`
}

function url(label: string, url: string): string {
	return `[${label.replace(/\]/, '')}](${url.replace(/\)/, '')})`
}

function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`)
}

export const markdown: Formatter = {
	parse_mode: 'Markdown',
	escape,
	bold,
	italic,
	url,
	userMention
}
