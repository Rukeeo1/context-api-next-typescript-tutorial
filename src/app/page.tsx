'use client';
import { createContext, useState } from 'react';
import styles from './page.module.css';
import { ChildOne } from './components/child-one';
import { ChildTwo } from './components/child-two';
import { ChildThree } from './components/child-three';

// create context ✅
// pass down data through the context provider ✅
// access data from context - provider using consumer ✅ or hooks ✅
// update the global state (parent state) ✅

type DummyContextType = {
  firstName: string;
  lastName: string;
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
};

export const DummyContext = createContext<DummyContextType | undefined>(
  undefined
);

export default function Home() {
  const [firstName, setFirstName] = useState('Jerry');
  const [lastName, setLastName] = useState('Doe')
  // const valueToPassDown = {
  //   firstName: 'Jerry',
  //   lastName: 'Doe',
  // };
  return (
    <main className={styles.main}>
      <DummyContext.Provider value={{firstName, lastName, setFirstName,setLastName}}>
        <ChildOne />
        <ChildTwo />
        <ChildThree />
      </DummyContext.Provider>
    </main>
  );
}
