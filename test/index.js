const { expect } = require('chai');
const { templateTags } = require('../src');

const totp = (secret, uri) => templateTags[0].run(undefined, secret, uri);

describe('insomnia-plugin-totp', () => {
  it('Should fail for missing secret and URI', (done) => {
    expect(() => totp()).to.throw();

    done();
  });

  it('Should correctly generate totp from secret', (done) => {
    const secret = 'MHEEZLDFFMM';
    const code = totp(secret);

    expect(code).to.be.a('string');
    expect(code).to.have.lengthOf(6);

    done();
  });

  it('Should fail for invalid URI protocol', (done) => {
    const uri = '2fauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP';

    expect(() => totp(null, uri)).to.throw();
    done();
  });

  it('Should fail for invalid type', (done) => {
    const uri = 'otpauth://hotp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP';

    expect(() => totp(null, uri)).to.throw();
    done();
  });

  it('Should fail for invalid missing secret in URI', (done) => {
    const uri = 'otpauth://totp/Example:alice@google.com?issuer=Example&period=30';

    expect(() => totp(null, uri)).to.throw();
    done();
  });

  it('Should correctly generate totp from URI', (done) => {
    const uri = 'otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example&period=30';
    const code = totp(null, uri);

    expect(code).to.be.a('string');
    expect(code).to.have.lengthOf(6);

    done();
  });
});
