import test from 'ava'

import {markdown as format} from '../source'

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
	t.is(format.userMention('inline mention of a user', 123456789), '[inline mention of a user](tg://user?id=123456789)')
})
