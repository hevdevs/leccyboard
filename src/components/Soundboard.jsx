import React, { useState } from "react";
import { Buttoncard } from "./Buttoncard";
import StartButton from "./StartButton";

export const Soundboard = () => {
	const [sequencePos, setSequencePos] = useState(0);
	const [gamesWon, setGamesWon] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [simonSequence, setSimonSequence] = useState([]);
	const [playerSequence, setPlayerSequence] = useState([]);
	const [highscore, setHighScore] = useState(0);
	const [disableButtons, setDisableButtons] = useState(true);

	const soundButtons = [
		{
			id: 0,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
			order: null,
		},
		{
			id: 1,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
			order: null,
		},
		{
			id: 2,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
			order: null,
		},
		{
			id: 3,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
			order: null,
		},
		{
			id: 4,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
			order: null,
		},
		{
			id: 5,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
			order: null,
		},
		{
			id: 6,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
			order: null,
		},
		{
			id: 7,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
			order: null,
		},
		{
			id: 8,
			description: "",
			link: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
			order: null,
		},
	];

	const runButtonSequence = () => {
		const vals = [...simonSequence];
		vals.push(Math.floor(Math.random() * 9));
		setSimonSequence(vals);

		vals.forEach(async (num, i) => {
			await setTimeout(() => {
				const button = document.getElementById(num);
				button.classList.add("button--card--active");
				const currButton = soundButtons[num];
				const audio = new Audio(currButton.link);
				audio.play();

				setTimeout(() => {
					button.classList.remove("button--card--active");
				}, 400);
			}, 600 * i);
			setDisableButtons(false);
		});
	};

	return (
		<>
			<div className="score--container">
				<h2 id="curr--score">Score: {gamesWon}</h2>
				<h3 id="best--score">Best: {highscore}</h3>
				<StartButton
					setDisableButtons={setDisableButtons}
					setGameStarted={setGameStarted}
					runButtonSequence={runButtonSequence}
					gameStarted={gameStarted}
					playerSequence={playerSequence}
					simonSequence={simonSequence}
					setSequencePos={setSequencePos}
				/>
			</div>
			<div className="sound--board">
				{soundButtons.map((soundButton) => (
					<Buttoncard
						disableButtons={disableButtons}
						setDisableButtons={setDisableButtons}
						key={soundButton.id}
						soundButton={soundButton}
						playerSequence={playerSequence}
						setPlayerSequence={setPlayerSequence}
						simonSequence={simonSequence}
						setSimonSequence={setSimonSequence}
						setGameStarted={setGameStarted}
						setGamesWon={setGamesWon}
						sequencePos={sequencePos}
						gameStarted={gameStarted}
						setSequencePos={setSequencePos}
						setHighScore={setHighScore}
						gamesWon={gamesWon}
						highscore={highscore}
					/>
				))}
			</div>
		</>
	);
};
