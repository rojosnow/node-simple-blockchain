const expect = require('chai').expect

const Transaction = require('../transaction')

describe('Transaction', () => {
  it('should have class properties', () => {
    let transaction = new Transaction()
    expect(transaction).to.haveOwnProperty('from')
    expect(transaction).to.haveOwnProperty('to')
    expect(transaction).to.haveOwnProperty('amount')
    expect(transaction).to.have.all.keys('from', 'to', 'amount');    
  })
})
