import React from 'react';
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() { //runs after render(), render() runs again as the state was updated
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(elementOfArray => {
            return elementOfArray.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ? <h1>Loading...</h1> :
        (
            <div className='tc'>
                <div className='flex bg-black'>
                    <h1 className='fl w-90 tl pl4 white'>Catalogue Search</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                </div>
                <Scroll>
                    <CardList className='bg-light-gray' robots={filteredRobots}/>
                </Scroll>
            </div>
        )
        
    }
}

export default App;