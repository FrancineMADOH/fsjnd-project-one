# udacity-fullstack-nano-project-1

# Image processing API

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Installing](#installing)
- [Usage](#usage)

## About

This project build a simple placeholder API,
** The first use case allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping.
** The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Getting Started

After cloning this project install all the dependancies by running ``npm install`

Running the project thought the command `npm run start` the application is available on port 4000

## Script

### Test Script

Run the test script with the command `npm run test` to run the test in developement mode

To run the test im production mode run `npm run jasmine`

### Linting

Run the linting script with `npm run lint `

### Prettier

Beautify the project by running the prettier command `npm run prettier `

## Usage

visit: `http://localhost:4000/api` for documentation on how to use the API

Access the `api/resize` route by providing images parameters. For example by entering the following address:
`http:localhost:4000/api/resize?imgName=me&imgWidgth=200&imgHeight=200
the image named me will be resized to 200x200. The new resized image will be populate in the public/thumnails folder with a new custom name following the pattern "res_" + "imageName+width +height" + ".jpeg"
