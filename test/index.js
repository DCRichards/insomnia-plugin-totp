const { expect } = require('chai');
const { templateTags } = require('../src');

const totp = secret => templateTags[0].run(undefined, secret);

describe('insomnia-plugin-totp', () => {
  it('Should fail for missing secret', (done) => {
    expect(() => totp()).to.throw();

    done();
  });

  it('Should correctly generate totp', (done) => {
    const secret = 'MHEEZLDFFMM';
    const code = totp(secret);

    expect(code).to.be.a('string');
    expect(code).to.have.lengthOf(6);

    done();
  });
});
