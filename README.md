# Pretty Letter – don't screw up in grammar!

#### This package can help you with choosing correct letter for your word depending on quantity.

You should pass a **number** on which the choice of letter depends as a first argument and **array of three letters** to choose from as a second argument.

Imagine you're dealing only with digits.<br>
`letters[0]` must be a letter you always use for 1,<br>
`letters[1]` must be a letter you always use for 2..4,<br>
`letters[2]` must be a letter you always use for 5..9 and 0

For example, we want to build a message, that contains info about comments count:

``` javascript
// Importing library old-school way
const pl = require('pretty-letter')
// Or importing as ES6 module
// import pl from 'pretty-letter'

const commentsCount = 220
const ending = pl(commentsCount, ['й', 'я', 'ев']) // imagine "1 комментарий", "2 комментария", "5 комментариев"
const message = `${commentsCount} комментари${ending}`

console.log(message) // 220 комментариев
```

Module is working pretty fine with any numbers, even with negative numbers and fractional numbers
