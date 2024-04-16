import Button from "../components/button";
import { GoBell, GoCloudDownload, GoDatabase, GoCommentDiscussion, GoCalendar} from 'react-icons/go';

function ButtonPage(){
    const handClick = () =>{
        console.log('click!')
    }

    return (<div>
        <div>
            <Button success rounded outline onClick={handClick} className = 'mb-1'>
                <GoBell /> 
                This is success
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloudDownload />
                This is danger
            </Button>
        </div>
        <div>
            <Button secondary outline>
                <GoDatabase />
                This is secondary
            </Button>
        </div>
        <div>
            <Button primary rounded>
                <GoCommentDiscussion />
                This is primary
            </Button>
        </div>
        <div>
            <Button warning>
                <GoCalendar />
                This is warning
            </Button>
        </div>
    </div>)
}


export default ButtonPage;