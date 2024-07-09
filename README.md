# NoSQL: Social Network API

This project implements a RESTful API for a social network application using Node.js, Express.js, MongoDB, and Mongoose. A social network backend API, where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## installation
    npm install

### Models

**User**:

* `username`
  * String
  * Unique
  * Required
  * Trimmed

* `email`
  * String
  * Required
  * Unique
  * Must match a valid email address (look into Mongoose's matching validation)

* `thoughts`
  * Array of `_id` values referencing the `Thought` model

* `friends`
  * Array of `_id` values referencing the `User` model (self-reference)

**Thought**:

* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`

  **Reaction** (SCHEMA ONLY)

* `reactionId`
  * Use Mongoose's ObjectId data type
  * Default value is set to a new ObjectId

* `reactionBody`
  * String
  * Required
  * 280 character maximum

* `username`
  * String
  * Required

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

## github link
https://github.com/amandeepsandhu13/social_network_API_NoSQL

Video URL: https://drive.google.com/file/d/1-l5xCaIil3MEBuFDNUsKdJ7gj8fjreOj/view
