import React, { useState } from "react";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Form from "./components/Form/Form";

function App() {
  const [urls, setUrls] = useState([]);

  // Add new URL
  const addUrl = async (url) => {
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

    const status = await res.json();
    // setUrls([...urls, { ...url, id: Date.now() }]);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newUrl = { status, id, ...url };
    setUrls([...urls, newUrl]);
  };

  // Delet a url
  const deleteUrl = (id) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  // Refresh a url
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
    // window.location.reload();
    const status = await res.json();
    setUrls(urls.map((url) => (url.id === id ? status : url)));
    console.log(status);
  }; 

  // Remove all urls
  const remove = () => {
    setUrls([]);
  };

  // Reload all
  const reloadAll = async (id) => {
    urls.map(async (url) => {
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
      const status = await res.json();
      setUrls(urls.map((url) => (url.id === id ? status : url)));
      console.log("reloadall", status);
    });
  };

  return (
    <div className="container">
      <Header />
      <Form onAdd={addUrl} />
      <List
        itemUrls={urls}
        onDelete={deleteUrl}
        onRefreshUrl={refreshUrl}
        remove={remove}
        reloadAll={reloadAll}
      />
    </div>
  );
}

export default App;
