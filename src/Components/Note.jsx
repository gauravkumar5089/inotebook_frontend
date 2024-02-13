import React, { useState } from "react";
import DeletionConfirmation from "./DeletionConfirmation";
import NoteContent from "./NoteContent";

const Note = (props) => {
  const [deleteConfirmationVisibility, setDeleteConfirmationVisibility] =
    useState(false);
  const { title, body, category, time, date } = props;
  return deleteConfirmationVisibility ? (
    <DeletionConfirmation
      setDeleteConfirmationVisibility={setDeleteConfirmationVisibility}
    />
  ) : (
    <NoteContent
      title={title}
      body={body}
      category={category}
      time={time}
      date={date}
      setDeleteConfirmationVisibility={setDeleteConfirmationVisibility}
    />
  );
};

export default Note;
