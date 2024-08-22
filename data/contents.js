const contents = [
  { title: "Увод", pageStart: 1, pageEnd: 3 },
  { title: "Израњање из Оријента", pageStart: 4, pageEnd: 6 },
  {
    title: "Земљa",
    pageStart: 7,
    pageEnd: 13,
    subchapters: [
      { title: "Државно уређењ", pageStart: 8, pageEnd: 9 },
      { title: "Привредни развој", pageStart: 10, pageEnd: 11 },
      { title: "Архитектура престонице", pageStart: 12, pageEnd: 13 },
    ],
  },
  {
    title: "Народ",
    pageStart: 14,
    pageEnd: 19,
    subchapters: [
      { title: "Традиционална култура", pageStart: 15, pageEnd: 16 },
      { title: "Рађање грађанске културе", pageStart: 17, pageEnd: 19 },
    ],
  },
  { title: "Споменици културе", pageStart: 19, pageEnd: 22 },
];

export default contents;
