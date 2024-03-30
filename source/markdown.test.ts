import { strictEqual, throws } from "node:assert";
import { test } from "node:test";
import * as format from "./markdown.ts";
import type { Formatter } from "./types.ts";

format satisfies Formatter;

test("bold", () => {
	strictEqual(format.bold("bold"), "*bold*");
});

test("italic", () => {
	strictEqual(format.italic("italic"), "_italic_");
});

test("url", () => {
	strictEqual(
		format.url("me", "https://edjopato.de"),
		"[me](https://edjopato.de)",
	);
});

test("escape", () => {
	strictEqual(format.escape("[h_]e(*y)`"), "hey");
});

test("bold malicious", () => {
	strictEqual(format.bold("bo*ld"), "*bold*");
});

test("italic malicious", () => {
	strictEqual(format.italic("ita_lic"), "_italic_");
});

test("user mention", () => {
	strictEqual(
		format.userMention("inline mention of a user", 123_456_789),
		"[inline mention of a user](tg://user?id=123456789)",
	);
});

test("monospace", () => {
	strictEqual(
		format.monospace("inline fixed-width code"),
		"`inline fixed-width code`",
	);
});

test("monospaceBlock w/o language", () => {
	strictEqual(
		format.monospaceBlock("pre-formatted fixed-width code block"),
		"```\npre-formatted fixed-width code block\n```",
	);
});

test("monospaceBlock w/ language", () => {
	strictEqual(
		format.monospaceBlock(
			"pre-formatted fixed-width code block written in the Python programming language",
			"python",
		),
		"```python\npre-formatted fixed-width code block written in the Python programming language\n```",
	);
});

test("strikethrough", () => {
	throws(() => format.strikethrough("1337"));
});

test("underline", () => {
	throws(() => format.underline("1337"));
});

test("blockquote", () => {
	throws(() => format.blockquote("1337"));
});

test("spoiler", () => {
	throws(() => format.spoiler("1337"));
});

test("tgEmoji", () => {
	throws(() => format.tgEmoji("👍", "5368324170671202286"));
});
