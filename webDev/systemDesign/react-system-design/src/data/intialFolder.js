export const data = {
  id: 1,
  name: "src",
  isFolder: true,
  children: [
    {
      id: 2,
      name: "src",
      isFolder: true,
      children: [
        {
          id: 3,
          name: "app",
          isFolder: true,
          children: [{ id: 4, name: "test", isFolder: true, children: [] }],
        },
        {
          id: 5,
          name: "app2",
          isFolder: true,
          children: [{ id: 6, name: "test2", isFolder: false, children: [] }],
        },
      ],
    },
    {
      id: 7,
      name: "src2",
      isFolder: true,
      children: [
        {
          id: 8,
          name: "app",
          isFolder: true,
          children: [{ id: 9, name: "test", isFolder: false, children: [] }],
        },
        {
          id: 10,
          name: "app2",
          isFolder: true,
          children: [{ id: 11, name: "test2", isFolder: false, children: [] }],
        },
      ],
    },
  ],
};
