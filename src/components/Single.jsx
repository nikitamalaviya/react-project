// import React, { useState } from "react";
// const Single = () =>{
//     const[data, setdata] = useState();
//     let handle = (e) =>{
//         console.log(e.target.name);
//         setdata({...data, [e.target.name]: e.target.value })
//     }
//     const submit = () =>{
//         console.log(data);
//     }
//     return(
//         <div>
//             <input type="text" placeholder="FirstName" name="fname" onChange={handle}/>
//             <input type="text" placeholder="LastName" name="lname" onChange={handle}/>
//             <input type="number" placeholder="Number" name="mobile" onChange={handle}/>
//             <button onClick={submit}>Submit</button>
//         </div>
//     )
// }
// export default Single

import React, { useState } from "react";
const Single = () =>{
    const[data, setdata] = useState()

    let handle = (e) =>{
        console.log(e.target.name);
        setdata({...data,[e.target.name]: e.target.value});
    }

    const submit = () =>{
        console.log(data);
    }

    return(
        <div>
            <input type="text" name="fname" onChange={handle}/>
            <input type="text" name="lname" onChange={handle}/>
            <button onClick={submit}>Submit</button>
        </div>
    )

}
export default Single