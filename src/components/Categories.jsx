import React, { useState } from 'react';

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

export default function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              onClick={() => onSelectItem(index)}
              className={activeItem === index ? 'active' : ''}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
