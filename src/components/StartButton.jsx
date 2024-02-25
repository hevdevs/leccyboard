import React from "react";

const StartButton = ({
	setGameStarted,
	runButtonSequence,
	gameStarted,
	playerSequence,
	simonSequence,
	setDisableButtons,
}) => {
	return (
		<button
			className="start--button"
			disabled={
				gameStarted && playerSequence.length !== simonSequence.length
					? true
					: false
			}
			onClick={async () => {
				setGameStarted(true);
				await runButtonSequence();
			}}
		>
			{simonSequence.length === 0 ? "Play" : "Next"}
		</button>
	);
};

export default StartButton;
