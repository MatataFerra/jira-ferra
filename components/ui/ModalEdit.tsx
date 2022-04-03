import { FC, useState, useContext, ChangeEventHandler } from "react";
import { Modal, Input, Textarea, Button, Text, Radio } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { Entry, EntryStatus } from "../../interfaces/entryInterface";
import { EntriesContext } from "../../context/entries";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  onClose: () => void;
  visible: boolean;
  entry: Entry;
}

export const ModalEdit: FC<Props> = ({ visible, onClose, entry }) => {
  const [status, setStatus] = useState(entry.status);
  const [inputValue, setInputValue] = useState({
    title: entry.title,
    description: entry.description,
    createdAt: Date.now(),
    _id: entry._id,
  });
  const { updateEntry, deleteEntry } = useContext(EntriesContext);

  const statusHeader = {
    pending: "Pendientes",
    "in-progress": "En progreso",
    finished: "Terminados",
  };

  const onSave = () => {
    if (!inputValue.description.trim()) return;
    const updatedEntry: Entry = {
      ...inputValue,
      status,
      description: inputValue.description,
      title: inputValue.title,
    };
    updateEntry(updatedEntry);
    onClose();
  };

  const onKeySave = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSave();
      onClose();
    }
  };

  const onDelete = () => {
    deleteEntry(entry);
  };
  return (
    <Modal
      closeButton
      id="modal-add"
      aria-labelledby="modal-add"
      open={visible}
      onClose={onClose}
      onKeyUp={onKeySave}
    >
      <Modal.Header>
        <Text
          h3
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
        >
          Edit Entry
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Title"
          id={uuidv4()}
          value={inputValue.title}
          onChange={(e) => {
            setInputValue({ ...inputValue, title: e.target.value });
          }}
        />
        <Textarea
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Description"
          id={uuidv4()}
          value={inputValue.description}
          onChange={(e) => {
            setInputValue({ ...inputValue, description: e.target.value });
          }}
        />
        <Radio.Group row value={status} css={{ margin: "auto" }}>
          {validStatus.map((status) => (
            <Radio
              key={uuidv4()}
              value={status}
              color="primary"
              onChange={() => setStatus(status)}
              preventDefault
            >
              <Text css={{ fontSize: 14 }}> {statusHeader[status]} </Text>
            </Radio>
          ))}
        </Radio.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={onDelete}>
          Eliminar
        </Button>
        <Button auto color="gradient" onClick={onSave}>
          Actualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
