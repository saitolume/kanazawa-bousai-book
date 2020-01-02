'use strict'

const shelterCardStyles = {
  wrapper: {
    borderRadius: '8px',
    boxShadow: '0 2px 12px #00000025',
    boxSizing: 'border-box',
    listStyle: 'none',
    padding: '16px',
    width: '100%'
  },
  flexBox: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '4px',
    width: '100%'
  },
  name: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '90%'
  },
  starIcon: {
    display: 'block',
    lineHeight: '100%'
  },
  addressInfo: {
    display: 'flex',
    fontSize: '12px',
    lineHeight: '16px'
  },
  postcode: {
    marginRight: '8px',
    width: '20%'
  },
  address: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '80%'
  }
}

const ShelterCard = ({ shelter, style, bookmarked, addBookmark, removeBookmark }) => {
  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(shelter.id)
    } else {
      addBookmark(shelter.id)
    }
  }

  return (
    <li style={{ ...shelterCardStyles.wrapper, ...style }}>
      <div style={shelterCardStyles.flexBox}>
        <div style={shelterCardStyles.name}>{shelter.name}</div>
        <i
          className={`fa${bookmarked ? 's' : 'r'} fa-star`}
          style={shelterCardStyles.starIcon}
          onClick={toggleBookmark}></i>
      </div>
      <address style={shelterCardStyles.addressInfo}>
        <div style={shelterCardStyles.postcode}>{shelter.postcode}</div>
        <div style={shelterCardStyles.address}>{shelter.address}</div>
      </address>
    </li>
  )
}
