import { useState, useEffect } from "react";
import "./App.css";
// import { DataGrid } from '@mui/x-data-grid';

import ReposList from "./components/ReposList";

const PG_BASE = "https://api.github.com/users/gutenbergbooks/repos";

function App() {
  const [repos, setRepos] = useState();
  const [reposList, setReposList] = useState();

  fetch(PG_BASE)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        setRepos(data);
      }
    });

    if(repos) {
      debugger;
    }
  return repos ? (
    <>
      <h1>Fetch from Github</h1>
      <div className="card">
        <ReposList repos={repos} />
      </div>
    </>
  ) : (
    ""
  );
}

export default App;
