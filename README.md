# Uptime Monitoring API

A raw Node.js-based uptime monitoring API that allows users to create accounts, authenticate using tokens, and monitor the status (up or down) of web URLs. This system notifies users when the status of their monitored URLs changes. The project is built without any external frameworks, focusing on the fundamentals of Node.js.

## Features
- **User Management:**  
  Users can register, retrieve, update, and delete their accounts. 

- **Authentication with Tokens:**  
  Secure token-based authentication system. Tokens are valid for a limited time and are required to perform user-specific operations.

- **Check Management:**  
  Users can create, retrieve, update, and delete checks to monitor web URLs. Each check includes details like the protocol, method, success codes, and timeout duration.

- **Periodic Uptime Checks:**  
  The worker module periodically validates the status of user-defined URLs and determines if they are up or down.

- **Real-Time Alerts:**  
  Notifies users via SMS when the status of a monitored URL changes.

- **Custom Libraries and Utilities:**  
  Built using custom modules for request/response handling, data storage, environment configuration, and more.

## File Structure
📁 handlers/
├── checkHandler.js
├── notFoundHandler.js
├── tokenHandler.js
├── userHandler.js
├── sampleHandler.js

📁 helpers/
├── environment.js
├── handleReqRes.js
├── notifications.js
├── utilities.js

📁 lib/
├── data.js
├── server.js
├── worker.js

📄 index.js
📄 routes.js


## How It Works
1. **User Creation:**  
   Users can register by sending a `POST` request to the `/users` endpoint with their information.

2. **Token Generation:**  
   Upon providing valid credentials, users receive a token for authentication, which is required for all subsequent operations.

3. **Check Creation:**  
   Authenticated users can create checks for URLs they want to monitor. Each check defines the URL, protocol (HTTP/HTTPS), HTTP method, expected success codes, and timeout duration.

4. **Uptime Monitoring:**  
   The worker module runs periodically to check the status of the URLs defined in the checks. If the status changes (up ↔ down), the user is notified via SMS.

5. **CRUD Operations:**  
   Full CRUD support is available for users, tokens, and checks via the `/users`, `/tokens`, and `/checks` endpoints.

## Endpoints
### `/users`
- `POST` - Create a new user.  
- `GET` - Retrieve user data.  
- `PUT` - Update user data.  
- `DELETE` - Delete a user.

### `/tokens`
- `POST` - Generate a token.  
- `GET` - Retrieve token information.  
- `PUT` - Extend token validity.  
- `DELETE` - Invalidate a token.

### `/checks`
- `POST` - Create a new check.  
- `GET` - Retrieve checks for the authenticated user.  
- `PUT` - Update an existing check.  
- `DELETE` - Remove a check.

## Dependencies
This project is built using raw Node.js without external libraries. Custom modules handle file operations, request/response parsing, and data validation.

## Credits
This project is inspired by the tutorials from the [Learn With Sumit](https://youtube.com/@LearnwithSumit) YouTube channel. Special thanks to the **Node.js Bangla Tutorials** playlist for guiding the implementation of this project:  
[Node.js Bangla Tutorials](https://youtube.com/playlist?list=PLHiZ4m8vCp9PHnOIT7gd30PCBoYCpGoQM&si=f8Tb8YqaAuoXdk6N)
