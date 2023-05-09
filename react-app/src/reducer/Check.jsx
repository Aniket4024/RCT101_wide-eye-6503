import { useState } from "react";

function Check(){
    const [status,setStatus] = useState(false);
    const handleStatus = ()=>{
        setStatus(true)
    }
    return {status,handleStatus}
}
export default Check