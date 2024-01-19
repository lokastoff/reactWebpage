import React from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/isauth/isAuthSlice";
export const Mypagetabs = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
    }
   return(
     <Tab.Group>
        <div className='flex flex-col w-[300px] pt-[50px] '>
            <div className="flex items-center w-full pl-[50px]">
                <div className="mr-[15px] w-[50px] h-[50px] bg-[url('/src/assets/ava.png')] bg-cover rounded-[100px]">
                </div>
                <span className="text-[18px]">Walter White</span>
            </div>
            <Tab.List className='flex flex-col py-[60px] w-full'>
                <Tab className='flex items-center h-[40px] text-[16px]'>
                    <div className="w-[5px] mr-[45px]"></div>
                    <span>Dashboard</span>
                </Tab>
                <Tab className='flex items-center h-[40px] text-[16px]'>
                    <div className="w-[5px] mr-[45px]"></div>
                    <span>Settings</span>
                </Tab>
            </Tab.List>
       </div>
      <Tab.Panels className='w-[600px] border-2 border-white'>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel><Link to={'/auth'} onClick={handleLogout}>Logout</Link></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
   )
}