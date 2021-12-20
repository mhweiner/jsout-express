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
 
## Example Usage

```typescript
import {logger} from 'jsout';
import {expressRequestLogger} from 'jsout-express';
import {express} from 'express';

const app = express();

app.use(expressRequestLogger);

```

## Log example

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
