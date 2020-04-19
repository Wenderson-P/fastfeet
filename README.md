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
* [Getting Started](#getting-started)
  * [Requirements](#-requirements)
  * [API Installation](#api-installation)
  * [WEB Installation](#web-installation)
  * [Mobile Installation](#mobile-installation)
  
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
 
