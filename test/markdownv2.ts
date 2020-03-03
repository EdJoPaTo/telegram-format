import test from 'ava'

import {markdownv2 as format} from '../source'

test('bold', t => {
	t.is(format.bold('bold'), '*bold*')
})

test('italic', t => {
	t.is(format.italic('italic'), '_italic_')
})

test('strikethrough', t => {
	t.is(format.strikethrough('strikethrough'), '~strikethrough~')
})

test('underline', t => {
	t.is(format.underline('underline'), '__underline__')
})

test('url', t => {
	t.is(format.url('me', 'https://edjopato.de'), '[me](https://edjopato.de)')
})

test('escape', t => {
	t.is(format.escape('[h_]e(*y)`'), '\\[h\\_\\]e\\(\\*y\\)\\`')
})

test('bold malicious', t => {
	t.is(format.bold('bo*ld'), '*bo\\*ld*')
})

test('italic malicious', t => {
	t.is(format.italic('ita_lic'), '_ita\\_lic_')
})

test('user mention', t => {
	t.is(format.userMention('inline mention of a user', 123456789), '[inline mention of a user](tg://user?id=123456789)')
})

test('monospace', t => {
	t.is(format.monospace('inline fixed-width code'), '`inline fixed-width code`')
})

test('monospaceBlock w/o language', t => {
	t.is(format.monospaceBlock('pre-formatted fixed-width code block'), '```\npre-formatted fixed-width code block\n```')
})

test('monospaceBlock w/ language', t => {
	t.is(format.monospaceBlock('pre-formatted fixed-width code block written in the Python programming language', 'python'), '```python\npre-formatted fixed-width code block written in the Python programming language\n```')
})
