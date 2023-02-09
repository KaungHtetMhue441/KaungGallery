export default function Card({title,children,cardClass=""}){
    return (
        <div className={"card  p-0 "+cardClass}>
            <div className="card-header text-center">
                {title}
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}