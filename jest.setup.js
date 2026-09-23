// Exercise 11.6 : the following codes are replaced
// for removing 'Lint' warning
// ------------------------------------------------
// const { TextEncoder, TextDecoder } = require('util')
// global.TextEncoder = TextEncoder
// global.TextDecoder = TextDecoder

import { TextEncoder, TextDecoder } from 'util'

globalThis.TextEncoder = TextEncoder
globalThis.TextDecoder = TextDecoder
