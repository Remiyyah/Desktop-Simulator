

# React Desktop Simulator

This project is a desktop environment simulation built with React and styled-components. 

## Features

- **Taskbar**: Displays a start button, currently open windows, and a system tray with a clock.
- **Draggable Windows**: Users can open, drag, and close windows.
- **Desktop Icons**: Users can double-click icons to open windows.
- **Dynamic Styling**: Uses styled-components for dynamic and responsive styling.

## Components

<details>
<summary>Taskbar</summary> 


- **File**: `components/Taskbar.js`
- **Description**: The taskbar includes a start button, open windows list, and a system tray with a clock.
- **Props**:
  - `openWindows`: Array of open windows.
  - `onStartButtonClick`: Function to handle start button click.
  - `onWindowClick`: Function to handle window button click in the taskbar.
</details>

<details>
<summary>Window</summary> 


- **File**: `components/Window.js`
- **Description**: Represents a draggable window with a header and content area.
- **Props**:
  - `title`: The title of the window.
  - `onClose`: Function to handle closing the window.
</details>

<details>
<summary>DesktopIcon</summary> 

- **File**: `components/DesktopIcon.js`
- **Description**: Represents a clickable desktop icon.
- **Props**:
  - `icon`: The icon to display.
  - `title`: The title of the icon.
  - `onDoubleClick`: Function to handle double-click on the icon.
</details>
    
<details>
<summary> App</summary>

- **File**: `App.js`
- **Description**: Main component that includes the desktop area and the taskbar.
- **State**:
  - `windows`: Array of open windows.
</details>

<details>
<summary>State Management with useState</summary>

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
</details>


---
### UML Diagram
![uml](https://github.com/user-attachments/assets/80435296-5c6b-48f9-86a2-0e284e62bf54)

---
### Preview Images
![Image 8-1-24 at 1 54 PM](https://github.com/user-attachments/assets/1e5616a9-e858-47e2-a0ca-20a72cbfe49a)

![Image 8-1-24 at 12 32 PM](https://github.com/user-attachments/assets/ce629b2b-5764-43d2-8d32-49f30ac8ea35)



