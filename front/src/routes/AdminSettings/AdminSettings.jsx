import React from 'react';
import Phones from './Phones';
import UpdateLogo from './UpdateLogo';
import Emails from './Emails';
import Addresses from './Addresses';
import Coordinates from './Coordinates';

const AdminSettings = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-gray-700 text-3xl font-medium">Настройки</h3>
                <div className="mt-4">
                    <div className="flex flex-wrap -mx-6">
                        <UpdateLogo></UpdateLogo>
                        <Emails></Emails>
                        <Phones></Phones>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex flex-wrap -mx-6">
                        <Coordinates></Coordinates>
                        <Addresses></Addresses>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminSettings;