import React from 'react';

const StartButton = ({ setGameStarted, runButtonSequence, gameStarted, playerSequence, simonSequence }) => {
	return (
        <button
            disabled={gameStarted && playerSequence.length !== simonSequence.length ? true : false}
			onClick={() => {
                setGameStarted(true);
                runButtonSequence()
			}}
		>
			StartButton
		</button>
	);
};

export default StartButton;
