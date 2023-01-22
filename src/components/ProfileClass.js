import React from 'react';
import {SiGoogle, SiLinkedin, SiGithub } from 'react-icons/si';
import Social from './Social';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
        name : "Dummy Name",
        bio : "Dummy content"
      }
    }
    console.log("Profile Component - constructor with props : ", this.props.name, " from parent and state : ", this.state, " from this component");
  }

  async componentDidMount() {
    console.log("Profile Component - componentDidMount", this.props.name);
    const data = await fetch (`https://api.github.com/users/${this.props.name}`);
    const json = await data.json();
  
    this.setState({
      userInfo : json
    })
  }

  componentDidUpdate() {
    console.log("Profile Component - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Profile Component - componentWillUnmount")
  }

  render() {
    const {userInfo} = this.state;
    console.log("Profile Component - render");
    return (
      <div className="profile-card"> 
        <div>
          <img className="profile-img" src={userInfo.avatar_url} alt={userInfo.name} />
        </div>
        <div className="profile-details">
          <p className="profile-bio">{userInfo.bio}</p>
          <Social />
        </div>
      </div>
    )
  }
    
}

export default Profile;