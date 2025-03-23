import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";

const AddEvent = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);

    const addNewEvent = async () => {
        console.log("Event Added:", { title, description, tags });
        onClose(); // Close form after adding
    };

    const handleAddEvent = () => {
        if (!title) { setError("Please enter a title!"); return; }
        if (!description) { setError("Please enter content!"); return; }

        setError("");
        addNewEvent();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    <MdClose size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center">Add New Event</h2>

                {/* Title Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Title</label>
                    <input
                        type="text"
                        className="w-full border rounded p-2 text-gray-900"
                        placeholder="Event Title"
                        value={title}
                        onChange={({ target }) => setTitle(target.value)}
                    />
                </div>

                {/* Description Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Description</label>
                    <textarea
                        className="w-full border rounded p-2 text-gray-900"
                        placeholder="Event Description"
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        rows={4}
                    />
                </div>

                {/* Genre Tag Input */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Genre</label>
                    <TagInput tags={tags} setTags={setTags} />
                </div>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {/* Submit Button */}
                <button
                    className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    onClick={handleAddEvent}
                >
                    Add Event
                </button>
            </div>
        </div>
    );
};

export default AddEvent;
  