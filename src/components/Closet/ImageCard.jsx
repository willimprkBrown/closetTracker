import React from 'react'

const ImageCard = ({ id, image, onDelete, onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        onUpload(id, reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="image-card">
      {image ? (
        <img src={image} alt="Uploaded" className="image-card__preview" />
      ) : (
        <label className="image-card__upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="image-card__input"
          />
          +
        </label>
      )}
      <button onClick={() => onDelete(id)} className="image-card__delete">
        <i className="icon-trash"></i>
      </button>
    </div>
  )
}

export default ImageCard
