export interface Formatter {
	parse_mode: string;
	bold: (text: string) => string;
	escape: (text: string) => string;
	italic: (text: string) => string;
	url: (label: string, url: string) => string;
	userMention: (label: string, userId: number) => string;
}
