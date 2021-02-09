import React from 'react';
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



const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'adasdlllllls'},
        {label: 'Going to learn React', important: true, id: 'adasdsads'},
        {label: 'Going to', important: false, id: 'adasdewrgtbtbcvs'},
        {label: 'Going to learn ', important: false, id: 'adascbcxs'}
    ];

    return (
        <div className='app'>
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App; 