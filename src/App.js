import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import './App.css';

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
    background: url('/dark.jpeg') no-repeat center center/cover;
    animation: moveBackground 25s linear infinite;
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
            <Draggable>
                    <div>
                        <DesktopIcon icon="🌐" title="Browser" onDoubleClick={() => openWindow('Browser')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🗂️" title="Documents" onDoubleClick={() => openWindow('Documents')} />
                    </div>
                </Draggable>
                {/* Add more Draggable wrappers for other icons */
                
                  }
                             
                <Draggable>
                    <div>
                        <DesktopIcon icon="🖥️" title="Computer" onDoubleClick={() => openWindow('Computer')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📊" title="Reports" onDoubleClick={() => openWindow('Reports')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🎵" title="Music" onDoubleClick={() => openWindow('Music')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🎥" title="Videos" onDoubleClick={() => openWindow('Videos')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📷" title="Photos" onDoubleClick={() => openWindow('Photos')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📅" title="Calendar" onDoubleClick={() => openWindow('Calendar')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="✉️" title="Email" onDoubleClick={() => openWindow('Email')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🔧" title="Settings" onDoubleClick={() => openWindow('Settings')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📦" title="Downloads" onDoubleClick={() => openWindow('Downloads')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📝" title="Notes" onDoubleClick={() => openWindow('Notes')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📜" title="Logs" onDoubleClick={() => openWindow('Logs')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📚" title="Books" onDoubleClick={() => openWindow('Books')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="💾" title="Backups" onDoubleClick={() => openWindow('Backups')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🗑️" title="Recycle Bin" onDoubleClick={() => openWindow('Recycle Bin')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📡" title="Network" onDoubleClick={() => openWindow('Network')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="💼" title="Work" onDoubleClick={() => openWindow('Work')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🔍" title="Search" onDoubleClick={() => openWindow('Search')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📋" title="Clipboard" onDoubleClick={() => openWindow('Clipboard')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="💻" title="Dev" onDoubleClick={() => openWindow('Dev')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🎮" title="Games" onDoubleClick={() => openWindow('Games')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="💡" title="Ideas" onDoubleClick={() => openWindow('Ideas')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📂" title="Archive" onDoubleClick={() => openWindow('Archive')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🚀" title="Launchpad" onDoubleClick={() => openWindow('Launchpad')} />
                    </div>
                </Draggable>
                
                <Draggable>
                    <div>
                        <DesktopIcon icon="🖌️" title="Paint" onDoubleClick={() => openWindow('Paint')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🔐" title="Security" onDoubleClick={() => openWindow('Security')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🌟" title="Favorites" onDoubleClick={() => openWindow('Favorites')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🎓" title="Education" onDoubleClick={() => openWindow('Education')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🗒️" title="Tasks" onDoubleClick={() => openWindow('Tasks')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🧩" title="Utilities" onDoubleClick={() => openWindow('Utilities')} />
                    </div>
                </Draggable>
                
                <Draggable>
                    <div>
                        <DesktopIcon icon="🛠️" title="Tools" onDoubleClick={() => openWindow('Tools')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📊" title="Analytics" onDoubleClick={() => openWindow('Analytics')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📖" title="Manuals" onDoubleClick={() => openWindow('Manuals')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📓" title="Journal" onDoubleClick={() => openWindow('Journal')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="📱" title="Mobile" onDoubleClick={() => openWindow('Mobile')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🏠" title="Home" onDoubleClick={() => openWindow('Home')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🔗" title="Links" onDoubleClick={() => openWindow('Links')} />
                    </div>
                </Draggable>
                <Draggable>
                    <div>
                        <DesktopIcon icon="🔊" title="Audio" onDoubleClick={() => openWindow('Audio')} />
                    </div>
                </Draggable>
                {windows.map(win => (
                    <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)} />
                ))}
            </DesktopArea>
            <Taskbar openWindows={windows} onStartButtonClick={handleStartButtonClick} onWindowClick={handleWindowClick} />
        </AppContainer>
    );
}

export default App;