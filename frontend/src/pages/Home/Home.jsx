import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import HotContent from '../../components/AsideBar/HotContent';
import EventCard from '../../components/EventCard/EventCard';
import AddEvent from '../Home/AddEvent';
import { MdAdd } from "react-icons/md";

const Home = function () {
    const [showAddEvent, setShowAddEvent] = useState(false); // State to control AddEvent visibility

    return (
        <div>
            <NavBar />
            <div className='flex flex-row justify-between border'>
                <HotContent />
                <div className='container mx-auto px-4 bg-[var(--textCol)]'>
                    <div className='grid grid-cols-4 gap-4 mt-8'>
                        <EventCard
                            title="Event-1"
                            description='Some random description on event'
                            tickets="1000"
                            date="23 April 2025"
                            className="bg-[var(--bgEve)]"
                        />
                        <EventCard
                            title="Event-2"
                            description='Some random description on event'
                            tickets="3000"
                            date="23 April 2025"
                        />
                        <EventCard
                            title="Event-3"
                            description='Some random description on event'
                            tickets="2500"
                            date="23 April 2025"
                        />
                    </div>
                </div>
            </div>

            {/* Floating Add Button */}
            <button
                className="fixed bottom-5 right-5 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600"
                onClick={() => setShowAddEvent(true)}
            >
                <MdAdd size={28} />
            </button>

            {/* AddEvent Modal */}
            {showAddEvent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
                        <AddEvent onClose={() => setShowAddEvent(false)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
