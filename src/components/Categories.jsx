import React from 'react'
import PropTypes from 'prop-types'
// class Categories extends React.Component {
//   state = {
//     active: 0,
//   };
//   onSelectItem = (index) => {
//     this.setState({
//       active: index,
//     });
//   };

//   render() {
//     const { items, onClick } = this.props;

//     return (
//       <div className="categories">
//         <ul>
//           {items.map((name, index) => (
//             <li
//               className={this.state.active === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Categories;

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''} key={`${item}_${index}`}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func
}

Categories.defaultProps = {
  activeCategory: null,
  items: []
}

export default Categories
