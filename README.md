# Akismet.js
[![Version](http://img.shields.io/npm/v/akismet-js.svg?style=flat)](https://www.npmjs.org/package/akismet-js) [![Dependencies](http://img.shields.io/david/cedx/akismet.js.svg?style=flat)](https://david-dm.org/cedx/akismet.js) [![Downloads](http://img.shields.io/npm/dm/akismet-js.svg?style=flat)](https://www.npmjs.org/package/akismet-js) [![License](http://img.shields.io/npm/l/akismet-js.svg?style=flat)](https://github.com/cedx/akismet.js/blob/master/LICENSE.txt)

Prevent comment spam using [Akismet](https://akismet.com) service, in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## Features
- [Key Verification](https://akismet.com/development/api/#verify-key): checks an Akismet API key and gets a value indicating whether it is valid.
- [Comment Check](https://akismet.com/development/api/#comment-check): checks a comment and gets a value indicating whether it is spam.
- [Submit Spam](https://akismet.com/development/api/#submit-spam): submits a comment that was not marked as spam but should have been.
- [Submit Ham](https://akismet.com/development/api/#submit-ham): submits a comment that was incorrectly marked as spam but should not have been.

## Documentation
- [API Reference](http://dev.belin.io/akismet.js/api)

## Installing via [npm](https://www.npmjs.org)

#### 1. Depend on it
Add this to your project's `package.json` file:

```json
{
  "dependencies": {
    "akismet-js": "*"
  }
}
```

#### 2. Install it
From the command line, run:

```shell
$ npm install
```

#### 3. Import it
Now in your JavaScript code, you can use:

```javascript
var akismet = require('akismet-js');
```

## Usage

#### Key Verification

```javascript
var client = new akismet.Client('YourAPIKey', 'http://your.blog.url');
client.verifyKey(function(error, isValid) {
  console.log(isValid ? 'Your API key is valid.' : 'Your API key is invalid.');
});
```

#### Comment Check

```javascript
var comment = new akismet.Comment({
  author: new akismet.Author({ name: 'An author', ipAddress: '127.0.0.1' }),
  content: 'A comment.'
});

client.checkComment(comment, function(error, isSpam) {
  console.log(isSpam ? 'The comment is marked as spam.' : 'The comment is marked as ham.');
});
```

#### Submit Spam/Ham

```javascript
client.submitSpam(comment, function(error) {
  console.log('Spam submitted.');
});

client.submitHam(comment, function(error) {
  console.log('Ham submitted.');
});
```

## Implementations

#### Client
The Akismet client comes in two flavors: a first one based on [`http.request`](http://nodejs.org/api/http.html#http_http_request_options_callback)
for server/console applications, and a second one based on [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
for client/browser applications.

Their usage is the same, but the HTML client is limited by security restrictions in a browser context.
Unfortunately, the [Akismet](https://akismet.com) service does not support [CORS](http://www.w3.org/TR/cors) headers.
So, the HTML client can't be used directly with the official service.

#### Server
To be able to use the HTML client, we must rely on a proxy server adding [CORS](http://www.w3.org/TR/cors) headers to service responses.

This is why a [server implementation](https://github.com/cedx/akismet.js/blob/master/lib/server.js) is provided with this package.
To facilitate its usage, a [command line interface](https://github.com/cedx/akismet.js/blob/master/bin/cli.js) is available in the `bin` folder.

From a command prompt, run the `cli.js` script (aliased as `akismet` by [npm](https://www.npmjs.org)):

```
$ node bin/cli.js --help

  Usage: akismet [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -p, --port <port>     port that the server should run on [3000]
    -h, --host <host>     host that the server should run on [0.0.0.0]
    -r, --redirect <url>  the URL to redirect when a request is unhandled
    --silent              silence the log output from the server
```

## Unit Tests
To test the server/console implementation, run the `bin/make.js` script from a command prompt:

```
$ node bin/make.js test --help

  Usage: make test [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -k, --key <apiKey>  the Akismet API key
    -b, --blog <url>    the front page or home URL [http://dev.belin.io/akismet.js]
```

To test the client/browser implementation, launch a server instance, and points your browser to this link:
[Unit Tests of HTML Client](http://dev.belin.io/akismet.js)

## Bower

Install via [`bower`](http://bower.io):

    bower install akismet

The source file to use is `var/aksimet.js`. If you can't run your own CORS proxy server as noted above,
you can use [`http://akismet-cors.herokuapp.com`](http://akismet-cors.herokuapp.com)

```javascript
var client = new akismet.Client('YourAPIKey', 'http://your.blog.url', {
  serviceUrl: 'http://akismet-cors.herokuapp.com'
});
```

## License
[Akismet.js](https://www.npmjs.org/package/akismet-js) is distributed under the MIT License.
