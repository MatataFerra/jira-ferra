interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
  title: string;
}

export const seedData: SeedData = {
  entries: [
    {
      title: "Título 1",
      description: "Esse laborum consequat sint labore mollit deserunt in.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      title: "Título 2",
      description:
        "Duis commodo sit incididunt aliqua nulla magna ipsum mollit ut pariatur consectetur reprehenderit aliqua deserunt.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      title: "Título 3",
      description: "Aliqua consequat ipsum mollit ipsum.",
      status: "finished",
      createdAt: Date.now() - 10000,
    },
  ],
};
