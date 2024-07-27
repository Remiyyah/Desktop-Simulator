import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    width: 60px;
    text-align: center;
    margin: 10px;
    cursor: pointer;
`;

const IconImage = styled.div`
    font-size: 32px;
`;

const IconTitle = styled.div`
    margin-top: 5px;
    font-size: 14px;
    color: white;
`;

function DesktopIcon({ icon, title, onDoubleClick }) {
    return (
        <IconContainer onDoubleClick={onDoubleClick}>
            <IconImage>{icon}</IconImage>
            <IconTitle>{title}</IconTitle>
        </IconContainer>
    );
}

export default DesktopIcon;