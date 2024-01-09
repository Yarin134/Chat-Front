import "./App.css";
import { IUser } from "./entities/user.entity";
import { IGroup } from "./entities/group.entity";
import { Header } from "./components/Molecules/Header/Header";
import { UsersList } from "./components/Organizms/Users/UsersList";
import { MessageInput } from "./components/Atoms/MessageInput/MessageInput";
import { GroupsList } from "./components/Organizms/GroupsList/GroupsList";
import Input from "./components/Atoms/Input/Input";
import { useState } from "react";
import { HomePage } from "./components/Pages/HomePage";
import { CreateUser } from "./components/Organizms/CreateUser/CreateUser";
import { AuthPage } from "./components/Pages/AuthPage";

function App() {
  const groups: IGroup[] = [
    { _id: "A1", name: "Team A" },
    { _id: "B1", name: "Team B" },
    { _id: "C1", name: "Team C" },
    { _id: "D1", name: "Team D" },
    { _id: "E1", name: "Team E" },
    { _id: "F1", name: "Team F" },
    { _id: "G1", name: "Team G" },
    { _id: "H1", name: "Team H" },
    { _id: "I1", name: "Team I" },
    { _id: "J1", name: "Team J" },
  ];

  const users: IUser[] = [
    {
      _id: "1",
      email: "john.doe@example.com",
      lastName: "Doe",
      firstName: "John",
    },
    {
      _id: "2",
      email: "jane.smith@example.com",
      lastName: "Smith",
      firstName: "Jane",
    },
    {
      _id: "3",
      email: "bob.jones@example.com",
      lastName: "Jones",
      firstName: "Bob",
    },
    {
      _id: "4",
      email: "alice.williams@example.com",
      lastName: "Williams",
      firstName: "Alice",
    },
    {
      _id: "5",
      email: "charlie.miller@example.com",
      lastName: "Miller",
      firstName: "Charlie",
    },
    {
      _id: "6",
      email: "emily.white@example.com",
      lastName: "White",
      firstName: "Emily",
    },
    {
      _id: "7",
      email: "samuel.brown@example.com",
      lastName: "Brown",
      firstName: "Samuel",
    },
    {
      _id: "8",
      email: "olivia.green@example.com",
      lastName: "Green",
      firstName: "Olivia",
    },
    {
      _id: "9",
      email: "david.wilson@example.com",
      lastName: "Wilson",
      firstName: "David",
    },
    {
      _id: "10",
      email: "sophia.davis@example.com",
      lastName: "Davis",
      firstName: "Sophia",
    },
  ];

  return (
    <div>
      <AuthPage />
    </div>
  );
}

export default App;

//  <HomePage users={users} groups={groups} />
