
import Link from "next/link"
import { getServerSession } from "next-auth";


import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { options } from "../api/auth/[...nextauth]/options";

const Navigation = async () => {
    
    const session = await getServerSession(options);

    let Links = [
        { name: "HOME", link: "/Home" },
        { name: "Book appointment", link: "/" },
        { name: "Ask Questions", link: "/" },
        { name: "Why Check us", link: "/" },
        { name: "Health feed", link: "/" },
    ];
    // let [open, setOpen] = useState(false);

    return (
        // hero section


        <div className='shadow-md w-full border-b-2 '>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7 bg-amber-50 '>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img src="Arogya sarthi Logo.png" alt="" width="240.36px"
                        height="86.64px"
                    />
                </div>
                {/* Menu icon */}
                {/* <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div> */}
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  bg-amber-50`
                 }>

                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7  font-medium bg-amber-50'>
                                <Link href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                            </li>))
                    }
                    <span className=' mx-4 '>|</span>
                    {/* <button className='btn  bg-slate-700 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static' type="button" onClick={() => router.push('/useroptions')}> Register / Login</button> */}
                    {session ? (
                        <Link href="api/auth/signout?callbackUrl=/">Logout</Link>
                    )
                        :
                        (
                            <Link href="api/auth/signin">login</Link>
                        )
                    }


                </ul>
                {/* button */}
            </div>

        </div>

    );
};

export default Navigation;