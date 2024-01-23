import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

function App() {
	const [showModal, setShowModal] = useState(false);

	const open = () => setShowModal(true);
	const close = () => setShowModal(false);

	return (
		<>
			<main>
				<button className='btn btn-danger' onClick={open}>
					Open
				</button>
				<Modal show={showModal} onClose={close} title='Lorem Ipsum'>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
						suscipit repellat. Deleniti itaque perspiciatis laudantium! Rem
						accusamus nemo nam necessitatibus.
					</p>
				</Modal>
				<Alert />
			</main>
		</>
	);
}

export default App;
