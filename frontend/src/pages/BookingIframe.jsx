import React from 'react';

const BookingIframe = () => {
    return (
        <div className="" style={{ textAlign: 'center', margin: '20px 0' }}>
            <div className='bg-green'>
                <iframe
                    src="https://outlook.office365.com/book/MeetingwithInsiMine@iebrain.com/"
                    style={{ border: 'none', width: '100%', height: '600px' }}
                    className=''
                    title="Outlook Booking"
                ></iframe>
            </div>
        </div>
    );
};

export default BookingIframe;
