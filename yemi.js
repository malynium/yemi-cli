const { Command } = require('commander');
const packageJson = require('./package.json');

function init() {
  const program = new Command();
  program
    .version(packageJson.version)
    .usage('<command>')

  program
    .command('article <article-name>')
    .action(name => {
      require('./lib/article')(name)
    })

  program.parse(process.argv)
}

module.exports = {
  init
}