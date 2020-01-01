'use strict'

/**
 * latitude: 緯度
 * longitude: 経度
 * syncPosition: 現在地の更新
 */
const useGeolocation = () => {
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)

  const syncPosition = React.useCallback(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setLatitude(latitude)
      setLongitude(longitude)
    })
  }, [])

  // Logger
  React.useEffect(() => {
    console.log(latitude, longitude)
  }, [latitude, longitude])

  return {
    latitude,
    longitude,
    syncPosition
  }
}
