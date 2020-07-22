import React from 'react';

class Categories extends React.Component {
  state = {
    active: 0,
  };
  onSelectItem = (index) => {
    this.setState({
      active: index,
    });
  };

  render() {
    const { items, onClick } = this.props;

    return (
      <div className="categories">
        <ul>
          {items.map((name, index) => (
            <li
              className={this.state.active === index ? 'active' : ''}
              onClick={() => this.onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;

// export default function Categories({ items, onClick }) {
//   return (
//     <div className="categories">
//       <ul>
//         <li className="active">Все</li>
//         {items.map((name, index) => (
//           <li onClick={() => onClick(name)} key={`${name}_${index}`}>
//             {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
