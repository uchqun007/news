import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../image/logo.png';

export default function Header() {
	return (
		<header className='w-full h-20 bg-[#E5E5E5;] flex items-center justify-between px-20'>
			<Link to='/'>
				<img className='w-48' src={logo} alt='Logo' />
			</Link>
			<div className='flex items-center'>
				<Link className='text-md pl-8' to='/'>
					Home
				</Link>
				<Link className='text-md pl-8' to='/about'>
					About
				</Link>
				<Link className='text-md pl-8' to='/popular'>
					Popular News
				</Link>
				<Link className='text-md pl-8' to='/blog'>
					Blog
				</Link>
				<Link className='text-md pl-8' to='/contact'>
					Contact
				</Link>
				<FiSearch className='text-xl cursor-pointer ml-8' />
			</div>
		</header>
	);
}
