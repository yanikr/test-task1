# React test-task

Project is created with the use of GO IT
[Create React App template](https://github.com/goitacademy/react-homework-template)

## How it works?

User can click on button "Follow" and this action will lead to an increment of
the "followers" counter with changing the appearance of the button. If the user
clicks on "Following" button, followers counter will decrement, and the button
will change the appearance to the basic one.

## How this app has been created

For the modest functionality of the app, all the actions with the increment and
decrement of followers counter has been done with the use of React Hooks
useState and useEffect. To keep the counter at the latest position, the state
has been put into localstorage. Appearance of the page has been adjusted with
the use of styled-components library.
