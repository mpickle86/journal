import React, {useState, useContext, useEffect} from "react";
import ThemeSwitch from "./ThemeSwitch";
import LogoutButton from "./LogoutButton";
import {Context} from "./Context";

function Navigation(props) {
  const {user, journal} = useContext(Context);
  const [entryDates, setEntryDates] = useState([]);

  //Creates nav links for previous entries
  useEffect(() => {
    setEntryDates(
      journal.map(entry => {
        return <button onClick={() => props.displayEntry(entry.date)}>{entry.date}</button>;
      })
    );
  }, [journal]);

  return (
    <div>
      <h1>Navigation Menu</h1>
      <p>{user}</p>
      <ThemeSwitch />
      <p>{entryDates}</p>
      <LogoutButton />
    </div>
  )
}

export default Navigation;