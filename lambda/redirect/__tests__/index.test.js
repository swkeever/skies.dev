const { handler } = require('../index');

const callback = (ignored, response) => response;

test('test', async () => {
  await handler(
    {
      Records: [
        {
          cf: {
            request: {
              uri: '/about',
              querystring: 'auth=test&foo=bar',
              headers: {
                host: [
                  {
                    key: 'Host',
                    value: 'www.skies.dev',
                  },
                ],
              },
            },
          },
        },
      ],
    },
    null,
    callback,
  );
  expect(true).toBe(true);
});
