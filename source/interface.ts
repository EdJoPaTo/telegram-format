export interface Formatter {
	bold: (text: string) => string;
	escape: (text: string) => string;
	italic: (text: string) => string;
	url: (label: string, url: string) => string;
}
