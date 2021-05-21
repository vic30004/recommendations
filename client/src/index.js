import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const url = window.location.href;
let uri;
console.log(uri)
if (process.env.NODE_ENV === "development") {
  uri = "http://localhost:5000/graphql";
} else {
  uri = `${window.location.href}graphql`;
}
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  headers: {
    authorization: localStorage.getItem("token") || "",
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
