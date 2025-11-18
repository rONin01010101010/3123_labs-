import express from 'express';
const app = express();

// Employee data
let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000}
];

const employeeModule = {
    getAllEmployees: () => employees,
    
    getEmployeeNames: () => {
        return employees
            .map(emp => `${emp.firstName} ${emp.lastName}`)
            .sort();
    },
    
    getTotalSalary: () => {
        return employees.reduce((total, emp) => total + emp.Salary, 0);
    }
};

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200).send("<h1>Welcome to Employee Management System!</h1>");
});

app.get('/employee', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).json(employeeModule.getAllEmployees());
});

app.get('/employee/names', (req, res) => {
    res.set('Content-Type', 'application/json');
    const names = employeeModule.getEmployeeNames();
    res.status(200).json({
        message: "Employee full names in ascending order",
        names: names
    });
});

app.get('/employee/totalsalary', (req, res) => {
    res.set('Content-Type', 'application/json');
    const totalSalary = employeeModule.getTotalSalary();
    res.status(200).json({
        message: "Total salary of all employees",
        totalSalary: totalSalary
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;