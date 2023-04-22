import { assertEquals, assertThrows } from "./test_deps.ts";
import { markdown as format } from "../source/mod.ts";

Deno.test("bold", () => {
  assertEquals(format.bold("bold"), "*bold*");
});

Deno.test("italic", () => {
  assertEquals(format.italic("italic"), "_italic_");
});

Deno.test("url", () => {
  assertEquals(
    format.url("me", "https://edjopato.de"),
    "[me](https://edjopato.de)",
  );
});

Deno.test("escape", () => {
  assertEquals(format.escape("[h_]e(*y)`"), "hey");
});

Deno.test("bold malicious", () => {
  assertEquals(format.bold("bo*ld"), "*bold*");
});

Deno.test("italic malicious", () => {
  assertEquals(format.italic("ita_lic"), "_italic_");
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

Deno.test("strikethrough", () => {
  assertThrows(() => format.strikethrough("1337"));
});

Deno.test("underline", () => {
  assertThrows(() => format.underline("1337"));
});

Deno.test("spoiler", () => {
  assertThrows(() => format.spoiler("1337"));
});
