import test from 'ava'

import {markdown as format} from '../source/index.js'

test('bold', t => {
	t.is(format.bold('bold'), '*bold*')
})

test('italic', t => {
	t.is(format.italic('italic'), '_italic_')
})

test('url', t => {
	t.is(format.url('me', 'https://edjopato.de'), '[me](https://edjopato.de)')
})

test('escape', t => {
	t.is(format.escape('[h_]e(*y)`'), 'hey')
})

test('bold malicious', t => {
	t.is(format.bold('bo*ld'), '*bold*')
})

test('italic malicious', t => {
	t.is(format.italic('ita_lic'), '_italic_')
})

test('user mention', t => {
	t.is(
		format.userMention('inline mention of a user', 123_456_789),
		'[inline mention of a user](tg://user?id=123456789)',
	)
})

test('monospace', t => {
	t.is(
		format.monospace('inline fixed-width code'),
		'`inline fixed-width code`',
	)
})

test('monospaceBlock w/o language', t => {
	t.is(
		format.monospaceBlock('pre-formatted fixed-width code block'),
		'```\npre-formatted fixed-width code block\n```',
	)
})

test('monospaceBlock w/ language', t => {
	t.is(
		format.monospaceBlock(
			'pre-formatted fixed-width code block written in the Python programming language',
			'python',
		),
		'```python\npre-formatted fixed-width code block written in the Python programming language\n```',
	)
})

test('strikethrough', t => {
	t.throws(() => format.strikethrough('1337'), {
		message: 'strikethrough is not supported by Markdown. Use MarkdownV2 instead.',
	})
})

test('underline', t => {
	t.throws(() => format.underline('1337'), {
		message: 'underline is not supported by Markdown. Use MarkdownV2 instead.',
	})
})

test('spoiler', t => {
	t.throws(() => format.spoiler('1337'), {
		message: 'spoiler is not supported by Markdown. Use MarkdownV2 instead.',
	})
})
