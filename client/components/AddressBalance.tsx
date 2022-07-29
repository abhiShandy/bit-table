import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddressBalance({ address }) {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<{ balance: number }>(
          `/api/address/balance/${address}`
        );
        setBalance(response.data.balance / 1e8);
      } catch (error) {
        console.error(error);
        console.log("Error getting balance");
      }
      setIsLoading(false);
    };

    getTransactions();
  });

  return (
    <>
      {isLoading && "Loading..."}
      {!isLoading && `${balance} BTC`}
    </>
  );
}
