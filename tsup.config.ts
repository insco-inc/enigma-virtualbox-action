import { defineConfig, type Options } from 'tsup'
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
    noExternal: ['@actions/core', '@insco/enigma-virtualbox'],
    sourcemap: true
  }
])
