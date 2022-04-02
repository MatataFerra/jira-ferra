import { Entry } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export const entries: Entry[] = [
  {
    _id: uuidv4(),
    title: "Learn React",
    description:
      "Lorem reprehenderit irure elit anim commodo do excepteur eu cillum sunt est velit labore.",
    createdAt: Date.now(),
    status: "in-progress",
  },
  {
    _id: uuidv4(),
    title: "Learn Angular",
    description:
      "Lorem in veniam aute sint culpa cupidatat et officia aute officia duis.",
    createdAt: Date.now(),
    status: "finished",
  },
  {
    _id: uuidv4(),
    title: "Learn Vue",
    description:
      "Occaecat fugiat amet enim laborum ea id fugiat dolore minim duis aute.",
    createdAt: Date.now(),
    status: "pending",
  },
];
