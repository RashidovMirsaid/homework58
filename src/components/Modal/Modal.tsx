import React, { MouseEventHandler, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	show: boolean;
	onClose: MouseEventHandler;
	title: string;
}

const Modal: React.FC<Props> = ({ show, onClose, title, children }) => {
	return (
		<>
			<div className='modal show' style={{ display: show ? 'block' : 'none' }}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1 className='modal-title fs-5'>{title}</h1>
							<button className='btn btn-close' onClick={onClose}></button>
						</div>
						<div className='modal-body'>{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
