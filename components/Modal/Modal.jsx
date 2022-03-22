import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ show, setIsModalOpen, children }) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser && show) {
		return ReactDOM.createPortal(
			<div className="modal-overlay absolute top-0 right-0  w-screen h-screen flex items-center justify-center">
				<div className="modal w-1/2 h-1/2 bg-gray-100 flex items-center flex-col justify-center relative p-8">
					<button
						onClick={() => setIsModalOpen(false)}
						className="absolute right-4 top-0 p-4"
					>
						X
					</button>
					{children}
				</div>
			</div>,
			document.getElementById("modal-root")
		);
	} else {
		return null;
	}
}
