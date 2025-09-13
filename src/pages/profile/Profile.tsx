import React from "react";
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/16/solid";

const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200">
        <h1 className="text-2xl p-1 font-semibold text-stone-800 flex items-center gap-3">
          <UserIcon className="w-7 text-stone-600" />
          User Profile
        </h1>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-stone-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <UserIcon className="w-5 text-stone-500" />
                  <div>
                    <p className="text-sm text-stone-500">Full Name</p>
                    <p className="font-medium text-stone-800">Lokendra Nath</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 text-stone-500" />
                  <div>
                    <p className="text-sm text-stone-500">Email</p>
                    <p className="font-medium text-stone-800">ln25@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 text-stone-500" />
                  <div>
                    <p className="text-sm text-stone-500">Phone</p>
                    <p className="font-medium text-stone-800">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 text-stone-500" />
                  <div>
                    <p className="text-sm text-stone-500">Location</p>
                    <p className="font-medium text-stone-800">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-stone-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Account Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">156</p>
                  <p className="text-sm text-stone-600">Total Orders</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-600">₹45,678</p>
                  <p className="text-sm text-stone-600">Total Spent</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600">23</p>
                  <p className="text-sm text-stone-600">Active Subscriptions</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-orange-600">4.8</p>
                  <p className="text-sm text-stone-600">Rating</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">Edit Profile</button>
                <button className="w-full bg-stone-200 hover:bg-stone-300 text-stone-800 py-2 px-4 rounded-lg font-medium transition-colors">Change Password</button>
                <button className="w-full bg-stone-200 hover:bg-stone-300 text-stone-800 py-2 px-4 rounded-lg font-medium transition-colors">Notification Settings</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


