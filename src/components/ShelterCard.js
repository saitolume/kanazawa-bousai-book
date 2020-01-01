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
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%'
  },
  addressInfo: {
    display: 'flex',
    fontSize: '12px',
    lineHeight: '16px'
  },
  postcode: {
    marginRight: '8px'
  }
}

const ShelterCard = ({ shelter, style }) => (
  <li style={{ ...shelterCardStyles.wrapper, ...style }}>
    <div style={shelterCardStyles.name}>{shelter.name}</div>
    <div style={shelterCardStyles.addressInfo}>
      <div style={shelterCardStyles.postcode}>{shelter.postcode}</div>
      <div>{shelter.address}</div>
    </div>
  </li>
)
