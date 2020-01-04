'use strict'

const googleMapStyles = {
  wrapper: {
    width: '100px',
    height: '100px'
  },
  pin: {
    backgroundColor: 'red',
    borderRadius: '50%',
    width: '16px',
    height: '16px'
  }
}

const GoogleMap = ({ current, target, style }) => {
  const center = {
    lat: (current.latitude + target.latitude) / 2,
    lng: (current.longitude + target.longitude) / 2
  }

  return (
    <div style={{ ...googleMapStyles.wrapper, ...style }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAZPQ7Mh9TL9e9xc6O0yvMqL9wLGo9RzTQ' }}
        defaultCenter={center}
        defaultZoom={13}>
        <div style={googleMapStyles.pin} lat={target.latitude} lng={target.longitude}>
          {target.name}
        </div>
        <div style={googleMapStyles.pin} lat={current.latitude} lng={current.longitude}>
          現在地
        </div>
      </GoogleMapReact>
    </div>
  )
}
