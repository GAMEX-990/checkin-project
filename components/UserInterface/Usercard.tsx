import GetUserEmail from '@/utils/currentemailUser'
import GetUserDetails from '@/utils/currentUser'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft, LogIn } from 'lucide-react';
import React from 'react'
import SignedOutLinks from '../Navbar/SignedOutLinks';

const Usercard = () => {
    return (
        <div className='md:ml-35'>
            {/* โปรไฟล์ */}
            <div className="border-2 border-purple-500 rounded-2xl p-4  m-20 flex flex-col items-center w-70 h-80">
                {/* ตรงนี้คือIcons */}
                <div className="flex justify-between w-full mb-2">
                    <button className="text-purple-600 text-2xl"><ArrowLeft /></button>
                    <button className="text-purple-600 text-2xl"><SignedOutLinks /></button>
                </div>
                {/* ส่วนของรูปไฟล์ */}
                <div>
                    <UserButton appearance={
                        {
                            elements: {
                                userButtonAvatarBox: {
                                    width: 100,
                                    height: 100,
                                    borderStyle: 'solid',
                                    borderWidth: '2px',
                                    borderColor: '#6500E0'
                                }
                            }
                        }
                    }
                    />
                </div>
                {/* ข้อมูลชื่อ อีเมล์ */}
                <div className="text-center mt-4">
                    <h2 className="text-purple-700 font-bold"><GetUserDetails /></h2>
                    <hr className="my-2 border-purple-300" />
                    <h1 className="text-purple-700"><GetUserEmail /></h1>
                </div>
                {/* Button */}
                <div className='md:-mt-80 md:-mr-105'>
                    <div className="gap-4 mt-30 flex justify-center md:flex-col">
                        <button className="border border-purple-600 text-purple-600 px-4 py-1 rounded-full hover:bg-purple-100">
                            Scan QR
                        </button>
                        <button className="border border-purple-600 text-purple-600 px-4 py-1 rounded-full hover:bg-purple-100">
                            Add a class
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Usercard