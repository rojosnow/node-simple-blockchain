const Blockchain = require('../blockchain')
const Block = require('../block')

const chai = require('chai')
const expect = chai.expect
chai.use(require('chai-match'))


describe('Blockchain', () => {
  it('should create a blockchain with a genesis block', () => {
    let blockchain = new Blockchain(new Block())
    expect(blockchain.blocks.length).to.equal(1)
  })

  it('should add a block to the blockchain', () => {
    let blockchain = new Blockchain(new Block())
    blockchain.addBlock(new Block())
    expect(blockchain.blocks.length).to.equal(2)
  })

  it('should return a SHA 256 hash', () => {
    let blockchain = new Blockchain(new Block())
    const hash = blockchain.generateHash(new Block())
    expect(hash).to.match(/([A-Fa-f0-9]{64})/).and.capture(0).to.be.a('string').to.have.lengthOf(64)
  })
})
