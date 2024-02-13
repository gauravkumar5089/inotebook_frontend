import React from "react";
import Note from "./Note";
import { useCategory } from "../Context/CategoryContext";

const NotesArray = [
  //notes contains title, body (atleast 30-40 words), category, time, date
  {
    title: "This is the first note",
    body: "This is the body of the first note. It should contain atleast 30-40 words. This is the body of the first note. It should contain atleast 30-40 words. This is the body of the first note. It should contain atleast 30-40 words. This is the body of the first note. It should contain atleast 30-40 words.",
    category: "Work",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the second note",
    body: "This is the body of the second note. It should contain atleast 30-40 words. This is the body of the second note. It should contain atleast 30-40 words. This is the body of the second note. It should contain atleast 30-40 words. This is the body of the second note. It should contain atleast 30-40 words.",
    category: "Personal",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the third note",
    body: "This is the body of the third note. It should contain atleast 30-40 words. This is the body of the third note. It should contain atleast 30-40 words. This is the body of the third note. It should contain atleast 30-40 words. This is the body of the third note. It should contain atleast 30-40 words.",
    category: "Travel",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the fourth note",
    body: "This is the body of the fourth note. It should contain atleast 30-40 words. This is the body of the fourth note. It should contain atleast 30-40 words. This is the body of the fourth note. It should contain atleast 30-40 words. This is the body of the fourth note. It should contain atleast 30-40 words.",
    category: "Food",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the fifth note",
    body: "This is the body of the fifth note. It should contain atleast 30-40 words. This is the body of the fifth note. It should contain atleast 30-40 words. This is the body of the fifth note. It should contain atleast 30-40 words. This is the body of the fifth note. It should contain atleast 30-40 words.",
    category: "Others",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the sixth note",
    body: "This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words.",
    category: "Trash",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the seventh note",
    body: "This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words.",
    category: "Trash",
    time: "10:10 PM",
    date: "12 January 2024",
  },
  {
    title: "This is the eight note",
    body: "This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words. This is the body of the sixth note. It should contain atleast 30-40 words.",
    category: "General",
    time: "10:10 PM",
    date: "12 January 2024",
  },
];

const Notes = () => {
  const { category } = useCategory();
  const notes =
    category == "all notes"
      ? NotesArray
      : NotesArray.filter((item) => item.category.toLowerCase() === category);
  return (
    <div className=" grid md:grid-cols-2 gap-x-6 gap-y-4 px-8 py-4 overflow-y-scroll">
      {notes.map((item, index) => (
        <Note
          key={index}
          title={item.title}
          body={item.body}
          category={item.category}
          time={item.time}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Notes;
