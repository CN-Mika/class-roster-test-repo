import "./styles.css";

function createRosterItem(name, pronouns, hS) {
  let rosterItem = (
    <div className="row">
      <div className="data name">{name}</div>
      <div className="data pronouns">{pronouns}</div>
      <div className="data highschool">{hS}</div>
    </div>
  );
  return rosterItem;
}

let students = [
  {
    name: "Mikkail Allen",
    pronouns: "He/His",
    hS: "Williamsburg Charter Highschool"
  },
  { name: "Justin Apupalo", pronouns: "He/His", hS: "NYIT" },
  {
    name: "Christopher Bonifacio",
    pronouns: "He/His",
    hS: "Orchard Collegiate Academy"
  }
];

let classRoster = [];

classRoster = students.map(function (student) {
  return createRosterItem(student.name, student.pronouns, student.hS);
});

export default function App() {
  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      {classRoster}
    </div>
  );
}
