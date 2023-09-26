"use client"

import React from 'react';

export const Button = ({ onClick, name}) => {
	return (
		<button className="
		bg-white 
		text-black
			px-8 
			py-2 
			rounded-2xl
			border 
			border-black
			hover:bg-black
			hover:text-white
			transition
			hover:border-white
			"
			>
			{name}
		</button>
	)
}