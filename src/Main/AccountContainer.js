import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './Account';
import AddReview from './AddReview';

export default function AccountContainer() {
  return (
    <Routes>
      <Route path="/account/*" element={<Account />} />
      <Route path="/account/:id" element={<AddReview />} />
    </Routes>
  );
}
