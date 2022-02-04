// exercise 21

const exercise21 =() =>{
    let x = 'John'
    let y = 'Doe'
    console.log(`${x} <> ${y}`)
}

// 22
 student = {
     name: 'John',
     surname: 'Doe',
     email: 'JohnDoe@doe.com'
 }
    
// 23
const exercise23 =() =>{
    delete student.email
}

// 24
let stringArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

// 25
for(let str of stringArr) {
    console.log(str)
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

const longestArray = (arr1, arr2) => {
    return arr1>arr2 ? arr1 : arr2
}


// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

const highestSum = (arr1, arr2) => {
    
    let sumOfArr1 = 0
    let sumOfArr2 = 0

    for(let i = 0; i<arr1.length; i++) {
        sumOfArr1 += arr1[i]
    }

    
    for(let i = 0; i<arr2.length; i++) {
        sumOfArr2 += arr2[i]
    }
    
    return sumOfArr1 > sumOfArr2 ? arr1 : arr2 

}


// DOM EXERCISES

// 31) Get the element with an id of "container" from the page

document.getElementById('container')


// 32) Get every <td> element from the page

let tdArr = document.querySelectorAll('td')

// 33) Use a loop for printing the text inside of every <td> element in the page

const printingTd = () => {
    for(td of tdArr) {
        console.log(td.innerText)
    }
}

// 34) Write a function to change the heading of the page
    document.getElementsByClassName('header')[0].innerText = 'This is new header'

// 35) Write a function to add an extra row to the table
    const addRow = () => {
        let table = document.getElementById('table')
        let tr = document.createElement('tr')
        tr.classList.add('tr')
        table.append(tr)
    }

// 36) Write a function to add a class of "test" to each row in the table
    const addClass = () => {
        let trArr = document.querySelectorAll('tr')
        for(let tr of trArr) {
            tr.classList.add('test')
        }
    }

// 37) Write a function to add a red background to every link in the page
    const addBackground = () => {
        let aArr = document.querySelectorAll('a')
        for(let a of aArr) {
            a.style.backgroundColor = 'red'
        }
    }

// 38) Console log "Page loaded" when the page is correctly loaded
    window.onload = () => {
        console.log('Page Loaded')
    }

// 39) Write a function to add new items to a unordered list
    const addNewLi = () => {
        let ul = document.getElementById('ul')
        let li = document.createElement('li')
        li.innerText = 'This is a new list element'
        ul.appendChild(li)
    }

// 40) Write a function to empty a list
    const emptyList = () => {
        let ol = document.getElementById('ol')
        ol.innerText = ''
    }


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
