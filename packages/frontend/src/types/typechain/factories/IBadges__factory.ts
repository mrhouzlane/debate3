/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { IBadges, IBadgesInterface } from '../IBadges'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class IBadges__factory {
  static readonly abi = _abi
  static createInterface(): IBadgesInterface {
    return new utils.Interface(_abi) as IBadgesInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IBadges {
    return new Contract(address, _abi, signerOrProvider) as IBadges
  }
}
