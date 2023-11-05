import {API_URL} from '../config/config';
import {ResponseApi} from "../types/types";
export const getPeople = async ({search,page=1}:{search:string,page:number}) => {
    const url=new URL(API_URL);
    url.searchParams.append('page',page.toString());
    if (search)
    url.searchParams.append('search',search);
    const response=await fetch(url);
    const data=await response.json() as Promise<ResponseApi>
    return data;
}