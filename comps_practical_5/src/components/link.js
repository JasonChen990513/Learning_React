import classNames from "classnames";
import useNavigation from "../hook/use-navigation";

function Link({to, children, classname, activeClassName}){
    const { navigate, currentPath } = useNavigation();
    const classes = classNames('text-blue-500', classname, currentPath === to && activeClassName);

    const handleClick = (event) =>{
        if(event.mataKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return <a className = {classes} href={to} onClick={handleClick} >{children}</a>
};

export default Link;