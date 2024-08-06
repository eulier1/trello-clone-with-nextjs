const Card = ({ issue }) => {
    return (
        <div className="px-2 bg-white border-y-2 border-slate-950">
            <h1 className="text-center font-bold">Ticket {issue.id}</h1>
            <p> Title : {issue.key} </p>
            <p> Assignee : {issue.assignee}</p>
            <div className="text-right mb-2">
                <button className="px-2 bg-slate-400"> &gt; </button>
            </div>
        </div>)
}

export default Card