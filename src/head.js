import Links from "./link"
import logo from './assets/logo.png'

function Head(){
    return(
    <div className="head">
        <div>
            <img src={logo} alt='logo of the company' />
            <h1>B Cube</h1>
        </div>
        <Links />

    </div>)
}


export default Head