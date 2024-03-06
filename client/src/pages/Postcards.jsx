import React, { useEffect,useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";





function PostCards() {

    const [sampleData, setSampleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/auth/getsampledata");
                const data = await res.json();
                if (data) {
                    // console.log(data);
                    setSampleData(data); // Set the fetched data in state
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {/* {showsampledata && showsampledata.map((e)=>{ */}
            {sampleData.map((e) => (
                <div key={e._id} className='p-3 xl:max-w-3xl mb-5 lg:max-w-xl mx-auto flex flex-col gap-2 bg-white rounded-xl border border-slate-200'>
                    <div className='p-3 flex flex-row justify-between border items-center'>
                        <div className='flex flex-row justify-center items-center gap-4 '>
                            <img
                                src='https://tse1.mm.bing.net/th?id=OIP.RlBgpeTTeV7q7CzLi_P9CgHaF7&pid=Api&P=0&h=180'
                                className='h-10 w-10 rounded-full object-cover' />
                            <span>{e.username}</span>
                        </div>
                        <IoIosMore className='w-6 h-6' />
                    </div>
                    <div className='p-1 flex flex-row items-center'>
                        <CiLocationOn />
                        <p className='text-sm ml-1 text-blue-500'>Location: </p>
                        <span className='text-sm ml-1'>{e.location}</span>
                    </div>
    
                    <div className=''>
                        <img src={e.image.url}
                            className='h-100'
                        />
                    </div>
    
                    {/* icons */}
                    <div className='mt-2 mx-4 mb-4 flex flex-row justify-between'>
                        <div className='flex flex-row gap-4 items-center'>
                            <FaRegHeart className='w-5 h-5' />
                            <FaRegCommentDots className='w-5 h-5' />
                            <IoIosSend className='w-5 h-5' />
                        </div>
                        <FaRegBookmark className='w-5 h-5' />
                    </div>
                    <div className='mb-4 mx-4'>
                        <div className='flex flex-row gap-4 items-center'>
                            <img
                                className='w-6 h-6 rounded-full'
                                src='https://tse1.mm.bing.net/th?id=OIP.RlBgpeTTeV7q7CzLi_P9CgHaF7&pid=Api&P=0&h=180'
                            />
                            <p>Liked by <strong className='text-slate-500'>{e.username}</strong> and <strong className='text-slate-500'>other 1294</strong></p>
                        </div>
                        <p className='mt-2 mb-2'>
                            <strong>@{e.username}</strong>  {e.description}
                        </p>
                        <span className='text-slate-500 text-sm mt-2'>Show all the 164 comments</span>
                        <p className='mt-5 text-slate-500 text-xs uppercase'>12 Hours Ago</p>
                    </div>
    
                </div>
            ))}
        </>
    );
    
            }

export default PostCards