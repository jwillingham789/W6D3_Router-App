export (<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path="page1" component={Page1} />
    <Route path="page2" component={Page2} />
    <Route path="page3" component={Page3} />
  </Route>
</Router>)
