import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.item;
    this.inCart = props.shoppingCart;
  }

  render() {
    return (
      <li key={`${this.name}`} id={`${JSON.stringify({
          name:this.name,
          inCart:this.inCart
      })}`}>
        <div className='ListItem'>
          {this.name}
          <button type='submit' onClick={this.props.deleteItem} >X</button>
          {this.inCart ? <div></div> : <button type='submit' onClick={this.props.itemTransfer}>&#8594;</button>}
        </div>
      </li>
    );
  }
}

export default ListItem;