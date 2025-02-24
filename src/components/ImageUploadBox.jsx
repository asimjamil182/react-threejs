import React, { useState, useCallback } from "react";

const ImageUploadBox = ({ onImageUpload }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    // Handle file upload
    const handleFile = useCallback((file) => {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const url = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a valid image file.");
        }
    }, [onImageUpload]);

    // Handle drag-and-drop events
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleFile(file);
    };

    // Handle file input change
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        handleFile(file);
        onImageUpload(e);
    };

    // Handle dragging the image inside the box
    const handleMouseDown = (e) => {
        setOffset({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
        });
    };

    const handleMouseMove = (e) => {
        if (e.buttons === 1 && imageUrl) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - offset.x;
            const y = e.clientY - rect.top - offset.y;
            e.currentTarget.querySelector("img").style.left = `${x}px`;
            e.currentTarget.querySelector("img").style.top = `${y}px`;
        }
    };

    return (
        <div
            className={`border-2 border-dashed ${isDragging ? "border-green-500 bg-green-50" : "border-gray-300"
                } rounded-lg p-6 text-center cursor-pointer relative overflow-hidden w-full h-32`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onMouseMove={handleMouseMove}
        >
            <input
                type="file"
                className="hidden"
                id="file-input"
                accept="image/*"
                onChange={handleFileInputChange}
            />
            {!imageUrl ? (
                <label htmlFor="file-input" className="text-gray-500">
                    Drag & drop an image or click to upload
                </label>
            ) : (
                <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover absolute inset-0 cursor-move"
                    onMouseDown={handleMouseDown}
                />
            )}
        </div>
    );
};

export default ImageUploadBox;