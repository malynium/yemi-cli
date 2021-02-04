const fs = require('fs');
const path = require('path');

async function article(articleName) {
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

module.exports = (...args) => {
  return article(...args).catch(err => {
    console.log(err)
  })
}