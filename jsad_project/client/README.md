![Logo of the project](https://github.com/saracastellino/week_9_team_project/blob/master/wireframes/template.png)

# Orbital | Educational Space application

Interactive browser application that displays information about Space in a fun and interesting way.


## Features

The app allows the user to:
* View information about Mars Rovers, planets, ISS, the current ISS crew
* View the picture of the day from the dedicated NASA API
* Display Mars Rovers photos grouped by Rover and by selected Sol ('Show more photos' and "Shuffle photos" included)
* Display how many Earth days the selected Rover was on Mars
* Show the ISS current position on map displaying changing coordinate (lat and long)
* Show the current ISS crew's members and display a clickable Wikipedia link for each
* Display a list of Planets and select one
* Calculate their own age and weight on the selected planet


# UX

## Protopersonas

![Protopersonas](https://github.com/saracastellino/week_9_team_project/blob/master/protopersonas.png)

## Styling

Big. Bright. Bold.
Engage. Entertain. Educate.

- Incorporate familiar elements
- Break with traditional structure
- Create a world with depth
- Functional features with large buttons and graphics
- Use a colour that will stand out against the background
- Use 14pt font for younger children and 12pt font for older children
- Incorporate games and activities


## Homepage wireframe

![Homepage wireframe](https://github.com/saracastellino/week_9_team_project/blob/master/wireframes/planet-content-extension.png)


# Back end

## Tech used

Javascript, Nodejs, Express, MongoDb, Insomnia, HTML, CSS, NPM, Vue.js, NASA API.

## MVP

A user should be able to:

- View the educational content on a particular topic
- Display Mars Rover photos
- Display Rovers key-facts and Mission info
- Be able to interact with the page to move through different sections of content
- Search and display photos from a particular Sol
- Select and display more info about each rover: Curiosity, Spirit & Opportunity
- Favourite planets list
- Displaying selected items

## Extensions

- Display who is in space
- Track the ISS on a map
- Convert Earth days into SOLs

## Extensions on their way

- Implement the 'Favourite planet' function in the Planets section for the user to share its favourite planets on Social Medias
- Form, Sort, Search functions
- Listing the observatories
- Change the background to NASA's pic of the day
- User login
- SpaceX

## Code highlights

### Rovers' random photos method:
![Random photos method](https://github.com/saracastellino/week_9_team_project/blob/master/code/Orbital_code_random_photos.png)



### ISS Tracker API data fetch method:
![ISS Tracker fetch method](https://github.com/saracastellino/week_9_team_project/blob/master/code/Orbital_code_iss_tracker_fetch.png)



### ISS Map vue file:
![ISS Map vue](https://github.com/saracastellino/week_9_team_project/blob/master/code/Orbital_code_iss_map_vue.png)


## Links

- Project homepage: https://github.com/saracastellino/week_9_team_project/tree/master/jsad_project
- Repository: https://github.com/saracastellino/week_9_team_project

- NASA APIs: https://api.nasa.gov
- NASA Mars Photos API: https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY
- NASA photo of the day: https://api.nasa.gov/planetary/apod
- Open Notify ISS crew API: http://api.open-notify.org/astros.json
- Open Notify ISS tracker: http://api.open-notify.org/iss-now.json
- Planets MongoDB database: https://github.com/saracastellino/week_9_team_project/blob/master/jsad_project/server/db/seeds.js


# Installing / Getting started

Clone the project down from https://github.com/saracastellino/week_9_team_project/tree/master/jsad_project.
CD into root of project.

# client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Dependencies
```
npm install vue2-leaflet leaflet --save
npm install --save vue-scrollto
```

# server

## Project setup
```
npm init -y
npm i express
npm i body-parser
npm i cors
npm i mongodb
npm i nodemon
```

### Compiles and hot-reloads for development
```
npm run serve
```
### CD into server/db
```
mongo < db/seeds.js
```
### CD into server
```
npm run server:dev
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
