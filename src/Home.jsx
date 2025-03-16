import Button from "./Button"
import Card from "./Card"
import Navbar from "./component/Navbar/Navbar"

function Home1(){
    return(
        <div>
<h1 className="text-blue-500"> This   my home page</h1>

<Navbar />
<Button title="Login" />
<Button title="Register" />
<Button title="Logout" />


        </div>
        
    )
}
export default Home1