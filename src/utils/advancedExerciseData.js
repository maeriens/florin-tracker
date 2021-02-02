export default [
  {
    url:'battleshipbot',
    title: 'Battleship Bot',
    completed: false,
    stories: [
      { text: "User can display game rules by entering bb help into the chat window", completed: false },
      { text: "User can start a game by entering bb start into the chat", completed: false },
      { text: "User can target a cell by entering bb shoot r,c into the chat window, where r and c are the row and column coordinates of the cell to be targeted", completed: false },
      { text: "User can see the game board showing hits and misses displayed by the bot after each shot is taken", completed: false },
      { text: "User can see a congratulations message after the shot that sinks the last remaining ship", completed: false }
    ],
    bonus: [
      { text: "User can surrender a game by entering bb surrender in the chat window", completed: false },
      { text: "User can see a card containing a graphical representation of the hits and misses rather than a simple 2D table of characters", completed: false }
    ]
  }
]