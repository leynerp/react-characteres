import {Dispatch, SetStateAction} from "react";

export function Search({search,setSearch,findPeople}:{search:string,setSearch:Dispatch<SetStateAction<string>>,findPeople:any}) {
    const handlerKey = (e) => {
        if (e.key!=='Enter')return;
        setSearch(e.target.value);
        findPeople({search:e.target.value,page:1})
    }
    const handlerOnChange = (e) => {
        setSearch(e.target.value);
    }
    const handlerClear = () => {
      setSearch('');
      findPeople({search:'',page:1});
    }

    return (
        <>
            <input onChange={handlerOnChange} onKeyDown={handlerKey} value={search} type='text' name='search' placeholder='people1,people2'></input>
            <button type='button' onClick={handlerClear}>clear</button>

        </>
    )
}