import React, { useState } from 'react';
import styled from 'styled-components';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #282c34;
    display: flex;
    flex-direction: column;
`;

const DesktopArea = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    background: url('/elephant.jpeg') no-repeat center center/cover;
`;

function App() {
    const [windows, setWindows] = useState([]);

    const openWindow = (title) => {
        setWindows([...windows, { id: Date.now(), title }]);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter(win => win.id !== id));
    };

    const handleStartButtonClick = () => {
        alert('Start menu clicked');
    };

    const handleWindowClick = (window) => {
        alert(`Window ${window.title} clicked`);
    };

    return (
        <AppContainer>
            <DesktopArea>
                <DesktopIcon icon="📁" title="Projects" onDoubleClick={() => openWindow('Projects')} />
                <DesktopIcon icon="📄" title="Resume" onDoubleClick={() => openWindow('Resume')} />
                {windows.map(win => (
                    <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)} />
                ))}
            </DesktopArea>
            <Taskbar openWindows={windows} onStartButtonClick={handleStartButtonClick} onWindowClick={handleWindowClick} />
        </AppContainer>
    );
}

export default App;