import './TrackerForm.scss';

const TrackerForm = () => {
	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('form submitted!');
    };
    
    // form__input--error class to be added to input on error

	return (
		<form className='form' onSubmit={submitFormHandler}>
			<input
				className='form__input'
				placeholder='Search for an IP'
				type='text'
			/>
			<button className='form__button' type='submit'>
				<svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
					<path fill='none' stroke='#FFF' stroke-width='3' d='M2 1l6 6-6 6' />
				</svg>
			</button>
			<p className='form__error'>Invalid IP address</p>
		</form>
	);
};

export default TrackerForm;
