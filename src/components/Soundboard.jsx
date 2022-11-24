import React from 'react';
import { Buttoncard } from './Buttoncard';
import StartButton from './StartButton';

export const Soundboard = () => {

	const soundButtons = [
		{
			id: 1,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
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
		},
		{
			id: 9,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
			order: null,
		},
	];

	return (
		<>
			<div className="sound--board">
				{soundButtons.map((soundButton) => (
					<Buttoncard
						key={soundButton.id}
						soundButton={soundButton}
					/>
				))}
			</div>
			<StartButton />
		</>
	);
};
