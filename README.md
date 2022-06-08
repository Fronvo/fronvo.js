<p align='center'><img src='https://raw.githubusercontent.com/Fronvo/server/master/.github/assets/logo.png' alt='Fronvo logo'></p>
<p align='center'><b>The official JS/TS API of Fronvo</b></p>

```
npm i @fronvo/api
```

<h2 align='center'>

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-science.svg)](https://forthebadge.com)
![npm](https://img.shields.io/npm/v/@fronvo/api?color=%23ee00ff&label=API&style=for-the-badge)

<img src='https://raw.githubusercontent.com/Fronvo/fronvo.js/master/.github/assets/demo-run.svg' alt='Fronvo JS/TS API demo run'>

</h2>

# Examples

Login with a bot token:

```ts
import { Fronvo } from '@fronvo/api';

const bot = new Fronvo({
    token: 'token',
});
```

Register an event:

```ts
bot.event('ready', () => {
    console.log(`${bot.info.username} is ready!`);
});
```

### Get started

**[Documentation](https://github.com/Fronvo/fronvo.js/blob/master/.github/markdown/DOCUMENTATION.md)**

**[Tools used](https://github.com/Fronvo/fronvo.js/blob/master/.github/markdown/TOOLS.md)**
