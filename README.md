# Tripleten web_project_around_react

This repository contains the **React** refactored version of the "Around the U.S." project. The main goal of this stage was to migrate the static HTML markup, CSS styles, and Vanilla JS DOM manipulation logic into a modern component-based architecture using **Vite**.

---

## Technologies Used

- **React 18** — JavaScript library for building user interfaces.
- **Vite** — Ultra-fast build tool for the development environment.
- **JavaScript (ES6+)** — Ecosystem logic and data manipulation.
- **CSS3** — Modular styling and responsive design based on the original layout.

---

## Features Implemented

### 1. Componentization and Reusability

Reusable Popup.jsx: single modal wrapper that accepts a title and renders form content via children.
Flexible Card.jsx: displays place images from props.card, handles accessibility with alt, and toggles the like state with dynamic class names.

### 2. State Management and Data Flow

Centralized popup state in Main.jsx with conditional rendering:
popup && <Popup title={popup.title} onClose={handleClosePopup}>{popup.children}</Popup>
Properly passes selected card data to the image preview popup so photo title and link are preserved.

### 3. API Actions and User Interactions

Liking and unliking cards with API updates
Deleting cards and updating state using filter()
Editing profile information using managed components and Context API
Updating avatar through refs
Adding new cards with state updates using the spread operator
Automatically closing popups after API requests
Native React form validation

---

## How to Run the Project Locally

1. Clone the repository to your machine:

   ```bash
   git clone https://github.com
   ```

2. Navigate to the project folder:

   ```bash
   cd web_project_around_react
   ```

3. Install all necessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   _The browser will automatically open at `http://localhost:3000`._

---

## Next Development Steps

- [x] Implement click handlers for deleting cards.
- [x] Connect forms (`EditProfile`, `NewCard`, `EditAvatar`) with controlled states and original API calls.
- [x] Add native React form validation.
- [x] Add like and delete features in the cards.
- [ ] Add Css Masonry
- [ ] Add user login
- [ ] Add sign up
- [ ] Add Like buttons counts

## Project Structure

```text
src/
├── components/
│   ├── App.jsx                 # Root application component
│   ├── Header/                 # Page header containing the logo
│   ├── Footer/                 # Footer with copyright information
│   ├── contexts/
│   |   └── CurrentUserContext/ # Context for the user data
│   └── Main/                   # Main content and state management
│       ├── Main.jsx
│       └── components/         # Base component for reusable modals
│           ├── Card/           # Individual rendering for place cards
│           └── Popup/
│               └── Popup.jsx
│                   └── components/
│                       ├── EditProfile/
│                       ├── EditAvatar/
│                       ├── NewCard/
│                       ├── ImagePopup/
│                       └── PopupWithConfirmation/
│
├── blocks/                    #Css blocks
├── images/
└── index.css
```

---
