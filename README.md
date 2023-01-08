# Fund.Me

This was a small side project that I created to allow a user to quickly transfer their Google Keep Notes over to a text file and have it parse
to display the monthly spending report.

This allowed me to explore a new Next.js framework along side FastAPI for quick
API development. I had a lot of fun implementing this project, and I do like what Next.js and FastAPI has to offer.

## Usage

### Web application

1. Check if your docker image is built it with:

    **docker images (fundme)**

2. If the image has been built, run:

    **docker run -p 3000:3000 fundme**

### Python Microservice

1. To start the backend API, make sure you have all the requirements.txt installed

2. Start the FastAPI using this following command in the backend directory: 

    **uvicorn main:app --reload**

## Tech Stack

### Frontend

* React.js
* Next.js
* Typescript
* Tailwind CSS
* Mantine UI Library

### Backend

* Python
* FastAPI

## Creator

### Jonathan Mach
