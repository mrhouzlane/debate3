/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import type { Provider } from '@ethersproject/providers'
import type { IMembership, IMembershipInterface } from '../IMembership'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'users',
        type: 'address[]',
      },
      {
        internalType: 'string[]',
        name: 'tokenURIs',
        type: 'string[]',
      },
    ],
    name: 'provideMembership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'users',
        type: 'address[]',
      },
    ],
    name: 'revokeMembership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class IMembership__factory {
  static readonly abi = _abi
  static createInterface(): IMembershipInterface {
    return new utils.Interface(_abi) as IMembershipInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IMembership {
    return new Contract(address, _abi, signerOrProvider) as IMembership
  }
}
