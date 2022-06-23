import React from 'react'
interface IProfileSceenProps{

}
function ProfileScreen(props: IProfileSceenProps) {
    
    return (
    <>
            
        <div className='profilescreen'>
            
            <div className="profileScreen_body">
                <h1>Settings</h1>
                <div className = "profileScreen_info">
                    <div id="image"></div>
                    {/* <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                        <button className="profileScreen_Signout">SignOut</button>
                        </div>
                    </div>     */}
                </div>
            </div>
        </div>
                    </> 
    )
}

export default ProfileScreen