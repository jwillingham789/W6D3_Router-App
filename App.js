import React from 'react'
import { Link, browserHistory } from 'react-router'

//React.Component is an object with properties and methods and 'extends' makes it a prototype of App.
// class App extends React.Component  {
//   //if we are not using 'state', then do not include a constructor
//   constructor(props) {
//     //super is native to JavaScript
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello From React</h1>
//         <p className="lead">React Is Going to Take Over The World</p>
//       </div>
//     )
//   }
// }
//this stateless Component is the same as the above except it cannot have state.
var App = (props) => <div className="row">
  <div className="col-sm-12">
      <h1 className="jumbotron text-center">Welcome To The Router App</h1>
      <hr />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/page2">Page2</Link></li>
        <li><Link to="/page3">Page3</Link></li>
      </ul>
      <hr />
      <div className="jumbotron text-center">{props.children}</div>
      <button className="btn btn-success center-block" onClick={() => browserHistory.push('/')} >Go Home</button>
</div>
</div>

//'default' is used when exporting a single component and/or you want it to be the default import
export default App
