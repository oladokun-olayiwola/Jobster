import Wrapper from "../assets/wrappers/ErrorPage";
import Image from '../assets/images/not-found.svg'
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={Image} alt="not-found" />
                <h3>Ohh! Page not Found</h3>
                <p>We can't seem to find the page you are looking for</p>
                <Link to="/" >back home</Link>
            </div>
        </Wrapper>
    )
}

export default ErrorPage