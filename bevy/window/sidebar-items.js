initSidebarItems({"enum":[["CursorIcon","The icon to display for a window’s cursor."],["FileDragAndDrop","Events related to files being dragged and dropped on a window."],["PresentMode","Presentation mode for a window."],["WindowCommand","A command to be sent to a window."],["WindowMode","Defines the way a window is displayed."]],"fn":[["close_on_esc","Close the focused window whenever the escape key (Esc) is pressed"],["close_when_requested","Close windows in response to [`WindowCloseRequested`] (e.g.  when the close button is pressed)."],["exit_on_all_closed","Exit the application when there are no open windows."]],"mod":[["prelude",""]],"struct":[["CreateWindow","An event that indicates that a new window should be created."],["CursorEntered","An event that is sent whenever the user’s cursor enters a window."],["CursorLeft","An event that is sent whenever the user’s cursor leaves a window."],["CursorMoved","An event reporting that the mouse cursor has moved on a window."],["ModifiesWindows",""],["RawWindowHandleWrapper","A wrapper over [`RawWindowHandle`] that allows us to safely pass it across threads."],["ReceivedCharacter","An event that is sent whenever a window receives a character from the OS or underlying system."],["RequestRedraw","An event that indicates the window should redraw, even if its control flow is set to `Wait` and there have been no window events."],["ThreadLockedRawWindowHandleWrapper","A [`RawWindowHandleWrapper`] that cannot be sent across threads."],["Window","An operating system window that can present content and receive user input."],["WindowBackendScaleFactorChanged","An event that indicates a window’s OS-reported scale factor has changed."],["WindowCloseRequested","An event that is sent whenever the operating systems requests that a window be closed. This will be sent when the close button of the window is pressed."],["WindowClosed","An event that is sent whenever a window is closed. This will be sent by the handler for `Window::close`."],["WindowCreated","An event that is sent whenever a new window is created."],["WindowDescriptor","Describes the information needed for creating a window."],["WindowFocused","An event that indicates a window has received or lost focus."],["WindowId","A unique ID for a [`Window`]."],["WindowMoved","An event that is sent when a window is repositioned in physical pixels."],["WindowPlugin","A [`Plugin`] that defines an interface for windowing support in Bevy."],["WindowResizeConstraints","The size limits on a window."],["WindowResized","A window event that is sent whenever a window’s logical size has changed."],["WindowScaleFactorChanged","An event that indicates a window’s scale factor has changed."],["Windows","A collection of [`Window`]s with unique [`WindowId`]s."]]});