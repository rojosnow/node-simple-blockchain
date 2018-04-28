const Block = require('../block')

const expect = require('chai').expect

// For the getter, expect a string to be returned
describe('Block', () => {
  it('should create the block properties', () => {
    let block = new Block()
    expect(block).to.be.an('object')
    expect(block).to.have.all.keys('index', 'previousHash', 'hash', 'nonce', 'transactions');
    expect(block).to.have.ownProperty('index');
    expect(block).to.have.ownProperty('previousHash');
    expect(block).to.have.ownProperty('hash');
    expect(block).to.have.ownProperty('nonce');
    expect(block).to.have.ownProperty('transactions');
  })
  
  it('should be a string with empty constructor values', () => {
    let block = new Block()
    expect(block.key).to.be.a('string')
  })
  
  it('should be a string with constructor values', () => {
    const constructorObject = {
      index: 343,
      previousHash: '896efcca1e1534958b86ac93b3074c465d889d31',
      hash: '99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
      nonce: 2323452,
      transactions: [
        {
          id: 1,
          to: 'Bob',
          from: 'Mary'
        },
        {
          id: 2,
          to: 'Sue',
          from: 'Bill'
        }
      ]
    }
    let block = new Block(constructorObject)
    expect(block.key).to.be.a('string')
  })

  it('should add transactions to the list', () => {
    let block = new Block()
    const initialLength = block.transactions.length
    block.addTransaction('')
    block.addTransaction(null)
    block.addTransaction(undefined)
    block.addTransaction({})
    block.addTransaction([])
    block.addTransaction(0)
    const finalLength = block.transactions.length
    expect(finalLength).to.equal(6)
  })
})