import { GoChevronDown, GoChevronLeft} from 'react-icons/go'
import { useState } from "react";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) =>{

        //this can avoid the useState does not update the value and next code already try to access that.
        // setExpandedIndex((currentExpandedIndex)=>{
        //     if(expandedIndex === nextIndex){
        //         return -1;
        //     } else {
        //         return nextIndex;
        //     }
        // });

        if(expandedIndex === nextIndex){
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
        
    };



    const renderItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-2xl'>
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span> 

        // if the isExpanded is true then will print the item content
        //{isExpanded && <div>{item.content}</div>}
        return (
            <div key={item.id}>
                <div onClick={()=>{handleClick(index)}} className='flex items-center p-3 bg-gray-50 border-b cursor-pointer justify-between'> {item.label}{icon} </div>
                {isExpanded && <div className='border-b p-5 '>{item.content}</div>}
            </div>
        );
    });
    
    
    return <div className='border-x border-t rounded'>{renderItems}</div>
}

export default Accordion;