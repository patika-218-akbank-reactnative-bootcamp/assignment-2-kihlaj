const chats = {
  id: '1',
  users: [
    {
      id: 'u1',
      name: 'Bilgin',
      imageUri: 'https://placekitten.com/g/300/302',
    },
    {
      id: 'u2',
      name: 'Behzat',
      imageUri: 'https://placekitten.com/g/300/303',
    },
  ],
  messages: [
    {
      id: 'm1',
      content: 'Selam, Bilgin!',
      createdAt: '2022-08-22T12:28:00.000Z',
      user: {
        id: 'u1',
        name: 'Bilgin',
      },
    },
    {
      id: 'm2',
      content: 'Ben iyiyim!',
      createdAt: '2022-08-22T14:29:00.000Z',
      user: {
        id: 'u2',
        name: 'Behzat',
      },
    },
    {
      id: 'm3',
      content: 'Sen nasilsin?',
      createdAt: '2022-08-22T14:31:40.000Z',
      user: {
        id: 'u2',
        name: 'Bilgin',
      },
    },
  ],
};

export default chats;
