import {useState} from "react";
import {getPeople} from "../service/service";
import {usePeople} from "../hooks/usePeople";

export function Pagination({search,setResponse}:{search:string,setResponse:any}) {
    const {response}=usePeople();
    const [actualPage,setActualPage]=useState(1);
    const pageCount=response.count/9;
    const pageCountPagination=(pageCount.toString().includes('')) ? Math.trunc(pageCount)+1 :pageCount;
    const handleNextPage = () => {
        const currentPage=actualPage+1;
        setActualPage(currentPage);
        getPeople({search,page:currentPage}).then(data=>{
            setResponse(data);
        });

    }
    const handlePreviousPage = () => {
        const currentPage=actualPage-1;
        setActualPage(currentPage);
        getPeople({search,page:currentPage}).then(data=>{
            setResponse(data);
        });

    }
    return (
        <>
            <button onClick={handlePreviousPage} disabled={actualPage==1 && true} type='button' >{'<'}</button>
            <input style={{width:'20px'}} value={actualPage} type='text' disabled={true}></input>
            <button onClick={handleNextPage} disabled={(actualPage===pageCountPagination) && true} type='button' >{'>'}</button>
            <p> show resul since </p>
        </>
    );

}