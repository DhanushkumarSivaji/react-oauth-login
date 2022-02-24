import React,{ useState } from 'react'


const UpdatedComponent = (OriginalComponent) => {

    function NewComponent() {
        const [count,setCount] = useState(0);

        const incrementCount = () => {
            setCount((count) => count + 1)
        }
        return (
            <OriginalComponent name="Dhanush" incrementCount={incrementCount} count={count}/>
        )
    }

    return NewComponent;
}

export default UpdatedComponent;