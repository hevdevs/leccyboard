import React, {useState} from 'react'

export const Buttoncard = ({ soundButton }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio(soundButton.link);
  const handleButtonPress = () => {
    setIsPlaying(true)
    audio.play()
    setTimeout(() => {
      setIsPlaying(false)
    }, 300)
  }

  return (
    <div className={isPlaying ? 'button--card--active' : 'button--card'} onClick={handleButtonPress}>{soundButton.id}</div>
  )
}
