import React, { use } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaUserTag } from 'react-icons/fa';
import useUserRole from '../../hooks/useUserRole';
import Loading from '../../components/Loading/Loading';



const ProfilePage = () => {

    const {userInfo, isLoading} = useUserRole();

    if(isLoading) return <Loading />

    // console.log(userInfo[0].name);
    const useData = userInfo || {};

    // const userData = 

  return (
    <div className="pt-28 pb-16 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">User Profile</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaUser className="text-gray-500" />
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-900">{useData.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-500" />
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-900">{useData.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-gray-500" />
            <span className="font-medium text-gray-700">Phone:</span>
            <span className="text-gray-900">{useData.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaUserTag className="text-gray-500" />
            <span className="font-medium text-gray-700">Role:</span>
            <span className="text-gray-900 capitalize">{useData.role}</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-gray-500" />
            <span className="font-medium text-gray-700">Joined:</span>
            <span className="text-gray-900">{new Date(useData.addTime).toLocaleDateString() || 'N/N'}</span>
          </div>
        </div>
        <button className="mt-6 w-full rounded-lg btn btn-primary transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}



export default ProfilePage;
