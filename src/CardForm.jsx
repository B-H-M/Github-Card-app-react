import React, { Component } from 'react'

export class CardForm extends Component {
    state = {
        username: ''
    }

    onChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://api.github.com/users/${this.state.username}`)
        const data = await res.json();
        this.props.onSubmit(data);
        this.setState({username: ''})
    }

    render() {
        return (
            <div>
                <form className="cardForm" onSubmit={this.onSubmit}>
                    <input type="text" 
                    placeholder="GitHub username" 
                    value={this.state.username}
                    onChange={this.onChange}
                    required />
                    <button>Add Card</button>
                </form>
                
            </div>
        )
    }
}

export default CardForm;
