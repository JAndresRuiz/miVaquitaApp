import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import CreateGroup from './CreateGroup.jsx';
import Debt from './Debt.jsx';
import GroupList from './GroupList.jsx';

const Groups = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />
        <CreateGroup isOpen={modalOpen} closeModal={() => setModalOpen(false)} />
        <Debt setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <GroupList />
    </>
  );
};

export { Groups };
