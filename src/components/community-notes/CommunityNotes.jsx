function CommunityNotes({ note }) {

  const shortTitle = useMemo(() => {
    return node.title.length > 12 
    ? node.title.substring(0,12) + '...' 
     : node.title;
  },[title])

  return (
    <>
      <li className="flex w-full bg-amber-600 place-content-center items-center p-4 h-[100px]">
        <div className="flex w-full bg-amber-600 place-content-center items-center p-4 h-[100px]">
          <div className="flex-1 p-2">
          </div>
          <div className="flex-col flex-1 p-2">
            <h2>Title: {note.title}</h2>
            <p>Description: {note.description}</p>
          </div>
        </div>
      </li>
      ;
    </>
  );
}

export default CommunityNotes;
