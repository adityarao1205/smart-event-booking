import React from 'react'

const EventCard = ({title, description, tickets, date}) => {

    return (
        <div className='bg-slate-100 rounded p-4 hover:shadow-xl transition-all ease-in-out'>
            <div className='flex items-right justify-between'>
                <div>
                    <h6 className='text-sm font-medium mb-2'>{title}</h6>
                    <h6>{description}</h6>
                </div>
            </div>

            <div className='flex items-center justify-between mt-2'>
                <div className='text-xs text-slate-700'>Tickets: {tickets}</div>
                <div className='text-xs text-slate-700'>Date: {date}</div>
            </div>
        </div>
    );
}

export default EventCard;