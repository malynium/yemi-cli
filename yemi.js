const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const os = require('os');
const packageJson = require('./package.json');

let articleName;

function init() {
  console.log('executing init...');
  const program = new Command();
  program
    .version(packageJson.version)
    .arguments('<article-name>')
    .action(name => {
      articleName = name;
    })
    .parse(process.argv);

  if (typeof articleName === 'undefined') {
    console.error('Please specify the article name');
  } else {
    const metadata = {
      author: '',
      avatar_url: '',
      link_preview: '',
      published: '',
      seo_canonical: '',
      seo_description: '',
      seo_title: '',
      subtitle: '',
      title: ''
    };

    fs.writeFileSync(
      `./${articleName}.md`,
      '---' + '\n' + JSON.stringify(metadata, null, 2) + '\n' + '---'
    );
  }
}

module.exports = {
  init
}