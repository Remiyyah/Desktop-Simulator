

# React Desktop Simulator

This project is a simple desktop environment simulation built with React and styled-components. It includes a taskbar, draggable windows, and desktop icons.

## Features

- **Taskbar**: Displays a start button, currently open windows, and a system tray with a clock.
- **Draggable Windows**: Users can open, drag, and close windows.
- **Desktop Icons**: Users can double-click icons to open windows.
- **Dynamic Styling**: Uses styled-components for dynamic and responsive styling.

## Components

### Taskbar

- **File**: `components/Taskbar.js`
- **Description**: The taskbar includes a start button, open windows list, and a system tray with a clock.
- **Props**:
  - `openWindows`: Array of open windows.
  - `onStartButtonClick`: Function to handle start button click.
  - `onWindowClick`: Function to handle window button click in the taskbar.

### Window

- **File**: `components/Window.js`
- **Description**: Represents a draggable window with a header and content area.
- **Props**:
  - `title`: The title of the window.
  - `onClose`: Function to handle closing the window.

### DesktopIcon

- **File**: `components/DesktopIcon.js`
- **Description**: Represents a clickable desktop icon.
- **Props**:
  - `icon`: The icon to display.
  - `title`: The title of the icon.
  - `onDoubleClick`: Function to handle double-click on the icon.

### App

- **File**: `App.js`
- **Description**: Main component that includes the desktop area and the taskbar.
- **State**:
  - `windows`: Array of open windows.

## State Management with useState

The `useState` hook is used to manage the state of various components in the application.

### App Component

In the `App.js` file, `useState` is used to manage the `windows` array, which stores the list of currently open windows.

```javascript
const [windows, setWindows] = useState([]);
```

- **openWindow**: A function that adds a new window to the `windows` array.
  ```javascript
  const openWindow = (title) => {
      setWindows([...windows, { id: Date.now(), title }]);
  };
  ```

- **closeWindow**: A function that removes a window from the `windows` array based on its `id`.
  ```javascript
  const closeWindow = (id) => {
      setWindows(windows.filter(win => win.id !== id));
  };
  ```

### Taskbar Component

In the `Taskbar.js` file, `useState` is used to manage the state of the current time.

```javascript
const [time, setTime] = useState(new Date());
```

- A `useEffect` hook updates the time every second.
  ```javascript
  React.useEffect(() => {
      const interval = setInterval(() => {
          setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
  }, []);
  ```

### Window Component

In the `Window.js` file, `useState` is used to manage the dragging state and position of each window.

```javascript
const [isDragging, setIsDragging] = useState(false);
const [position, setPosition] = useState({ top: 50, left: 50 });
```

- **startDrag**: Sets `isDragging` to `true` when dragging starts.
  ```javascript
  const startDrag = (e) => {
      setIsDragging(true);
      e.dataTransfer.setDragImage(new Image(), 0, 0);
  };
  ```

- **onDrag**: Updates the window position while dragging.
  ```javascript
  const onDrag = (e) => {
      if (isDragging) {
          setPosition({
              top: e.clientY,
              left: e.clientX
          });
      }
  };
  ```

- **endDrag**: Sets `isDragging` to `false` when dragging ends.
  ```javascript
  const endDrag = () => {
      setIsDragging(false);
  };
  ```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-desktop-environment.git
```

2. Navigate to the project directory:

```bash
cd react-desktop-environment
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```
src/
├── components/
│   ├── DesktopIcon.js
│   ├── Taskbar.js
│   └── Window.js
├── App.js
├── index.js
└── styles/
    └── GlobalStyles.js
```

## Customization

### Adding Icons

To add more desktop icons, update the `App.js` file with additional `DesktopIcon` components and their respective `onDoubleClick` handlers.

### Styling

All component styles are defined using `styled-components`. To customize the appearance, edit the styled components in each respective file.
