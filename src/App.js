import React, { useEffect } from 'react'
import { Header } from './components'
import { useDispatch } from 'react-redux'
import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'
import axios from 'axios'
import { setPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  )
}

export default App

// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas)
//     })
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route exact path="/" render={() => <Home items={this.props.items} />} />
//           <Route exact path="/cart" component={Cart} />
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchtoProps = {
//   setPizzas
// }

// export default connect(mapStateToProps, mapDispatchtoProps)(App)
