"use client";
import * as client from "../client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import Link from "next/link";
import { Button, FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
    const [profile, setProfile] = useState<any>(null);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);

    const fetchProfile = async () => {
        try {
            const user = await client.profile();
            if (user) {
                setProfile({ ...user }); // Create a fresh copy
                dispatch(setCurrentUser(user));
            } else {
                redirect("/Account/Signin");
            }
        } catch (error) {
            redirect("/Account/Signin");
        }
    };
    
    const updateProfile = async () => {
        const updatedProfile = await client.updateUser(profile);
        dispatch(setCurrentUser(updatedProfile));
        setProfile({ ...updatedProfile }); // Create fresh copy
    };

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        redirect("/Account/Signin");
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    if (!profile) return null;

    return (
        <div id="wd-profile-screen" className="ms-5">
            <h3>Profile</h3>
            <div>
                <FormControl id="wd-username" className="mb-2 w-25"
                    value={profile.username || ""} placeholder="username"
                    onChange={(e) => setProfile({ ...profile, username: e.target.value }) } />
                    
                <FormControl id="wd-password" className="mb-2 w-25"
                    value={profile.password || ""} placeholder="password"
                    onChange={(e) => setProfile({ ...profile, password: e.target.value }) } />

                <FormControl id="wd-firstname" className="mb-2 w-25"
                    value={profile.firstName || ""} placeholder="first name"
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) } />
                    
                <FormControl id="wd-lastname" className="mb-2 w-25"
                    value={profile.lastName || ""} placeholder="last name"
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) } />

                <FormControl id="wd-dob" className="mb-2 w-25"
                    value={profile.dob || ""} placeholder="dob (yyyy-mm-dd)"
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value }) } />

                <FormControl id="wd-email" className="mb-2 w-25"
                    value={profile.email || ""} placeholder="email"
                    onChange={(e) => setProfile({ ...profile, email: e.target.value }) } />

                <select className="form-control mb-2 w-25" id="wd-role"
                    value={profile.role || "USER"}
                    onChange={(e) => {
                        console.log("Role changed to:", e.target.value); // Debug log
                        setProfile({ ...profile, role: e.target.value });
                    }} >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
                
                <Button onClick={updateProfile} className="btn btn-primary w-25 mb-2"> Update </Button>
                <br />
                <Button onClick={signout} className="mb-2 w-25" id="wd-signout-btn">
                    Sign out
                </Button>
            </div>
        </div>
);}