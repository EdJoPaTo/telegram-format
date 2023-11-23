/** https://core.telegram.org/bots/api#markdownv2-style */
export const parse_mode = "MarkdownV2";

function escapeInternal(text: string, escapeChars: string): string {
	return text.replace(new RegExp(`[${escapeChars}\\\\]`, "g"), "\\$&");
}

/** Escape the input text to be displayed as it is */
export function escape(text: string): string {
	return text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, "\\$&");
}

/** Format the input text bold */
export function bold(text: string): string {
	return `*${text}*`;
}

/** Format the input text italic */
export function italic(text: string): string {
	return `_${text}_`;
}

/** Strikethrough the input text */
export function strikethrough(text: string): string {
	return `~${text}~`;
}

/** Underline the input text */
export function underline(text: string): string {
	return `__${text}__`;
}

/** Format the input text as spoiler */
export function spoiler(text: string): string {
	return `||${text}||`;
}

/** Format the input text as monospace */
export function monospace(text: string): string {
	return "`" + escapeInternal(text, "`") + "`";
}

/** Format the input text as a monospace block optionally with a programming language */
export function monospaceBlock(
	text: string,
	programmingLanguage?: string,
): string {
	let result = "";
	result += "```";

	if (programmingLanguage) {
		result += programmingLanguage;
	}

	result += "\n";
	result += escapeInternal(text, "`");
	result += "\n";
	result += "```";
	return result;
}

/** Create an url with a label text */
export function url(label: string, url: string): string {
	return `[${label}](${escapeInternal(url, ")")})`;
}

/** Create a user mention with a label text */
export function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`);
}
