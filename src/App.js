import './App.css';
import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: ['bread','cheese'],
      shoppingCart: ['wine', 'olives']
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    
    let textbox = e.target.firstChild;
    const item = textbox.value;
    textbox.value = '';

    this.setState({shoppingList: this.state.shoppingList.concat(item)});
  }

  handleItemDelete = (e) => {
    e.preventDefault();
    
    const listitem = e.target.parentElement.parentElement;
    const item = JSON.parse(listitem.id);
    
    if (item.inCart) {
      // remove from ShoppingCart in state
      let shoppingCart = this.state.shoppingCart.concat();
      const itemIndex = shoppingCart.indexOf(item.name);
      shoppingCart.splice(itemIndex, 1);
      this.setState({shoppingCart: shoppingCart})
    } else {
      // remove from ShoppingList in state
      let shoppingList = this.state.shoppingList.concat();
      const itemIndex = shoppingList.indexOf(item.name);
      shoppingList.splice(itemIndex, 1);
      this.setState({shoppingList: shoppingList})
    }

  }

  handleItemTransfer = (e) => {
    e.preventDefault();

    let shoppingList = this.state.shoppingList.concat();
    const listitem = e.target.parentElement.parentElement;
    const item = JSON.parse(listitem.id);
    const itemIndex = shoppingList.indexOf(item.name);
    shoppingList.splice(itemIndex, 1);
    this.setState({
      shoppingList: shoppingList,
      shoppingCart: this.state.shoppingCart.concat(item.name)
    })
  }

  handleClearList = () => {
    this.setState({shoppingList: []})
  }

  render() {
    return (
      <div className="App-header">
        <div className="listSidebySide">
          <List itemList={this.state.shoppingList} deleteItem={this.handleItemDelete} itemTransfer={this.handleItemTransfer} shoppingCart={false}/>
          <List itemList={this.state.shoppingCart} deleteItem={this.handleItemDelete} shoppingCart={true}/>
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text'/>
        </form>
        <button onClick={this.handleClearList}>Delete Shopping List</button>
      </div>
    );
  }
}

export default App;
