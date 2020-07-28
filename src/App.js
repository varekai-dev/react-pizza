import React, { useEffect, useState } from 'react'
import { Header } from './components'
import { connect } from 'react-redux'

import { Home, Cart } from './pages'
import { Route } from 'react-router-dom'
import axios from 'axios'
// import store from './redux/store'
import { setPizzas } from './redux/actions/pizzas'

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      // store.dispatch(setPizzas(data.pizzas))
    })
  }
  render() {
    // console.log(this.props)

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={[]} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App)
