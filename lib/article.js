const fs = require('fs');

async function article(articleName) {
  if (typeof articleName === 'undefined') {
    console.error('Please specify the article name');
  } else {
    const metadata = {
      author: '',
      avatar_url: '',
      link_preview_url: '',
      title: '',
      subtitle: '',
      published: '',
      updated: '',
      seo_canonical: '',
      seo_description: '',
      seo_title: ''
    };

    fs.writeFileSync(
      `./${articleName}.md`,
      '---' + '\n' + metadata, null, 2 + '\n' + '---'
    );
  }
}

module.exports = (...args) => {
  return article(...args).catch(err => {
    console.log(err)
  })
}