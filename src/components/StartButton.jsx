import React from 'react';

const StartButton = ({ setGameStarted }) => {
	return (
		<button
			onClick={() => {
				setGameStarted(true);
			}}
		>
			StartButton
		</button>
	);
};

export default StartButton;
