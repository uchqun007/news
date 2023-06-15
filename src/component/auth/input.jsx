import React from 'react';

export default function Input({ placeholder, type, state, setState }) {
	return (
		<div className='relative mb-6' data-te-input-wrapper-init>
			<input
				type={type}
				value={state}
				onChange={e => setState(e.target.value)}
				className='w-full px-2 py-3 outline-gray-600 border '
				placeholder={placeholder}
			/>
		</div>
	);
}
