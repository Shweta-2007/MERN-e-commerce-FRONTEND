alt + shift + O
For icons go to react icons page and type the key word
If at any line you want to copy the whole thing which is written in the same line, control + C at the end of the line, no need to first select all the text of that line.

# Folder-Structure

- src
  - assets
    - images
  - components
    - admin
    - cart-item.tsx
    - header.tsx
    - loader.tsx
    - product-card.tsx
  - pages
    - admin
    - cart.tsx
    - home.tsx
    - login.tsx
    - order-details.tsx
    - orders.tsx
    - search.tsx
    - shipping.tsx
  - styles
    - admin-styles
    - \_cart.scss
    - \_home.scss
    - \_login.scss
    - \_search.scss
    - \_shipping.scss
    - app.scss
- App.tsx
- constants.tsx
- main.tsx

# Dependencies && Dev-Dependencies:

"dependencies": {
"chart.js": "^4.4.1",
"firebase": "^10.7.2",
"react": "^18.2.0",
"react-chartjs-2": "^5.2.0",
"react-dom": "^18.2.0",
"react-hot-toast": "^2.4.1",
"react-icons": "^5.0.1",
"react-router-dom": "^6.21.3",
"react-table": "^7.8.0",
"sass": "^1.70.0"
},
"devDependencies": {
"@types/react": "^18.2.43",
"@types/react-dom": "^18.2.17",
"@types/react-table": "^7.7.19",
"@typescript-eslint/eslint-plugin": "^6.14.0",
"@typescript-eslint/parser": "^6.14.0",
"@vitejs/plugin-react-swc": "^3.5.0",
"eslint": "^8.55.0",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.5",
"typescript": "^5.2.2",
"vite": "^5.0.8"
}

\*\*STEPS:

- after doing UI part and backend part, start this frontend again
- install redux toolkit and axios
- firebase authentication

1. created firebase.ts in src folder and .env in root folder
2. use firebase auth in login page
3. Toaster && auth in login page

- RTK Query Setup for User

1. create store
2. go in main.ts and wrap the app around provider
3. create store.ts
4. create userAPI.ts
5. create api-types and types.ts
6. put reducer in store
7. in login page, use all that.

\*\*next step:

- User Reducer
- now use that userReducer in app.ts using selector
- protecting Routes for Logged In Users: protected-route.tsx in component
- sign out function in header

\*\*next step:

- RTK Query Setup for Product
- create productAPI.ts and first made for latest-products
- made API for admin-all-products
- made API for categories on search page
- made API for products on search page
- made API for create a new product for admin
- made API for product detail for admin
- made API for update product for admin
- made API for delete product for admin
