import React, { useState } from 'react';
import { Buttoncard } from './Buttoncard';
import StartButton from './StartButton';

export const Soundboard = () => {
	const [sequencePos, setSequencePos] = useState(0);
	const [gamesWon, setGamesWon] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [simonSequence, setSimonSequence] = useState([8,4,2,3])
	const [playerSequence, setPlayerSequence] = useState([])

	const soundButtons = [
		{
			id: 0,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
			order: null,
		},
		{
			id: 1,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
			order: null,
		},
		{
			id: 2,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
			order: null,
		},
		{
			id: 3,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
			order: null,
		},
		{
			id: 4,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
			order: null,
		},
		{
			id: 5,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
			order: null,
		},
		{
			id: 6,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
			order: null,
		},
		{
			id: 7,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
			order: null,
		},
		{
			id: 8,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
			order: null,
		}
	];


	const runButtonSequence = () => {
		simonSequence.forEach((num, i) => {
			setTimeout(() => {
				const button = document.getElementById(num)
				button.classList.add('button--card--active');
				const currButton = soundButtons[num]
				const audio = new Audio(currButton.link)
				audio.play()
				
				setTimeout(() => {
					button.classList.remove('button--card--active');
				}, 500)
			}, 500 * i)
		})
	}

	return (
		<>
			{gamesWon}
			<div className="sound--board">
				{soundButtons.map((soundButton) => (
					<Buttoncard
						key={soundButton.id}
						soundButton={soundButton}
						playerSequence={playerSequence}
						setPlayerSequence={setPlayerSequence}
						playerSequence={playerSequence}
						simonSequence={simonSequence}
						setGameStarted={setGameStarted}
						setGamesWon={setGamesWon}
						sequencePos={sequencePos}
						gameStarted={gameStarted}
						setSequencePos={setSequencePos}
					/>
				))}
			</div>
			<StartButton
				setGameStarted={setGameStarted}
				runButtonSequence={runButtonSequence}
				gameStarted={gameStarted}
				playerSequence={playerSequence}
				simonSequence={simonSequence}
				setSequencePos={setSequencePos}
			/>
		</>
	);
};
