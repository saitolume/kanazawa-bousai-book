'use strict'

const { useParams } = ReactRouterDOM

const shelterStyles = {
  wrapper: {
    margin: '88px 16px 100px',
    width: '100%',
    minHeight: '100vh'
  },
  map: {
    width: `90%`,
    height: `${innerHeight / 3}px`
  }
}

const Shelter = () => {
  const { id } = useParams()
  const { location } = useGeolocation()
  const [isDisplayed, setIsDisplayed] = React.useState(false)
  const shelter = map.data.find(shelter => shelter.id == id)

  React.useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      setIsDisplayed(true)
    }
  }, [location])

  return (
    <div style={shelterStyles.wrapper}>
      <h2>{shelter.name}</h2>
      {isDisplayed && <GoogleMap current={location} target={shelter} style={shelterStyles.map} />}
    </div>
  )
}
