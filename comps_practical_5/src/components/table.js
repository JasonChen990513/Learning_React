import { Fragment } from "react"

function Table({data, config, keyFn}){
    const renderHeaders = config.map((column)=>{
        if(column.header){
            return <Fragment key={column.label} >{column.header(column.label)}</Fragment> 
        }

        return(
            <th key={column.label}>{column.label}</th>
        )
    })


    const renderTableHead = data.map((rowdata)=>{
        const renderedCells = config.map((column)=>{
            return <td key={column.label} className="p-2">{column.render(rowdata)}</td>
        });

        return(
            <tr className=" border-b" key={keyFn(rowdata)}>
                {renderedCells}
            </tr>
        );
    })


    return <table className=" table-auto border-spacing-2">
        <thead>
            <tr className=" border-b-2">
                {renderHeaders}
            </tr>
        </thead>
        <tbody>
            {renderTableHead}
        </tbody>
    </table>
}

export default Table;