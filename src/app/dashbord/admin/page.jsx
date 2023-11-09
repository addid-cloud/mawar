"use client"
import AdminMessage from '@/components/AdminMessage';
import AdminSee from '@/components/AdminSee';
import NavAdmin from '@/components/NavAdmin'
import { useState } from 'react';
import React from 'react'

const page = () => {
    const [activeTab, setActiveTab] = useState('home');
  return (
    <>
    <NavAdmin activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === 'home' && <div>masih kosong! Bingung di isi apaan tau </div>}
    {activeTab === 'messages' && <AdminMessage/>}
      {activeTab === 'view' && <div><AdminSee/></div>}
    </>
  )
}

export default page