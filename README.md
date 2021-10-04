# food-from-friends

Full-stack web application built for online community of coffee lovers. Site users may create a profile, add coffees they've been drinking to database, post about brew methods, and muse about the world of coffee.

Hosted on Heroku [here](https://arcane-lowlands-25770.herokuapp.com/)

## Technologies & Other Tools

-   MERN Stack: MongoDB, Express, React, Node
-   No Bootstrap; all custom CSS
-   Emphasis on React's Context API. Single-page app with React Router.
-   Icons from Font Awesome's React library
-   JWT Authentication
-   RESTful backend API, custom middleware, and Express validator.
-   Connected to MongoDB through Mongoose.js. Image upload and management through Cloudinary

## Development

Open terminal

```
$ git clone https://github.com/DarthSaul/food-from-friends.git
```

Navigate to project folder, then execute

```
$ npm install
$ npm run dev
```

`run dev` script utilizes `concurrently` to launch frontend and backend simultaneously. Backend server launches on localhost:5000, frontend React client launches on localhost:3000.
