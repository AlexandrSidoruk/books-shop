import React from 'react'
import {Menu, Input} from 'semantic-ui-react'

//Переписать на хуки и функии

/*class Filter extends Component {
    state = { filterBy: 'all' }

    handleItemClick = (e, { name }) => {
        const { setFilter } = this.props;
        this.setState({ filterBy: name });
        setFilter(name)
    };

    render() {
        const { filterBy } = this.state;


        return (
            <Menu secondary>
                <Menu.Item
                    name='all'
                    active={filterBy === 'all'}
                    onClick={setFilter.bind(this, '')}
                />
                <Menu.Item
                    name='popular'
                    active={filterBy === 'popular'}
                    onClick={setFilter.bind(this, '')}
                />
                <Menu.Item
                    name='Price_high'
                    active={filterBy === 'Price_high'}
                    onClick={setFilter.bind(this, '')}
                />
                <Menu.Item
                    name='Price_low'
                    active={filterBy === 'Price_low'}
                    onClick={setFilter.bind(this, '')}
                />
                <Menu.Item
                    name='author'
                    active={filterBy === 'author'}
                    onClick={setFilter.bind(this, '')}
                />

            </Menu>
        )
    }
}*/


const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => (
    <Menu secondary>
        <Menu.Item
            active={filterBy === 'all'}
            onClick={setFilter.bind(this, 'all')}

        > All </Menu.Item>
        <Menu.Item
            active={filterBy === 'popular'}
            onClick={setFilter.bind(this, 'popular')}>
            Popular
        </Menu.Item>
        <Menu.Item
            active={filterBy === 'Price_high'}
            onClick={setFilter.bind(this, 'Price_high')}>
            Price high
        </Menu.Item>
        <Menu.Item
            active={filterBy === 'Price_low'}
            onClick={setFilter.bind(this, 'Price_low')}>
            Price low
        </Menu.Item>
        <Menu.Item
            active={filterBy === 'author'}
            onClick={setFilter.bind(this, 'author')}>
            Author
        </Menu.Item>
        <Menu.Item>
            <Input icon="search"
                   onChange={e => setSearchQuery(e.target.value)}
                   value={searchQuery} placeholder="Search..."/>
        </Menu.Item>
    </Menu>);


export default Filter;
