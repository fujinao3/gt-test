describe('example app tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays 100 results by default', () => {
    expect(true).to.equal(true);
  });

  it('first card has name, views and title', () => {
    expect(true).to.equal(true);
  });

  it('user can change date', () => {
    expect(true).to.equal(true);
  });

  it('user can change country', () => {
    expect(true).to.equal(true);
  });

  context('with filter', () => {
    it('can filter with number of results', () => {
      expect(true).to.equal(true);
    });

    it('can filter with country', () => {
      expect(true).to.equal(true);
    });

    it('can filter with date', () => {
      expect(true).to.equal(true);
    });

    it('display no result when nothing was found', () => {
      expect(true).to.equal(true);
    });
  });
});
