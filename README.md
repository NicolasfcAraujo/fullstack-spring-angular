# HR Web

This is a Full Stack simplified **HR software** built with Java Spring and Angular 17

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/2560px-Spring_Framework_Logo_2018.svg.png" width="192"/>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*sBcrUZYKoa7SDIoyPdEVXA.png" width="192"/>

## Summary

- ### Overview
- ### Installation
- ### Usage

## Overview

Welcome! this documment provides an overview of this project. Whether you are a developer exploring this codebase, or simply curious about the project, this overview intend to give you a comprehensive understanding of what that project is and its features.

### What is it?

HR Web is a simplified HR software

### Key features

- Recording and analysis of members' check-in and check-out
- Event scheduling
- Member registration
- Data editing

### Technology stack

- **Back End**: Java 17, Spring Framework
- **Front End**: Typescript, Angular 17, TailwindCSS
- **Database**: H2 DB
- **Containers**: Docker, Docker Compose

## Installation 

### 1 Using Docker

#### 1.1 Install Docker 

- If you don't have docker installed, you can install it on [Docker Desktop](https://www.docker.com/products/docker-desktop/). Docker Desktop includes Docker Engine along with Docker Compose and Docker CLI

#### 1.2 Check Docker version 

- Open a terminal and use `docker -v` to check the version

#### 1.3 Download the repository

- Here in this repository, go to "<> code" and download zip

    <img src="https://raw.githubusercontent.com/NicolasfcAraujo/fullstack-spring-angular/frontend/assets/installation/1-download.png?token=GHSAT0AAAAAACODOJCE77EAQGAA5EUHNOXKZRYWYZA" width="320" alt="code download"/>
  
#### 1.4 Run Docker Compose

- Unzip the downloaded folder
- Open it on terminal
- Run `docker compose up -d`

#### 1.5 Open the application

- Now you can access the app on http://localhost:4200

### 2 Opening backend and frontend separately

#### 2.1 Install Java Development Kit (JDK)

- Java Development Kit (JDK): [install](https://www.oracle.com/java/technologies/downloads)

#### 2.2 Install Node JS

- Node JS: [install](https://nodejs.org/en)

#### 2.3 Install Angular CLI

- Run `npm install -g @angular/cli`

#### 2.4 Download the repository

- Here in this repository, go to "<> code" and download zip

    <img src="https://raw.githubusercontent.com/NicolasfcAraujo/fullstack-spring-angular/frontend/assets/installation/1-download.png?token=GHSAT0AAAAAACODOJCE77EAQGAA5EUHNOXKZRYWYZA" width="320" alt="code download"/>

#### 2.5 Unzip the folder

#### 2.6 Open the backend

- Access the directory "/backend/spring" 
- Run `./mvnw spring-boot:run`
- The backend is now running on http://localhost:8080

#### 2.7 Open the frontend

- Access the directory "/frontend/spring"
- Run `ng serve`
- The frontend is now running on http://localhost:4200

#### 2.8 Access

- Now access http://localhost:4200 on your browser and test the application

## Usage

- When you access it for the first time, you will see the login page. You can click on "Log In as Admin (test)" to automatically create your adm account and have total access to the app features.

![login page](https://raw.githubusercontent.com/NicolasfcAraujo/fullstack-spring-angular/frontend/assets/overview/1-login.png?token=GHSAT0AAAAAACODOJCEVDXZJD7VRYHAN4OCZRYYFKA)

- Once logged, you can
    - Clock In/Out,
    - Schedule new events
    - View your data and others members' data
    - Add new members to the team

![main panel](https://raw.githubusercontent.com/NicolasfcAraujo/fullstack-spring-angular/frontend/assets/overview/5-eventadded.png?token=GHSAT0AAAAAACODOJCEGBXBF46IPY7VWGYSZRYZNIQ)