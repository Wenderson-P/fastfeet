<p align="center"  >
    <a href="https://github.com/Wenderson-P/fastfeet">
        <img src="https://user-images.githubusercontent.com/52503774/81227846-74d91580-8fc3-11ea-9fc8-b7ca2bee7c4a.png" alt="Fastfeet" width="25%"/>
      </a>
</p>
<p align="center">
      <img alt="Languages" src="https://img.shields.io/github/languages/count/Wenderson-P/fastfeet"/>
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/Wenderson-P/fastfeet"/>
  </p> 
  
  
## 📜 Table of Contents

* [About the Project](#-about-the-project)
* [Web Preview](#-web-preview)
* [Mobile Preview](#-mobile-preview)
* [Getting Started](#getting-started)
  * [Requirements](#-requirements)
  * [API Installation](#api-installation)
  * [WEB Installation](#web-installation)
  * [Mobile Installation](#mobile-installation)
* [Future Updates](#future-updates)
  
## 🔎 About the project
Full Stack project to manage a fictional carrier.


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

## 💻 Web Preview
⚠️**This is a new layout in progress**⚠️
   <div display="inline">
       <img src="https://user-images.githubusercontent.com/52503774/81228592-b3230480-8fc4-11ea-9783-5ff89d2bb098.png" alt="Fastfeet" width="30%" margin="10px"/>
    <img src="https://user-images.githubusercontent.com/52503774/81228594-b3bb9b00-8fc4-11ea-9516-496e9dd5badd.png" alt="Fastfeet" width="30%"  margin="10px"/>
    <img src="https://user-images.githubusercontent.com/52503774/81228599-b4ecc800-8fc4-11ea-84db-e0f4cd42466f.png" alt="Fastfeet" width="30%"  margin="10px"/>
</div>

## 📱 Mobile Preview
⚠️**This is a new layout in progress**⚠️
   <div display="inline">
       <img src="https://user-images.githubusercontent.com/52503774/81231919-588ca700-8fca-11ea-9314-87adba2b3234.png" alt="Fastfeet" width="30%" margin="10px"/>
    <img src="https://user-images.githubusercontent.com/52503774/81231922-59bdd400-8fca-11ea-9346-84326b76f34c.png" alt="Fastfeet" width="30%"  margin="10px"/>
    <img src="https://user-images.githubusercontent.com/52503774/81231920-59253d80-8fca-11ea-843b-f602a4f7af15.png" alt="Fastfeet" width="30%"  margin="10px" border-radius="5px"/>
</div>
   
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
 
 ## Future updates
- [ ] Remake design (in progress)
- [ ] Add Geolocation (in progress)
- [ ] Trace routes for deliveries (in progress)
- [ ] Get deliveryman position in web version
- [ ] Change design in mobile version
- [ ] Change design in web version 
