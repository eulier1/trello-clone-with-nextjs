import Card from "./Card"

const issue =  {
    "id": 1468533,
    "key": "JIRA-1673",
    "summary": "Deploy to Production",
    "assignee": "Jack Mar",
    "assigneeAccountId": "557058:5ee302a7-4590-4bb8-ae87-b0bccf7d4fe4",
    "statusId": 0,
    "createdAt": 1717534613455,
    "updatedAt": 1717534613455,
    "storyPoints": 1.0
}

const Column = ({column}) => {
    
    return ( 
        <div className="grid border-slate-900 border-solid border-2">
            <h1 className=" text-2xl p-4 bg-neutral-400 text-center h-fit"> {column.name} </h1>
            { column.issues.length === 0 && (<div className="text-center"> No elements </div>)}
            { column.issues.map( (issue) => (
                <div className="mb-4" key={issue.key}>
                    <Card issue={issue}  />
                </div>
                ) ) }
        </div>)
}

export default Column