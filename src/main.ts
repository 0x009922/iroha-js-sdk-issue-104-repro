import { init, crypto } from '@iroha2/crypto-target-web'

// This works:

import wasmURL from '@iroha2/crypto-target-web/wasm-pkg/iroha_crypto_bg.wasm?url'
await init(wasmURL)

// This not:
// await init()

const sample = crypto.Hash.hash('hex', 'deadbeef').bytes('hex')
document.getElementById('app')!.innerHTML = `Sample hash: ${sample}`