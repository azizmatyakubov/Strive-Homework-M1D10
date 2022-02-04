// exercise 21

const exercise21 =() =>{
    let x = 'John'
    let y = 'Doe'
    console.log(`${x} <> ${y}`)
}


 student = {
     name: 'John',
     surname: 'Doe',
     email: 'JohnDoe@doe.com'
 }
    

const exercise23 =() =>{
    delete student.email
}

// 26) Create an array with 100 random numbers in it
let randomNum = []

const randomArray = () => {
    for(let i=0; i<100; i++) {
        randomNum.push(Math.floor(Math.random() * 100))
    }
}

randomArray()


// 27) Write a function to get the maximum and minimum values from the previously created array
const getMinAndMax = () => {
    let min = randomNum[0] 
    let max = randomNum[0]
    for(let i=0; i<randomNum.length; i++) {

        //Finding max
        if(randomNum[i] > max) {
            max = randomNum[i]
        }
        //Finding min
        if(randomNum[i] < min) {
            min = randomNum[i]
        }
    }
    return `Max number is: ${max} and min number is ${min}`
}

// 28) Create an array of arrays, in which every array has 10 random numbers

// let arr28 = []
// const exercise28 = () => {
    
// }

// 29) Create a function that gets 2 arrays as parameters and returns the longest one

let arr29_1 = [1, 2, 3, 4, 5, 6]
let arr29_2 = [1, 2, 3, 4, 5, 6, 7, 8]

const longestArray = (arr1, arr2) {
    return arr1>arr2 ? arr1 : arr2
}


// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

// DOM EXERCISES

// 31) Get the element with an id of "container" from the page
// 32) Get every <td> element from the page
// 33) Use a loop for printing the text inside of every <td> element in the page
// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table
// 36) Write a function to add a class of "test" to each row in the table
// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a unordered list
// 40) Write a function to empty a list

// EXTRA EXERCISES

// 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
// 42) Create a button that will hide every image on the page when clicked
// 43) Create a button that will hide or show the table on the page when clicked
// 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
// 45) Delete the last letter from the heading each time the user clicks on it
// 46) Change the background color of a <td> if the user clicks on it
// 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>
// 48) Add automatically a pink border to a cell when the mouse hovers it
// 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
// 50) Write a function to remove the last table from the page
