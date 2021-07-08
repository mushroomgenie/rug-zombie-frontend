// eslint-disable-next-line import/prefer-default-export
import tokens from '../../config/constants/tokens'
import artists from '../../config/constants/artists'

const tableData = [
  {
    id: 1,
    pid: 0,
    name: 'RugZombie Common',
    subtitle: 'Basic Zombie',
    path: 'images/rugZombie/BasicZombie.gif',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: '',
    artist: artists.RugZombie,
    stakingToken: '',
    pcsVersion: 'v2',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 2,
    pid: 1,
    name: 'VikingSwap Rare',
    subtitle: 'Viking Brains',
    path: 'images/rugZombie/VikingBrains.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.viking,
    artist: artists.TheLeap3d,
    stakingToken: '0x909e59fFFcF1481Df184831eEea6680Cd437A340',
    pcsVersion: 'v1',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 3,
    pid: 2,
    name: 'MonsterSlayer Rare',
    subtitle: 'ZombieSlayer',
    path: 'images/rugZombie/ZombieSlayer.gif',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.msc,
    artist: artists.ZomBaes,
    stakingToken: '0xD4Ced04fB7129CDB43ffef1cf3DE3Ac701c6cE33',
    pcsVersion: 'v1',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 2,
    pid: 12,
    name: 'Autoshark Legendary',
    subtitle: 'Chompers',
    path: 'images/rugZombie/Autoshark Legendary.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.zshark,
    artist: artists.deadtunnelrat,
    stakingToken: '0x8fab22cB7C58b193Fd498ed0EF3B574d70E4f759',
    pcsVersion: 'none',
    liquidityDetails: 'None! This grave is exclusive for victims of the flash loan attack on autoshark.',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 4,
    pid: 3,
    name: 'Defi100 Rare',
    subtitle: 'Zombie100',
    path: 'images/rugZombie/Zombie100.gif',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.d100,
    artist: artists.ZomBaes,
    stakingToken: '0xfB33d25b41F1b0fa95AEa52486C3F05f2aDEE396',
    pcsVersion: 'v1',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 5,
    pid: 10,
    name: 'Merlin Lab Rare',
    subtitle: 'My name is MERL',
    path: 'images/rugZombie/My Name Is MERL.png',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.merl,
    artist: '/',
    pcsVersion: 'v2',
    stakingToken: '0xD1e00C08E938B808F2d65dd108aE50948a9Ca1b4',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    stakingTokenStaked: '0',
    totalGraveAmount: '0',
  },
  {
    id: 6,
    pid: 4,
    name: 'Fairmoon Rare',
    subtitle: 'Raremoon',
    path: 'images/rugZombie/Raremoon.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '30 days',
    rug: tokens.fairmoon,
    artist: artists.TheLeap3d,
    stakingToken: '0x26dF9e0fbd5624941767516BbF218554CfA3A110',
    pcsVersion: 'v1',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 7,
    pid: 5,
    name: 'Fairmoon Uncommon',
    subtitle: 'Zombie on the Moon',
    path: 'images/rugZombie/FairmoonUncommon.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '14 days',
    rug: tokens.fairmoon,
    artist: '/',
    pcsVersion: 'v1',
    stakingToken: '0x645ad805c464133Eba5c4152Ce14547a01F821f7',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 8,
    pid: 6,
    name: 'Fairmoon Common',
    subtitle: 'Fairmoon Common',
    path: 'images/rugZombie/FairmoonCommon.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.fairmoon,
    artist: '/',
    pcsVersion: 'v1',
    stakingToken: '0x02F6DE73919aE9d43A1E0520dBCBF81bCda5B514',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 9,
    pid: 7,
    name: 'Gorilla Yield Common',
    subtitle: 'Gorilla Yield Common',
    path: 'images/rugZombie/yApeCommon.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.yape,
    artist: '/',
    pcsVersion: 'v1',
    stakingToken: '0x9EbD27Bd3957F13f8E7fef988E96B8EE1998bc80',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 10,
    pid: 8,
    name: 'Dragon Farm Finance Common',
    subtitle: 'Dragon Farm Finance Common',
    path: 'images/rugZombie/CommonDragonFarmFinance.mp4',
    type: 'video',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.dragon,
    artist: '/',
    pcsVersion: 'v1',
    stakingToken: '0x634A554d2FF1609d50740240140B452dF60D035c',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    totalGraveAmount: '0',
  },
  {
    id: 11,
    pid: 9,
    name: 'yPanda Common',
    subtitle: 'yPanda Common',
    path: 'images/rugZombie/yPandaCommon.jpeg',
    type: 'image',
    withdrawalCooldown: '3 days',
    nftRevivalTime: '7 days',
    rug: tokens.ypanda,
    artist: '/',
    pcsVersion: 'v1',
    stakingToken: '0xFceB2967AB8EcC29589E9232f78f8441832d2aD6',
    liquidityDetails: '',
    result: {
      paidUnlockFee: false,
      rugDeposited: 0,
      tokenWithdrawalDate: '0',
      amount: '0',
    },
    poolInfo: {},
    pendingZombie: '0',
    stakingTokenStaked: '0',
    totalGraveAmount: '0',
  },
]

export default tableData
