import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import CreateGroup from './CreateGroup.jsx';
import GroupList from './GroupList.jsx';
import Debts from './Debts.jsx';

const Groups = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
        <CreateGroup isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
        <Debts setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <GroupList />
    </>
  );
};

export { Groups };
