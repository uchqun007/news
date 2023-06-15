import React, { useState } from 'react';
import Input from './input';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../../slice/auth';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isLoading } = useSelector(state => state.auth);

	const loginHandler = e => {
		e.preventDefault();
		dispatch(loginUserStart());
	};

	return (
		<div>
			<section className='h-screen'>
				<div className='container h-full px-6 py-24'>
					<div className='g-6 flex h-full flex-wrap items-center justify-center lg:justify-between'>
						{/* <!-- Left column container with background--> */}
						<div className='mb-12 md:mb-0 md:w-8/12 lg:w-6/12'>
							<img
								src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
								className='w-full'
								alt='Phone image'
							/>
						</div>

						{/* <!-- Right column container with form --> */}
						<div className='md:w-8/12 lg:ml-6 lg:w-5/12'>
							<form>
								{/* <!-- Email input --> */}
								<Input placeholder={'Email'} type={'email'} state={email} setState={setEmail} />
								{/* <!-- Password input --> */}
								<Input placeholder={'Password'} type={'password'} state={password} setState={setPassword} />

								{/* <!-- Submit button --> */}
								{isLoading ? (
									<button
										onClick={loginHandler}
										type='submit'
										className='w-full px-7 py-3 outline-gray-600 bg-blue-400 text-white rounded-md'
									>
										Loading...
									</button>
								) : (
									<button
										onClick={loginHandler}
										type='submit'
										className='w-full px-7 py-3 outline-gray-600 bg-blue-600 text-white rounded-md'
									>
										Login
									</button>
								)}
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
