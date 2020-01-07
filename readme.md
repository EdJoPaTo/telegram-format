# telegram-format

[![NPM Version](https://img.shields.io/npm/v/telegram-format.svg)](https://www.npmjs.com/package/telegram-format)
[![node](https://img.shields.io/node/v/telegram-format.svg)](https://www.npmjs.com/package/telegram-format)
[![Build Status](https://travis-ci.com/EdJoPaTo/telegram-format.svg?branch=master)](https://travis-ci.com/EdJoPaTo/telegram-format)
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
const {markdown: format} = require('telegram-format');
const {html: format} = require('telegram-format');
import {markdown as format} from 'telegram-format';
import {html as format} from 'telegram-format';

format.bold('hey');
//=> '*hey*'

format.italic('you');
//=> '_you_'

format.url('me', 'https://edjopato.de');
//=> '[me](https://edjopato.de)'
```

When using format as an alias its easy to switch between Markdown and HTML fast

## API

### bold(text)

#### text

Type: `string`

Text to be formatted bold

### italic(text)

#### text

Type: `string`

Text to be formatted italic

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
