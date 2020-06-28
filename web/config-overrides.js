const path = require('path')
const {
  override,
  addWebpackAlias,
  enableEslintTypescript,
  useEslintRc,
} = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    src: path.join(__dirname, './src'),
    components: path.join(__dirname, './src/components'),
    pages: path.join(__dirname, 'src/pages'),
    images: path.join(__dirname, 'src/images'),
    assert: path.join(__dirname, 'src/assets'),
    redux: path.join(__dirname, 'src/redux'),
  }),
  enableEslintTypescript(),
  useEslintRc()
)
