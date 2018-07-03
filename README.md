# secure-iota-seed-generator
Securely generates IOTA seeds. Utilizes official secure random apis. Has no external dependencies.

Works in code and the command line.

## Code Usage

```javascript
const seedGenerator = require('secure-iota-seed-generator')
const seed = seedGenerator.generateSeed()
```

## Command Line Usage

```bash
> npm i -g secure-iota-seed-generator
> secure-iota-seed-generator
SOMESUPERSECURESEED99999999999999999999999999999999999999999999999999999999999999
```