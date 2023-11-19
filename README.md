# Card Project

## Introduction

This project is a simple card application that displays user information, including first name, last name, country, phone number, state, city, and village. The user data is stored locally using the Local Storage API, allowing real-time updates to the user interface.

## UI Consistency

The user interface is designed to be consistent throughout the project, providing a clean and organized display of user information. The card layout ensures easy readability, and the theme changer allows users to switch between light and dark modes.

## Local Storage Usage

The application utilizes the Local Storage API to capture user input when the form is submitted. The entered data is stored locally, enabling persistent user information even when the page is refreshed. The UI is updated in real-time to reflect the stored data.

## Creativity

To add a creative touch to the project, a theme selector is implemented. Users can choose between light and dark modes to customize their viewing experience. This additional functionality enhances the user's interaction with the application.

## Usage

1. When the page is loaded, the stored user data is checked in the Local Storage.
2. If user data is found, the UI is updated with the stored information.
3. If no user data is found, the user is prompted to enter their information using the `getUserInput` function.
4. The reset button (`Reset`) allows users to clear the stored data, reset the UI, and enter new information.
