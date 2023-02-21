# jsout-express

[![build status](https://github.com/mhweiner/jsout-express/actions/workflows/workflow.yml/badge.svg)](https://github.com/mhweiner/jsout-express/actions)
[![semantic-release](https://img.shields.io/badge/semantic--release-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![SemVer](https://img.shields.io/badge/SemVer-2.0.0-blue)]()

Simple express request logger middleware for [jsout](https://github.com/mhweiner/jsout).

## Log example

```json
{
  "level": 30,
  "message": "req",
  "data": {
    "method": "GET",
    "url": "/",
    "hostname": "localhost",
    "ip": "::ffff:127.0.0.1",
    "statusCode": 200,
    "statusMessage": "OK",
    "durationMs": 3.2342
  },
  "context": {
    "date": "2022-12-20T04:52:03.622Z",
    "pid": 10728,
    "ppid": 10725,
    "nodeVersion": "v16.13.0"
  }
}
```

## Installation

```bash
npm i jsout jsout-express
```
 
## Usage

Include it like you would any other middleware, but it should be first (or towards the top to be accurate). At the very least, it must be before any other handler that might send a response.

```typescript
import {express} from 'express';
import {logger} from 'jsout';
import {logRequest} from 'jsout-express';

const app = express();

// should be first, before other middlewares
app.use(logRequest);

// ... other things ...

app.listen();

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
