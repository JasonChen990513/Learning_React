import useNavigation from "../hook/use-navigation";

function Route({path, children}){
    const { currentPath } = useNavigation();

    if(path === currentPath){
        return children;
    }
    return null;
}


export default Route;