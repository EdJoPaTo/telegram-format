import { assertEquals } from "./test_deps.ts";
import { html as format } from "../source/mod.ts";

Deno.test("bold", () => {
  assertEquals(format.bold("bold"), "<b>bold</b>");
});

Deno.test("italic", () => {
  assertEquals(format.italic("italic"), "<i>italic</i>");
});

Deno.test("strikethrough", () => {
  assertEquals(format.strikethrough("strikethrough"), "<s>strikethrough</s>");
});

Deno.test("underline", () => {
  assertEquals(format.underline("underline"), "<u>underline</u>");
});

Deno.test("spoiler", () => {
  assertEquals(
    format.spoiler("spoiler"),
    '<span class="tg-spoiler">spoiler</span>',
  );
});

Deno.test("url", () => {
  assertEquals(
    format.url("me", "https://edjopato.de"),
    '<a href="https://edjopato.de">me</a>',
  );
});

Deno.test("escape", () => {
  assertEquals(format.escape("h<e>y"), "h&lt;e&gt;y");
});

Deno.test("bold italic", () => {
  assertEquals(format.bold(format.italic("green")), "<b><i>green</i></b>");
});

Deno.test("user mention", () => {
  assertEquals(
    format.userMention("inline mention of a user", 123_456_789),
    '<a href="tg://user?id=123456789">inline mention of a user</a>',
  );
});

Deno.test("monospace", () => {
  assertEquals(
    format.monospace("inline fixed-width code"),
    "<code>inline fixed-width code</code>",
  );
});

Deno.test("monospaceBlock w/o language", () => {
  assertEquals(
    format.monospaceBlock("pre-formatted fixed-width code block"),
    "<pre>pre-formatted fixed-width code block</pre>",
  );
});

Deno.test("monospaceBlock w/ language", () => {
  assertEquals(
    format.monospaceBlock(
      "pre-formatted fixed-width code block written in the Python programming language",
      "python",
    ),
    '<pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>',
  );
});
