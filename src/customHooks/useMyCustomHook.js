import { useEffect, useState } from 'react';

const useMyCustomHook = (myDataToWatch) => {

    const [typeOfData, setTypeOfData] = useState('');

    useEffect(() => {
        setTypeOfData(() => myDataToWatch % 2 === 0 ? 'Is Even' : 'Is Odd');
    }, [myDataToWatch]);

    return typeOfData; 
}

export default useMyCustomHook;