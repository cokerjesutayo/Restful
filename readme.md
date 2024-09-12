# CRUD Operations for User Management

This project provides a basic example of CRUD (Create, Read, Update, Delete) operations for managing user data via an API.

## Base API URL

The base URL for the API is:

```
https://restful-jesutayo.onrender.com/api/v1/users
```

## Available Endpoints

### 1. Create a New User (POST)
- **Endpoint**: `/`
- **Description**: This endpoint allows you to create a new user by sending a POST request with user details.
- **Method**: `POST`
- **Payload** (example):

```json
{
   "fullname": "Jon Doe",
            "description": "Developer",
            "projectdone": 50,
}
```

- **Response**: The newly created user object.

---

### 2. Get All Users (GET)
- **Endpoint**: `/`
- **Description**: This endpoint returns a list of all users.
- **Method**: `GET`

- **Response** (example):

```json
{
    "success": true,
    "numOfUsers": 3,
    "users": [
       {
    "success": true,
    "numOfUsers": 3,
    "users": [
        {
            "_id": "66e2dd3aa5051e5f1cc2f7e2",
            "fullname": "Ade bayo",
            "description": "Software Engineer",
            "projectdone": 30,
            "createdAt": "2024-09-12T12:23:22.677Z",
            "updatedAt": "2024-09-12T12:23:22.677Z",
            "__v": 0
        },
        {
            "_id": "66e19714d4628c83570bce58",
            "fullname": "Jon Doe",
            "description": "Developer",
            "projectdone": 50,
            "createdAt": "2024-09-11T13:11:48.839Z",
            "updatedAt": "2024-09-11T13:11:48.839Z",
            "__v": 0
        },
        {
            "_id": "66e19646d4628c83570bce55",
            "fullname": "Jesutayo Coker",
            "description": "FullStack Developer",
            "projectdone": 5,
            "createdAt": "2024-09-11T13:08:22.934Z",
            "updatedAt": "2024-09-11T13:08:22.934Z",
            "__v": 0
        }
    ]
}
    ]
}
```

---

### 3. Get a Single User by ID (GET)
- **Endpoint**: `/:userId`
- **Description**: This endpoint retrieves a single user by their unique `userId`.
- **Method**: `GET`

- **Route Parameter**: 
  - `userId`: The unique ID of the user you want to retrieve (replace `:userId` with the actual user ID).

- **Example Request**:

```
GET https://restful-jesutayo.onrender.com/api/v1/users/66e1977dd4628c83570bce5b
```

- **Response** (example):

```json
 {
            "_id": "66e19714d4628c83570bce58",
            "fullname": "Jon Doe",
            "description": "Developer",
            "projectdone": 50,
            "createdAt": "2024-09-11T13:11:48.839Z",
            "updatedAt": "2024-09-11T13:11:48.839Z",
            "__v": 0
        
        },
```

---

### 4. Update a User by ID (PATCH)
- **Endpoint**: `/:userId`
- **Description**: This endpoint updates an existing user by their `userId`.
- **Method**: `PATCH`

- **Route Parameter**: 
  - `userId`: The unique ID of the user you want to update (replace `:userId` with the actual user ID).

- **Payload** (example):

```json
{
  "_id": "66e187649ee936ba1261abc0",
        "fullname": "Jane Doe",
        "description": "Developer",
        "projectdone": 30,
        "createdAt": "2024-09-11T12:04:52.052Z",
        "updatedAt": "2024-09-11T13:00:00.739Z",
        "__v": 0
}
```

- **Example Request**:

```
PATCH https://restful-jesutayo.onrender.com/api/v1/users/123456789
```

- **Response**: {
  "_id": "66e187649ee936ba1261abc0",
        "fullname": "Jane Doe",
        "description": "Developer",
        "projectdone": 30,
        "createdAt": "2024-09-11T12:04:52.052Z",
        "updatedAt": "2024-09-11T13:00:00.739Z",
        "__v": 0
}

---

### 5. Delete a User by ID (DELETE)
- **Endpoint**: `/:userId`
- **Description**: This endpoint deletes a user by their `userId`.
- **Method**: `DELETE`

- **Route Parameter**: 
  - `userId`: The unique ID of the user you want to delete (replace `:userId` with the actual user ID).

- **Example Request**:

```
DELETE https://restful-jesutayo.onrender.com/api/v1/users/123456789
```

- **Response**: User deleted.

---