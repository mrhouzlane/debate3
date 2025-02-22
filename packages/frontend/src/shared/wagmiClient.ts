import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { allChains, Chain, configureChains, createClient } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'
import { env } from './environment'

/**
 * Custom Chains
 */
const customChains: (Chain & { iconUrl?: string })[] = [
  {
    id: 77,
    network: 'sokol',
    name: 'Gnosis Testnet (Sokol)',
    nativeCurrency: {
      decimals: 18,
      name: 'SPOA',
      symbol: 'SPOA',
    },
    rpcUrls: {
      default: 'https://sokol.poa.network/',
    },
    blockExplorers: {
      default: { name: 'Blockscout', url: 'https://blockscout.com/poa/sokol' },
    },
    testnet: true,
    iconUrl: '/chains/gnosis.png',
  },
  {
    id: 338,
    network: 'cronos_testnet',
    name: 'Cronos Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'TCRO',
      symbol: 'TCRO',
    },
    rpcUrls: {
      default: 'https://evm-t3.cronos.org/',
    },
    blockExplorers: {
      default: { name: 'Cronos', url: 'https://testnet.cronoscan.com/tx/' },
    },
    testnet: true,
    iconUrl: '/chains/cronos.png',
  },
  {
    id: 44787,
    network: 'celo_testnet',
    name: 'Celo Testnet (Alfajores)',
    nativeCurrency: {
      decimals: 18,
      name: 'CELO',
      symbol: 'CELO',
    },
    rpcUrls: {
      default: 'https://alfajores-forno.celo-testnet.org',
    },
    blockExplorers: {
      default: { name: 'Celo', url: 'https://docs.celo.org/' },
    },
    testnet: true,
    iconUrl: '/chains/celo.png',
  },
  {
    id: 245022926,
    network: 'neon_testnet',
    name: 'Neon Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'NEON',
      symbol: 'NEON',
    },
    rpcUrls: {
      default: 'https://proxy.devnet.neonlabs.org/solana',
    },
    blockExplorers: {
      default: { name: 'Neon', url: 'https://devnet.explorer.neon-labs.org' },
    },
    testnet: true,
    iconUrl: '/chains/neon.jpg',
  },
]

/**
 * Wagmi.sh Configuration (https://wagmi.sh/docs)
 */

export const rpcsByChainId: {
  [chainId: number]: string
} = {
  [1337]: env.rpc.hardhat,
  [80001]: env.rpc.mumbai,
  [77]: env.rpc.sokol,
  [338]: env.rpc.cronosTestnet,
  [44787]: env.rpc.celoTestnet,
  [245022926]: env.rpc.neonTestnet,
}

export const defaultChain: Chain = [...allChains, ...customChains].filter(
  (chain) => env.defaultChain === chain.id
)[0]

export const supportedChains: Chain[] = [...allChains, ...customChains].filter((chain) =>
  env.supportedChains.includes(chain.id)
)

export const { chains, provider } = configureChains(
  Array.from(new Set([defaultChain, ...supportedChains])),
  [
    jsonRpcProvider({
      rpc: (chain) => {
        const rpcUrl = rpcsByChainId?.[chain.id]
        return rpcUrl ? { http: rpcUrl } : null
      },
    }),
    publicProvider(),
  ]
)

export const { connectors } = getDefaultWallets({
  appName: 'Debate3.xyz',
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
