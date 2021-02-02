# telegram-format

[![NPM Version](https://img.shields.io/npm/v/telegram-format.svg)](https://www.npmjs.com/package/telegram-format)
[![node](https://img.shields.io/node/v/telegram-format.svg)](https://www.npmjs.com/package/telegram-format)
[![Dependency Status](https://david-dm.org/EdJoPaTo/telegram-format/status.svg)](https://david-dm.org/EdJoPaTo/telegram-format)
[![Dev Dependency Status](https://david-dm.org/EdJoPaTo/telegram-format/dev-status.svg)](https://david-dm.org/EdJoPaTo/telegram-format?type=dev)

> Format Telegram message texts with Markdown or HTML

This library abstracts the [formatting options](https://core.telegram.org/bots/api#formatting-options) for you.

## Install

```
$ npm install telegram-format
```


## Usage

```js
const {html: format} = require('telegram-format');
const {markdownv2: format} = require('telegram-format');
import {html as format} from 'telegram-format';
import {markdownv2 as format} from 'telegram-format';

format.bold('hey');
//=> '*hey*'

format.italic('you');
//=> '_you_'

format.bold(format.italic('they'))
//=> '*_they_*'

format.url('me', 'https://edjopato.de');
//=> '[me](https://edjopato.de)'

// Legacy but still works
const {markdown: format} = require('telegram-format');
import {markdown as format} from 'telegram-format';
```

When using `format` as an alias its easy to switch between Markdown and HTML fast.

### Escaping Input

When you have something that might be unescaped you need to use `format.escape` before formatting it.

```js
const username = 'master_yoda'
format.italic(format.escape(username))
```

`format.monospace` and `format.monospaceBlock` will escape on their own as they only need to escape specific characters.
You do not need to escape the input in this cases.

`MarkdownV2` and `HTML` are fairly similar in escaping inputs but `Markdown` is not.
`Markdown` is still supported by this library and by Telegram for legacy reasons but it behaves a bit differently.
`Markdown` still escapes inputs and does not need `format.escape` before.
Also nested formatting is not supported by telegram itself.
Consider switching to `MarkdownV2` or `HTML` for simplicity reasons.

## API

### bold(text)

#### text

Type: `string`

Text to be formatted bold

### italic(text)

#### text

Type: `string`

Text to be formatted italic

### strikethrough(text)

#### text

Type: `string`

Text to be striked through

### underline(text)

#### text

Type: `string`

Text to be underlined

### monospace(text)

#### text

Type: `string`

Text to be displayed as inline monospace

### monospaceBlock(text, [programmingLanguage])

#### text

Type: `string`

Text to be displayed as monospace block

#### programmingLanguage

Type: `string` (optional)

Can be used to specify the programming language of the code

### url(label, url)

#### label

Type: `string`

Label of the url field

#### url

Type: `string`

Url which is called when the user taps on the label

### userMention(label, userId)

#### label

Type: `string`

Label of the user mention. Might be used with the first name for example.

#### userID

Type: `number`

User id to which is linked

### escape(text)

#### text

Type: `string`

Text which should be escaped so it does not interfer with formatting.

User generated Text should always be escapted to prevent errors.
