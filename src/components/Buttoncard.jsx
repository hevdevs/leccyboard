import React, { useState } from 'react';
import sadWah from '../assets/wah.mp3';

export const Buttoncard = ({
	soundButton,
	setPlayerSequence,
	playerSequence,
	setGameStarted,
	simonSequence,
	setSimonSequence,
	setGamesWon,
	setSequencePos,
	sequencePos,
	setHighScore,
	gamesWon,
	highscore,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const audio = new Audio(soundButton.link);
	const failAudio = new Audio(sadWah)

	const handleButtonPress = () => {
		setIsPlaying(true);
		if (simonSequence[sequencePos] !== soundButton.id) {
			//lose scenario
			if (gamesWon > highscore) {
				setHighScore(gamesWon);
			}
			failAudio.play();
			setPlayerSequence([]);
			setSequencePos(0);
			setTimeout(() => {
				setIsPlaying(false);
			}, 350);
			setSimonSequence([]);
			setGamesWon(0);
			setGameStarted(false);
		} else if (
			(simonSequence[sequencePos] === soundButton.id &&
				simonSequence.length) ===
			playerSequence.length + 1
		) {
			//win scenario
			audio.play();
			setTimeout(() => {
				setIsPlaying(false);
			}, 350);
			setGamesWon((currVal) => ++currVal);
			setSequencePos(0);
			setPlayerSequence([]);
			setGameStarted(false);
		} else {
			//correct button press, sequence incomplete
			setSequencePos((currVal) => {
				return ++currVal;
			});
			setPlayerSequence((currSequence) => {
				return [...currSequence, soundButton.id];
			});
			audio.play();
			setTimeout(() => {
				setIsPlaying(false);
			}, 300);
		}
	};

	return (
		<div
			id={soundButton.id}
			className={isPlaying ? 'button--card--active' : 'button--card'}
			onClick={handleButtonPress}
		></div>
	);
};
