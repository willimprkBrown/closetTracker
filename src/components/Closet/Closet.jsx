import React, { useState } from 'react'
import './Closet.css'
import ImageCard from './ImageCard'
import closetImage from '../../assets/closet.PNG'

const Closet = () => {
  const [cards, setCards] = useState([])

  const handleAddCard = (category) => {
    setCards([...cards, { id: Date.now(), image: null, category }])
  }

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  const handleImageUpload = (id, newImage) => {
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, image: newImage } : card
      )
    )
  }

  const renderCarousel = (category) => {
    const filteredCards = cards.filter((card) => card.category === category)

    return (
      <div
        className={`closet__${category} grid closet__carousel`}
        style={{ '--quantity': filteredCards.length }}
      >
        <div className="closet__slider">
          {filteredCards.map((card, index) => (
            <div
              className="item"
              key={card.id}
              style={{ '--position': index + 1 }}
            >
              <ImageCard
                image={card.image}
                onUpload={(newImage) => handleImageUpload(card.id, newImage)}
                onDelete={() => handleDeleteCard(card.id)}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="closet container section" id="closet">
      {/* Add buttons to create cards for each category */}
      <div className="closet__controls">
        <button onClick={() => handleAddCard('top')}>Add to Top</button>
        <button onClick={() => handleAddCard('bottom')}>Add to Bottom</button>
        <button onClick={() => handleAddCard('shoes')}>Add to Shoes</button>
      </div>

      <div className="closet__container grid">
        {renderCarousel('top')}
        {renderCarousel('bottom')}
        {renderCarousel('shoes')}
      </div>
    </section>
  )
}

export default Closet
