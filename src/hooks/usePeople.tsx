import {useEffect, useState} from "react";
import {ResponseApi} from "../types/types";
import {getPeople} from "../service/service";

export function usePeople() {
    const [response,setResponse]=useState<ResponseApi>({count: "", results: []});
    const [isLoading,setIsLoading]=useState(false);
     const findPeople = ({search,page}:{search:string,page:number}) => {
         setIsLoading(true);
         getPeople({search,page}).then(data=>{
             setResponse(data);
             setIsLoading(false);
         });
     }
      useEffect(()=>{
          setIsLoading(true);
          findPeople({search:''});

      },[])

    return {response,loading:isLoading,findPeople,setResponse}
}