import React, {useState} from 'react'

export const Buttoncard = ({ soundButton, playerSequence, setPlayerSequence, simonSequence }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio(soundButton.link);
  
  const handleButtonPress = () => {
    setIsPlaying(true)
    if (soundButton.id !== simonSequence[soundButton.id]) {
      console.log('LOSERR!')
    } else {
      setPlayerSequence((currSequence) => {
        return [...currSequence, soundButton.id]
      });
      audio.play()
      setTimeout(() => {
        setIsPlaying(false)
      }, 300)
    }
  
  }

  return (
    <div id={soundButton.id} className={isPlaying ? 'button--card--active' : 'button--card'} onClick={handleButtonPress}></div>
  )
}
