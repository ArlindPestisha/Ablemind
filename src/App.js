import React, { useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);

  // Add new URL
  const addUrl = async (url) => {
    console.log(url);

    const res = await fetch(
      "https://url-tester-backend.vercel.app/api/urlstatus",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(url),
      }
    );

    const data = await res.json();

    setUrls([...urls, data]);
    console.log(data.status);

    console.log(data);

    // setUrls([...urls, { ...url, id: Date.now() }]);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUrl = { id, ...url };
    setUrls([...urls, newUrl]);
  };

  // Delet a url
  const deleteUrl = (id) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  // Refresh a url status from the POST request
  const refreshUrl = async (id) => {
    const res = await fetch(
      "https://url-tester-backend.vercel.app/api/urlstatus",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(id),
      }
    );

    const data = await res.json();

    setUrls(urls.map((url) => (url.id === id ? data : url)));
    console.log(data.status);
  };

  return (
    <div className="container">
      <Header />
      <Form onAdd={addUrl} />
      <List urls={urls} onDelete={deleteUrl} onRefreshUrl={refreshUrl} />
    </div>
  );
}

export default App;

// import "./App.css";

// function App() {
//   const [url, setUrl] = useState([]);

  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const  URL = { url };
//     console.log(url);
  
   

//     fetch("https://url-tester-backend.vercel.app/api/urlstatus", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(URL),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setUrl( data);
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//       setUrl(URL);
    
//   };

//   return (
//     <div className="App">
//       <h1>URL Tester</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter a URL"
//           value={URL.url}
//           onChange={(e) => setUrl(e.target.value)}
//         />
//         <button type="submit"  >Add</button>
//       </form>
//       {/* <div className="result">
//         <div className={color(url.status)}>{url.status}</div>
//         <div>{url.url}</div>
//       </div> */}
//       <div className="url-status">
//         <h3>
//           {url.status !== undefined ? (
//             url.status >= 100 && url.status <= 199 ? (
//               <span style={{ backgroundColor: "lightblue" }}>{url.status} {url.url}</span>
//             ) : url.status >= 200 && url.status <= 299 ? (
//               <span style={{ backgroundColor: "green" }}>{url.status}</span>
//             ) : url.status >= 300 && url.status <= 399 ? (
//               <span style={{ backgroundColor: "blue" }}>{url.status}</span>
//             ) : url.status >= 400 && url.status <= 499 ? (
//               <span style={{ backgroundColor: "yellow" }}>{url.status}</span>
//             ) : url.status >= 500 && url.status <= 599 ? (
//               <span style={{ backgroundColor: "red" }}>{url.status}</span>
//             ) : url.status >= 600 && url.status <= 699 ? (
//               "Pink"
//             ) : (
//               "Unknown"
//             )
//           ) : (
//             "No URL entered"
//           )}
//         </h3>
//         <p>{url.url}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [urls, setUrls] = useState([]);

// // Delet a url
// function handleDelete(id){
//   setUrls(urls.filter(url => url.id !== id))
// }

// // Add a new url to the list
// function handleSubmit(url){
//   setUrls([...urls, {id: Math.random(), text: url}])
// }

// // Load the urls from localStorage
// function loadUrls(){
//   const urls = JSON.parse(localStorage.getItem("urls"))
//   return urls ? urls : []
// }

// // Save the urls to localStorage
// function saveUrls(){
//   localStorage.setItem("urls", JSON.stringify(urls))
// }

//   return (
//     <div className="App">

//       <footer>
//         <form onSubmit={e => {
//           e.preventDefault();
//           const url = e.target.elements.url.value.trim();
//           if(!url) return;
//           handleSubmit(url);
//           e.target.elements.url.value = "";
//         }}>
//           <input type="text" name="url" placeholder="Add URL" />
//           <button type="submit">Add</button>
//         </form>
//       </footer>

//       <List
//         urls={urls}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }
