import React from 'react';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider'
import CloseClearHeader from '../../components/CloseClearHeader/CloseClearHeader'
const GuestNumber = () => {
    return (
        <div>
            <CloseClearHeader/>
            <SimpleSlider min={60} max={500} name='Dorośli'/>
            <SimpleSlider min={0} max={100} name='Dzieci'/>
        </div>
    );
};

export default GuestNumber; 