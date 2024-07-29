# QR Code Generator

This is a simple Node.js application that prompts the user for a URL and generates a QR code image for that URL.

## Features

- Prompts the user for a URL using `inquirer`.
- Generates a QR code for the provided URL using `qr-image`.
- Saves the generated QR code as a PNG file.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/mhtkr/QR-Code-Generator.git
    cd qr-code-generator
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Run the script:

    ```sh
    node generateQR.js
    ```

2. Enter the URL when prompted.

3. The QR code image will be generated and saved as `qr_img.png` in the current directory.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): A collection of common interactive command-line user interfaces.
- [qr-image](https://www.npmjs.com/package/qr-image): A simple QR code generator for Node.js.
- [fs](https://nodejs.org/api/fs.html): File system module for reading and writing files.
