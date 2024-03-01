import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu';
import { Dropdown, Space } from 'antd';
export const HeaderNoAnim = () => {
    const navLogo = '/src/assets/nav_logo.png'
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const items = [
        {
            label:<Link  to="/products">Products</Link>,
            key:'0'
        },
        {
            label:<Link  to="/pricing">Pricing</Link>,
            key:'1'
        },
        {
            label: <Link  to="/patchrelease">Patch release</Link>,
            key:'2'
        },
        {
            label:<Link  to="/auth">Create account</Link>,
            key:'3'
        }
    ]
    return (
        <header className='navComponent w-full block px-10 py-5 aspect-auto overflow-hidden absolute font-medium text-base bg-transparent '>
                <nav className='navContainer flex flex-row items-center justify-between mx-auto py-0 w-full h-full max-w-6xl relative'>
                    <div className='navWrapper flex flex-row items-center justify-center'>
                        <Link className='logoLink mr-25 max-sm:mx-0' to="/">
                            <img className='max-w-full inline-block w-auto h-auto'src={navLogo} alt="App logo" />
                        </Link>
                        <div className='navLinkWrapper max-sm:hidden'>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/products">Products</Link>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/pricing">Pricing</Link>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/patchrelease">Patch release</Link>
                        </div>  
                    </div>
                    <div className='buttonWrapper flex justify-end '>
                    <Link to={(isAuthenticated === true)?'/personalinfo':'/auth'} className=' max-sm:hidden px-6 py-4 border-2 border-solid border-gray-100/20 rounded-4xl text-gray-100/60 duration-200 ease-in-out transition-colors hover:text-white hover:border-white'>{(isAuthenticated === true)?user.username:'Create account'}</Link>
                    <Dropdown menu={{items}} trigger={['click']}>
                    <button className='menu hidden border-[1px] border-[#96a0b526]  max-sm:block py-[12px] px-[14px]'> 
                        <MenuIcon sx={{ color: 'white' }}/>
                    </button>
                    </Dropdown>
                    </div>
                </nav>
        </header>
      
    )
}