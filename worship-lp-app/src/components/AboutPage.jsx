import React from "react";

function AboutPage() {
  
  return (
    
    <div className="border-y-2 shadow-2xl md:text-4xl flex flex-col justify-center items-center px-10 p-2">
      <h1 className="text-black text-4xl text-center font-bold p-20" >About the App</h1>
      <p className="text-black text-lg text-center my-4 mx-60">
        This is a simple application to help worship leaders plan their services
        and keep records of the previous worship leaders planns for future references.
      </p>
      <p className="text-center text-lg my-4 mx-60 ">Worship Lead Planner App, is a tool for worship leaders willing to share planns with others in the same church or even separate worship locations to enable them refer to others and improve their worship. Worship-LP will help your team create your own playlists and suggest your preffered music team ahead and wait for their confirmation on the indicated dates of conducting your service. This App, was created to solve planning issues of worship leaders</p>
      
      <p className="text-black text-lg text-center p-4 my-4 mx-60">
        Keep your worship songs recorded for future use, and plan together with
        other worship leaders in your church. Help them know in advance, who
        shall lead the worship and which music team is available for that
        particular planned date. Keep your songs organized and accessible by
        your worship team leaders to advance the kingdom of God
      </p>
    </div>
  );
}

export default AboutPage;
