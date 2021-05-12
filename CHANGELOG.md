# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

<!-- frontend1/register-form <> 2021-05-12 -->

### Added

-   Register form component
-   useState for form data management
-   `handleChange` and `handleSubmit` setup for register form
-   Axios test on Register component (testing for later use in Context)

### Changed

-   "Food from Friends" to "Food From Friends"
-   "Register" to "Sign Up"

---

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
