const ADDRESSES = require('../helper/coreAssets.json')
module.exports = {
    tron: {
        tvl: async (_, _b, _cb, { api, }) => {
            const supply = await api.call({ abi: "erc20:totalSupply", target: "TThzxNRLrW2Brp9DcTQU8i4Wd9udCWEdZ3" })
            return {
                [ADDRESSES.ethereum.USDT]: supply/1e12
            }
        }
    }
}
