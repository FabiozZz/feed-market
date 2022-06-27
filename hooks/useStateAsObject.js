import {useState} from "react";

/**
 * @template T
 * @param {T} initialState
 * @returns {{onChange: (function():void), clear: (function(): void), state: T}}
 */
export function useStateAsObject(initialState){
    const [state,setState] = useState(initialState)

    const onChange= (obj) =>{
        if (obj && obj.target) {
            const value = obj.target.value
            const name = obj.target.name
            setState(prevState =>
                ({...prevState,[name]:value}))
        }else{
            setState(prevState =>
                ({...prevState,obj})
            )
        }
    }

    const clear = ()=>setState(initialState)
    
    return {
        state,
        onChange,
        clear
    }
}