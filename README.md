# redux-30-days-comprensive-studying
30 days redux comprehensive studying. By the end of 30 days i will understand the basics of redux

# BOOKS-APP DOCUMENTATION
## DAY 1: Reducers: 
* Reducers are the state of your application
* Reducers are the functions that return a piece of your application states
* Reducers must always return object
* For my books-app, I have two states: 1. A state that displays all the books 2. State that displays only one 
  book, this means I will have two reducers, one for each state

```javascript

export default function () {
    return [
        {title: 'Jesus'},
        {title: 'God is coming'},
        {title: 'No Jesus no Heaven 1'},
        {title: 'No Jesus no Heaven 2 ' },
        {title: 'No Jesus no Heaven 3 '}
    ]
}

```
