import React, { useState } from 'react';
import styled from 'styled-components';

const WindowContainer = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    width: 400px;
    height: 300px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
`;

const WindowHeader = styled.div`
    height: 30px;
    background: #333;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    cursor: move;
`;

const WindowContent = styled.div`
    flex: 1;
    padding: 10px;
    background: #f0f0f0;
`;

function Window({ title, onClose }) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ top: 50, left: 50 });

    const startDrag = (e) => {
        setIsDragging(true);
        e.dataTransfer.setDragImage(new Image(), 0, 0);
    };

    const onDrag = (e) => {
        if (isDragging) {
            setPosition({
                top: e.clientY,
                left: e.clientX
            });
        }
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    return (
        <WindowContainer
            style={{ top: `${position.top}px`, left: `${position.left}px` }}
            draggable
            onDragStart={startDrag}
            onDrag={onDrag}
            onDragEnd={endDrag}
        >
            <WindowHeader>
                {title}
                <button onClick={onClose}>X</button>
            </WindowHeader>
            <WindowContent>
                {/* Content goes here */}
            </WindowContent>
        </WindowContainer>
    );
}

export default Window;