import React from 'react';

export default function Login() {
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
								<div className='relative mb-6' data-te-input-wrapper-init>
									<input
										type='text'
										className='w-full px-2 py-3 outline-gray-600 border '
										id='exampleFormControlInput3'
										placeholder='Email address'
									/>
								</div>

								{/* <!-- Password input --> */}
								<div className='relative mb-6' data-te-input-wrapper-init>
									<input
										type='password'
										className='w-full px-2 py-3 outline-gray-600 border'
										id='exampleFormControlInput33'
										placeholder='Password'
									/>
								</div>

								{/* <!-- Submit button --> */}
								<button type='submit' className='w-full px-7 py-3 outline-gray-600 bg-blue-600 text-white rounded-md'>
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
