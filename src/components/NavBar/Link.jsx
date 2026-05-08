const Link = ({ route }) => {
    return (
        <li className=""><a className="block hover:bg-slate-400 hover:text-white p-3 rounded-md" href={route.path}>{route.name}</a></li>
    );
};

export default Link;