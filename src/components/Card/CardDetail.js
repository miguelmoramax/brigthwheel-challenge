import './styles.css'
import React from 'react'

import StarredButton from '../StarredButton/StarredButton'

const CardDetail = ({
  onStarred,
  starred,
  name,
  type,
  image,
  taxonomy,
  productCategory,
  previewText,
  description,
  address,
}) => {
  return (
    <div className="card">
      {type !== 'company' && (
        <img src={image || 'default.png'} alt={name} className="card-image" />
      )}
      <div>
        <div className="card-name">
          <span>{name}</span>
        </div>
        {type === 'animal' && (
          <div className="card-animal-scientific-name">
            {taxonomy.scientificName}
          </div>
        )}
        {type === 'product' && (
          <div className="card-product">
            <div>Category : {productCategory}</div>
            <div>Preview : {previewText}</div>
          </div>
        )}

        {type === 'company' && (
          <div className="card-company-data">
            <div>Description : {description}</div>
            {Object.keys(address).map((k) => (
              <React.Fragment key={k}>
                <div>
                  {k} : {address[k]}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      <StarredButton onClick={() => onStarred(name)} starred={starred} />
    </div>
  )
}

export default CardDetail
