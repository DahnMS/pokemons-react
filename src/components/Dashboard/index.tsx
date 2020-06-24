import React, { useState, useEffect, useCallback, FormEvent } from 'react';

interface IUser {
  name: string;
  age: string;
  email: string;
}

const Dashboard: React.FC= () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setUser({
      name: 'Daniel',
      email: 'daniel@wiki4fit.com.br',
      age: '27'
    });
  }, []);

  const handleSubmit = useCallback((event: FormEvent<EventTarget>): void => {
    event.preventDefault();

    setUser({
      name,
      age,
      email
    });
  }, [name, age, email]);


  return (
    <div>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>email: {user.email}</p>

      <form method="post" onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Age</label>
        <input 
          type="tel"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

        <label>Email</label>
        <input 
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

      <button type="submit">
        Change User Name
      </button>
      </form>

    </div>
  );
}

export default Dashboard;