import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps} />      
            </li>  // Используем spread оператор {...item} = label={item.label} important={item.important}
        )
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}

export default PostList