/** All exported formatters satisfy this interface */
export interface Formatter {
	/** parse_mode which can be used on sendMessage */
	parse_mode: "HTML" | "Markdown" | "MarkdownV2";
	/** Format the input text as blockquote */
	blockquote: (text: string) => string;
	/** Format the input text bold */
	bold: (text: string) => string;
	/** Escape the input text to be displayed as it is */
	escape: (text: string) => string;
	/** Format the input text italic */
	italic: (text: string) => string;
	/** Format the input text as monospace */
	monospace: (text: string) => string;
	/** Format the input text as a monospace block optionally with a programming language */
	monospaceBlock: (text: string, programmingLanguage?: string) => string;
	/** Format the input text as spoiler */
	spoiler: (text: string) => string;
	/** Strikethrough the input text */
	strikethrough: (text: string) => string;
	/** Create a custom Telegram Emoji */
	tgEmoji: (fallback: string, emojiId: string) => string;
	/** Underline the input text */
	underline: (text: string) => string;
	/** Create an url with a label text */
	url: (label: string, url: string) => string;
	/** Create a user mention with a label text */
	userMention: (label: string, userId: number) => string;
}
