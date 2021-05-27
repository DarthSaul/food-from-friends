# Changelog

All notable changes to this project will be documented in this file.

## Unreleased:

---

## frontend7.4/remove-lists-patch <> 2021-05-27

### Changed

-   When user and profile deleted, remove / delete all associated lists and comments

## frontend7.3/screen-size-patch <> 2021-05-27

### Added

-   `hide-sm` class to components that should hide on smaller screens

## frontend7.2/logout-patch <> 2021-05-27

### Fixed

-   Event handler for "Logout" button on `Navbar` component, utilizing `useHistory` hook from `react-router-dom` to redirect to login page

## frontend7.1/social-links-patch <> 2021-05-27

### Fixed

-   Social media links

## frontend6/not-found-component <> 2021-05-20

### Added

-   `NotFound` component
-   `Routes` component
-   Placed `NotFound` component as last route possible in `Routes` component

### Changed

-   Moved all `<Route />` components out of `App.js` and into `Routes.js`. Then imported `Routes` into `App.js` and applied routing.

## frontend5/lists-and-comments <> 2021-05-19

### Added

-   New `ListsContext` for state management of lists
-   Wrapped `<App />` in new provider, using context in new `Lists` component.
-   `listsError`, `getLists`, `likeList`, `unlikeList`, `deleteList` all added to context
-   List related components: `Lists`, `ListItem`, and `List`.
-   Comment components and route handling
-   Implemented controlled form for creating a new list, displaying the restaurants added to the list, and managing the city set for the list.

### Fixed

-   Bug in route handler for "Delete list by list id", fixed.
-   Request path for `axios.get` in `ListsContext` needed another slash.

### Changed

-   Moved list form to separate route `/list/new`
-   Extensive re-design of many components: added border-radius, changed colors, changed positioning.

## frontend4/display-profiles <> 2021-05-17

### Added

-   `getProfileById` and `getAllProfiles` added to `ProfileContext`
-   `Profiles` and `ProfileItem` components. `Profiles` is the container that renders an array of `ProfileItems`, which consist of the profiles added to state from our database.
-   `Profile` component for a single profile. `ProfileTop`, `ProfileAbout`, `ProfileRestaurant`, `ProfileMedia` components for structure.

### Changed

-   `getProfile` to `getCurrentProfile` on `ProfileContext`, updated context imports as necessary
-   Refactored logic inside of `catch` statement in actions on `ProfileContext`, moved to its own function called `clearProfile`. Function sets `profile` in state to null, might have to change later.

### Fixed

-   Removed `ProfileContext` functions from dependency arrays in `useEffect` calls because it was leading to infinite rendering and messing up the profile state

## frontend3/profiles-and-dashboard <> 2021-05-17

### Added

-   `PrivateRoute` component
-   Implement first frontend private route with /dashboard
-   Dashboard UI
-   `ProfileContext`, get current profile from JWT on Dashboard load
-   Logout icon to Navbar
-   Dashboard link to Navbar
-   `Spinner` component, conditionally rendered if context is loading
-   `CreateProfile` component and route handler
-   `DashboardActions` component
-   `EditProfile` component
-   `AddFavorite` & `AddMedia` components, `updateRestaurants` & `updateMedia` to `ProfileContext`
-   `Media` and `Restaurants` list-style components for dashboard. Delete actions added to `ProfileContext` and configured as click event on components.
-   `deleteAccount` added to `UserContext`, button for delete account added to `Dashboard`

### Changed

-   Buttons on `Landing` page render conditionally
-   Refactor file tree, added `/contexts/` folder
-   Updated POST api/profile route with another validator for bio, making it required (`notEmpty()`)
-   Background image CSS on `App.css`

### Fixed

-   Reset `profile` in `ProfileContext` to null when no user is logged in
-   If `favoriteCuisines` or `favoriteDishes` is already saved on a document, they're added to EditProfile component state as array -- fixed to join array elements together when initializing state

## frontend2/user-context <> 2021-05-14

### Added

-   Configured `UserContext` and registration auth functionality
-   `register`, `registerSuccess`, and `registerFail` function in UserContext
-   Configured `UserContext` to use the `AlertContext`
-   Login functionality to `UserContext`
-   Re-configure `Login` component to use new `login` function from context
-   Check for existing token whenever app intially loads with `loadUser` and `useEffect`
-   Redirect after login and/or register
-   Logout link and conditional rendering based on user logged in or not

### Changed

-   Updated `Register` component to `UserContext` and `register` function on form submit
-   Re-factored and consolidated code on `UserContext.js`. No need for `registerSuccess`.

## frontend2/context-setup <> 2021-05-12

### Added

-   Introduced Context API
-   `AlertContext.js` file with AlertProvider and AlertContext
-   `Alert` component, placed in main `App` component tree
-   `setAlert` & `removeAlert` functions for Alert Context

## frontend1/register-form <> 2021-05-12

### Added

-   Register form component
-   `useState` for form data management
-   `handleChange` and `handleSubmit` setup for register form
-   Axios test on `Register` component (testing for later use in Context)
-   Login form

### Changed

-   "Food from Friends" to "Food From Friends"
-   "Register" to "Sign Up"

## frontend1/react-router <> 2021-05-11

### Added

-   React Router
-   `Route`, `Switch`, and `Link` components
-   Link buttons on landing page and in navbar
-   Shells for `Register` and `Login` components

## frontend1/initial-components <> 2021-05-11

### Added

-   React App clean up
-   New dependencies
-   Font Awesome React dependencies
-   Imported styles
-   Setup basic App component, Navbar and Landing components

### Changed

-   Global styles color palette

## backend4/list-CRUD <> 2021-05-10

### Added

-   Create a new list
-   View all lists
-   View single list by list id
-   `isListOwner` permission middleware
-   Delete a list
-   Like a list, unlike a list
-   Comment and delete comment. `isCommentOwner` custom middleware

### Changed

-   Added `likes` field to `List` model
-   Changed PUT request for adding a new comment to POST request

### Fixed

-   Handle "Cast to ObjectId failed" error on `isCommentOwner` middleware

## backend4/List-model <> 2021-05-08

### Added

-   List model
-   Comment model

## backend3/profile-CRUD <> 2021-05-08

### Added

-   Get current user profile
-   Create a new profile
-   Update existing profile
-   View all profiles (index)
-   View profile based on user id
-   Delete profile & associated user
-   Add a favorite restaurant to profile, delete favorite restaurant from profile
-   Add a favorite media to profile, delete favorite media from profile

### Fixed

-   Moved validation chain on `users.js` router file into array
-   Deprecation warning from Mongoose

### Changed

-   Updated `Profile` model to have `favoriteDishes` field

## backend3/profile-model <> 2021-05-05

### Added

-   Profile model with Mongoose

## backend2/login <> 2021-05-05

### Added

-   Login functionality

## backend2/auth-middleware <> 2021-04-29

### Added

-   Auth middleware, route protection
-   Return user data from database

## backend2/registration <> 2021-04-29

### Added

-   Create new `User` document (register)
-   Connect to gravatar, hash password, save User
-   Error handling with try/catch
-   JSON Web Token

### Fixed

-   MongoDB `useCreateIndex` warning
-   Fixed Atlas DB link, wrong database name

## backend2/validation <> 2021-04-29

### Added

-   Body parser
-   Basic Express Validator middlewares
-   Error handling, custom error messages

## backend2/mongoose-models <> 2021-04-29

### Added

-   `User` model with Mongoose

## backend1/express-router <> 2021-04-28

### Added

-   Basic routing in `/routes/api` with Express Router
-   Configure basic route middleware on `server.js`

### Fixed

-   Uploaded MongoURI -- removed file from repo, changed password (credentials comprised)

## backend1/mongo <> 2021-04-28

### Added

-   Connect to Mongo Atlas with Mongoose

## init <> 2021-04-28

### Added

-   Initial with config with npm.
-   Configure `CHANGELOG.md` and `.gitignore`
-   Basic `server.js` setup
-   Updated npm `scripts`
