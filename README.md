# MyReads Project

A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The main page also has a link to /search, a search page that allows you to find books to add to your library.
The goal was to use React to build the application and we were provided an API server and a client library.

## Install

To get started:
* `$ git clone https://github.com/hellodiara/react-project-mybooks.git` or [download](https://github.com/hellodiara/react-project-mybooks/archive/master.zip) the project
* Open your command line interface and go into the project's directory `$ cd react-project-mybooks`
* Install all project dependencies with `$ npm install`
* Start the development server with `$ npm start`

## Backend Server

To simplify the development process, we were provided a backend server for us to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms: 

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License

My book is under the MIT license

## Contributing

This repository uses starter code created b Udacity.
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
