import { useState } from "react";
import {useFetch} from "../useFetch.js";


/*

const origenAnimal= 'origenAnimal';

const origenVegetal= 'origenVegetal';

const suplementos= 'suplementos';

const legumbresFrutosSecos= 'legumbresFrutosSecos';

const granosCereales= 'granosCereales';

const [tablaActual, setTablaActual]= useState('');
const elegirTabla = () =>{
    
}

*/




export function TablaAlimentos(){
    
    const {data, loading, error}=useFetch(
        'https://appfit.onrender.com/OrigenAnimal/get'
    );



    return(
        <div className='container m-12 w-1/2 flex flex-nowrap mx-auto'>
            
          
               
                    
        <div>
            <select name="" id="">
                <option value="">

                </option>

                <option value="">
                    
                </option>
            </select>
        </div>                       

       
          

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-4 py3">
                    Codigo
                </th>
                <th scope="col" class="px-6 py-3">
                    Nombre Alimento
                </th>
                <th scope="col" class="px-6 py-3">
                    Tamaño de porción
                </th>
                <th scope="col" class="px-6 py-3">
                    Calorias
                </th>
                <th scope="col" class="px-6 py-3">
                    Proteinas
                </th>
                <th scope="col" class="px-6 py-3">
                    Carbohidratos
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
        {loading && <tr><td colSpan="3">Loading...</td></tr>}

        
        {data?.origenAnimal.}
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                   
                </td>
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </td>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>      
        </tbody>
    </table>
</div>

        </div>
    );
}
export default TablaAlimentos