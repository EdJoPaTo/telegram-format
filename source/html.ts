/** https://core.telegram.org/bots/api#html-style */
export const parse_mode = "HTML";

/** Escape the input text to be displayed as it is */
export function escape(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

/** Format the input text bold */
export function bold(text: string): string {
	return `<b>${text}</b>`;
}

/** Format the input text italic */
export function italic(text: string): string {
	return `<i>${text}</i>`;
}

/** Strikethrough the input text */
export function strikethrough(text: string): string {
	return `<s>${text}</s>`;
}

/** Underline the input text */
export function underline(text: string): string {
	return `<u>${text}</u>`;
}

/** Format the input text as blockquote */
export function blockquote(text: string): string {
	return `<blockquote>${text}</blockquote>`;
}

/** Format the input text as spoiler */
export function spoiler(text: string): string {
	return `<span class="tg-spoiler">${text}</span>`;
}

/** Create a custom Telegram Emoji.
 *
 * A valid emoji must be used as the fallback. The emoji will be shown instead of the custom emoji in places where a custom emoji cannot be displayed (e.g., system notifications) or if the message is forwarded by a non-premium user. It is recommended to use the emoji from the emoji field of the custom emoji sticker.
 * Custom emoji entities can only be used by bots that purchased additional usernames on Fragment.
 */
export function tgEmoji(fallback: string, emojiId: string): string {
	return `<tg-emoji emoji-id="${emojiId}">${fallback}</tg-emoji>`;
}

/** Format the input text as monospace */
export function monospace(text: string): string {
	return `<code>${escape(text)}</code>`;
}

/** Format the input text as a monospace block optionally with a programming language */
export function monospaceBlock(
	text: string,
	programmingLanguage?: string,
): string {
	if (programmingLanguage) {
		return `<pre><code class="language-${programmingLanguage}">${
			escape(text)
		}</code></pre>`;
	}

	return `<pre>${escape(text)}</pre>`;
}

/** Create an url with a label text */
export function url(label: string, url: string): string {
	return `<a href="${url}">${label}</a>`;
}

/** Create a user mention with a label text */
export function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`);
}
