import React, {Component} from 'react';



export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState(
            ({important}) => ({
                important: !important
        })
        )
    }

    onLike() {
        this.setState(
            ({like}) => ({
                like: !like
        })
        )
    }


    render() {


        const {label, onDelete} = this.props; // свойста которые будут приходить в каждый новосозданный компонент 
        const {important, like} = this.state;
        

        let classNames = 'app-list-item d-flex justify-content-between';


        if (important) {
            classNames +=' important'; // если important true - добавляем его в classNames
        }

        if (like) {
            classNames +=' like'; // если like true - добавляем его в classNames
        }


        return (
            <div className={classNames}>
                <span
                className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button 
                    type='button' 
                    className='btn-star btn-sm'
                    onClick={this.onImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button 
                    type='button' 
                    className='btn-trash btn-sm'
                    onClick={onDelete}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                        <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}
