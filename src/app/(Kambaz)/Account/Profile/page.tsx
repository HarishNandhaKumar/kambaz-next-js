import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
    return (
        <div id="wd-profile-screen" className="ms-5">
            <h1>Profile</h1>
                <FormControl id="wd-username" defaultValue="Alice" placeholder="username" className="mb-2 w-25"/>
                <FormControl id="wd-password" defaultValue="abc123" placeholder="password" className="mb-2 w-25"/>
                <FormControl id="wd-firstname" defaultValue="Alice" placeholder="First Name" className="mb-2 w-25"/>
                <FormControl id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" className="mb-2 w-25"/>
                <FormControl id="wd-dob" type="datetime-local" defaultValue="2024-05-20T23:59" className="mb-2 w-25"/>
                <FormControl id="wd-email" type="email" defaultValue="email@example.com" className="mb-2 w-25"/>
                <FormSelect id="wd-submission-type" className="mb-2 w-25">
                            <option value="Admin">Admin</option>
                            <option value="Faculty">Faculty</option>
                            <option value="Student" defaultChecked>Student</option>
                </FormSelect>
                <Link href="/Account/Signin" ><button type="button" className="btn btn-primary mb-2 w-25 bg-danger">Signout</button></Link>
        </div>
);}