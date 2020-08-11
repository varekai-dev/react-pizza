const constants = {}

const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload
      }
    case 'ADD_PIZZA_CART':
      return {
        ...state,
        itemsCount: action.payload
      }
    default:
      return state
  }
}

export default cart
