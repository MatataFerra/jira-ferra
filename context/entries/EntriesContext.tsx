import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string, title: string) => void;
  updateEntry: (entry: Entry) => void;
  deleteEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
