import React from 'react'
// import icon from "../../assets/icon.png"
const Filter = ({ title,children }) => {
    return (
        <div className='font-dm text-base text-[#767676] '>
            <label htmlFor="" >
                {title}
            </label>

            <select name="" id="" className={`py-3 px-5 w-[239px] ml-3  `}>
               {children}
            </select>
        </div>
    )
}

export default Filter
