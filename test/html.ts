import test from 'ava'

import {html as format} from '../source/index.js'

test('bold', t => {
	t.is(format.bold('bold'), '<b>bold</b>')
})

test('italic', t => {
	t.is(format.italic('italic'), '<i>italic</i>')
})

test('strikethrough', t => {
	t.is(format.strikethrough('strikethrough'), '<s>strikethrough</s>')
})

test('underline', t => {
	t.is(format.underline('underline'), '<u>underline</u>')
})

test('spoiler', t => {
	t.is(format.spoiler('spoiler'), '<span class="tg-spoiler">spoiler</span>')
})

test('url', t => {
	t.is(
		format.url('me', 'https://edjopato.de'),
		'<a href="https://edjopato.de">me</a>',
	)
})

test('escape', t => {
	t.is(format.escape('h<e>y'), 'h&lt;e&gt;y')
})

test('bold italic', t => {
	t.is(format.bold(format.italic('green')), '<b><i>green</i></b>')
})

test('user mention', t => {
	t.is(
		format.userMention('inline mention of a user', 123_456_789),
		'<a href="tg://user?id=123456789">inline mention of a user</a>',
	)
})

test('monospace', t => {
	t.is(
		format.monospace('inline fixed-width code'),
		'<code>inline fixed-width code</code>',
	)
})

test('monospaceBlock w/o language', t => {
	t.is(
		format.monospaceBlock('pre-formatted fixed-width code block'),
		'<pre>pre-formatted fixed-width code block</pre>',
	)
})

test('monospaceBlock w/ language', t => {
	t.is(
		format.monospaceBlock(
			'pre-formatted fixed-width code block written in the Python programming language',
			'python',
		),
		'<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>',
	)
})
