import React from 'react'
import logo from './logo.svg'
import {Link} from 'react-router-dom'
function Header (){
    return (
        <div>
            {/*<img src={logo} alt=""/>*/}
            <nav>
                <Link to={"/"}>首页</Link>
                <Link to={"/history"}>上传历史</Link>
                <Link to={"/about"}>关于</Link>
            </nav>
        </div>
    )
}
export default  Header;
