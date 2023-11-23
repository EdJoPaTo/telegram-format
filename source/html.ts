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

/** Format the input text as spoiler */
export function spoiler(text: string): string {
	return `<span class="tg-spoiler">${text}</span>`;
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
