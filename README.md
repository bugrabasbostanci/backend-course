# Jonas Abi Backend Course

jonas's theme: oceanic next

- cmd de mongod.exe yazarak mongodb server'ını başlatırız
- cmd de mongosh yazarak mongo shell'i başlatırız

- postman document link
  https://documenter.getpostman.com/view/31964434/2s9YypF3cW

## day1

- using core modules
- reading and writing files
- blocking and non-blocking codes
- reading and writing files asynchronously
- creating a simple server
- routing
- building a simple API
- building and filling HTML templates

## day2

- parsing URLs
- using own modules
- npm
- using 3rd party modules
- how the web workd
- frontend vs backend web development

## day3

- node, v8 engine, libuv
- thread pool and event loop
- event driven architecture
- streams
- how require works
- callbacks and promises

## day4

- async/await
- express, postman
- basic routing
- APIs and RESTful APIs
- handling GET, POST, PATCH, DELETE requests
- middleware
- Routes and Mounting routers
- file structure

# day5

- param middleware and chainig middlewares
- serving static files
- env variables and eslint
- mongodb installation
- creating local DB and CRUD operation with mongosh
- using compass app
- hosted DB with atlas and connect to hosted DB

# day6

- connect db with express app
- mongoose, schema, model
- MVC architecture (model, view, controller)
- modelling tours and importing data from json to db
- CRUD operations

# day7

- filtering and advence filtering
- sorting
- limiting fields
- pagination
- aliasing

# day8

- aggregation pipeline (matching, grouping, unwinding, projecting)
- virtual properties
- document middleware

# day9

- query middleware
- aggregation middleware
- data validation
- debugging nodejs with ndb
- handling unhandled routes
- global error middleware and better errors
- catching error with async functions

# day10

- adding 404 not found errors
- development and production errors
- handling invalid database IDs
- handling duplicate database fields
- handling mongoose validation errors

# day11

- unhandled rejections and uncaught exceptions
- modelling users
- creating new users
- managing passwords and JWT
- signup users

# day12

- logging users
- protecting routes with token
- advenced postman setup
- authorization: user roles and permissions

# day13

- password reset functionality, reset token
- sending emails with nodemailer
- setting new password
- updating current user password
- deleting user
- security best practises
- sending JWT via cookies
- rate limiting
- security http headers
- data sanitization
- preventing parameter pollution

# day14

- mongodb data moddeling
- designing our data model
- modelling locations
- modelling tour guides: embedding

# day15

- modelling tour guides: child referencing
- populating tour guides
- modelling reviews: parent referencing
- creating, getting and populating reviews
- virtual populate
- implementing simple nested routes
- nested routes with express
- nested GET endpoint

# day16

- building handler factory functions: CRUD
- adding /me endpoint
- adding missing authentication and authorization
- improving read performance with indexes
- calculating average ratings

# day17

- preventing duplicate reviews
- geospatial queries: finding tours within radius
- geospatial aggregation: calculating distances
- creating API documentation using Postman

# day18

- setting up Pug in express
- creating base template
- including files into pug templates
- building the tour overviews

# day19

- building the tour page
- including map with Mapbox(I couldn't because mapbox is not free anymore)
- building login screen
- logging in users with our API
- logging out users(couldn't logged out users) DONE!!

# day20

- rendering error pages
- building user acc page
- updating user data
- updating user data with our API
- updating user password with our API

# day21

- image uploads using multer: users
- configuring multer
- saving image name to db
- resizing images
- adding image uploads to form

npm run start | npm run watch:js
