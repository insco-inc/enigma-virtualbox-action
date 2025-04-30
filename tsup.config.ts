import { defineConfig, type Options } from 'tsup'
// @ts-ignore
import * as pkgInfo from './package.json'

const banner = `
/** 
 * ${pkgInfo.version}
 *  
 * Copyright (c) 2025 kjxbyz. All rights reserved.
 */
`

const options: Options = {
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  dts: true,
  format: ['cjs'],
  banner: {
    js: banner
  }
}

export default defineConfig([
  {
    ...options,
    entry: ['src/index.ts'],
    dts: false,
    noExternal: ['@insco/enigma-virtualbox'],
    sourcemap: true
  }
])
