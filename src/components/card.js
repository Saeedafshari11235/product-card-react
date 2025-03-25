import React from 'react'
import './card.css'

export default function Card() {
  return (
    <div className='card'>
        <div className='image-container'>
            <img src='' alt=''/>
        </div>
        <div className='header-container'>
            <h4>header</h4>
        </div>
        <div className='category-container'>
            <span>category</span>
        </div>
        <div className='description-container'>
            <p>
                description
            </p>
        </div>
        <div className='buttons-container'>
            <button>button</button>
        </div>
    </div>
  )
}
