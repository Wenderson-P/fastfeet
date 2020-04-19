<p align="center"  >
    <a href="https://github.com/Wenderson-P/fastfeet">
        <img src="https://user-images.githubusercontent.com/52503774/79689061-cb56fd80-8228-11ea-9750-e9738d34eaa3.png" alt="Fastfeet"/>
      </a>
</p>
<p align="center">
      <img alt="Languages" src="https://img.shields.io/github/languages/count/Wenderson-P/fastfeet"/>
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/Wenderson-P/fastfeet"/>
  </p>

## 📜 Table of Contents

* [About the Project](#-about-the-project)
  * [API](#api)
    * [Made With](#-api-made-with)
    * [Controllers](#-controllers)
* [Getting Started](#getting-started)
  * [Requirements](#-requirements)
  * [Installation](#-installation)

## 🔎 About the project
Full Stack project to manage a fictional carrier.

## 🗄️ API

  The web version is for the administrators, they are able to:
  * Add, Edit and Delete Deliveries.
  * Add, Edit and Delete Deliverymen.
  * Add, Edit and Delete Recipients.
  * See delivery problems.
  
  The app is only for deliveryman, they can:
  * Login with his id and Logout
  * See his deliveries
  * Retrieve a delivery( five times per day)
  * Report problem in delivery
  * Cancel delivery
  * Confirm delivery
  * See profile
  
  
  A email is sent when:
  * A new delivery is ready for retrieve
  * A delivery is canceled


## 🧰 API Made with

-  [Node.js](https://www.nodejs.org)
-  [Express](https://expressjs.com/)
-  [Nodemon](https://nodemon.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [Docker](https://www.docker.com/docker-community)
-  [Sequelize](http://docs.sequelizejs.com/)
-  [PostgreSQL](https://www.postgresql.org/)
-  [node-postgres](https://www.npmjs.com/package/pg)
-  [Redis](https://redis.io/)
-  [JWT](https://jwt.io/)
-  [Multer](https://github.com/expressjs/multer)
-  [Bcrypt](https://www.npmjs.com/package/bcrypt)
-  [Youch](https://www.npmjs.com/package/youch)
-  [Yup](https://www.npmjs.com/package/yup)
-  [Bee Queue](https://www.npmjs.com/package/bcrypt)
-  [Nodemailer](https://nodemailer.com/about/)
-  [date-fns](https://date-fns.org/)
-  [Sentry](https://sentry.io/)
-  [DotEnv](https://www.npmjs.com/package/dotenv)

Database:
* Redis for email
* PostGres for default storage


## 🕹️ Controllers

- User Controller
  * Store -> Create admin users

- Session Controller
  * Store -> Admin login route, creates a jwt token
  
- Recipient Controller
  * Index -> Returns a recipient
  ```
  Receives two query paramaters
  q -> name
  page -> Used for the pagination system,each page return 8 recipients
  ```
  * Store -> Create a  new recipient
  * Update -> Update a  new recipient
  * Delete -> Delete a  recipient
  
- File Controller
  * Store -> Create a new image file
  
- Delivery Problem Controller
  * Index -> Returns all the problems registered in the deliveries
  ```
  Can receive a delivery id in the paramater, if so, returns only the problems of that delivery
  ```
  * Store -> Create a new delivery problem message
  * Update -> Cancel a existent delivery, sends a email to the deliveryman
- File Controller
  * Store -> Create a new image file
  
- Recipient Controller
  * Index -> Returns a delivery man
  ```
  Receives two query paramaters
  q -> name
  page -> Used for the pagination system,each page return 5 deliveryman
  ```
  * Show -> Return a single deliveryman
  * Store -> Create a  new deliveryman
  * Update -> Update a  deliveryman
  * Delete -> Delete a  deliverymaCreate a  new deliveryn
  
- Delivery Controller
  * Index -> Returns a delivery
  ```
  Receives two query paramaters
  q -> Product name
  page -> Used for the pagination system,each page return 5 deliveries
  ```
  * Store -> Create a  new delivery
  * Update -> Update a delivery
  ```
  Receives
  delivery id in the route parameter
  signature_id -> Used to receive the signature photo when a delivery in finished.
  ```
  * Delete -> Delete a  delivery
  
- Deliveries Controller
  * Index -> Returns deliveries open or ended
  ```
  Receives two query paramaters
  q -> Product name
  page -> Used for the pagination system,each page return 5 deliveries
  ```
  * Store -> Create a  new delivery
  * Update -> Update a delivery
  
  ```
  Receives
  deliveryman id in the route parameter
  delivery_id in the query
  signature_id  in the body-> Used to receive the signature photo when a delivery in finished.
  If the request has a signature_id, so it means that the deliveryman wants to confirm a delivery.
  If not, this means that the deliveryman wants to retrieve a delivery.
  ```
  
## Getting Started

## 📋 Requirements
* [Node.js](https://nodejs.org/en/) >= 10.1
* [Yarn](https://yarnpkg.com/) >= 1.21 or NPM (>= 6.9)
* Project downloaded
```
 git  clone https://github.com/Wenderson-P/fastfeet.git
```
* Postgress and Redis database installed

## API Installation

```
Open the fastfeet folder in the terminal
  -> cd api
  -> npm install or yarn
  -> Copy .env.example to .env and add your settings
  -> npm dev or yarn dev (This will start the api)
   -> yarn queue ( This will start the bee-queue responsible for sending email)
 ```
 
 **⚠️ Make sure to create a .env file ⚠️**
 
 ## WEB Installation

```
Open the fastfeet folder in the terminal
  -> cd web
  -> npm install or yarn
  -> npm dev or yarn dev
 ```
 
## Mobile Installation
```
Open the fastfeet folder in the terminal
  -> cd mobile
  -> npm install or yarn
  -> react-native start
  -> react-native run-android
 ```
 
