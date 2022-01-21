import React from 'react'
import ChildComp from './ChildComp'

const ParentComp = () => {
    function expectNumb(numb){
        console.log(numb)
    }

    return (
        <div>
            Parent Component
            <ChildComp fun={expectNumb}/>
        </div>
    )
}

export default ParentComp
