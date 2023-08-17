## Description

This repository demonstrates the use of Docker and Node.js to set up an entrypoint for running multiple services in the backend.

## Tech Stack

- **Node.js**: The backend services are written in Node.js.
- **Docker**: Used to containerize the services.

## Setup

1. Ensure you have both Docker and Docker Compose installed on your machine.
2. Clone this repository:
   ```bash
   git clone git@github.com:devinwangg/docker-multiple-service-example.git
    ```
3. Navigate to the project directory:
    ```
    cd docker-multiple-service-example
    ```
4. Build and start the Docker containers:
    ```
    make run SVC_NAME=cronjob
    ```

## Usage
Once the containers are up and running:

The `external-api.js` will start an external API server.

The `internal-api.js` will start an internal API server.

The `cronjob.js` script will execute scheduled jobs at predefined intervals.

You can use the provided makefile for easier setup, teardown, and other utility commands.

## Supplementary Notes

This project serves purely as a demonstration of the infrastructure. Depending on practical scenarios, you can adjust the actual service launch methods and implementation details to suit your situation.
