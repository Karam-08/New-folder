// Employee Data
const employees = [
  { id: 101, name: 'Alice', department: 'Engineering' },
  { id: 102, name: 'Bob', department: 'Marketing' },
  { id: 103, name: 'Charlie', department: 'Engineering' },
  { id: 104, name: 'David', department: 'Sales' }
];

// Office Supply Inventory 
const supplies = [
  'pens',
  'notebooks',
  'stapler',
  'paper'
];

// Part 1: Adding and removing elements


// Task 1.1: New Hire
 employees.push({ id: 105, name: 'Eve', department: 'Engineering' })
 console.log(employees)

// Task 1.2: Employee Departure
 let employee = employees.pop();
 console.log(employee)

// Task 1.3: Urgent Delivery
 supplies.unshift('welcome kit')
 console.log(supplies)

// Task 1.4: Supply Chain Issue
 supplies.shift();
 console.log(supplies)


// Part 2: Combining and Formatting


// Task 2.1: Urgent Supplies
const newSupplies = ['highlighters', 'sticky notes']
const fullSupplies = newSupplies.concat(supplies)
console.log(fullSupplies)

// Task 2.2: Supply List for an Email
let emailSuppliesList = fullSupplies.join(", ") 
console.log(emailSuppliesList)

// Task 2.3: Quick Inspection
console.log(newSupplies.toString())
// It seems that .toString() only puts a comma between while .join() lets you put whatever between


// Part 3: Slicing and Findingz


// Task 3.1: Engineering Team

// Task 3.2: First Three Employees
const top3 = employees.slice(1, 2, 3)
console.log(top3)

// Task 3.3: Alphabetical Order

