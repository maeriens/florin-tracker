export default [
  {
    url: 'bitmasks',
    title: 'Bit Masks',
    completed: false,
    stories: [
      {
        text: "User can see a vertical list of checkboxes with the following cities and their timezones:" +
          "\n\tMoscow: GMT +3" +
          "\n\tParis: GMT +2" +
          "\n\tBerlin: GMT +2" +
          "\n\tBrussels: GMT +2" +
          "\n\tAmsterdam: GMT +2" +
          "\n\tRome: GMT +2" +
          "\n\tLondon: GMT +1" +
          "\n\tDublin: GMT +1" +
          "\n\tNew York: GMT -4" +
          "\n\tWashington, DC: GMT -4" +
          "\n\tSt. Louis: GMT -5" +
          "\n\tLos Angeles: GMT -7" +
          "\n\tTokyo: GMT +9" +
          "\n\tBeijing: GMT +8" +
          "\n\tHo Chi Mihn City: GMT +7" +
          "\n\tMumbai: GMT +5", completed: false
      },
      { text: "User can see a GMT search box where an integer representing a GMT offset can be entered into and a 'Find Cities' button", completed: false },
      { text: "User can click the 'Find Cities' button to display the names of the cities in that GMT offset in an output area", completed: false }
    ],
    bonus: [

      { text: "User can search for cities NOT in the GMT offset entered in the search box", completed: false },
      { text: "User can see a summary count of the number of cities that met the search criteria", completed: false }

    ]
  }
]