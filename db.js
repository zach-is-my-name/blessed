const db = [
  "   Week in Ethereum News September 17, 2022 – Week in Ethereum News                                    ",
  "",
  "# \u001b]8;;https://weekinethereumnews.com/,\u0007Week in Ethereum News\u001b]8;;\u0007",
  "",
  "● \u001b]8;;http://weekinethereum.substack.com,\u0007Subscribe\u001b]8;;\u0007",
  "",
  "  ",
  "",
  "  ",
  "  ",
  "",
  "## \u001b]8;;https://weekinethereumnews.com/week-in-ethereum-news-september-17-2022/,\u0007Week in Ethereum News  ",
  "September 17, 2022\u001b]8;;\u0007",
  "",
  "###### **Eth News and Links**",
  "",
  "**PoW switch off (the Merge)**",
  "",
  "● \u001b]8;;https://twitter.com/VitalikButerin/status/1570306185391378434,\u0007Ethereum now secured by Proof of Stake\u001b]8;;\u0007, Proof of Work is obsolete",
  "● \u001b]8;;https://twitter.com/natemaddrey/status/1570856077788585984,\u000712 second blocks\u001b]8;;\u0007 post-merge",
  "● Recap of \u001b]8;;https://twitter.com/icebearhww/status/1570085906073391104,\u0007ethresear.ch posts to get to the Merge\u001b]8;;\u0007 and the \u001b]8;;https://twitter.com/______jpg______/status/1568973769313501185,\u0007panda meme\u001b]8;;\u0007 back story",
  "",
  "**Execution layer**",
  "",
  "● Latest core devs \u001b]8;;https://www.youtube.com/watch?v=DdUt77_eWyc&t=492s,\u0007call video\u001b]8;;\u0007. Notes from \u001b]8;;https://twitter.com/timbeiko/status/1570403039672168448,\u0007Tim Beiko\u001b]8;;\u0007 and \u001b]8;;https://www.galaxy.com/research/insights/ethereum-all-core-developers-call-147/,\u0007Christine Kim\u001b]8;;\u0007:",
  "",
  "● Merge went extremely smoothly, 1% drop in participation, minor post-merge issues for Besu & Erigon",
  "● Shanghai planning will be async until next call on October 27",
  "● Fork ID will be updated as part of Shanghai upgrade",
  "● Geth \u001b]8;;https://github.com/ethereum/go-ethereum/releases/tag/v1.10.25,\u0007v1.10.25\u001b]8;;\u0007: disables legacy initial sync",
  "● Nethermind \u001b]8;;https://github.com/NethermindEth/nethermind/releases/tag/1.14.2,\u0007v1.14.2\u001b]8;;\u0007: fix for receipt not available for block 15537393 error in logs",
  "● KZG ceremony \u001b]8;;https://www.youtube.com/watch?v=GUhlpYOZ8Lo,\u0007call video\u001b]8;;\u0007",
  "",
  "**Proof of Stake consensus layer**",
  "",
  "● Somer’s \u001b]8;;https://someresat.medium.com/guide-to-staking-on-ethereum-ubuntu-lodestar-193a2553a161,\u0007Lodestar staking guide\u001b]8;;\u0007",
  "● Teku \u001b]8;;https://github.com/ConsenSys/teku/releases/tag/22.9.1-RC1,\u0007v22.9.1-RC1\u001b]8;;\u0007: improvements for post-merge performance issues, less tested so only upgrade if you are able to rollback",
  "● \u001b]8;;https://boost.flashbots.net/,\u0007MEV-Boost\u001b]8;;\u0007 is live, relays available from:",
  "",
  "● \u001b]8;;https://boost-relay.flashbots.net/,\u0007Flashbots\u001b]8;;\u0007",
  "● \u001b]8;;https://bloxroutelabs.medium.com/mev-relays-for-ethereum-2-0-980016c72563,\u0007bloXroute\u001b]8;;\u0007, unfiltered, no front running & US OFAC compliant variants",
  "● \u001b]8;;https://docs.blocknative.com/mev-relay-instructions-for-ethereum-validators,\u0007Blocknative\u001b]8;;\u0007, Dreamboat relay \u001b]8;;https://github.com/blocknative/dreamboat#readme,\u0007open sourced\u001b]8;;\u0007",
  "● \u001b]8;;https://twitter.com/asn_d6/status/1570100991084593152,\u0007Curdleproofs\u001b]8;;\u0007: (zk shuffling scheme) protocol specification & Rust implementation to facilitate secret leader election and protect against DDoS attacks",
  "",
  "**Layer 2**",
  "",
  "● Optimism \u001b]8;;https://oplabs.notion.site/External-Optimism-Bedrock-Alpha-Testnet-454a37e469af4658b89a9d766334e331,\u0007Bedrock alpha testnet\u001b]8;;\u0007",
  "● Polynya argues \u001b]8;;https://polynya.mirror.xyz/eq4PNsg-ld4V2LDB7HlHuNm-ULFAtvmVH--utaxAAEs,\u0007EIP4488 (calldata gas cost reduction) should be the focus\u001b]8;;\u0007 for scaling",
  "● Dankrad: \u001b]8;;https://notes.ethereum.org/@dankrad/kzg_commitments_in_proofs,\u0007using KZG commitments in proofs\u001b]8;;\u0007",
  "● Justin Thaler: \u001b]8;;https://a16zcrypto.com/snark-security-and-performance/,\u0007SNARK 80 bits of security is too low\u001b]8;;\u0007 and should be at least 100 bits",
  "",
  "**EIPs/Standards**",
  "",
  "● \u001b]8;;https://github.com/ethereum/EIPs/pull/5601/files,\u0007EIP5601\u001b]8;;\u0007: Extendable pattern",
  "● \u001b]8;;https://github.com/ethereum/EIPs/pull/5617/files,\u0007EIP5617\u001b]8;;\u0007: Non-transferable token",
  "● \u001b]8;;https://eips.ethereum.org/EIPS/eip-5630,\u0007EIP5630\u001b]8;;\u0007: New approach for encryption/decryption",
  "● \u001b]8;;https://eips.ethereum.org/EIPS/eip-5633,\u0007EIP5633\u001b]8;;\u0007: Composable soulbound NFT, ERC1155 extension",
  "● \u001b]8;;https://eips.ethereum.org/EIPS/eip-5635,\u0007EIP5635\u001b]8;;\u0007: NFT Licensing Agreements",
  "● \u001b]8;;https://eips.ethereum.org/EIPS/eip-5639,\u0007EIP5639\u001b]8;;\u0007: Delegation Registry",
  "● \u001b]8;;https://eips.ethereum.org/EIPS/eip-5643,\u0007EIP5643\u001b]8;;\u0007: Subscription NFTs",
  "● \u001b]8;;https://eips.ethereum.org/EIPS/eip-5646,\u0007EIP5646\u001b]8;;\u0007: Token state fingerprint",
  "● \u001b]8;;https://github.com/ethereum/EIPs/pull/5656/files,\u0007EIP5656\u001b]8;;\u0007: Memory copying instruction",
  "",
  "* * *",
  "",
  "### **This newsletter is made possible thanks to** \u001b]8;;https://speedrunethereum.com/,\u0007**SpeedRunEthereum**\u001b]8;;\u0007**!**",
  "",
  "![SpeedRunEthereum](https://weekinethereumnews.com/wp-content/uploads/2022/04/Screenshot-from-2022-04-01-15-39-52.png)",
  "",
  "Are you a web2 dev who wants to get into web3?",
  "",
  "The best way to go from _zero_ to **hero** is \u001b]8;;https://speedrunethereum.com/,\u0007SpeedRunEthereum.com\u001b]8;;\u0007.",
  "",
  "Learn how to build on Ethereum; the superpowers and the gotchas.",
  "",
  "Then \u001b]8;;https://speedrunethereum.com/,\u0007speed run Ethereum\u001b]8;;\u0007 by testing your skills in a \u001b]8;;https://speedrunethereum.com/challenge/simple-nft-example,\u0007series of challenges\u001b]8;;\u0007 and \u001b]8;;https://twitter.com/austingriffith/status/1493688828661432325,\u0007join web3\u001b]8;;\u0007.",
  "",
  "* * *",
  "",
  "**Stuff for developers**",
  "",
  "● \u001b]8;;https://twitter.com/OpenZeppelin/status/1570432196753891328,\u0007OpenZeppelin Upgrades Plugins\u001b]8;;\u0007 adds support for storage gaps",
  "● \u001b]8;;https://twitter.com/etherscan/status/1569311894279958531?s=20&t=En2v7nT-gO89J7qyuoG_0w,\u0007Etherscan\u001b]8;;\u0007 deprecating Rinkeby & Ropsten explorers October 5",
  "● \u001b]8;;https://github.com/frangio/hardhat-ignore-warnings#readme,\u0007hardhat-ignore-warnings\u001b]8;;\u0007: plugin to convert warnings to errors & ignore unwanted warnings",
  "● web3.js \u001b]8;;https://github.com/ChainSafe/web3.js/releases/tag/v1.8.0,\u0007v1.8.0\u001b]8;;\u0007: safe & finalized block tags, required for PoS",
  "● \u001b]8;;https://github.com/wagmi-dev/abitype#readme,\u0007ABIType\u001b]8;;\u0007: strict TypeScript types for ABIs & EIP712 typed data",
  "● \u001b]8;;https://github.com/projectsophon/hardhat-vite#readme,\u0007hardhat-vite\u001b]8;;\u0007: plugin wrapping Vite to configure & launch dapps",
  "● \u001b]8;;https://twitter.com/mathcastles/status/1570675435285151744,\u0007p5.js & three.js\u001b]8;;\u0007 deployed on-chain",
  "● \u001b]8;;https://twitter.com/zkmcx/status/1569662080592248835?s=20&t=ttGThSGyii5v8BIJRIzVHg,\u0007frame.tools\u001b]8;;\u0007: publish web-based on-chain art",
  "● xPARC \u001b]8;;https://0xparc.org/blog/batch-ecdsa,\u0007circom-batch-ECDSA\u001b]8;;\u0007: proof of concept on top of circom-ECDSA",
  "● \u001b]8;;https://blog.trailofbits.com/2022/09/15/it-pays-to-be-circomspect/,\u0007Circomspect\u001b]8;;\u0007: static analysis for zk proofs",
  "● \u001b]8;;https://mirror.xyz/0xbeans.eth/usaKkq6OYzrxHPFTXXD8Lp1ABBQY-bzX-PsSVYIfMC8,\u0007I am the chad v1\u001b]8;;\u0007: gas optimizor king of the hill competition",
  "● \u001b]8;;https://github.com/paradigmxyz/paradigm-ctf-2022/,\u0007Paradigm CTF files\u001b]8;;\u0007 released",
  "● Ethernaut \u001b]8;;https://twitter.com/openzeppelin/status/1570791532491579398,\u0007Good Samaritan level\u001b]8;;\u0007 on custom errors",
  "",
  "**Security**",
  "",
  "● \u001b]8;;https://blog.1inch.io/a-vulnerability-disclosed-in-profanity-an-ethereum-vanity-address-tool-68ed7455fc8c,\u0007Profanity vanity address generator\u001b]8;;\u0007 vulnerability, private keys can be recovered, \u001b]8;;https://twitter.com/zachxbt/status/1570927217840132097,\u0007being actively exploited\u001b]8;;\u0007, transfer all assets to a different wallet",
  "● \u001b]8;;https://twitter.com/amxx/status/1570441526857138180,\u0007PoW fork replay attacks possible via EIP712\u001b]8;;\u0007 for contracts that cache the domain separator",
  "● NFTX \u001b]8;;https://blog.nftx.io/postmortem-nftxmarketplace0xzap-vulnerability/,\u0007vulnerability\u001b]8;;\u0007 patched, attacker could transfer NFT from a collection approved by a user",
  "● StarkEx v4.5 \u001b]8;;https://twitter.com/StarkWareLtd/status/1567888940123983874,\u0007double-spend\u001b]8;;\u0007 from a vault in a frozen system vulnerability disclosed",
  "● Compound \u001b]8;;https://www.comp.xyz/t/ceth-price-feed-incident-post-mortem/3578,\u0007cETH price feed\u001b]8;;\u0007 post-mortem",
  "",
  "**Ecosystem**",
  "",
  "● \u001b]8;;https://twitter.com/VitalikButerin/status/1570299062800510976,\u0007Justin Drake\u001b]8;;\u0007: the Merge reduced worldwide electricity consumption by 0.2%, equivalent of \u001b]8;;https://carbon-ratings.com/eth-report-2022,\u0007shrinking the height of the Eiffel tower to a plastic toy\u001b]8;;\u0007",
  "● Superphiz: \u001b]8;;https://www.reddit.com/r/ethstaker/comments/xacc5i/best_practice_for_staking_on_the_ethereum_beacon/,\u0007how to stake\u001b]8;;\u0007",
  "● finematics: \u001b]8;;https://twitter.com/finematics/status/1569756503556476928,\u0007implications of The Merge\u001b]8;;\u0007",
  "",
  "**Enterprise**",
  "",
  "● \u001b]8;;https://medium.com/compound-finance/compound-treasury-launches-borrowing-for-institutions-432af2cd7e6b,\u0007Compound Treasury\u001b]8;;\u0007 adds borrowing USDC for institutions",
  "",
  "**Application layer**",
  "",
  "● Degrees of separation from Vitalik using recursive SNARKs, what’s your \u001b]8;;https://ethdos.xyz/blog,\u0007ETHdos number\u001b]8;;\u0007?",
  "● \u001b]8;;https://twitter.com/opensea/status/1570179078485082113,\u0007OpenRarity\u001b]8;;\u0007: NFT rarity standard",
  "● Jonathan Mann \u001b]8;;https://twitter.com/songadaymann/status/1568741813829369856,\u0007Merge album\u001b]8;;\u0007",
  "● \u001b]8;;https://mirror.xyz/privacy-scaling-explorations.eth/w7zCHj0xoxIfhoJIxI-ZeYIXwvNatP1t4w0TsqSIBe4,\u0007Interep\u001b]8;;\u0007: sybil-resistant reputation onramp API using web2 social history",
  "● \u001b]8;;https://shellprotocol.io/posts/launch/,\u0007Shell v2\u001b]8;;\u0007 AMM live on Arbitrum, guarded launch",
  "● \u001b]8;;https://mirror.xyz/kalico.eth/wi5HevVbRWaUqQURy1dzsPsdVf9_QcwLa9YnGH8kfS8,\u0007Wrappr\u001b]8;;\u0007: create legal entities such as an LLC or non-profit (UNA)",
  "",
  "* * *",
  "",
  "### **Job Listings**",
  "",
  "● EF’s Privacy & Scaling Explorations team: \u001b]8;;https://jobs.lever.co/ethereumfoundation/ece6534a-b946-4996-b7e7-713bd1ec0353?lever-origin=applied&lever-source%5B%5D=Week%20in%20Ethereum,\u0007Web3 Engineer\u001b]8;;\u0007",
  "● Bobhub oracle is seeking \u001b]8;;https://bobhub.gitbook.io/bobhub/,\u0007Technical content writer\u001b]8;;\u0007",
  "● Remix: \u001b]8;;https://jobs.lever.co/ethereumfoundation/2c293808-48ed-4994-b0e0-14a8986e6ff3,\u0007frontend React/Typescript dev\u001b]8;;\u0007",
  "● Ethereum Foundation seek a generalist \u001b]8;;https://jobs.lever.co/ethereumfoundation/6b80a26f-7db3-4415-8339-a3543a967998?lever-origin=applied&lever-source%5B%5D=Week%20in%20Ethereum,\u0007ecosystem developer\u001b]8;;\u0007",
  "",
  "**Job listings: $600** for four issues (75 character limit), payable in ETH/DAI/USDC to abcoathup.eth on mainnet or Layer 2. \u001b]8;;https://3cities.xyz/#/pay?c=H4sIAHqco2IAAyXOMU6EQBSA4atMqVbAgGjJuqzGmI3JrrHcDMODnQAz5L03ERsTLey9gtJop8bGUk-xt5HE4m-__A_vPbreEZRZjQAdWH58ZZeVJQLR7iAYQglFKeNYVipJ0mQR5EWYSpCRnB_F4fEijZPopJqFz5v-Z9xg3_-O1jHsTq8BGmGsyHkLCL4TS7ghce4KcWGIja1F5XDKozBEHkjs3aWJ0FuFSjOgaE1neP-jdbXRqs2IgNdGN4AvV6v5t-qct5zRzNRL3xWAZzCsGCf3LRgiqWV8GASfxKgY6ttLhGq6sBro_otdA_afygfdejLO0tM4qes_d-LI2xABAAA,\u0007Pay with one click\u001b]8;;\u0007 using 3cities.  Questions? abcoathup at-gmail",
  "",
  "* * *",
  "",
  "**Regulation/business/tokens**",
  "",
  "● White House \u001b]8;;https://www.whitehouse.gov/briefing-room/statements-releases/2022/09/16/fact-sheet-white-house-releases-first-ever-comprehensive-framework-for-responsible-development-of-digital-assets/,\u0007framework for development of digital assets\u001b]8;;\u0007",
  "● US \u001b]8;;https://twitter.com/jchervinsky/status/1569756313718259712,\u0007OFAC FAQ on Tornado Cash sanctions\u001b]8;;\u0007, users can apply to withdraw, dusting victims not prioritized for enforcement & publishing code allowed",
  "● \u001b]8;;https://twitter.com/kmsmithdc/status/1569367263857512448,\u0007Blockchain Association\u001b]8;;\u0007 forming PAC in US",
  "● \u001b]8;;https://twitter.com/brian_armstrong/status/1570133078022160384,\u0007Coinbase\u001b]8;;\u0007 adding crypto positions of politicians to app",
  "● \u001b]8;;https://www.coindesk.com/business/2022/09/14/s-korean-court-issues-arrest-warrant-against-terra-co-founder-do-kwon-report/,\u0007South Korean court issued arrest warrant\u001b]8;;\u0007 for Luna founder Do Kwon",
  "",
  "**General**",
  "",
  "● \u001b]8;;https://www.bleepingcomputer.com/news/security/uber-hacked-internal-systems-breached-and-vulnerability-reports-stolen/,\u0007Uber security breached\u001b]8;;\u0007 in alleged social engineering attack",
  "● Another \u001b]8;;https://www.bleepingcomputer.com/news/security/apple-fixes-eighth-zero-day-used-to-hack-iphones-and-macs-this-year/,\u0007Apple zero-day\u001b]8;;\u0007",
  "",
  "* * *",
  "",
  "Follow \u001b]8;;https://twitter.com/WeekInEthNews,\u0007@WeekinEthNews\u001b]8;;\u0007 to find out what the most clicked links are. Follow \u001b]8;;https://twitter.com/evan_van_ness,\u0007@evan\\_van\\_ness\u001b]8;;\u0007 and \u001b]8;;https://twitter.com/abcoathup,\u0007@abcoathup\u001b]8;;\u0007 to get most of the week’s news in real time.",
  "",
  "Permalink for this week’s issue: \u001b]8;;https://weekinethereumnews.com/week-in-ethereum-news-september-17-2022,\u0007https://weekinethereumnews.com/week-in-ethereum-news-september-17-2022\u001b]8;;\u0007",
  "",
  "* * *",
  "",
  "###### **Upcoming Dates of Note**",
  "",
  "_(new/changes in_ **_bold_**_)_",
  "",
  "● Sep 22 – \u001b]8;;https://gitcoin.co/grants/,\u0007Gitcoin Grants round 15\u001b]8;;\u0007 ends **(support** \u001b]8;;https://gitcoin.co/grants/2785/week-in-ethereum-news,\u0007**Week in Eth News**\u001b]8;;\u0007**)**",
  "● Sep 23 – \u001b]8;;https://2022.ethhcmc.com/,\u0007ETH HCMC\u001b]8;;\u0007 summit (Ho Chi Minh)",
  "● Sep 23-24 – \u001b]8;;https://ethsantiago.com/,\u0007ETHSantiago\u001b]8;;\u0007",
  "● Oct 6-8 – \u001b]8;;https://event.web3bridge.com/,\u0007Web3 Lagos\u001b]8;;\u0007",
  "● Oct 7-16 – \u001b]8;;https://devcon.org/en/devcon-week/,\u0007Devcon week\u001b]8;;\u0007 (Bogotá)",
  "● Oct 7-9 – \u001b]8;;https://bogota.ethglobal.com/,\u0007ETHBogotá\u001b]8;;\u0007 (ETH Global)",
  "● Oct 7-9 – \u001b]8;;https://infinite-hackathons.eth.limo/,\u0007Infinite hackathon\u001b]8;;\u0007 (Bogotá)",
  "● Oct 11-14 – \u001b]8;;https://devcon.org/,\u0007Devcon 6\u001b]8;;\u0007 (Bogotá)",
  "● Oct 18-22 – \u001b]8;;https://www.ethmedellin.co/,\u0007Eth Medellin\u001b]8;;\u0007 (Colombia)",
  "● Oct 26-28 – \u001b]8;;https://twitter.com/EthPanama,\u0007Eth Panama\u001b]8;;\u0007",
  "● Oct 28-30 – \u001b]8;;https://www.ethlisbon.org/,\u0007ETH Lisbon\u001b]8;;\u0007",
  "● Nov 4-6 – \u001b]8;;https://sf.ethglobal.com/,\u0007ETHSanFrancisco\u001b]8;;\u0007 (ETH Global)",
  "● Nov 11-13 – \u001b]8;;https://mirror.xyz/ethbrno.eth/6BH9cUVuD85hy5O0L5cOOOE7niSA9Yo5eWsXVzKOlO4,\u0007ETHBrno\u001b]8;;\u0007 (Czech Republic)",
  "● Nov 18-20 – \u001b]8;;https://web3weekend.ethglobal.com/,\u0007Web3 Weekend\u001b]8;;\u0007 (ETH Global)",
  "● Nov 25-27 – \u001b]8;;https://www.eth-vietnam.com/,\u0007ETH Vietnam\u001b]8;;\u0007",
  "● Dec 2-4 – \u001b]8;;https://ethindia.co/,\u0007ETHIndia\u001b]8;;\u0007 (ETH Global)",
  "● Mar 2-5 – \u001b]8;;https://www.ethdenver.com/,\u0007ETHDenver\u001b]8;;\u0007",
  "",
  "\u001b]8;;https://weekinethereum.substack.com/subscribe#about,\u0007_Sign up_\u001b]8;;\u0007 **_to receive this newsletter weekly_**",
  "",
  "## Post navigation",
  "",
  "\u001b]8;;https://weekinethereumnews.com/week-in-ethereum-news-september-10-2022/,\u0007← Previous Post\u001b]8;;\u0007",
  "",
  "\u001b]8;;https://weekinethereumnews.com/feed/,\u0007RSS\u001b]8;;\u0007"
]

exports.db = db
