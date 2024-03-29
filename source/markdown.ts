/** https://core.telegram.org/bots/api#markdown-style */
export const parse_mode = "Markdown";

/** Escape the input text to be displayed as it is */
export function escape(text: string): string {
	return text.replace(/[*_`[\]()]/g, "");
}

/** Format the input text bold */
export function bold(text: string): string {
	return `*${text.replace(/\*/g, "")}*`;
}

/** Format the input text italic */
export function italic(text: string): string {
	return `_${text.replace(/_/g, "")}_`;
}

/** unsupported by Telegram. Use MarkdownV2 or HTML instead @deprecated */
export function strikethrough(_text: string): string {
	throw new Error(
		"strikethrough is not supported by Markdown. Use MarkdownV2 instead.",
	);
}

/** unsupported by Telegram. Use MarkdownV2 or HTML instead @deprecated */
export function underline(_text: string): string {
	throw new Error(
		"underline is not supported by Markdown. Use MarkdownV2 instead.",
	);
}

/** unsupported by Telegram. Use MarkdownV2 or HTML instead @deprecated */
export function blockquote(_text: string): string {
	throw new Error(
		"blockquote is not supported by Markdown. Use MarkdownV2 instead.",
	);
}

/** unsupported by Telegram. Use MarkdownV2 or HTML instead @deprecated */
export function spoiler(_text: string): string {
	throw new Error(
		"spoiler is not supported by Markdown. Use MarkdownV2 instead.",
	);
}

/** unsupported by Telegram. Use MarkdownV2 or HTML instead @deprecated */
export function tgEmoji(_fallback: string, _emojiId: string): string {
	throw new Error(
		"tgEmoji is not supported by Markdown. Use MarkdownV2 instead.",
	);
}

/** Format the input text as monospace */
export function monospace(text: string): string {
	return "`" + text.replace(/`/g, "") + "`";
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
	result += text.replace(/```/g, "");
	result += "\n";
	result += "```";
	return result;
}

/** Create an url with a label text */
export function url(label: string, url: string): string {
	return `[${label.replace(/]/, "")}](${url.replace(/\)/, "")})`;
}

/** Create a user mention with a label text */
export function userMention(label: string, userId: number): string {
	return url(label, `tg://user?id=${userId}`);
}
