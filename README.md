# Welcome

## Install

```bash
npm i nonce-ts
```

or

```bash
yarn add nonce-ts
```

## Usage

```javascript
const Nonce = require('nonce-ts');
const nonce = Nonce(9); # define the length of the string

nonce(); # '802354675'
nonce(); # '296876554'
nonce(); # '269567223'
```
