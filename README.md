# Random-Activities

# I'm Bored - Activity Finder

This is a simple web application built using **Express** that fetches random or filtered activities based on user input from the [Bored API](https://bored-api.appbrewery.com/).

## Features

- Display a random activity suggestion when the page is loaded.
- Filter activities based on type (e.g., education, recreation) and the number of participants.
- Error handling and user-friendly messages when no activities match the criteria.

## Tech Stack

- **Node.js**: JavaScript runtime to build the server.
- **Express**: Web framework for building the server and handling routes.
- **EJS**: Template engine to render HTML with dynamic content.
- **Axios**: Promise-based HTTP client for making requests to the Bored API.
- **Body-parser** (optional, can be replaced with Express built-in parser): Middleware to parse incoming form data.
