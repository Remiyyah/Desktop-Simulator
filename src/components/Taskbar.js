import React from 'react';
import styled from 'styled-components';
import WifiIcon from '@mui/icons-material/Wifi';

const TaskbarContainer = styled.div`
    height: 40px;
    background: #333;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`;

const StartButton = styled.button`
    background: #444;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background: #555;
    }
`;

const OpenWindows = styled.div`
    display: flex;
    flex: 1;
    margin: 0 10px;
    overflow: hidden;
`;

const WindowButton = styled.button`
    background: #444;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-right: 5px;
    cursor: pointer;

    &:hover {
        background: #555;
    }
`;

const SystemTray = styled.div`
    display: flex;
    align-items: center;
`;

const Clock = styled.div`
    margin-left: 10px;
`;

function Taskbar({ openWindows, onStartButtonClick, onWindowClick }) {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <TaskbarContainer>
            <StartButton onClick={onStartButtonClick}>Start</StartButton>
            <OpenWindows>
                {openWindows.map((window, index) => (
                    <WindowButton key={index} onClick={() => onWindowClick(window)}>
                        {window.title}
                    </WindowButton>
                ))}
            </OpenWindows>
            <SystemTray>
                {/* Add system tray icons here */
                < WifiIcon/>}
                <Clock>{time.toLocaleTimeString()}</Clock>
            </SystemTray>
        </TaskbarContainer>
    );
}

export default Taskbar;