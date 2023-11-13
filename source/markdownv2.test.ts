import { assertEquals } from "https://deno.land/std@0.206.0/assert/mod.ts";
import { markdownv2 as format } from "./markdownv2.ts";

Deno.test("bold", () => {
	assertEquals(format.bold("bold"), "*bold*");
});

Deno.test("italic", () => {
	assertEquals(format.italic("italic"), "_italic_");
});

Deno.test("strikethrough", () => {
	assertEquals(format.strikethrough("strikethrough"), "~strikethrough~");
});

Deno.test("underline", () => {
	assertEquals(format.underline("underline"), "__underline__");
});

Deno.test("spoiler", () => {
	assertEquals(format.spoiler("spoiler"), "||spoiler||");
});

Deno.test("url", () => {
	assertEquals(
		format.url("me", "https://edjopato.de"),
		"[me](https://edjopato.de)",
	);
});

Deno.test("escape", () => {
	assertEquals(format.escape("[h_]e(*y\\)`"), "\\[h\\_\\]e\\(\\*y\\\\\\)\\`");
});

Deno.test("escape with number", () => {
	assertEquals(format.escape("h1e2y"), "h1e2y");
});

Deno.test("bold italic", () => {
	assertEquals(format.bold(format.italic("green")), "*_green_*");
});

Deno.test("user mention", () => {
	assertEquals(
		format.userMention("inline mention of a user", 123_456_789),
		"[inline mention of a user](tg://user?id=123456789)",
	);
});

Deno.test("monospace", () => {
	assertEquals(
		format.monospace("inline fixed-width code"),
		"`inline fixed-width code`",
	);
});

Deno.test("monospaceBlock w/o language", () => {
	assertEquals(
		format.monospaceBlock("pre-formatted fixed-width code block"),
		"```\npre-formatted fixed-width code block\n```",
	);
});

Deno.test("monospaceBlock w/ language", () => {
	assertEquals(
		format.monospaceBlock(
			"pre-formatted fixed-width code block written in the Python programming language",
			"python",
		),
		"```python\npre-formatted fixed-width code block written in the Python programming language\n```",
	);
});
