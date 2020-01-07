import test from 'ava'

import {html as format} from '../source'

test('bold', t => {
	t.is(format.bold('bold'), '<b>bold</b>')
})

test('italic', t => {
	t.is(format.italic('italic'), '<i>italic</i>')
})

test('url', t => {
	t.is(format.url('me', 'https://edjopato.de'), '<a href="https://edjopato.de">me</a>')
})

test('escape', t => {
	t.is(format.escape('h<e>y'), 'h&lt;e&gt;y')
})

test('bold malicious', t => {
	t.is(format.bold('bo<ld'), '<b>bo&lt;ld</b>')
})

test('user mention', t => {
	t.is(format.userMention('inline mention of a user', 123456789), '<a href="tg://user?id=123456789">inline mention of a user</a>')
})

test('monospace', t => {
	t.is(format.monospace('inline fixed-width code'), '<code>inline fixed-width code</code>')
})

test('monospaceBlock w/o language', t => {
	t.is(format.monospaceBlock('pre-formatted fixed-width code block'), '<pre>pre-formatted fixed-width code block</pre>')
})

test('monospaceBlock w/ language', t => {
	t.is(format.monospaceBlock('pre-formatted fixed-width code block written in the Python programming language', 'python'), '<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>')
})
