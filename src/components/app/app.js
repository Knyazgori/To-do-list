import React, {Component} from 'react';
import AppHeader from '../app-header'
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel'


import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../app-header/app-header.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 'adasdlllllls'},
                {label: 'Going to learn React', important: true, id: 'adasdsads'},
                {label: 'Going to', important: false, id: 'adasdewrgtbtbcvs'},
                {label: 'Going to learn ', important: false, id: 'adascbcxs'}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }    

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id) // Смотрим на каком месте находится элемент в массиве
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);


            const newArr = [...before, ...after]

            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm/>
            </div>
        )
    }
}