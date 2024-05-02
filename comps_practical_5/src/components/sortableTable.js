import Table from "./table";
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';
import useSort from "../hook/use-sort";

function SortableTable(props){
    const { config, data } = props;
    const { setSortColumn, sortBy, sortOrder, sortedData} = useSort(config, data);

    const updateConfig = config.map((column)=>{
        if(!column.sortValue){
            return column;
        }

        return {
            ...column,
            header: ()=> 
                <th className=" cursor-pointer hover:bg-gray-100" onClick={()=> setSortColumn(column.label)}>
                    <div className=" flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}{column.label}
                    </div>
                </th>
        }
    });



    return <Table {...props} config={updateConfig} data={sortedData}/>
}


function getIcons(label, sortBy, sortOrder){
    // if this is not the sorting label
    if(label !== sortBy){
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    }

    // is sorting label and check the sorting order
    if(sortOrder === null){
        return <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>;
    }else if(sortOrder === 'asc'){
        return <div>
        <GoArrowSmallUp/>
    </div>;
    } else if (sortOrder === 'desc'){
        return <div>
        <GoArrowSmallDown/>
    </div>;
    }
}
export default SortableTable;