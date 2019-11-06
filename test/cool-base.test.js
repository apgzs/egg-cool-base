'use strict';

const mock = require('egg-mock');

describe('test/cool-base.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/cool-base-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, coolBase')
      .expect(200);
  });
});
