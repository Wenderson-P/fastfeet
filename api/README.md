<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Wenderson-P/fastfeet-backend"/>
      <img alt="Languages" src="https://img.shields.io/github/languages/count/Wenderson-P/fastfeet-backend"/>
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/Wenderson-P/fastfeet-backend"/>
      <img alt="Code quality" src="https://img.shields.io/scrutinizer/quality/g/wenderson-P/fastfeet-backend/master"/>
  </p>


<h4 align="center">This is a API REST  made in node for a fictional carrier</h4>

## 🧰 Made with

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
