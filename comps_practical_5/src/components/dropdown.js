import { useState, useEffect,useRef } from "react";
import {GoChevronDown} from 'react-icons/go';
import Panel from "./panel";

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();


    useEffect(() =>{
        const handler = (event) =>{
            if (!divEl.current) {
                return;
            }

            if(event.target != null){
                if(!divEl.current.contains(event.target)){
                    setIsOpen(false);
                }
            }

        };
        document.addEventListener("click", handler, true);

        return ()=>{
            document.removeEventListener("click", handler);
        };
    },[]);

    const handleClick = () =>{
        //setIsOpen((currentValue)=> !currentValue);
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) =>{
        setIsOpen(false);
        onChange(option);
    };

    const rederedOption = options.map((option)=>{
        return(
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={()=>handleOptionClick(option)}>
                {option.label}
            </div>
        )
    });
    let classes = 'cursor-pointer w-48 relative'; 
    //let content = 'Select...';
    if(value){
        //content = selection.label;
        classes = classes + ' text-'+value.value+'-500';
    }

    return (
        <div ref={divEl} className={classes}  >
            <Panel onClick={handleClick} className="flex justify-between items-center cursor-pointer">
                {value?.label || 'Select...'}
                <GoChevronDown className=" text-2xl"/>
            </Panel>
            {isOpen && <Panel className=" absolute top-full ">{rederedOption}</Panel>}
        </div>
    );
}

export default Dropdown;