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

- **Generic `Popup.jsx`:** A single structural modal that receives a `title` and dynamically injects the corresponding form via `children`.
- **Dynamic `Card.jsx`:** Renders place images by destructuring data received via properties (`props.card`), handling accessibility (`alt`), and dynamically applying active like classes based on variables (`isLiked`).

### 2. Data Flow and States (`useState`)

- Centralization of the open modal state in the `Main.jsx` component using conditional rendering:
  ```jsx
  {
    popup && (
      <Popup title={popup.title} onClose={handleClosePopup}>
        {popup.children}
      </Popup>
    );
  }
  ```
- Proper passing of contextual card data to the expanded image popup, ensuring that the original photo title and link are transmitted without violating the React lifecycle.

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
- [ ] Add native React form validation.
- [x] Add like and delete features in the cards.

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
