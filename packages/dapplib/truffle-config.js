require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind attitude inflict enter outer genuine'; 
let testAccounts = [
"0xf23dcaf0f8c22a0c6b9f632097b2705333890e61e4390d3d9239c9cb7833cb80",
"0x7415ef345c7f3dbe01e9429adf7563d19d70eba3b70152b68176135aab1f9fda",
"0x807cf621795c8f7ea66f2c888e3c5616a2aaa6ed12ef1f09fb827f3b829fff69",
"0x6c9946f136be99daffcbc06123a939e453c1f1d50ffb394deaa47fc8b700568e",
"0x56fc23f955392e5b64e2afdaeeb32d72ae29a2994c315415b3f9fc62b8ae5c53",
"0x53138e65e62dbf437ee390f5d410bded4a71eb532c2acd89f5fa262c784de635",
"0xd0597b8646560bdc529c59503779b6d27086171fd6b39b526d99f93b08deef64",
"0x32da862f73745e5e8f4ca400a9f35659e214f284e8cbcea6995444e6822a9a89",
"0x499e6cc215477c059c493a62d25d07735b3df9b8e5c9041461c1c8b1173750f5",
"0x979931c5d0b7ccf6c257193c2205349ddc9ac6844635720edc2dd5f4eb4b6668"
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

