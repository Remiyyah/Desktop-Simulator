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
            <DesktopIcon icon="🌐" title="Browser" onDoubleClick={() => openWindow('Browser')} />
<DesktopIcon icon="🗂️" title="Documents" onDoubleClick={() => openWindow('Documents')} />
<DesktopIcon icon="🖥️" title="Computer" onDoubleClick={() => openWindow('Computer')} />
<DesktopIcon icon="📊" title="Reports" onDoubleClick={() => openWindow('Reports')} />
<DesktopIcon icon="🎵" title="Music" onDoubleClick={() => openWindow('Music')} />
<DesktopIcon icon="🎥" title="Videos" onDoubleClick={() => openWindow('Videos')} />
<DesktopIcon icon="📷" title="Photos" onDoubleClick={() => openWindow('Photos')} />
<DesktopIcon icon="📅" title="Calendar" onDoubleClick={() => openWindow('Calendar')} />
<DesktopIcon icon="✉️" title="Email" onDoubleClick={() => openWindow('Email')} />
<DesktopIcon icon="🔧" title="Settings" onDoubleClick={() => openWindow('Settings')} />
<DesktopIcon icon="📦" title="Downloads" onDoubleClick={() => openWindow('Downloads')} />
<DesktopIcon icon="📝" title="Notes" onDoubleClick={() => openWindow('Notes')} />
<DesktopIcon icon="📜" title="Logs" onDoubleClick={() => openWindow('Logs')} />
<DesktopIcon icon="📚" title="Books" onDoubleClick={() => openWindow('Books')} />
<DesktopIcon icon="💾" title="Backups" onDoubleClick={() => openWindow('Backups')} />

<DesktopIcon icon="🗑️" title="Recycle Bin" onDoubleClick={() => openWindow('Recycle Bin')} />
<DesktopIcon icon="📡" title="Network" onDoubleClick={() => openWindow('Network')} />
<DesktopIcon icon="💼" title="Work" onDoubleClick={() => openWindow('Work')} />
<DesktopIcon icon="🔍" title="Search" onDoubleClick={() => openWindow('Search')} />
<DesktopIcon icon="📋" title="Clipboard" onDoubleClick={() => openWindow('Clipboard')} />
<DesktopIcon icon="💻" title="Devt" onDoubleClick={() => openWindow('Dev')} />
<DesktopIcon icon="🎮" title="Games" onDoubleClick={() => openWindow('Games')} />
<DesktopIcon icon="💡" title="Ideas" onDoubleClick={() => openWindow('Ideas')} />
<DesktopIcon icon="📂" title="Archive" onDoubleClick={() => openWindow('Archive')} />
<DesktopIcon icon="🚀" title="Launchpad" onDoubleClick={() => openWindow('Launchpad')} />
<DesktopIcon icon="📞" title="Contacts" onDoubleClick={() => openWindow('Contacts')} />
<DesktopIcon icon="🖌️" title="Paint" onDoubleClick={() => openWindow('Paint')} />
<DesktopIcon icon="🔐" title="Security" onDoubleClick={() => openWindow('Security')} />
<DesktopIcon icon="🌟" title="Favorites" onDoubleClick={() => openWindow('Favorites')} />
<DesktopIcon icon="🎓" title="Education" onDoubleClick={() => openWindow('Education')} />
<DesktopIcon icon="🗒️" title="Tasks" onDoubleClick={() => openWindow('Tasks')} />
<DesktopIcon icon="🧩" title="Utilities" onDoubleClick={() => openWindow('Utilities')} />
<DesktopIcon icon="🔋" title="Battery" onDoubleClick={() => openWindow('Battery')} />
<DesktopIcon icon="🛠️" title="Maintenance" onDoubleClick={() => openWindow('Maintenance')} />
<DesktopIcon icon="📊" title="Analytics" onDoubleClick={() => openWindow('Analytics')} />
<DesktopIcon icon="📖" title="Manuals" onDoubleClick={() => openWindow('Manuals')} />
<DesktopIcon icon="📓" title="Journal" onDoubleClick={() => openWindow('Journal')} />
<DesktopIcon icon="📱" title="Mobile" onDoubleClick={() => openWindow('Mobile')} />
<DesktopIcon icon="🏠" title="Home" onDoubleClick={() => openWindow('Home')} />
<DesktopIcon icon="🔗" title="Links" onDoubleClick={() => openWindow('Links')} />

<DesktopIcon icon="🔊" title="Audio" onDoubleClick={() => openWindow('Audio')} />
<DesktopIcon icon="📁" title="Templates" onDoubleClick={() => openWindow('Templates')} />
<DesktopIcon icon="🔒" title="Vault" onDoubleClick={() => openWindow('Vault')} />
<DesktopIcon icon="💬" title="Chat" onDoubleClick={() => openWindow('Chat')} />
<DesktopIcon icon="📦" title="Packages" onDoubleClick={() => openWindow('Packages')} />
                {windows.map(win => (
                    <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)} />
                ))}
            </DesktopArea>
            <Taskbar openWindows={windows} onStartButtonClick={handleStartButtonClick} onWindowClick={handleWindowClick} />
        </AppContainer>
    );
}

export default App;