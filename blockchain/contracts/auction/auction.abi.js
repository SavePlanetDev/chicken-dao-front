export const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "AuctionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "currentBid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Bidded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "NewBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "bidId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Sattled",
    type: "event",
  },
  {
    inputs: [],
    name: "auctionPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bids",
    outputs: [
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amounts",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBids",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amounts",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "bidder",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amounts",
                type: "uint256",
              },
            ],
            internalType: "struct ChickenDAOAuctionHouse.Bidder[]",
            name: "bidders",
            type: "tuple[]",
          },
          {
            internalType: "bool",
            name: "ended",
            type: "bool",
          },
        ],
        internalType: "struct ChickenDAOAuctionHouse.Bid[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBidId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestBid",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amounts",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "end",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "bidder",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amounts",
                type: "uint256",
              },
            ],
            internalType: "struct ChickenDAOAuctionHouse.Bidder[]",
            name: "bidders",
            type: "tuple[]",
          },
          {
            internalType: "bool",
            name: "ended",
            type: "bool",
          },
        ],
        internalType: "struct ChickenDAOAuctionHouse.Bid",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumBid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract INFT",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resume",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sattle",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
    ],
    name: "setAuctionPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
    ],
    name: "setDevAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bidAmounts",
        type: "uint256",
      },
    ],
    name: "setMinimumBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INFT",
        name: "_nft",
        type: "address",
      },
    ],
    name: "setNFTAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasuryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "started",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const address = "0xdFF5AE3ffd242CF4E9e46563ef4777EA6573504F";
