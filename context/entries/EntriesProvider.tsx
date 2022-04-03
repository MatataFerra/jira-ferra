import { FC, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { entriesApi } from "../../apis";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const router = useRouter();

  const addNewEntry = async (description: string, title: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", {
      description,
      title,
    });
    dispatch({ type: "[Entry] - Add Entry", payload: data });
  };

  const updateEntry = async ({
    _id,
    description,
    status,
    title,
    createdAt,
  }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        title,
        description,
        status,
        createdAt,
      });
      dispatch({ type: "[Entry] - Update Entry", payload: data });
      toast("Entrada actualizada", { type: "success", autoClose: 3000 });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEntry = async (entry: Entry) => {
    try {
      await entriesApi.delete(`/entries/${entry._id}`);
      dispatch({ type: "[Entry] - Delete Entry", payload: entry });
      toast.warn("Entry deleted!");
    } catch (error) {
      console.log(error);
    }
  };
  const refreshEntries = async () => {
    try {
      const { data } = await entriesApi.get<Entry[]>("/entries");
      dispatch({ type: "[Entry] - Refresh Entry", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
