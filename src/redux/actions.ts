import { BigNumber } from 'bignumber.js'
import * as actions from './actionTypes'
import { PoolInfo, SpawningPoolInfo, SpawningUserInfo, UserInfo } from './types'

export const updateAccount = (account: string) => ({
  type: actions.UPDATE_ACCOUNT,
  payload: {
    account,
  },
})

export const updateZombieAllowance = (allowance: BigNumber) => ({
  type: actions.UPDATE_ZOMBIE_ALLOWANCE,
  payload: {
    allowance,
  },
})

export const updateZombieTotalSupply = (totalSupply: BigNumber) => ({
  type: actions.UPDATE_ZOMBIE_TOTAL_SUPPLY,
  payload: {
    totalSupply,
  },
})

export const updateDrFrankensteinZombieBalance = (zombieBalance: BigNumber) => ({
  type: actions.UPDATE_DR_FRANKENSTEIN_ZOMBIE_BALANCE,
  payload: {
    zombieBalance,
  },
})

export const updateZombieBalance = (balance: BigNumber) => ({
  type: actions.UPDATE_ZOMBIE_BALANCE,
  payload: {
    balance,
  },
})

export const updateZombiePriceBnb = (zombiePriceBnb: BigNumber) => ({
  type: actions.UPDATE_ZOMBIE_PRICE_BNB,
  payload: {
    zombiePriceBnb,
  },
})

export const updateBnbPriceUsd = (bnbPriceUsd: number) => ({
  type: actions.UPDATE_BNB_PRICE_USD,
  payload: {
    bnbPriceUsd,
  },
})

export const updateTomb = (pid: number, tombResult) => ({ // todo add tomb result type restriction
  type: actions.UPDATE_TOMB,
  payload: {
    pid,
    tombResult,
  },
})

export const updateGravePoolInfo = (pid: number, poolInfo: PoolInfo) => {
  return {
    type: actions.UPDATE_GRAVE_POOL_INFO,
    payload: {
      pid,
      poolInfo,
    },
  }
}

export const updateGraveUserInfo = (pid: number, userInfo: UserInfo) => ({
  type: actions.UPDATE_GRAVE_USER_INFO,
  payload: {
    pid,
    userInfo,
  },
})

export const updateNftTotalSupply = (id: number, totalSupply: BigNumber) => ({
  type: actions.UPDATE_NFT_TOTAL_SUPPLY,
  payload: {
    id,
    totalSupply,
  },
})

export const updateSpawningPoolInfo = (id: number, poolInfo: SpawningPoolInfo) => ({
  type: actions.UPDATE_SPAWNING_POOL_INFO,
  payload: {
    id,
    poolInfo,
  },
})

export const updateSpawningPoolUserInfo = (id: number, userInfo: SpawningUserInfo) => ({
  type: actions.UPDATE_SPAWNING_POOL_USER_INFO,
  payload: {
    id,
    userInfo,
  },
})