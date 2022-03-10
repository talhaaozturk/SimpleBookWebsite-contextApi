import React from "react";
import BookList from "./BookList";
import myData from "../context/BookContext";
import BookContextProvider from "../context/BookContext";
class App extends React.Component {
  render() {
    return (
      <div>
        <BookContextProvider>
          <BookList />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
