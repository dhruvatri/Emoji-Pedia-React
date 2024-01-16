import React from "react";
import Entry from "./Entry";
import Emoji from "../emojipedia";

function createEntry(data) {
  return (
    <Entry
      key={data.id}
      name={data.name}
      emoji={data.emoji}
      meaning={data.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emoji.map(createEntry)}</dl>
    </div>
  );
}

export default App;
