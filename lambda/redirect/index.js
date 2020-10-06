/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const path = require('path');

function shouldAddTrailingSlash(uri) {
  const extension = path.extname(uri);

  if (extension) return false;

  return !uri.endsWith('/');
}

exports.handler = async (event) => {
  const { request } = event.Records[0].cf;
  const { uri } = request;
  const host = request.headers.host[0].value;
  const { querystring } = request;

  if (!host.startsWith('www.') || shouldAddTrailingSlash(uri)) {
    let newUrl = 'https://www.skies.dev';

    // Add path
    if (uri) newUrl += uri;

    // Add trailing slash
    if (!newUrl.endsWith('/')) newUrl += '/';

    // Add query string
    if (querystring && querystring !== '') newUrl += `?${querystring}`;

    return {
      status: '301',
      statusDescription: 'Moved Permanently',
      headers: {
        location: [
          {
            key: 'Location',
            value: newUrl,
          },
        ],
      },
    };
  }

  return request;
};
