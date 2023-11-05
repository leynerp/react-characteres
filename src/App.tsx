
import './App.css'
import {usePeople} from "./hooks/usePeople";
import {PeopleList} from "./components/PeopleList";
import {Pagination} from "./components/Pagination";
import {useState} from "react";
import {Search} from "./components/Search";

function App() {
  const {response,findPeople,loading,setResponse}=usePeople();
    const [search,setSearch]=useState('');

    if (loading)
        document.getElementById('loading')?.classList.add('loading');
    else
        document.getElementById('loading')?.classList.remove('loading');

  return (
    <>
        <h1 >People start wars</h1>
        <header>
          <Search search={search} setSearch={setSearch} findPeople={findPeople}></Search>
        </header>
        <aside className='paging'>
           <Pagination setResponse={setResponse} search={search}  ></Pagination>
        </aside>
        <main>
            <PeopleList peopleList={response.results} ></PeopleList>
        </main>
    </>
  )
}

export default App
