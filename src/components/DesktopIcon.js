import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const IconContainer = styled.div`
    width: 60px;
    text-align: center;
    cursor: pointer;
    position: absolute;  /* Adjusted position to absolute */
`;

const IconImage = styled.div`
    font-size: 32px;
`;

const IconTitle = styled.div`
    margin-top: 5px;
    font-size: 14px;
    color: white;
`;

function DesktopIcon({ icon, title, onDoubleClick, position }) {
    return (
        <Draggable bounds="parent">
            <IconContainer onDoubleClick={onDoubleClick} style={{ top: position.top, left: position.left }}>
                <IconImage>{icon}</IconImage>
                <IconTitle>{title}</IconTitle>
            </IconContainer>
        </Draggable>
    );
}

export default DesktopIcon;
