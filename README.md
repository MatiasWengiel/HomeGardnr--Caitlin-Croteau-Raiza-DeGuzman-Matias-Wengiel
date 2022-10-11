GARDNR
=========
Never again struggle to remember your plants' watering schedules with Gardnr.

This React application lets you keep track of all the plants in your garden, the last time each one was watered, and their next watering dates. The app interacts with the [AccuWeather API](https://developer.accuweather.com/) to provide you with basic local weather data and triggers alerts for any adverse weather events that you may need to act on to protect your plants.

The app simulates a user logged in view and upon opening the app, you will be taken directly to the 'My Garden' page.

This application was developed by [Caitlin Croteau](https://github.com/caitlincroteau), [Matias Wengiel](https://github.com/MatiasWengiel), and [Raiza De Guzman](https://github.com/Raiza-D) as a final project for Lighthouse Labs' Web Flex Program.

## Final Product

Screenshots coming soon...

## Initial Setup
**Backend and Database Setup**

1. Create a ```.env``` file

2. Locate the ```.env.example``` file and copy its contents into ```.env```.

3. Open ```Postgresql``` and create a database called ```gardnr```.

4. Update your ```.env``` file by entering the correct values for ```DB_USER```, ```DB_PASS```, and ```DB_NAME```.

4. Obtain a trial API key from [AccuWeather API](https://developer.accuweather.com/)

5. Place the API key in the ```.env``` file like so:

    ```WEATHER_API_KEY=pasteyourkeyhere```

**Getting Started**

1. From the project's root directory, run the command below. This command will install all the required dependencies.

    ```npm run install```

2. Setup the ```gardnr``` database by running the command below. This command will create the tables and seed them.

    ```npm run db:reset```

3. In a separate Terminal window, start the server by running this command in the project's root directory:

    ```npm run startServer```

4. In another Terminal window, start the Webpack Development server by running this command in the project's root directory:

    ```npm start```

5. The project will served at: ```https://localhost:3000```

## Tech Stack
- Front-End: ```React```
- Back-End: ```Express```
- Database: ```Postgresql```

## Dependencies
```
testing-library/jest-dom: ^5.16.5,
testing-library/react: ^13.4.0,
testing-library/user-event: ^13.5.0,
axios: ^0.27.2,
bootstrap: ^5.2.1,
dotenv: ^16.0.2,
morgan: ^1.10.0,
pg: ^8.8.0,
react: ^18.2.0,
react-bootstrap: ^2.5.0,
react-dom: ^18.2.0,
react-router-dom: ^6.4.1,
react-scripts: 5.0.1,
sass: ^1.54.9,
sass-middleware: ^0.0.3,
web-vitals: ^2.1.4
```