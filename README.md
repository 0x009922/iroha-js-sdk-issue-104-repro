# `hyperledger/iroha-javascript#104` repro

TODO wait until new crypto is deployed.

The issue: [`@iroha2/crypto-target-web` doesn't work with Vite out of the box · Issue #104 · hyperledger/iroha-javascript](https://github.com/hyperledger/iroha-javascript/issues/104)

## Steps to reproduce

- Install packages:
  ```shell
  pnpm i
  ```
- Run dev server:
  ```shell
  pnpm dev
  ```
- Open browser at printed URL
  
### Expected result

To see `Sample hash: <long hash>` in browser

### Actual result

Nothing is displayed in browser, except errors in console:

TODO