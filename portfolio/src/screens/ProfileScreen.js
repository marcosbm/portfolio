import React, { Component }  from 'react';
import PersonalCard from '../components/PersonalCard';

class ProfileScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {};
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