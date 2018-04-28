let Block = require('./block')
let Blockchain = require('./blockchain')
let Transaction = require('./transaction')

let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

console.log(blockchain)
