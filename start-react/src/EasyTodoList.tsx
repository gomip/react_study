import * as React from 'react'
import {Link} from "react-router-dom";

const EasyTodoList: React.FC = () => {
    return (
        <div>
            {/*url*/}
            <p>
                <Link to="Todo">go to Todo</Link>
            </p>
            EasyTodoList
        </div>
    )
}
export default EasyTodoList