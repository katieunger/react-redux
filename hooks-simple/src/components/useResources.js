import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([])

    useEffect(() => {
        // Cannot pass an async function/function which returns a promise to useEffect
        // Must define function separately
        // Arrow function that defines and immediately invokes a second arrow function
        (async (resource) => {
            const response  = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            
            setResources(response.data);
        })(resource);
    }, [resource]);

    return resources;
};

export default useResources;