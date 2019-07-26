import React, { Component }  from 'react';
import PersonalCard from '../components/PersonalCard';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        document.title = 'MBM - Profile';
      }

    render() {
        return(
            <div className='Profile ScreenContainer'>
                <PersonalCard></PersonalCard>
            </div>
        );
    }

}

export default ProfileScreen;