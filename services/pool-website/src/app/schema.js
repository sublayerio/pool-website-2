export default {
    navItems: [
        {
            name: "Delegate",
            url: "/delegate"
        },
        {
            name: "Roadmap",
            url: "/roadmap"
        },
        {
            name: "Community",
            url: "/community"
        },
        {
            name: "Status",
            target: "_blank",
            url: "https://stats.uptimerobot.com/rYEwMsAZ7v"
        }
    ],
    socials: [
        {
            name: "GitHub",
            icon: "GitHub",
            url: "https://github.com/sublayerio"
        },
        {
            name: "Twitter",
            icon: "Twitter",
            url: "https://twitter.com/sublayerio"
        }
    ],
    specifications: [
        {
            icon: "Processor",
            name: "3x Raspberry Pi 4 8GB RAM"
        },
        {
            icon: "Computer",
            name: "Ubuntu 20.04 LTS OS"
        },
        {
            icon: "Firewall",
            name: "Firewall UFW"
        },
        {
            icon: "Storage",
            name: "Crucial BX500 SSD, 120 GB"
        },
        {
            icon: "Internet",
            name: "100 Mbps, 8 ms latency"
        },
    ],
    faq: {
        items: [
            {
                title: 'What is Cardano?',
                content: `Cardano is a decentralized public blockchain and cryptocurrency project and is fully open source.
                    It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies.`
            },
            {
                title: "What is a Stake Pool?",
                content: `A stake pool is a reliable server node that focuses on maintenance and holds the combined
                    stake of various stakeholders in a single entity. Stake pools are responsible for processing
                transactions and producing new blocks and are at the core of [Ouroboros](https://cardano.org/ouroboros), the Cardano proof-of-stake protocol`
            },
            {
                title: "How does that benefit me?",
                content: `By staking your delegating your ADA to a Stake Pool you directly participate in the network and
                    help increasing the robustness and decentralization of Cardano. For this you can receive a monetary reward in ADA.`
            },
            {
                title: "How do I delegate ADA to a stake pool?",
                content: `To delegate your ADA you simply open up a wallet (e.g. [Daedalus](https://daedaluswallet.io), [Yoroi](https://yoroi-wallet.com) or [Adalite](https://adalite.io)) and select a Stake Pool
                    (preferably **SBLYR**) in the Staking menu directly in the wallet.
                Each wallet looks a bit different but overall it's very straight forward. [Read a more detailed guide](/delegate)`
            },
            // {
            //   title: "What is a pledge",
            //   content: `Pledge is the amount of ADA a stake pool has guaranteed to keep in its account. It’s a way of proving to the delegators that the stake pool is serious and has ‘skin in the game’. It also has a small influence in the rewards a pool will pay. The factor is – however – very small. You need around 5-10m of ADA pledged, before you can start to feel the effects. You should be aware of pools with a low pledge, as it indicates a low dedication.

            //   All our pools in 1 Percent Pool have a pledge of 50.000 ADA each.`,
            // },
            // {
            //   title: "What is 'The ITN'?",
            //   content: `ITN stands for Incenticized Test Net. It was 6 months of test net for Shelley, that was designed to test the game theory and incentive scheme. It started in December 2019. Many pools operators gained valuable experience in running a pool there, and established a reputation. The rewards from the test net were transferred to the main net, which made the test net incentivized – you earned real money from staking on the test net.`,
            // },
        ]
    },
    usps: {
        items: [
            {
                icon: "Single",
                name: "Operating a single pool",
                description: `Don't support operators that run multiple pools. They are preventing decentralisation by harming the security and reliability Cardano.`
            },
            {
                icon: "Indie",
                name: "Supporting others",
                description: `Encouraging others to run their own stake pool by giving support and providing resources. 50% of our rewards are used to change other peoples lives.`,
            },
            {
                icon: "Eco",
                name: "Eco-friendly",
                description: `Consuming just 5 watts per Raspberry Pi from within an energy-neutral home with solar panels.`
            }
        ]
    },
    roadmap: {
        sprints: [
            {
                name: "July 2021",
                items: [
                    { name: "Increase the pool pledge from 7k to 8k ADA", completed: false },
                ]
            },
            {
                name: "June 2021",
                items: [
                    { name: "Add support for more content blocks to SPO Marketing Page", completed: false },
                    { name: "Increase the pool pledge from 6k to 7k ADA", completed: false },
                ]
            },
            {
                name: "May 2021",
                items: [
                    { name: "Release MVP version of marketing pages for SPO's (SPO Marketing Page)", completed: false },
                    { name: "Increase the pool pledge from 5k to 6k ADA", completed: false },
                ]
            },
            {
                name: "April 2021",
                items: [
                    { name: "Release a storybook containing the first React components to quickly create a stake pool marketing page (SPO Marketing Page)" },
                    { name: "Release a tutorial on how to [mint NFT's](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) together with [PIADA](https://ada-pi.io)", completed: false },
                    { name: "Explain terminology by adding tooltips to the website", completed: false, date: "Apr 10" },
                    { name: "Setup the initial pool website (pool.sublayer.io)", completed: true, date: "Apr 10" },
                    { name: "Ordered an Intel NUC to be prepared for (possible) increased hardware requirements caused by Alonzo", completed: true, date: "Apr 10" },
                    { name: "Created a [pull request](https://github.com/SinglePoolAlliance/Registration/pull/194) to get listed on [singlepoolalliance.net](https://singlepoolalliance.net)", completed: true, date: "Apr 10" },
                    { name: "Added a [status page](https://stats.uptimerobot.com/rYEwMsAZ7v) using [uptimerobot.com]() monitoring the uptime of the stake pool on relaynode1.sublayer.io:6001", completed: true, date: "Apr 7" },
                    { name: "Created NFT's on mainnet together with [PIADA](https://ada-pi.io)", completed: true, date: "Apr 3" },
                    { name: "Successfully launched [SBLYR pool](https://pool.pm/8264de3cdb1798dd8758e24cda5101184b44543e7c4421c7815f9ed8) on mainnet", completed: true, date: "Apr 3" }
                ]
            },
            {
                name: "March 2021",
                items: [
                    { name: "Setup a stake pool on testnet", completed: true, date: "March 27" },
                    { name: "Received hardware", completed: true, date: "March 27" },
                    { name: "Joined [ADA.pi discord](https://ada-pi.io)", completed: true, date: "March 21" },
                    { name: "Ordered hardware", completed: true, date: "March 20" },
                    { name: "Joined [NASEC discord](https://adapools.org/pool/aa8b94010cd3c7199be1d619079c184a59e6f1ad930926bc2bd38579)", completed: true, date: "March 17" },
                    { name: "Minted first [native asset](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) ([SublayerCoin](https://cardanoassets.com/sublayercoin-862)) on mainnet", completed: true, date: "March 15" },
                    { name: "Minted first [native asset](https://developers.cardano.org/en/development-environments/native-tokens/native-tokens/) on testnet", completed: true, date: "March 15" },
                ]
            }
        ]
    },
    community: {
        pools: [
            {
                name: "NASEC",
                url: "https://nasec.co.uk/cardano",
                image: "nasec.png"
            },
            {
                name: "CODER",
                url: "https://cardano.dantup.com",
                image: "coder.png"
            },
            {
                name: "PIADA",
                url: "https://ada-pi.io",
                authors: "Wael Ivie / Tony",
                image: "piada.png"
            }
        ]
    }
}