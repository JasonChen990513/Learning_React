import Accordion from "../components/accordion";

function AccordionPage(){
    const items = [
        {
            id:'wqe',
            label: 'This is label one',
            content: '1. This is content! This is content! This is content! This is content! This is content! This is content! This is content! This is content!'
        },
        {
            id:'asd',
            label: 'This is label two',
            content: '2. This is content! This is content! This is content! This is content! This is content! This is content! This is content! This is content!'
        },
        {
            id:'zxc',
            label: 'This is label three',
            content: '3. This is content! This is content! This is content! This is content! This is content! This is content! This is content! This is content!'
        }
    ]

    return <Accordion items={items}/>
}


export default AccordionPage;