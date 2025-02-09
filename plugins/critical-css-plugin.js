const criticalcss = require('criticalcss')
const fs = require('fs')
const path = require('path')

class CriticalCSSPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('CriticalCSSPlugin', (compilation, callback) => {
      const cssFiles = Object.keys(compilation.assets).filter(file => file.endsWith('.css'))
      
      cssFiles.forEach(cssFile => {
        const cssContent = compilation.assets[cssFile].source()
        const outputPath = path.join(compiler.outputPath, cssFile)
        
        criticalcss.getRules({
          css: cssContent,
          width: 1300,
          height: 900,
          buffer: 800*1024,
          ignoreConsole: true,
          enabledTypes: ['screen']
        }, (err, output) => {
          if (err) {
            console.error('Error extracting critical CSS:', err)
            return
          }

          // Write critical CSS to a separate file
          const criticalCSSPath = path.join(compiler.outputPath, 'critical.css')
          fs.writeFileSync(criticalCSSPath, output.css)

          // Update the original CSS file to load asynchronously
          const asyncCSS = `
            /* Original CSS file - loaded asynchronously */
            ${cssContent}
          `
          fs.writeFileSync(outputPath, asyncCSS)
        })
      })

      callback()
    })
  }
}

module.exports = CriticalCSSPlugin 