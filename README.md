# Akismet.js
Prevent comment spam using [Akismet](https://akismet.com) service, in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
	
## Features
* [Key verification](https://akismet.com/development/api/#verify-key): checks an Akismet API key and gets a value indicating whether it is valid.
* [Comment check](https://akismet.com/development/api/#comment-check): checks a comment and gets a value indicating whether it is spam.
* [Submit spam](https://akismet.com/development/api/#submit-spam): submits a comment that was not marked as spam but should have been.
* [Submit ham](https://akismet.com/development/api/#submit-ham): submits a comment that was incorrectly marked as spam but should not have been.

## Documentation
* [API Reference](http://akismet.belin.io/api)

## Installing via [npm](https://npmjs.org)

### 1. Depend on it
Add this to your application's `package.json` file:
```json
{
  "dependencies": {
    "akismet-js": "~0.1.0"
  }
}
```

### 2. Install it
From the command line, run:
```shell
$ npm install
```
	
### 3. Import it
Now in your JavaScript code, you can use:
```javascript
var akismet = require('akismet-js');
```

## Usage

### Key Verification
```javascript
var client = new akismet.Client({ apiKey: '123YourAPIKey', blog: 'http://your.blog.url' });

client.verifyKey(function(err, isValid) {
  console.log(isValid ? 'Your API key is valid.' : 'Your API key is invalid.')
});
```
	
### Comment Check
```javascript
var author = new akismet.Author({ name: 'An author' });
var comment = new akismet.Comment({ content: 'A comment.', author: author });

client.checkComment(function(err, isSpam) {
  console.log(isSpam ? 'The comment is marked as spam.' : 'The comment is marked as ham.')
});
```
	
### Submit Spam/Ham
```javascript
client.submitSpam(comment, function(err) {
  console.log('Spam submitted.');
});

client.submitHam(comment, function(err) {
  console.log('Ham submitted.');
});
```

## License
[Akismet.js](https://npmjs.org/package/akismet-js) is distributed under the MIT License.
