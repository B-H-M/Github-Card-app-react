import React, { Component } from 'react';
import './index.css';


class Card extends Component {

    render(){
        const profile = this.props;
        return(
            <div className="github-profile">
                <img src={profile.avatar_url} alt="profile avatar" />
                <div className="info">
                    <div className="name"> {profile.name} </div>
                    <div className="company"> {profile.company} </div>
                </div>
            </div>
        )
    }
}

export default Card;