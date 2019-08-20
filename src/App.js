import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  async componentDidMount() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const json = await response.json();
    this.setState({ monsters: json})
  }
  
  handleChange = async e => {
    const value = await e.target.value;
    this.setState({searchField: value})
  }
  

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Mosters Rolodex</h1>
        <SearchBox 
          placeholder="search monsters..."
          handleChange={this.handleChange}
        />
        <CardList nameList={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
