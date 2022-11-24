import React from 'react'

export const Buttoncard = ({ soundButton }) => {
  const audio = new Audio(soundButton.link);

  return (
    <div className='button--card' onClick={() => audio.play()}>{soundButton.id}</div>
  )
}
