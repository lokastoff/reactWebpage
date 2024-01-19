import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export const HeaderNoAnim = () => {
    const navLogo = '/src/assets/nav_logo.png'
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    return (
        <header className='navComponent w-full block px-10 py-5 aspect-auto overflow-hidden absolute font-medium text-base bg-transparent'>
                <nav className='navContainer flex flex-row items-center justify-between mx-auto py-0 w-full h-full max-w-6xl relative'>
                    <div className='navWrapper flex flex-row items-center justify-center'>
                        <Link className='logoLink mr-25' to="/">
                            <img className='max-w-full inline-block w-auto h-auto'src={navLogo} alt="App logo" />
                        </Link>
                        <div className='navLinkWrapper'>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/products">Products</Link>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/pricing">Pricing</Link>
                            <Link className = 'inline-block p-5 mr-10 text-lg text-gray-100/40 duration-200 ease-in-out transition-colors hover:text-white' to="/patchrelease">Patch release</Link>
                        </div>  
                    </div>
                    <div className='buttonWrapper flex justify-end'>
                    <Link to={(isAuthenticated === true)?'/personalinfo':'/auth'} className='px-6 py-4 border-2 border-solid border-gray-100/20 rounded-4xl text-gray-100/60 duration-200 ease-in-out transition-colors hover:text-white hover:border-white'>{(isAuthenticated === true)?user.username:'Create account'}</Link>
                    </div>
                </nav>
        </header>
      
    )
}