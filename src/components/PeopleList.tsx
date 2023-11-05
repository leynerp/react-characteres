
import {People} from "../types/types";

export function PeopleList({peopleList}:{peopleList:People[]}) {


    return (
        <>
            <ul className='people'>
                {
                    peopleList.map((value) =>{
                        return (
                            <li className='people' key={value.name}>
                                <h2>{value.name}</h2>
                                <p>{value.birth_year}</p>
                                <p>{value.hair_color}</p>
                            </li>

                        )
                    })
                }
            </ul>
        </>
    )

}