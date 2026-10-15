'use client';

import { useWallet } from '@/contexts/WalletContext';
import { WalletType } from '@/types/wallet';

export function useStellarWallet() {
  const {
    isConnected,
    publicKey,
    balance,
    isLoading,
    error,
    connect,
    disconnect,
    getBalance,
  } = useWallet();

  const connectWallet = async () => {
    await connect(WalletType.FREIGHTER);
  };

  const disconnectWallet = () => {
    disconnect();
  };

  return {
    isConnected,
    publicKey,
    balance,
    isLoading,
    error,
    getBalance,
    connectWallet,
    disconnectWallet,
    connect,
    disconnect,
  };
}
