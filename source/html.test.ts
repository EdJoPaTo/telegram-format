import { strictEqual } from "node:assert";
import { test } from "node:test";
import * as format from "./html.ts";
import type { Formatter } from "./types.ts";

format satisfies Formatter;

test("bold", () => {
	strictEqual(format.bold("bold"), "<b>bold</b>");
});

test("italic", () => {
	strictEqual(format.italic("italic"), "<i>italic</i>");
});

test("strikethrough", () => {
	strictEqual(format.strikethrough("strikethrough"), "<s>strikethrough</s>");
});

test("underline", () => {
	strictEqual(format.underline("underline"), "<u>underline</u>");
});

test("blockquote", () => {
	strictEqual(
		format.blockquote("blockquote"),
		"<blockquote>blockquote</blockquote>",
	);
});

test("blockquote multiline", () => {
	strictEqual(
		format.blockquote("blockquote\nmultiline"),
		"<blockquote>blockquote\nmultiline</blockquote>",
	);
});

test("spoiler", () => {
	strictEqual(
		format.spoiler("spoiler"),
		'<span class="tg-spoiler">spoiler</span>',
	);
});

test("tgEmoji", () => {
	strictEqual(
		format.tgEmoji("👍", "5368324170671202286"),
		'<tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>',
	);
});

test("url", () => {
	strictEqual(
		format.url("me", "https://edjopato.de"),
		'<a href="https://edjopato.de">me</a>',
	);
});

test("escape", () => {
	strictEqual(format.escape("h<e>y"), "h&lt;e&gt;y");
});

test("bold italic", () => {
	strictEqual(format.bold(format.italic("green")), "<b><i>green</i></b>");
});

test("user mention", () => {
	strictEqual(
		format.userMention("inline mention of a user", 123_456_789),
		'<a href="tg://user?id=123456789">inline mention of a user</a>',
	);
});

test("monospace", () => {
	strictEqual(
		format.monospace("inline fixed-width code"),
		"<code>inline fixed-width code</code>",
	);
});

test("monospaceBlock w/o language", () => {
	strictEqual(
		format.monospaceBlock("pre-formatted fixed-width code block"),
		"<pre>pre-formatted fixed-width code block</pre>",
	);
});

test("monospaceBlock w/ language", () => {
	strictEqual(
		format.monospaceBlock(
			"pre-formatted fixed-width code block written in the Python programming language",
			"python",
		),
		'<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>',
	);
});
