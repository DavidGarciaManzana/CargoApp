import React from 'react';
import axios from "axios";

const url = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';

function UseDetailsAPI() {
    async function handleAPI() {
        try {
            const response = await axios.get(url);
            return response.data.result
        } catch (error) {
            console.error('ERROR: '+ error);
            throw error;
        }
    }


    return {handleAPI};

}

export default UseDetailsAPI;