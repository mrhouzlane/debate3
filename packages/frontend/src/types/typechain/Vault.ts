/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common'

export interface VaultInterface extends utils.Interface {
  functions: {
    'MembershipAddresses(uint256)': FunctionFragment
    'createForum(string,address[],string)': FunctionFragment
    'forumAddresses(uint256)': FunctionFragment
    'forumCounter()': FunctionFragment
    'nftURIs(uint256)': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'MembershipAddresses'
      | 'createForum'
      | 'forumAddresses'
      | 'forumCounter'
      | 'nftURIs'
      | 'owner'
      | 'renounceOwnership'
      | 'transferOwnership'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'MembershipAddresses',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'createForum',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[], PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'forumAddresses',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'forumCounter', values?: undefined): string
  encodeFunctionData(functionFragment: 'nftURIs', values: [PromiseOrValue<BigNumberish>]): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string

  decodeFunctionResult(functionFragment: 'MembershipAddresses', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'createForum', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'forumAddresses', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'forumCounter', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'nftURIs', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result

  events: {
    'ForumCreated(address)': EventFragment
    'OwnershipTransferred(address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'ForumCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
}

export interface ForumCreatedEventObject {
  arg0: string
}
export type ForumCreatedEvent = TypedEvent<[string], ForumCreatedEventObject>

export type ForumCreatedEventFilter = TypedEventFilter<ForumCreatedEvent>

export interface OwnershipTransferredEventObject {
  previousOwner: string
  newOwner: string
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>

export interface Vault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: VaultInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    MembershipAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>

    createForum(
      name: PromiseOrValue<string>,
      _moderators: PromiseOrValue<string>[],
      tokenURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    forumAddresses(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>

    forumCounter(overrides?: CallOverrides): Promise<[BigNumber] & { _value: BigNumber }>

    nftURIs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>
  }

  MembershipAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>

  createForum(
    name: PromiseOrValue<string>,
    _moderators: PromiseOrValue<string>[],
    tokenURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  forumAddresses(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

  forumCounter(overrides?: CallOverrides): Promise<BigNumber>

  nftURIs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    MembershipAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>

    createForum(
      name: PromiseOrValue<string>,
      _moderators: PromiseOrValue<string>[],
      tokenURI: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    forumAddresses(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

    forumCounter(overrides?: CallOverrides): Promise<BigNumber>

    nftURIs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    'ForumCreated(address)'(arg0?: null): ForumCreatedEventFilter
    ForumCreated(arg0?: null): ForumCreatedEventFilter

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter
  }

  estimateGas: {
    MembershipAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    createForum(
      name: PromiseOrValue<string>,
      _moderators: PromiseOrValue<string>[],
      tokenURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    forumAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    forumCounter(overrides?: CallOverrides): Promise<BigNumber>

    nftURIs(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    MembershipAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    createForum(
      name: PromiseOrValue<string>,
      _moderators: PromiseOrValue<string>[],
      tokenURI: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    forumAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    forumCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    nftURIs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>
  }
}
