# Spacebar API Types

[![GitHub](https://img.shields.io/github/license/spacebarchat/spacebar-api-types)](https://github.com/spacebarchat/spacebar-api-types/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@spacebarchat/spacebar-api-types?color=crimson&logo=npm)](https://www.npmjs.com/package/@spacebarchat/spacebar-api-types)

> **Warning**
>
> Not all types in this package may be implemented or even correct with Spacebar.

Simple type definitions for the Spacebar API.
This package is a modified version of [Discord API Types](https://github.com/discordjs/discord-api-types) to provide specific types for Spacebar. It should only be used for Spacebar instances.

Some notable changes include:

- Versions 6, 9 and 10 of the API and Gateway have been removed, this is because Spacebar is only focused with version 9 right now.
- Deno removed

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install @spacebarchat/spacebar-api-types
yarn add @spacebarchat/spacebar-api-types
pnpm add @spacebarchat/spacebar-api-types
```

### Usage

You can only import this module by specifying the API version you want to target. Append `/v*` to the import path, where the `*` represents the API version. Below are some examples

```js
const { APIUser } = require('@spacebarchat/spacebar-api-types/v9');
```

```ts
// TypeScript/ES Module support
import { APIUser } from '@spacebarchat/spacebar-api-types/v9';
```

You may also import just certain parts of the module that you need. The possible values are: `globals`, `gateway`, `gateway/v*`, `payloads`, `payloads/v*`, `rest`, `rest/v*`, `rpc`, `rpc/v*`, `utils`, `utils/v*`, `voice`, and `voice/v*`. Below are some examples

```js
const { GatewayVersion } = require('@spacebarchat/spacebar-api-types/gateway/v9');
```

```ts
// TypeScript/ES Module support
import { GatewayVersion } from '@spacebarchat/spacebar-api-types/gateway/v9';
```

> _**Note:** The `v*` exports (`@spacebarchat/spacebar-api-types/v*`) include the appropriate version of `gateway`, `payloads`, `rest`, `rpc`, and `utils` you specified, alongside the `globals` exports_

## Project Structure

The exports of each API version is split into three main parts:

- Everything exported with the `API` prefix represents a payload you may get from the REST API _or_ the Gateway.

- Everything exported with the `Gateway` prefix represents data that ONLY comes from or is directly related to the Gateway.

- Everything exported with the `REST` prefix represents data that ONLY comes from or is directly related to the REST API.

  - For endpoint options, they will follow the following structure: `REST<HTTP Method><Type><Query|(JSON|FormData)Body|Result>` where the type represents what it will return.

    - For example, `RESTPostAPIChannelMessageJSONBody` or `RESTGetAPIGatewayBotInfoResult`.

    - Some exported types (specifically OAuth2 related ones) may not respect this entire structure due to the nature of the fields. They will start with either `RESTOAuth2` or with something similar to `REST<HTTP Method>OAuth2`

  - If a type ends with `Result`, then it represents the expected result by calling its accompanying route.

    - Types that are exported as `never` usually mean the result will be a `204 No Content`, so you can safely ignore it. This does **not** account for errors.

- Anything else that is miscellaneous will be exported based on what it represents (for example the `REST` route object).

- There may be types exported that are identical for all versions. These will be exported as is and can be found in the `globals` file. They will still be prefixed accordingly as described above.
