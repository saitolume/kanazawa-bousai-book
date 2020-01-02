'use strict'

const { BrowserRouter, Route, Switch } = ReactRouterDOM
const isPC = innerWidth >= 450

const App = () => {
  const { syncLocation } = useGeolocation()

  if (isPC) return <p>本アプリはスマートフォンのみに対応しています。</p>

  return (
    <BrowserRouter>
      <Header onClickSyncButton={syncLocation} />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/bookmarks" component={Bookmarks} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
