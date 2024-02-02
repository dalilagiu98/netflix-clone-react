import Galleries from "./Galleries"
import NavbarMain from "./NavbarMain"
const MyMain = function() {
    return(
        <div className="bg-dark text-white">
            <NavbarMain/>
            <h3 className="fs-5 m-0 text-start ps-2 mb-4 mt-3">Trending Now</h3>
            <div>
                <Galleries title="vrenuihvuerw"/>
            </div>
            <h3 className="fs-5 m-0 text-start ps-2 mb-4 mt-3">Watch It Again</h3>
            <div>
                <Galleries title="one piece"/>
            </div>
            <h3 className="fs-5 m-0 text-start ps-2  mb-4 mt-3">New Release</h3>
            <div>
                <Galleries title="harry potter"/>
            </div>
           
        </div>
    )
}
export default MyMain