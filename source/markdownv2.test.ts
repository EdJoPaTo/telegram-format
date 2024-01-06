import { strictEqual } from "node:assert";
import { test } from "node:test";
import * as format from "./markdownv2.ts";
import { Formatter } from "./types.ts";

format satisfies Formatter;

test("bold", () => {
	strictEqual(format.bold("bold"), "*bold*");
});

test("italic", () => {
	strictEqual(format.italic("italic"), "_italic_");
});

test("strikethrough", () => {
	strictEqual(format.strikethrough("strikethrough"), "~strikethrough~");
});

test("underline", () => {
	strictEqual(format.underline("underline"), "__underline__");
});

test("blockquote", () => {
	strictEqual(format.blockquote("blockquote"), ">blockquote");
});

test("blockquote multiline", () => {
	strictEqual(
		format.blockquote("blockquote\nmultiline"),
		">blockquote\n>multiline",
	);
});

test("spoiler", () => {
	strictEqual(format.spoiler("spoiler"), "||spoiler||");
});

test("tgEmoji", () => {
	strictEqual(
		format.tgEmoji("👍", "5368324170671202286"),
		"![👍](tg://emoji?id=5368324170671202286)",
	);
});

test("url", () => {
	strictEqual(
		format.url("me", "https://edjopato.de"),
		"[me](https://edjopato.de)",
	);
});

test("escape", () => {
	strictEqual(format.escape("[h_]e(*y\\)`"), "\\[h\\_\\]e\\(\\*y\\\\\\)\\`");
});

test("escape with number", () => {
	strictEqual(format.escape("h1e2y"), "h1e2y");
});

test("bold italic", () => {
	strictEqual(format.bold(format.italic("green")), "*_green_*");
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
