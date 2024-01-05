import "./App.css";
import { IUser } from "./entities/user.entity";
import { UsersList } from "./components/Organizms/Users/UsersList";

function App() {
  const users: IUser[] = [
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
    {
      _id: "12",
      email: "11",
      firstName: "Yarin",
      lastName: "David",
    },
  ];

  return (
    <>
      <UsersList onChooseUserChat={(userId) => console.log()} users={users} />
    </>
  );
}

export default App;
