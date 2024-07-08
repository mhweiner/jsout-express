# jsout-express

[![build status](https://github.com/mhweiner/jsout-express/actions/workflows/release.yml/badge.svg)](https://github.com/mhweiner/jsout-express/actions)
[![SemVer](https://img.shields.io/badge/SemVer-2.0.0-blue)]()
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Simple express request logger middleware for [jsout](https://github.com/mhweiner/jsout).

## Log example

```json
{
  "level": 6,
  "message": "req",
  "data": {
    "method": "GET",
    "url": "/",
    "hostname": "localhost",
    "ip": "::ffff:127.0.0.1",
    "statusCode": 200,
    "statusMessage": "OK",
    "durationMs": 3.2342
  }
}
```

## Installation

```bash
npm i jsout jsout-express
```
 
## Usage

Include it like you would any other middleware, but it should be first (or towards the top) to be accurate. At the very least, it must be before any other handler that might send a response.

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

# Support, Feedback, and Contributions

- Star this repo if you like it!
- Submit an [issue](https://github.com/mhweiner/jsout-express/issues) with your problem, feature request or bug report
- Issue a PR against `main` and request review. Make sure all tests pass and coverage is good.
- Write about `jsout` and `jsout-express` in your blog, tweet about it, or share it with your friends!

Together we can make software more reliable and easier to maintain!

# Sponsors

<picture>
    <source srcset="docs/aeroview-logo-lockup.svg" media="(prefers-color-scheme: dark)">
    <source srcset="docs/aeroview-logo-lockup-dark.svg" media="(prefers-color-scheme: light)">
    <img src="docs/aeroview-logo-lockup-dark.svg" alt="Logo" style="max-width: 150px;margin: 0 0 10px">
</picture>

Aeroview is a developer-friendly, AI-powered observability platform that helps you monitor, troubleshoot, and optimize your applications. Get started for free at [https://aeroview.io](https://aeroview.io).