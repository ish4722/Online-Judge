import React, { useState } from "react";

function Table() {
    const items = ["A", "B", "C","D"];
    const [selectedIndex, setselectedindex] = useState(-1);

    const handleclick = (index) => {
        setselectedindex(index)
    };

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            List
                        
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key = {index} 
                            className={`${
                                index == selectedIndex
                                ? "bg-purple-400"
                                : "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                            }`}>
                        <th
                            onClick={() => handleclick(index)}
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {item}
                        </th>
                        
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Table;
