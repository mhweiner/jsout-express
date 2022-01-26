# jsout-express

[![build status](https://github.com/mhweiner/jsout-express/actions/workflows/workflow.yml/badge.svg)](https://github.com/mhweiner/jsout-express/actions)
[![semantic-release](https://img.shields.io/badge/semantic--release-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![SemVer](https://img.shields.io/badge/SemVer-2.0.0-blue)]()

Simple express request logger middleware for [jsout](https://github.com/mhweiner/jsout).

## Installation

```bash
npm i jsout jsout-express -D
```
 
## Usage

Include it like you would any other middleware, but it must be last, after your error handler. If you don't do it last, then requests that fail (4xx, 5xx, etc.) won't get logged, and the duration would not be accurate.

```typescript
import {logger} from 'jsout';
import {logRequest} from 'jsout-express';
import {express} from 'express';

const app = express();

// middleware, routers, etc

// must be last
app.use(logRequest);

// app.listen

```

## Log example

Human Readable:

```
Level: INFO
Message: REQ
{ 
    method: 'GET', 
    url: '/', 
    status: 200, 
    durationMs: 0.040166 
}
{
  date: '2021-12-20T02:19:52.063Z',
  pid: 2058,
  ppid: 2057,
  nodeVersion: 'v16.13.0'
}
```

JSON:

```json
{
  "level":30,
  "message":"REQ",
  "data":{
    "method":"GET",
    "url":"/",
    "status":200,
    "durationMs":0.02625
  },
  "context":{
    "date":"2021-12-20T04:52:03.622Z",
    "pid":10728,
    "ppid":10725,
    "nodeVersion":"v16.13.0"
  }
}
```

## Contribution

Please contribute to this project! Issue a PR against `master` and request review. 

- Please test your work thoroughly.
- Make sure all tests pass with appropriate coverage.

### How to build locally

```bash
npm i
```

### Running tests

```shell script
npm test
```
