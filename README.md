
Phishing API project

Technologies : Nodejs, Mongo.

# To run the project


App:
BACKEND: 
- Clone the project.
- npm i.
- Create config.env and store the following variables:
- JWT_SECRET=type:string
- EMAIL_USERNAME=type:string
- EMAIL_PASSWORD=type:string
- EMAIL_HOST=type:string
- EMAIL_PORT=type:number
- Run node server.js  \ nodemon server.js
FRONTEND:
- npm i 
- Run npm start


* i used https://mailtrap.io/ for the convenience



# endpoints:
- POST api/v1/users/signup
- POST api/v1/users/login
- GET api/v1/phishing
- POST api/v1/email -- to send email
- GET /api/v1/emails --to get lists of the emails and statuses
- If you are using postman:
- You can view postman collection in the project and import it to postman if needed

- Here are some Curl examples in case you are not using postman:

# signup
```
curl --location --request POST 'localhost:3000/api/v1/users/signup' \
--header 'Content-Type: application/json' \
--header 'Cookie: Cookie_1=value; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJkNzljZjgyMmYyMTA2NGU2YTc3OCIsImlhdCI6MTY0NDk0MzI2MSwiZXhwIjoxNjUyNzE5MjYxfQ.nAp2lTf0R5SiizDLTmZFRjY2GkdQ-L-FVmt_rJS8gAA' \
--data-raw '{
    "email":"chedsnkCC@gmail.com",
    "password":"12345678",
    "passwordConfirm":"12345678",
    "name":"Kl"
}'
```
# send email
```
curl --location --request POST 'localhost:3000/api/v1/email' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJkNzljZjgyMmYyMTA2NGU2YTc3OCIsImlhdCI6MTY0NDk0MzI2MSwiZXhwIjoxNjUyNzE5MjYxfQ.nAp2lTf0R5SiizDLTmZFRjY2GkdQ-L-FVmt_rJS8gAA' \
--header 'Content-Type: application/json' \
--header 'Cookie: Cookie_1=value; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJkNzljZjgyMmYyMTA2NGU2YTc3OCIsImlhdCI6MTY0NDk0MzI2MSwiZXhwIjoxNjUyNzE5MjYxfQ.nAp2lTf0R5SiizDLTmZFRjY2GkdQ-L-FVmt_rJS8gAA' \
--data-raw '{
    "email":"chenkamin@gmail.com"
}'
```
# login
```
curl --location --request POST 'localhost:3000/api/v1/users/login' \
--header 'Content-Type: application/json' \
--header 'Cookie: Cookie_1=value; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGJkNzljZjgyMmYyMTA2NGU2YTc3OCIsImlhdCI6MTY0NDk0MzI2MSwiZXhwIjoxNjUyNzE5MjYxfQ.nAp2lTf0R5SiizDLTmZFRjY2GkdQ-L-FVmt_rJS8gAA' \
--data-raw '{
    "email":"chenkCC@gmail.com",
    "password":"12345678"
}'
```
