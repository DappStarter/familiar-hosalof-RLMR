require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember assume inflict arena bridge snake'; 
let testAccounts = [
"0x4b8e4b9e0b856ffdfb02f4c46ba57ed16b35c8a59bc6bb1207f6a1975cd1e243",
"0x104937f4923d19fd38e2ad94df4852c074d3836acfdde10c48a92ae858b30afc",
"0x34fb79a4bc0bc57af07b7f63027db4a7c6260ae35a7e5ee987c5f120c061cfa3",
"0x0767d95ce198f1c6ef33e140993132eff5f475eb3f97a6ef99920d03e56b24ef",
"0x0c37942c43cff41aa5117bece8435999fd6aa7e54e6909ea3e5c90d7e62e8ff4",
"0x412546271f4ec46aff7c3c5be9b9252d8fc38680857869f8aeafb2b0a04c03ab",
"0xe6a8ee9452b67ad9d3322cc5d5a3a750949e3874b045032ef7cbb8720527de12",
"0x77fc4e49a9d3bcf5773d1eea6f60542c4f3eb26b0c3a687b3cf4b465677c2713",
"0x8ccb6d001c2917c0c962dd1f5b553b6ca9d9d4d934b32c7069ddb38eb420d62a",
"0xcfbf9027785d5a74d1b158badacf8afc641666df3fa53de700ec430c03195edc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

