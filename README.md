# Passco Application (AdonisJS)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This web application allows users to answer multiple-choice questions (MCQs). The application provides immediate feedback to the user by showing a green tick next to the selected correct option and a red cross tick next to the wrong option. Additionally, users can click on the "Why?" button to watch a video explanation by a tutor for the correct answer.

## Features

- Real-time feedback on user answers (green tick for correct, red cross for incorrect)
- Video explanations by tutors for each question.

## Requirements

To run this application, you'll need the following software installed on your system:

- Node.js (= 12.x.x)
- Npm (= 6.x.x)
- MySQL (>= 8.0) or any other compatible database
- Composer (for dependency management)
- Vue.js (= 2.5.x)
- Bootstrap (= 4.x.x)

## Getting Started

### Installation

- Clone this repository to your local machine:
   ```shell
   git git@github.com:cgardesey/passco.git
   
- Change into the project directory:
   ```shell
   cd passco
- Install the project dependencies using Composer:
   ```shell
   Composer install
- Install JavaScript dependencies using npm:
   ```bash
      npm install  
- Create a copy of the .env.example file and rename it to .env:
  ```shell
  cp .env.example .env
- Install AdonisJS globally via npm like so:
  ```shell
  npm install -g @adonisjs/cli
- Generate a new application key:
  ```shell
   adonis key:generate
- Configure your database settings in the .env file.
- Run the database migrations:
   ```shell
   adonis migrate
- Start the development server:
   ```shell
   adonis serve --dev

- You should now be able to access the application at `http://localhost:3334`.


## Contributing
If you'd like to contribute to this project, please follow these steps:
- Fork the repository on GitHub.
- Create a new branch with a descriptive name.
- Commit your changes to the new branch.
- Push the branch to your forked repository.
- Submit a pull request to the original repository.

Please ensure that your code follows the project's coding standards and includes appropriate tests for any new functionality.

Check out the the [same project](https://github.com/cgardesey/passco_laravel_node_vue) implemented in laravel

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it as a reference or starting point for your own projects.


