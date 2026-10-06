import React from 'react'
import Navbar from './shared/Navbar'

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <h1 className="font-bold text-xl">Profile</h1>
        <p className="text-gray-500 mt-2">This is a placeholder for the Profile component.</p>
      </div>
    </div>
  )
}

export default Profile
