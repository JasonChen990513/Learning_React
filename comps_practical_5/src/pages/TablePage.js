//import Table from "../components/table"
import SortableTable from "../components/sortableTable";

function TablePage() {
    const data = [
        {name:'Orange', color:'bg-orange-500', score: 5},
        {name:'Apple', color:'bg-red-500', score: 1},
        {name:'Banana', color:'bg-yellow-500', score: 4},
        {name:'Lime', color:'bg-green-500', score: 3},
    ];

    const config = [
        {
            label: 'Name',
            render: (subdata)=> subdata.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color',
            render: (subdata)=> <div className={`p-2 m-3 ${subdata.color}`}></div>
        },
        {
            label: 'Score',
            render: (subdata)=> subdata.score,
            sortValue: (fruit) => fruit.score,
        },

    ];

    const keyFn = (data) => {
        return data.name;
    };

    return(
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage;