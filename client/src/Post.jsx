import { format } from "date-fns";

export default function Post({title, summary, cover, content, createdAt,author}){
    return(
        <div className='post'>

            <div className="image">
                <img src="https://images.theconversation.com/files/688908/original/file-20250903-86-h4ds6y.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5000%2C2500&q=50&auto=format&w=1336&h=668&fit=crop&dpr=2" alt="" />
            </div>

            <div className="texts">
                <h2>{title}</h2>
                <p className="info">
                    <a className='author'>{author.username}</a>
                    <time>{format(new Date(createdAt), 'dd-MMM-yyyy, HH:mm')}</time>
                </p>
                <p className='summary'>
                    {summary}
                </p>
            </div>

        </div>
    )
}