import FloatingPageAddress from "../../component/floatingPageAddress/floatingPageAddress";
import { Row } from "react-bootstrap";
import "./Error.css";

const Error = () => {
    return (
        <>
            <FloatingPageAddress hideSource={"Home /"} currentSource={"404Error"}/>

            <Row className="errorPageLayout text-center pt-5 pb-5 mt-5 mb-5">
                <h1 className="pt-5 mt-5 pb-3 lh-2">404 Not Found</h1>
                <p className="pb-3  fs-5">Your visited page not found. You may go home page.</p>
                <a href="#" className="btn btn-danger  mt-5 mb-5 w-25 p-3 fw-semibold fs-4">Back to home page</a>
            </Row>
        </>
    );
};

export default Error;