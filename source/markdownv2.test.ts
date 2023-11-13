import test from 'ava';
import {markdownv2 as format} from './markdownv2.js';

test('bold', t => {
	t.is(format.bold('bold'), '*bold*');
});

test('italic', t => {
	t.is(format.italic('italic'), '_italic_');
});

test('strikethrough', t => {
	t.is(format.strikethrough('strikethrough'), '~strikethrough~');
});

test('underline', t => {
	t.is(format.underline('underline'), '__underline__');
});

test('spoiler', t => {
	t.is(format.spoiler('spoiler'), '||spoiler||');
});

test('url', t => {
	t.is(format.url('me', 'https://edjopato.de'), '[me](https://edjopato.de)');
});

test('escape', t => {
	t.is(format.escape('[h_]e(*y\\)`'), '\\[h\\_\\]e\\(\\*y\\\\\\)\\`');
});

test('escape with number', t => {
	t.is(format.escape('h1e2y'), 'h1e2y');
});

test('bold italic', t => {
	t.is(format.bold(format.italic('green')), '*_green_*');
});

test('user mention', t => {
	t.is(
		format.userMention('inline mention of a user', 123_456_789),
		'[inline mention of a user](tg://user?id=123456789)',
	);
});

test('monospace', t => {
	t.is(
		format.monospace('inline fixed-width code'),
		'`inline fixed-width code`',
	);
});

test('monospaceBlock w/o language', t => {
	t.is(
		format.monospaceBlock('pre-formatted fixed-width code block'),
		'```\npre-formatted fixed-width code block\n```',
	);
});

test('monospaceBlock w/ language', t => {
	t.is(
		format.monospaceBlock(
			'pre-formatted fixed-width code block written in the Python programming language',
			'python',
		),
		'```python\npre-formatted fixed-width code block written in the Python programming language\n```',
	);
});
