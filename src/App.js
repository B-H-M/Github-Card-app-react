import React, { Component} from 'react';
import './index.css'
import CardList from './CardList'
import CardForm from './CardForm';


// const testData = [
//   {
//       name: 'Bakare Hakinbola', 
//       avatar_url: "https://avatars3.githubusercontent.com/u/35092231?v=4",
//       company: 'CodeBit'
//   },
//   {
//       name: 'Akolade Jubril', 
//       avatar_url: "https://avatars0.githubusercontent.com/u/54190346?v=4",
//       company: 'Code Mentor'
//   },
//   {
//       name: 'Abdulsamad Ola', 
//       avatar_url: "https://avatars1.githubusercontent.com/u/44578312?v=4",
//       company: 'CodeBit'
//   },
// ];



class App extends Component {

  state={
    profile: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profile: [...prevState.profile, profileData]
    })
    )
  }
  
  render() {
    const {profile} = this.state;
    return (
      <div className="App">
       <h1 className="header"> {this.props.title} </h1>
       <CardForm onSubmit={this.addNewProfile}/>
       <CardList profile={profile} />
      </div>
    );
  }
}

export default App;
