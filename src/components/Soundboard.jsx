import React from 'react';
import { Buttoncard } from './Buttoncard';

export const Soundboard = () => {
	// https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3
	// https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3
	const soundButtons = [
		{
			id: 1,
			description: '',
			link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
			order: null,
		},
		{
			id: 2,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
		},
		{
			id: 3,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
		},
		{
			id: 4,
			description: '',
			link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
		},
		{
			id: 5,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		},
		{
			id: 6,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
		},
		{
			id: 7,
			description: '',
			link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
		},
		{
			id: 8,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
		},
		{
			id: 9,
			description: '',
			link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
		},
	];

	return (
		<div className="sound--board">
				{soundButtons.map((soundButton) => (
					<Buttoncard key={soundButton.id} soundButton={soundButton} />
				))}
		</div>
	);
};
