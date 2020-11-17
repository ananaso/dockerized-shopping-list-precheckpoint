import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  genListItems() {
    return (
      this.props.itemList.map(item => {
        return (
          <ListItem
            key={`ListItem-${item}`}
            item={item}
            deleteItem={this.props.deleteItem}
            itemTransfer={this.props.itemTransfer}
            shoppingCart={this.props.shoppingCart}
          />
        );
      })
    );
  }

  render() {
    return (
      <div>
        <ul>
          {this.genListItems()}
        </ul>
      </div>
    );
  }
}

export default List;