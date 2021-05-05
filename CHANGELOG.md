# Changelog

All notable changes to this project will be documented in this file.

## Unreleased

### Added

-   Profile model with Mongoose

---

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

---

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
