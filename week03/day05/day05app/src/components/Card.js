export default function Card({title, body, children}) {
    return(
        <div>
            <h1>{title}</h1>
            <div>{body}</div>
            <div>{children}</div>
        </div>
    )
}