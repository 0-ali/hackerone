
# Hackerone - A HackerOne API client for Node.js 

[![npm package](https://nodei.co/npm/hackerone.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hackerone/)

[![Build status](https://img.shields.io/travis/xc0d3rz/hackerone/master.svg?style=flat-square)](https://travis-ci.org/xc0d3rz/hackerone)
[![Coverage](https://img.shields.io/codecov/c/github/xc0d3rz/hackerone.svg?style=flat-square)](https://codecov.io/github/xc0d3rz/hackerone?branch=master)
[![Dependency Status](https://img.shields.io/david/xc0d3rz/hackerone.svg?style=flat-square)](https://david-dm.org/xc0d3rz/hackerone)
[![Donate](https://img.shields.io/badge/Donate-BTC-green.svg?style=flat-square)](https://blockchain.info/address/1535duT5aPHeetRED4jov6ejHEymvH29jj)

## Usage

### Initializing the Client


```javascript
var hackerone = require('hackerone');
var Hackerone = new hackerone('YOUR-API-TOKEN-IDENTIFIER', 'YOUR-API-TOKEN');
```

## Reports

### [Read a report](https://api.hackerone.com/docs/v1#/reports/read)

```javascript
Hackerone.reports.read('REPORT-ID', function (err, res) {
   ...
});
```

### [Query reports](https://api.hackerone.com/docs/v1#/reports/query)

```javascript
Hackerone.reports.query({
    program: '...',
    reporter: '...'

}, function (err, res) {
   ...
});
```

### Reports ► Comments

#### [Post a public comment](https://api.hackerone.com/docs/v1#/reports/comments/create)

```javascript
Hackerone.reports.comments.create('REPORT-ID', {
    message: 'The message that will be posted'
    internal: boolean
}, function (err, res) {
    ...
});
```

#### [Lock a report](https://api.hackerone.com/docs/v1#/reports/close_comments)

```javascript
Hackerone.reports.comments.close('REPORT-ID',{}, function (err, res) {
   ...
});
```

### Reports ► Assignee

#### [Assign a user](https://api.hackerone.com/docs/v1#/reports/assignee/update)

```javascript
Hackerone.reports.assignee.update('REPORT-ID', {
    id: 'The ID of the user or group',
    type: 'Specifies whether a user or group should be assigned, or if the assignee should be cleared',
    message: 'The message that will be posted to the assigned user or group'
}, function (err, res) {
   ...
```
For more example see `test/*.js`
## Todo

- Documentation :x:
