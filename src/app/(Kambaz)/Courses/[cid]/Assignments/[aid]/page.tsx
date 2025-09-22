export default async function AssignmentEditor({ params }: { params: { aid: string }}) {
    const { aid } = await params;
return (
    <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3><b>Assignment Name {aid}</b></h3></label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description" rows={10} cols={60} 
        defaultValue={`The assignment is available online. Submit a link to the landing page of your web application running on Netlify. The Landing page should include the following: Your Full Name and section, Links to each of the lab assignments, Link to the Kanbas Application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.\n`}>
        </textarea>
        <br />
        <table>
            <tbody>
                <tr>
                    <td align="right" valign="top"><br />
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td><br />
                        <input id="wd-points" defaultValue={100}/>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top"><br />
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td><br />
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                        <option value="FILE">FILE</option>
                        <option value="VIDEO">VIDEO</option>
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="AUDIO">AUDIO</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top"><br />
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td><br />
                        <select id="wd-display-grade-as" defaultValue="Percentage">
                        <option value="Integer">Integer</option>
                        <option value="Decimal">Decimal</option>
                        <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="center" valign="top"><br />
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td><br />
                        <select id="wd-submission-type" defaultValue="Online">
                        <option value="Inperson">Inperson</option>
                        <option value="Online">Online</option>
                        </select>
                        <br /><br />

                        <label>Online Entry Options</label><br />

                        <input type="checkbox" name="entry options" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="entry options" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="entry options" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="entry options" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="entry options" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Assign</label>
                    </td>
                    <td>
                        <label>Assign To</label><br />
                        <input name="entry options" id="wd-assign-to" defaultValue={"Everyone"}/>
                        <br /><br />
                        <label>Due</label><br />
                        <input type="date" defaultValue="2024-05-13" id="wd-due-date"/><br /><br />
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="wd-available-from">Available From</label></td>
                                    <td><label htmlFor="wd-available-until">Until</label></td>
                                </tr>

                                <tr>
                                    <td><input type="date" defaultValue="2024-05-06" id="wd-available-from"/></td>
                                    <td><input type="date" defaultValue="2024-05-20" id="wd-available-until"/></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td colSpan={2}>
                        <br />
                        <hr />
                    </td>
                </tr>

                <tr>
                    <td></td>
                        <td align="right">
                            <button type="button" style={{ marginRight: "10px" }}>Cancel</button>
                            <button type="button">Save</button>
                        </td>
                </tr>
            </tbody>
        </table>
    </div>
);}