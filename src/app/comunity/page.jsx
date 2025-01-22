"use client";

import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import NotesList from "@/components/node-list/NotesList";

function Community() {
  return (
    <>
      <div className="flex flex-col bg-background place-content-center items-start p-8 w-full mt-10">
        <NotesList />
      </div>
      <Footer />
      <CopyRight />
    </>
  );
}

export default Community;

































{/*'use client'

import CommunityNotes from "@/components/community-notes/CommunityNotes";
import CopyRight from "@/components/copyright/CopyRight";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";

function Community() {


  
  const { notes } = useSelector((state) => state.share);
  console.log(notes)
  return (
    <>
      <div className="flex flex-col bg-background place-content-center items-start p-8 w-full mt-10">
        <ul>
          {notes.map((note) => {
            <CommunityNotes key={note.id} note={note}/>
          })}
        </ul>
      </div>
      <Footer />
      <CopyRight />
    </>
  );
}

export default Community;
*/
}
