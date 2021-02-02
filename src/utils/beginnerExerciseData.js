const beginner = [
  {
    url: 'bin2dec',
    title: 'Bin2Dec',
    completed: false,
    stories: [
      { text: 'User can enter up to 8 binary digits in one input field', completed: false },
      { text: 'User must be notified if anything other than a 0 or 1 was entered', completed: false },
      { text: 'User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered', completed: false }
    ],
    bonus: [{ text: 'User can enter a variable number of binary digits', completed: false }]
  }, {
    url: 'borderRadiusPreviewer',
    title: 'Border Radius Previewer',
    completed: false,
    stories: [
      { text: 'User can see a box which has a border-radius property applied to it', completed: false },
      { text: 'User can change the 4 border-radius values that are applied to the box (top-left, top-right, bottom-left, bottom-right)', completed: false },
      { text: 'User can copy the resulting CSS to the clipboard', completed: false }
    ],
    bonus: [{ text: 'User can change all 8 possible values of the border-radius in order to create a complex shape', completed: false }]
  }, {
    url: 'calculator',
    title: 'Calculator',
    completed: false,
    stories: [
      { text: "User can see a display showing the current number entered or the result of the last operation", completed: false },
      { text: "User can see an entry pad containing buttons for the digits 0-9, operations - '+', '-', '/', and '=', a 'C' button (for clear), and an 'AC' button (for clear all)", completed: false },
      { text: "User can enter numbers as sequences up to 8 digits long by clicking on digits in the entry pad. Entry of any digits more than 8 will be ignored", completed: false },
      {
        text: "User can click on an operation button to display the result of that operation on:" +
          "\nthe result of the preceding operation and the last number entered OR" +
          "\nthe last two numbers entered OR" +
          "\nthe last number entered", completed: false
      },
      { text: "User can click the 'C' button to clear the last number or the last operation.If the users last entry was an operation the display will be updated to the value that preceded it.", completed: false },
      { text: "User can click the 'AC' button to clear all internal work areas and to set the display to 0.", completed: false },
      { text: "User can see 'ERR' displayed if any operation would exceed the 8 digit maximum", completed: false }
    ],
    bonus: [
      { text: " User can click a '+/-' button to change the sign of the number that is currently displayed", completed: false },
      { text: "User can see a decimal point ('.') button on the entry pad to that allows floating point numbers up to 3 places to be entered and operations to be carried out to the maximum number of decimal places entered for any one number", completed: false }
    ]
  }, {
    url: 'chistmaslights',
    title: 'Christmas Lights',
    completed: false,
    stories: [
      { text: "User can press a button to start and stop the display", completed: false },
      { text: "User can change the interval of time controlling the change in intensity", completed: false }
    ],
    bonus: [
      { text: "User can select the color used to fill each circle", completed: false },
      { text: "User can specify the intensity value", completed: false },
      { text: "User can change the size of any circle in the row", completed: false },
      { text: "User can specify the number of rows to be included in the display. From one to seven rows can be chosen", completed: false }
    ]
  }, {
    url: 'causeeffect',
    title: 'CauseEffect',
    completed: false,
    stories: [
      { text: "User can see a list of person names arranged vertically in a summary pane on the page", completed: false },
      { text: "User can click on a name in the list to update an adjacent pane on the page with that individuals full name, address, telephone number, and birthday", completed: false },
      { text: "User can click on another name in the list to refresh the detail pane with that individuals information", completed: false }
    ],
    bonus: [
      { text: "User can see the person name in the summary pane highlighted when the cursor is hovered over it", completed: false },
      { text: "User can see the person name in the summary pane highlighted using a selection effect (color, size, etc.) when it is clicked. This is a different effect from the hover effect", completed: false },
      { text: "User can see the selection effect removed from a name in the summary list when a new name is clicked", completed: false }
    ]
  }, {
    url: 'colorcycle',
    title: 'ColorCycle',
    completed: false,
    stories: [
      { text: "User can specify a starting fill color as a six hexadecimal standard CSS color code in three individual components of two digits each - red, blue, and green", completed: false },
      { text: "User can specify an increment value for each color component that will be added to that component every .25 second", completed: false },
      { text: "User can see the box containing the fill color change every .25 seconds", completed: false },
      { text: "User can only change the color components and their increments when the app is stopped", completed: false },
      { text: "User can start and stop the fill operation using a button whose name changes to 'Start' when stopped and 'Stop' when started", completed: false },
      { text: "User will receive an warning if something other than hexadecimal digits are entered for the color components", completed: false }
    ],
    bonus: [
      { text: "User can change the time interval between color changes", completed: false },
      { text: "User can specify the color encoding format used from RGB to another format like HSL", completed: false }
    ]
  }, {
    url: "countdowntimer",
    title: 'Countdown Timer',
    completed: false,
    stories: [
      { text: "User can see an event input box containing an event name field, an date field, an optional time, and a 'Start' button", completed: false },
      { text: "User can define the event by entering its name, the date it is scheduled to take place, and an optional time of the event. If the time is omitted it is assumed to be at Midnight on the event date in the local time zone", completed: false },
      { text: "User can see a warning message if the event name is blank", completed: false },
      { text: "User can see a warning message if the event date or time are incorrectly entered", completed: false },
      { text: "User can see a warning message if the time until the event data and time that has been entered would overflow the precision of the countdown timer", completed: false },
      { text: "User can click on the 'Start' button to see the countdown timer start displaying the days, hours, minutes, and seconds until the event takes place", completed: false },
      { text: "User can see the elements in the countdown timer automatically decrement. For example, when the remaining seconds count reaches 0 the remaining minutes count will decrement by 1 and the seconds will start to countdown from 59. This progression must take place from seconds all the way up to the remaining days position in countdown display", completed: false }
    ],
    bonus: [
      { text: "User can save the event so that it persists across sessions", completed: false },
      { text: "User can see an alert when the event is reached", completed: false },
      { text: "User can specify more than one event", completed: false },
      { text: "User can see a countdown timers for each event that has been defined", completed: false }
    ]
  }, {
    url: 'csv2json',
    title: 'CSV2JSON',
    completed: false,
    stories: [
      { text: 'User can paste CSV syntax into a text box', completed: false },
      { text: 'User can click a \'Convert to JSON\' button to validate the CSV text box and convert it to JSON', completed: false },
      { text: 'User can see an warning message if the CSV text box is empty or if it doesn\'t contain valid CSV', completed: false },
      { text: 'User can see the converted CSV in the JSON text box', completed: false }],
    bonus: [
      { text: "User can enter the path to the CSV file on the local file system in a text box", completed: false },
      { text: "User can click a 'Open CSV' button to load file containing the CSV into the text box", completed: false },
      { text: "User can see a warning message if the CSV file is not found", completed: false },
      { text: "User can click a 'Save CSV' button to save the CSV file to the file entered in the same text box used for opening the CSV file", completed: false },
      { text: "User can see a warning message if the CSV text box is empty or if the save operation failed", completed: false },
      { text: "User can enter the path to the JSON file on the local file system in a text box", completed: false },
      { text: "User can click a 'Open JSON' button to load file containing the JSON into the text box", completed: false },
      { text: "User can see a warning message if the JSON file is not found", completed: false },
      { text: "User can click a 'Save JSON' button to save the JSON file to the file entered in the same text box used for opening the JSON file", completed: false },
      { text: "User can see a warning message if the JSON text box is empty or if the save operation failed", completed: false },
    ]
  }, {
    url: 'dollarstocents',
    title: 'Dollars To Cents',
    completed: false,
    stories: [
      { text: "User can enter a dollar value", completed: false },
      { text: "User can see the total cents from the converted dollar value", completed: false }
    ],
    bonus: [{ text: "User can see how many were pennies, nickels, quarters and dimes from the total cents", completed: false }]
  },
  {
    url: "dynamiccssvariables",
    title: 'Dynamic CSS Variables',
    completed: false,
    stories: [
      { text: "User can see three two boxes to be used to enter a User ID and Password along with 'Cancel' and 'Login' buttons underneath them. The default background color of the text boxes is white", completed: false },
      { text: "User can enter a user id and password into the text boxes", completed: false },
      { text: "User can click the 'Login' button to validate the user id and password", completed: false },
      { text: "User can see a warning message if one or both of the text boxes contains spaces and the background color of the empty text box will change to light yellow", completed: false },
      { text: "User can see a warning message if the user id doesn't match 'testuser' and the background color of the text box will change to light red", completed: false },
      { text: "User can see a warning message if the password doesn't match 'mypassword' and the background color of the text box will change to light red", completed: false },
      { text: "User can click the 'Cancel' button to clear the text boxes and reset their background colors to white", completed: false }
    ],
    bonus: [
      { text: "User can see the color of the text box border change when an error is detected", completed: false },
      { text: "User can see the size and font of the contents of the text box change when an error is detected", completed: false }
    ]
  }, {
    url: 'yourfirstdbapp',
    title: 'Your First DB App',
    completed: false,
    stories: [
      { text: "User can see a web page containing a control panel containing three buttons - 'Load DB', 'Query DB', and 'Clear DB'", completed: false },
      { text: "User can see a notification panel where status messages will be posted", completed: false },
      { text: "User can see a scrollable log panel where execution details describing the apps operation and interface with the Customer instance will be posted", completed: false },
      { text: "User can see a running history of notification panel messages in the log panel", completed: false },
      { text: "User can see a scrollable query results area where retrieved customer data will be displayed", completed: false },
      { text: "User can click the 'Load DB' button to populate the database with data. The 'Load DB' button in your UI should be hooked to the loadDB event handler that's provided", completed: false },
      { text: "User can see a message displayed in the notification panel when the data load operation starts and ends", completed: false },
      { text: "User can click the 'Query DB' button to list all customers in the query results area. The 'Query DB' button in your UI should be hooked to a queryDB event handler you will add to the program", completed: false },
      { text: "User can see a message in the notification panel when the query starts and ends", completed: false },
      { text: "User can see a message in the query results area if there are no rows to display", completed: false },
      { text: "User can click on the 'Clear DB' button to remove all rows from the database. The 'Clear DB' button in your UI should be hooked to the clearDB event handler that's provided", completed: false },
      { text: "User can see a message in the notification panel when the clear operation starts and ends", completed: false }
    ],
    bonus: [
      { text: "User can see buttons enabled and disabled according to the following table", completed: false },
      { text: "User can see additional Customer data fields added to those included in the code provided. Developer should add date of last order and total sales for the year", completed: false },
      {
        text: "Developer should conduct a retrospection on this project:" +
          "\nWhat use cases can you see for using IndexedDB in your frontend apps?" +
          "\nWhat advantages and disadvantages can you see over using a file or local storage?" +
          "\nIn general, what criteria might you use to determine if IndexedDB is right for your app. (Hint: 100% yes or no is not a valid answer)", completed: false
      }
    ]
  }, {
    url: 'flipImage',
    title: 'FlipImage',
    completed: false,
    stories: [
      { text: "User can see a pane containing a single image repeated in a 2x2 matrix", completed: false },
      { text: "User can flip any one of the images vertically or horizontally using a set of up, down, left, and right arrows next to the image", completed: false }
    ],
    bonus: [
      { text: "User can change the default image by entering the URL of a different image in an input field", completed: false },
      { text: "User can display the new image by clicking a 'Display' button next to the input field", completed: false },
      { text: "User can see an error message if the new images URL is not found", completed: false }
    ]
  }, {
    url: "githubstatus",
    title: 'Github Satus',
    completed: false,
    stories: [
      { text: "User can see the current status for GitHub Git operations, API Requests, Operational Issues, PRs, Dashboard, & Projects, Operational Notifications, Operational Gists, and Operational GitHub Pages as a list in the main app window", completed: false },
      { text: "User can retrieve the most recent status from the GitHub Status web site by clicking a 'Get Status' button", completed: false }
    ],
    bonus: [
      { text: "User can see any of the GitHub components that are not in 'Operational' status highlighted by a different color, background animation, or any other technique to make it stand out. Use your imagination!", completed: false }
    ]
  }, {
    url: 'hello',
    title: 'Hello',
    completed: false,
    stories: [
      { text: "User can see a mock login panel containing a user name text input field, a password text input field, and 'Login' and 'Logout' buttons", completed: false },
      { text: "User can enter a mock login name into the User Name field", completed: false },
      { text: "User can enter a mock password into the Password field. Input should be masked so the user see's asterisks (*) for each character that is entered rather than the plaintext password", completed: false },
      { text: "User can click the 'Login' button to perform a mock login", completed: false },
      { text: "User can see a message if either or both of the input fields are empty and the border color of the field(s) in error should be changed to red", completed: false },
      { text: "User can see a login acknowledgement message in the format: <hello-in-native-language> <user-name> you have successfully logged in!", completed: false },
      { text: "User can click the 'Logout' button to clear the text input fields and any previous messages", completed: false },
      { text: "User can see a new message when successfully logged out in the format: Have a great day <user-name>!", completed: false }
    ],
    bonus: [
      { text: "User can see an additional text input field for a language code which will be used to override the IP obtained through geolocation. Hint: this is a great feature for testing your app", completed: false },
      { text: "User can see additional geolocation information after logging on that includes at least the local IP address, city, region, country name, zip code, longitude, latitude, and timezone", completed: false }
    ]
  }, {
    url: 'iotmailboxsimulator',
    title: 'IOT Mailbox Simulator',
    completed: false,
    stories: [
      { text: "User can see a web page containing a control panel containing three buttons - 'Start Monitoring', 'Stop Monitoring', and 'Reset'", completed: false },
      { text: "User can see a notification panel where the mailbox status will be posted", completed: false },
      { text: "User can see a scrollable log panel where execution details describing the apps operation and interface with the IOTMailbox instance will be posted", completed: false },
      { text: "User can click the 'Start Monitoring' button to begin receiving state notifications from the mailbox", completed: false },
      { text: "User can see a message added to the log panel when monitoring starts", completed: false },
      { text: "User can see a message added to the log panel for light level passed through the callback function. This should include the numerical light level and whether the door is open or closed", completed: false },
      { text: "User can see a message added to the notification panel when the door has been opened", completed: false },
      { text: "User can click the 'Stop Monitoring' button to stop receiving state notifications from the mailbox", completed: false },
      { text: "User can see a message added to the log panel when monitoring stops", completed: false }
    ],
    bonus: [
      { text: "User can see the 'Start Monitoring' button disabled until monitoring is stopped", completed: false },
      { text: "User can see the 'Stop Monitoring' button disabled until monitoring is started", completed: false },
      { text: "User can see an field in the control panel allowing the length of the monitoring interval to be specified", completed: false },
      { text: "User can see a message added to the notification panel if the door is left open", completed: false },
      { text: "User can hear an audible alert when the door is opened", completed: false }
    ]
  }, {
    url: 'javascriptvalidatorwithregex',
    title: 'Javascript Validation With Regex',
    completed: false,
    stories: [
      { text: "User should be notified of any invalid inputs by error messages displayed on the form", completed: false },
      { text: "The submit button on the form would never be executed until all entries are validated", completed: false }
    ],
    bonus: []
  }, {
    url: 'json2csv',
    title: 'JSON2CSV',
    completed: false,
    stories: [
      { text: "User can paste JSON syntax into a text box", completed: false },
      { text: "User can click a 'Convert' button to validate the JSON text box and convert it to CSV", completed: false },
      { text: "User can see the converted CSV in another text box", completed: false },
      { text: "User can see an warning message if the JSON text box is empty or if it doesn't contain valid JSON", completed: false },
      { text: "User can click a 'Clear' button to clear the contents of both the JSON and CSV text boxes", completed: false }
    ],
    bonus: [
      { text: "User can enter the path to the JSON file on the local file system in a text box", completed: false },
      { text: "User can click a 'Open' button to load file containing the JSON into the text box", completed: false },
      { text: "User can see a warning message if the JSON file is not found", completed: false },
      { text: "User can enter the path the CSV file is to be saved to in a text box", completed: false },
      { text: "User can click a 'Save' button to save the CSV file to the local file system", completed: false },
      { text: "User can see a warning message if the CSV text box is empty or if the save operation failed", completed: false },
      { text: "User can convert CSV data to JSON", completed: false }
    ]
  }, {
    url: 'keyvalue',
    title: 'Key Value',
    completed: false,
    stories: [
      { text: "User can see a display panel containing a text area where the key value and key code will be displayed along with display areas for four other indicators related to the keys on the keyboard - alt key, control key, meta key, and shift key", completed: false },
      { text: "User can see the key code and key value displayed in the display panel corresponding to the key when it is pressed", completed: false },
      { text: "User can see the appropriate indicator change from 'False' to 'True' when the alt, control, meta, or shift key is pressed", completed: false }
    ],
    bonus: [
      { text: "User can hear a unique tone played when a key is pressed", completed: false },
      { text: "User can see the background color of the key code and value change when a key is pressed", completed: false }
    ]
  }, {
    url: 'loremipsumgenerator',
    title: 'Lorem Ipsum Generator',
    completed: false,
    stories: [
      { text: "User can type into an input field the number of paragraphs of lorem ipsum to be generated", completed: false },
      { text: "Use can see the generated paragraphs of lorem ipsum and is able to copy them", completed: false }
    ],
    bonus: []
  }, {
    url: 'notesapp',
    title: 'Notes App',
    completed: false,
    stories: [
      { text: "User can create a note", completed: false },
      { text: "User can edit a note", completed: false },
      { text: "User can delete a note", completed: false },
      { text: "When closing the browser window the notes will be stored and when the User returns, the data will be retrieved", completed: false }
    ],
    bonus: [
      { text: "User can create and edit a note in Markdown format. On save it will convert Markdown to HTML", completed: false },
      { text: "User can see the date when he created the note", completed: false }
    ]
  }, {
    url: 'pearsonregression',
    title: 'Pearson Regression',
    completed: false,
    stories: [
      { text: "User can see an input panel with two input fields allowing entry of x and y coordinates, and 'Add' and 'Calculate' buttons", completed: false },
      { text: "User can enter numbers into these boxes where x and y are observations from the two data sets", completed: false },
      { text: "User can click the 'Add' button to add the x and y to a tabular output area listing the pairs of observations", completed: false },
      { text: "User can see and error message if either of the two input fields are empty or do not contain valid real numbers", completed: false },
      { text: "User can see the 'Calculate' button is disabled until errors have been corrected", completed: false },
      { text: "User can click the 'Calculate' button to perform the regression analysis and to display its results", completed: false },
      {
        text: "User can see results of the calculation which include:" +
          "\nArithmetic means for both the x and y observations" +
          "\nStandard deviations for both the x and y observations" +
          "\nPearson correlation coefficient with one of the following interpretations:" +
          "\n\tNo correlation" +
          "\n\tNeutral" +
          "\n\tSome correlation"
      }
    ],
    bonus: [
      { text: "User can see a scatter plot of the observations", completed: false },
      { text: "User can upload observations from a file on the local machine", completed: false },
      { text: "User can see a regression line overlaying the scatter plot", completed: false }
    ]
  }, {
    url: 'pomodoroclock',
    title: 'Pomodoro Clock',
    completed: false,
    stories: [
      { text: "User can see a timer for 25 minutes - the working session", completed: false },
      { text: "After the working session is over, the User can see a timer for 5 minutes - the break session", completed: false },
      { text: "User can start / pause, stop and reset the timers", completed: false }
    ],
    bonus: [
      { text: "User can hear a sound playing when the timer hits 00:00 - denoting that the session has ended", completed: false },
      { text: "User can change / customize the minutes in both sessions before starting", completed: false },
      { text: "User can set a long break session of 10 minutes. This will be activated every 4th break session", completed: false }
    ]
  }, {
    url: 'productlandingpage',
    title: 'Product Landing Page',
    completed: false,
    stories: [
      { text: "User can see on the page one or more images with the product", completed: false },
      { text: "User can see a list with all the features of the product", completed: false },
      { text: "User can see how this product will improve the buyers life. Why should he buy it?", completed: false },
      { text: "User can see a contact section (a text with the email)", completed: false }
    ],
    bonus: [
      { text: "User can see a FAQ section", completed: false },
      { text: "User can contact the staff members via a contact form", completed: false },
      { text: "User can sign up to receive notifications about the product", completed: false },
      { text: "User can purchase the product", completed: false }
    ]
  }, {
    url: 'quizapp',
    title: 'Quiz App',
    completed: false,
    stories: [
      { text: "User can start the quiz by pressing a button", completed: false },
      { text: "User can see a question with 4 possible answers", completed: false },
      { text: "After selecting an answer, display the next question to the User. Do this until the quiz is finished", completed: false },
      {
        text: "At the end, the User can see the following statistics" +
          "\n\tTime it took to finish the quiz" +
          "\n\tHow many correct answers did he get" +
          "\n\tA message showing if he passed or failed the quiz", completed: false
      },
    ],
    bonus: [
      { text: "User can share the result of a quiz on social media", completed: false },
      { text: "Add multiple quizzes to the application. User can select which one to take", completed: false },
      { text: "User can create an account and have all the scores saved in his dashboard. User can complete a quiz multiple times", completed: false }
    ]
  }, {
    url: 'recipe',
    title: 'Recipe',
    completed: false,
    stories: [
      { text: "User can see a list of recipe titles", completed: false },
      { text: "User can click a recipe title to display a recipe card containing the recipe title, meal type (breakfast, lunch, supper, or snack), number of people it serves, its difficulty level (beginner, intermediate, advanced), the list of ingredients (including their amounts), and the preparation steps", completed: false },
      { text: "User click a new recipe title to replace the current card with a new recipe", completed: false }
    ],
    bonus: [
      { text: "User can see a photo showing what the item looks like after it has been prepared", completed: false },
      { text: "User can search for a recipe not in the list of recipe titles by entering the meal name into a search box and clicking a 'Search' button. Any open source recipe API may be used as the source for recipes (see The MealDB below)", completed: false },
      { text: "User can see a list of recipes matching the search terms", completed: false },
      { text: "User can click the name of the recipe to display its recipe card", completed: false },
      { text: "User can see a warning message if no matching recipe was found", completed: false },
      { text: "User can click a 'Save' button on the cards for recipes located through the API to save a copy to this apps recipe file or database", completed: false }
    ]
  }, {
    url: 'randommealgenerator',
    title: 'Random Meal Generator',
    completed: false,
    stories: [
      { text: "User can click a button that will get a random meal from an external API (see below)", completed: false },
      { text: "The app should display: Recipe name, Ingredients, Instructions and a Picture of the meal", completed: false },
      { text: "By clicking the button again, another meal will be generated", completed: false }
    ],
    bonus: [
      { text: "The app should display a YouTube Video", completed: false }
    ]
  }, {
    url: 'randomnumbergenerator',
    title: 'Random Number Generator',
    completed: false,
    stories: [
      { text: "User can define maximun and minimun values for the random number", completed: false },
      { text: "User can press the generate button to generate random number", completed: false }
    ],
    bonus: [
      { text: "User can add option for negative values", completed: false },
      { text: "User can add option for decimal numbers", completed: false }
    ]
  }, {
    url: 'romantodecimalconverter',
    title: 'Roman to Decimal Converter',
    completed: false,
    stories: [
      { text: "User should be able to enter one Roman number in an input field", completed: false },
      { text: "User could see the results in a single output field containing the decimal (base 10) equivalent of the roman number that was entered by pressing a button", completed: false },
      { text: "If a wrong symbol is entered, the User should see an error", completed: false }
    ],
    bonus: [
      { text: "User could see the conversion to be made automatically as I type", completed: false },
      { text: "User should be able to convert from decimal to Roman (vice-versa)", completed: false }
    ]
  }, {
    url: 'sliderdesign',
    title: 'Slider Design',
    completed: false,
    stories: [
      { text: "User can see a slider displaying multiple images every x seconds", completed: false },
      { text: "User can click on previous and next buttons and the slider will display the corresponding image", completed: false }
    ],
    bonus: [
      { text: "Add animation to the slides", completed: false },
      { text: "Add text over the slides", completed: false },
      { text: "Create a 3D effect", completed: false }
    ]
  }, {
    url: 'stopwatchapp',
    title: 'Stopwatch App',
    completed: false,
    stories: [
      { text: " can start a clock", completed: false },
      { text: " can stop the clock", completed: false },
      { text: "When the clock is stopped the user can click start again and the clock will continue counting up", completed: false },
      { text: "User can restart the clock", completed: false }
    ],
    bonus: [
      { text: "User can create laps - these will be displayed on the screen", completed: false },
      { text: "User can clear all the laps", completed: false }
    ]
  }, {
    url: 'trueorfalse',
    title: 'True Or False',
    completed: false,
    stories: [
      { text: "User can enter two strings to be compared", completed: false },
      { text: "User can enter a valid Javascript conditional operator to be used to compare the two strings", completed: false },
      { text: "User can see the result of the conditional as TRUE or FALSE", completed: false },
      { text: "User can see a warning if the input strings or conditional operator that has been entered is not valid", completed: false },
    ],
    bonus: [
      { text: "User can specify the type of each of the two strings so numbers can be compared to strings, strings to booleans, etc", completed: false },
    ]
  }, {
    url: 'vignerecipher',
    title: 'Vigenere Cipher',
    completed: false,
    stories: [
      {
        text: "User can see the app window with these components:" +
          "\n\tPlain text message input field" +
          "\n\tEncryption key input field" +
          "\n\tAction buttons - 'Encrypt' and 'Decrypt'" +
          "\n\tResulting encrypted or decrypted message", completed: false
      },
      { text: "User can enter the text to be encrypted in the plain text message input field", completed: false },
      { text: "User can enter the Encryption key the Vigenere algorithm will use to encrypt the plain text message", completed: false },
      { text: "User can click see see the 'Decrypt' button disabled until the plain text has been encrypted", completed: false },
      { text: "User can click the 'Encrypt' button to encrypt the plain text message", completed: false },
      { text: "User can see the encrypted message displayed in the result field", completed: false },
      { text: "User can see the 'Decrypt' button enabled after the encrypted message has been displayed", completed: false },
      { text: "User can click the 'Decrypt' button to decrypt the encrypted message and to display its contents in the result field.", completed: false }
    ],
    bonus: [
      { text: "User can see a 'Compare' button after decryption that compares the original plain text message with the decrypted message", completed: false },
      { text: "User can see an error message if the 'Compare' detects differences in the contents of these two fields", completed: false }
    ]
  }, {
    url: 'windchill',
    title: 'Windchill',
    completed: false,
    stories: [
      { text: "User can select the measurement system calculations will be performed in - Metric or English", completed: false },
      { text: "User can enter the actual temperature and the wind speed", completed: false },
      { text: "User can press the Calculate button to display the wind chill", completed: false },
      { text: "User will receive an error message when Calculate is clicked if data values are not entered", completed: false }
    ],
    bonus: [
      { text: "User will receive an error message when Calculate is clicked if the resulting wind chill factor is greater than or equal to the actual temperature. Since this signifies an internal error in the calculation you may also satisfy this requirement using an assertion", completed: false },
      { text: "User will be prompted to enter new data values if Calculate is pressed without first changing at least one of the input fields", completed: false },
      { text: "User will see an updated wind chill factor whenever new actual temperature or wind speed values are entered, without being required to click the Calculate button", completed: false }
    ]
  }, {
    url: 'wordfrequency',
    title: 'Word Frequency',
    completed: false,
    stories: [
      { text: "User can see a text input box, a 'Translate' button, and a word frequency table", completed: false },
      { text: "User can enter text (or cut and paste) into the input box. This input box must allow the entry of large blocks of text (maximum of 2048 characters)", completed: false },
      { text: "User can click the 'Translate' button to analyze the word frequency in the text that has been input", completed: false },
      { text: "User can see an error message if the text input box is empty", completed: false },
      { text: "User can see the word frequency table populated when the 'Translate' button is clicked. Each row in the table contains a word and the number of times it occurs in the input text", completed: false },
      { text: "User can see the word frequency table ordered in descending sequence by word frequency", completed: false }
    ],
    bonus: [
      { text: "User can see a graphical representation of the word frequency in a bubble chart, column chart, or any other form of graphical representation the developer chooses", completed: false },
      { text: "User may choose to enter the URL of a web page whose content is to be analyzed instead of manually entering text", completed: false }
    ]
  }, {
    url: "weatherapp",
    title: 'Weather App',
    completed: false,
    stories: [
      { text: "Enter the name of a city into the input field", completed: false },
      { text: "By pressing enter, the user submits the name of the city which updates the DOM with the temperature, weather condition, image of day or night and weather condition icon", completed: false }
    ],
    bonus: [
      { text: "By closing the browser window the city name will be stored in localStorage and when the user returns, the name will be retrieved to make an api call to update the DOM", completed: false }
    ]
  }
]

export default beginner;