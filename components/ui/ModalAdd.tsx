import { Modal, Input, Button, Text, Textarea } from "@nextui-org/react";
import { FC, useState, useContext } from "react";
import { EntriesContext } from "../../context/entries";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onClose: () => void;
  visible: boolean;
}

export const ModalAdd: FC<Props> = ({ onClose, visible }) => {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
  });
  const { addNewEntry } = useContext(EntriesContext);

  const onSave = () => {
    if (!inputValue.description) return;
    addNewEntry(inputValue.description, inputValue.title);
    setInputValue({ title: "", description: "" });
    onClose();
  };
  return (
    <Modal
      closeButton
      id="modal-add"
      aria-labelledby="modal-add"
      open={visible}
      onClose={onClose}
    >
      <Modal.Header>
        <Text
          h3
          css={{
            textGradient: "45deg, $yellow500 -20%, $red500 100%",
          }}
        >
          New Entry
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          autoFocus
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Title"
          aria-label="Title"
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
          aria-label="Description"
          size="lg"
          placeholder="Description"
          id={uuidv4()}
          value={inputValue.description}
          onChange={(e) => {
            setInputValue({ ...inputValue, description: e.target.value });
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={onClose}>
          Cerrar
        </Button>
        <Button auto color="success" onClick={onSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
