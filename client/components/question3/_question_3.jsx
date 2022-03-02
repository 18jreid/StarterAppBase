import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './Transaction';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setTransactions(transactions);
  }, []);

  return (
    <div>
      <div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
