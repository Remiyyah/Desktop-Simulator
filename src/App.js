import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Taskbar from './components/Taskbar';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import './App.css';
import LoginScreen from './components/LoginScreen';



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
    const [showLogin, setShowLogin] = useState(false);

    const openWindow = (title) => {
        setWindows([...windows, { id: Date.now(), title }]);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter(win => win.id !== id));
    };

    useEffect ( ()=>
      {setShowLogin(true);
      },[]);

    const handleStartButtonClick = () => {
      setShowLogin(true); // Show the login modal
  };

  const handleLoginClose = () => {
      setShowLogin(false); // Hide the login modal
  };


    const handleWindowClick = (window) => {
        alert(`Window ${window.title} clicked`);
    };



    const iconPositions = [
      { top: '20px', left: '20px' },
      { top: '20px', left: '100px' },
      { top: '20px', left: '180px' },
      { top: '20px', left: '260px' },
      { top: '20px', left: '340px' },
      { top: '120px', left: '20px' },
      { top: '120px', left: '100px' },
      { top: '120px', left: '180px' },
      { top: '120px', left: '260px' },
      { top: '120px', left: '340px' },
      { top: '220px', left: '20px' },
      { top: '220px', left: '100px' },
      { top: '220px', left: '180px' },
      { top: '220px', left: '260px' },
      { top: '220px', left: '340px' },
      { top: '320px', left: '20px' },
      { top: '320px', left: '100px' },
      { top: '320px', left: '180px' },
      { top: '320px', left: '260px' },
      { top: '320px', left: '340px' },
      { top: '420px', left: '20px' },
      { top: '420px', left: '100px' },
      { top: '420px', left: '180px' },
      { top: '420px', left: '260px' },
      { top: '420px', left: '340px' },
      { top: '520px', left: '20px' },
      { top: '520px', left: '100px' },
      { top: '520px', left: '180px' },
      { top: '520px', left: '260px' },
      { top: '520px', left: '340px' },
  ];
  

    return (
        <AppContainer>
            <DesktopArea>
                <DesktopIcon icon="🌐" title="Browser" onDoubleClick={() => openWindow('Browser')} position={iconPositions[0]} />
                <DesktopIcon icon="🗂️" title="Documents" onDoubleClick={() => openWindow('Documents')} position={iconPositions[1]} />
                <DesktopIcon icon="🖥️" title="Computer" onDoubleClick={() => openWindow('Computer')} position={iconPositions[2]} />
                <DesktopIcon icon="📊" title="Reports" onDoubleClick={() => openWindow('Reports')} position={iconPositions[3]} />
                <DesktopIcon icon="🎵" title="Music" onDoubleClick={() => openWindow('Music')} position={iconPositions[4]}/>
                <DesktopIcon icon="🎥" title="Videos" onDoubleClick={() => openWindow('Videos')}position={iconPositions[5]} />
                   
                        <DesktopIcon icon="📷" title="Photos" onDoubleClick={() => openWindow('Photos')} position={iconPositions[6]}/>
                   
                        <DesktopIcon icon="📅" title="Calendar" onDoubleClick={() => openWindow('Calendar')}position={iconPositions[7]} />
                   
                        <DesktopIcon icon="✉️" title="Email" onDoubleClick={() => openWindow('Email')}position={iconPositions[8]} />
                    
                         <DesktopIcon icon="🔧" title="Settings" onDoubleClick={() => openWindow('Settings')}position={iconPositions[9]} />
                   
                        <DesktopIcon icon="📦" title="Downloads" onDoubleClick={() => openWindow('Downloads')}position={iconPositions[10]} />
                   
                        <DesktopIcon icon="📝" title="Notes" onDoubleClick={() => openWindow('Notes')} position={iconPositions[11]}/>
                   
                         <DesktopIcon icon="📜" title="Logs" onDoubleClick={() => openWindow('Logs')} position={iconPositions[12]}/>
                   
                         <DesktopIcon icon="📚" title="Books" onDoubleClick={() => openWindow('Books')}position={iconPositions[13]} />
                    
                         <DesktopIcon icon="💾" title="Backups" onDoubleClick={() => openWindow('Backups')}position={iconPositions[14]} />
                   
                         <DesktopIcon icon="🗑️" title="Recycle Bin" onDoubleClick={() => openWindow('Recycle Bin')} position={iconPositions[15]}/>
                  
                         <DesktopIcon icon="📡" title="Network" onDoubleClick={() => openWindow('Network')} position={iconPositions[16]}/>
                   
                         <DesktopIcon icon="💼" title="Work" onDoubleClick={() => openWindow('Work')}position={iconPositions[17]} />
                   
                         <DesktopIcon icon="🔍" title="Search" onDoubleClick={() => openWindow('Search')}position={iconPositions[18]} />
                   
                         <DesktopIcon icon="📋" title="Clipboard" onDoubleClick={() => openWindow('Clipboard')} position={iconPositions[19]}/>
                  
                         <DesktopIcon icon="💻" title="Dev" onDoubleClick={() => openWindow('Dev')} position={iconPositions[20]}/>
                   
                         <DesktopIcon icon="🎮" title="Games" onDoubleClick={() => openWindow('Games')}position={iconPositions[21]} />
                    
                         <DesktopIcon icon="💡" title="Ideas" onDoubleClick={() => openWindow('Ideas')}position={iconPositions[22]} />
                   
                         <DesktopIcon icon="📂" title="Archive" onDoubleClick={() => openWindow('Archive')}position={iconPositions[23]} />
                   
                         <DesktopIcon icon="🚀" title="Launchpad" onDoubleClick={() => openWindow('Launchpad')}position={iconPositions[24]} />
                   
                        <DesktopIcon icon="🖌️" title="Paint" onDoubleClick={() => openWindow('Paint')} position={iconPositions[25]}/>
                    
                         <DesktopIcon icon="🔐" title="Security" onDoubleClick={() => openWindow('Security')}position={iconPositions[26]} />
                    
                         <DesktopIcon icon="🌟" title="Favorites" onDoubleClick={() => openWindow('Favorites')}position={iconPositions[27]} />
                  
                         <DesktopIcon icon="🎓" title="Education" onDoubleClick={() => openWindow('Education')}position={iconPositions[28]} />
                  
                         <DesktopIcon icon="🗒️" title="Tasks" onDoubleClick={() => openWindow('Tasks')}position={iconPositions[29]} /> 
    
                
                
                
                {windows.map(win => (
                    <Window key={win.id} title={win.title} onClose={() => closeWindow(win.id)} />
                ))}
            </DesktopArea>
            <Taskbar openWindows={windows} onStartButtonClick={handleStartButtonClick} onWindowClick={handleWindowClick} />
            <LoginScreen show={showLogin} onClose={handleLoginClose} /> {/* Add the LoginScreen component */}
        </AppContainer>
       
    );
}

export default App;
