import React from 'react';

const Map = () => {
    return (
        <div className="relative h-96">
            <iframe
                className="absolute inset-0 w-full h-full"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7056.329598897736!2d77.06438!3d28.389596699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d239a58f1cb81%3A0x4380132ea55e893!2sDakshini%20Cafe!5e0!3m2!1sen!2sin!4v1629783184969!5m2!1sen!2sin"
                style={{ border: 0 }}
            />
        </div>
    );
}

export default Map;
