export const Transaction = ({ transaction }) => {
  return (
    <div key={transaction.id} className="bg-gray-200 m-4 p-4 rounded-md">
      <p>Amount: {transaction.amount}</p>
      <p>Sent From User: {transaction.fromUser.name}</p>
      <p>Sent to User: {transaction.toUser.name}</p>
    </div>
  );
};
