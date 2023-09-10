import { useContext, useRef } from 'react';
import { TrackerContext } from '../../context/tracker-context';

import './TrackerForm.scss';

const TrackerForm = () => {
	const trackerCtx = useContext(TrackerContext);

	const inputRef = useRef<HTMLInputElement | null>(null);

	let errorClasses = 'form__error';

	if (trackerCtx.error.isError) {
		errorClasses = 'form__error form__error--visible';
	}

	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (inputRef.current) {
			trackerCtx.searchIPHandler(inputRef.current.value);
			inputRef.current.value = '';
		}
	};

	return (
		<form className='form' onSubmit={submitFormHandler}>
			<input
				className='form__input'
				placeholder='Search for an IP'
				type='text'
				ref={inputRef}
			/>
			<button className='form__button' type='submit'>
				<svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
					<path fill='none' stroke='#FFF' stroke-width='3' d='M2 1l6 6-6 6' />
				</svg>
			</button>
			<p className={errorClasses}>
				{trackerCtx.error.errorMsg !== ''
					? trackerCtx.error.errorMsg
					: 'Invalid input'}
			</p>
		</form>
	);
};

export default TrackerForm;
