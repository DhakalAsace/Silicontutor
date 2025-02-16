/* eslint-disable @typescript-eslint/no-require-imports */
const criticalcss = require('criticalcss')
const fs = require('fs')
const path = require('path')

class CriticalCSSPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('CriticalCSSPlugin', (compilation, callback) => {
      const cssFiles = Object.keys(compilation.assets).filter((file) => file.endsWith('.css'))

      cssFiles.forEach((cssFile) => {
        const cssContent = compilation.assets[cssFile].source()
        const outputPath = path.join(compiler.outputPath, cssFile)

        criticalcss.getRules(
          {
            css: cssContent,
            width: 1300,
            height: 900,
            buffer: 800 * 1024,
            ignoreConsole: true,
            enabledTypes: ['screen'],
          },
          (err, rules) => {
            if (err) {
              console.error('Error generating critical CSS:', err)
              return
            }

            fs.writeFileSync(outputPath, rules)
          }
        )
      })

      callback()
    })
  }
}

module.exports = CriticalCSSPlugin
