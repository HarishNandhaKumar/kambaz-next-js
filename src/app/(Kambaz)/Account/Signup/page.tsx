import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
    return (
        <div id="wd-signup-screen" className="ms-5">
        <h1>Sign Up</h1>
            <FormControl id="wd-username" defaultValue="Student" placeholder="username" className="mb-2 w-25"/>
            <FormControl id="wd-password" defaultValue="abc123" placeholder="password" type="password" className="mb-2 w-25"/>
            <Link id="wd-signup-btn" href="/Account/Profile" className="btn btn-primary mb-2 w-25"> Sign up </Link>
             <br />
            <Link id="wd-signin-link" href="/Account/Signin">Sign in</Link>
        </div>
);}