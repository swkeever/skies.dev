const YAML = require('yaml');

function generateFrontmatter(data) {
  let writeData = '---\n';
  writeData += YAML.stringify(data);
  writeData += '---\n\n';
  return writeData;
}

function getDateFormat(dateObject) {
  // adjust 0 before single digit date
  const date = `0${dateObject.getDate()}`.slice(-2);

  // current month
  const month = `0${dateObject.getMonth() + 1}`.slice(-2);

  // current year
  const year = dateObject.getFullYear();

  return `${year}-${month}-${date}`;
}

module.exports = {
  generateFrontmatter,
  getDateFormat,
};
