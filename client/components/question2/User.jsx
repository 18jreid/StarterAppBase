import { useEffect, useState } from 'react';

export const User = ({ passedUser }) => {
  const [myUser, setUser] = useState(passedUser);
  const [finalStyle, setFinalStyle] = useState('');

  useEffect(() => {
    if (myUser.isAdmin) {
      setFinalStyle('text-green-600');
    } else {
      setFinalStyle('text-black');
    }
  }, []);

  return (
    <div key={myUser.id} className="bg-gray-200 rounded-md m-4 p-4">
      <p className={finalStyle}>{myUser.name}</p>
      <p>{myUser.email}</p>
    </div>
  );
};
