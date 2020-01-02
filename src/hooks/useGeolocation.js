'use strict'

/**
 * latitude: 緯度
 * longitude: 経度
 * syncLocation: 現在地の更新
 */
const useGeolocation = () => {
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)

  const syncLocation = React.useCallback(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setLatitude(latitude)
      setLongitude(longitude)
    })
  }, [])

  React.useEffect(() => {
    syncLocation()
  }, [])

  return {
    location: {
      latitude,
      longitude
    },
    syncLocation
  }
}
