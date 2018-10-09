# Use an API to Create an Employee Directory

Communicating with APIs allows you to work with microservices and with vast databases to build useful tools and relevant information quickly and easily. You can build utilities, games, infographics, and more. You can also integrate, display, and analyze social media and large data sets without having to create and curate them yourself.

Awesome Startup is a distributed company with employees working all over the world. They need a smart way to for employees to share contact information with each other. In this project, you’ll use the Random User Generator API (https://randomuser.me/) to grab information for 12 random “employees,” and use that data to build a prototype for an Awesome Startup employee directory. You’ll request a JSON object from the API using fetch and parse the data so that 12 employees are listed in a grid with their thumbnail image, full name, email, and location. Clicking the employee’s image or name will open a modal window with more detailed information, such as the employee’s birthday and address.

Project Instructions

To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

Use fetch to get and display 12 random users from The Random User Generator API. Using photos and information that the API provides, you’ll display 12 users, along with some basic information:
  * Image
  * First and Last Name
  * Email
  * City
    
Create a modal window that will pop up when any part of the user’s row is clicked. The following details should display in the modal window:
  * Image
  * Name
  * Email
  * Cell Number
  * Detailed Address, including street name and number, city, state, and postcode.
  * Birthdate

Structure and style the user directory so that it roughly matches the provide mockup.
  * Display the users in a grid or table
  * Add a hover state to the rows of the user table.
  * Make sure there’s a way to close the modal window