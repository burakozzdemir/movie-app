# Movie App
![Movie App](https://user-images.githubusercontent.com/95588996/232486148-13146306-1450-4e1d-80d4-e28bccee8c89.png)
#
![Movie App 2](https://user-images.githubusercontent.com/95588996/232485842-7bd90fdd-1675-470f-9fb8-6b9a7de93e28.png)
#
![Movie App 3](https://user-images.githubusercontent.com/95588996/232485913-7fed65ff-2b54-40ae-b6e6-42975773125e.png)

# Tech
- [React] - React is a JavaScript-based UI development framework.
- [TypeScript] - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Redux Toolkit] - Redux Toolkit is an official, opinionated, batteries-included toolset for efficient Redux development.
- [Axios] - Promise based HTTP client for the browser and node.js
- [Lodash] - Lodash is a popular JavaScript utility library that provides a collection of helper functions to perform common programming tasks, such as iterating over arrays, manipulating objects, working with strings, and more.
- [React-infinite-scroll] - React-infinite-scrol is a popular open-source library for implementing infinite scrolling in React applications.
- [Material UI] - Material UI is a popular open-source library of React components that implement Google's Material Design guidelines
- [Visual Studio Code] - Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.

## Features and Functionality

- The application that lists movies from themoviedb.org
- The display of movie ratings.
- The display of movie release dates.
- Adding one or multiple movies that you like to favorites.
- Creating an infinite scroll when movies are loaded.
- The search bar is limited to a minimum of 2 characters.
- To prevent users from sending an API request with every keystroke, the debounce function from the lodash library has been used.
- The project has been fully designed with a responsive layout.


## App Flow

Project Structure
```
project
|-- public
|-- src
|    |-- assests
|    |      |-- images
|    |-- components
|    |      |-- CardWithImage
|    |      |-- FavoriteHeart
|    |      |-- Layout
|    |-- hooks
|    |      |-- useFetchMovies
|    |-- pages
|    |      |-- Home
|    |-- service
|    |      | -- apiClient
|    |-- store
|    |      |-- features
|    |      |     | -- favoritesSlice
|    |      |-- store
|    |-- types
|    |      | -- movie
|    |-- utils
|    |      | -- convertToCamelCase
|    |-- App.tsx
|    |-- index.tsx
|    |-- react-app-env.d.ts
|-- package.json
`-- README.md
```

## ToDo's

- waiting feedback