import React, { Component }  from 'react';
import ImgMediaCard from '../components/Card';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {};
    }

    render() {

        return (
            <div className='HomeContainer'>
                <h2>Hello world</h2>
                <ImgMediaCard></ImgMediaCard>
            </div>
        );
    }
}

export default HomeScreen;
