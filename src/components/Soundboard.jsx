import React from 'react'
import { Buttoncard } from './Buttoncard'

export const Soundboard = () => {
    const soundButtons = [{
        id: 1,
        description: '',
        link: ''
    }, {
        id: 2,
        description: '',
        link: ''
    }, {
        id: 3,
        description: '',
        link: ''
    }]

  return (
      <div className='sound--board'>
          {soundButtons.map((soundButton) => <Buttoncard soundButton={soundButton} />)}
      </div>
      
  )
}
