const company = [
    {
      id: 1,
      name: "Company",
      parent: null,
      users_count: 10,
      children: [
        {
          id: 2,
          name: "Testing department",
          parent: 1,
          users_count: 7,
          children: [
            {
              id: 2,
              name: "Web Testing",
              parent: 2,
              users_count: 5,
            },
            {
              id: 3,
              name: "Mobile testing",
              parent: 2,
              users_count: 0,
            },
          ]
        },
        {
          id: 4,
          name: "Marketing department",
          parent: 1,
          users_count: 30,
        },
        {
          id: 5,
          name: "Administration",
          parent: 1,
          users_count: 25,
          children: [
            {
              id: 6,
              name: "Accounting",
              parent: 5,
              users_count: 10,
            },
            {
              id: 7,
              name: "Management",
              parent: 5,
              users_count: 15,
              children: [
                {
                  id: 8,
                  name: "Management subsection 1",
                  parent: 7,
                  users_count: 5,
                },
                {
                  id: 9,
                  name: "Management subsection 2",
                  parent: 7,
                  users_count: 10,
                }
              ]
            },
            {
              id: 10,
              name: "HR",
              parent: 5,
              users_count: 1,
            }
          ]
        },
      ]
    }
  ]

/*  Task 4****
write a function:
The function builds a tree-like list of the company.
When it is called, a list of company departments should be displayed in the console,
indicating the number of employees and respecting the nesting of departments.
*/

// function companyDepartment(company, counter = "") {
//     company.forEach(data => {
//       console.log(`${counter}${counter === "" ? "" : " "}${data.name} (${data.users_count})`);
//       if (data.children) {
//         counter += '--';
//         companyDepartment(data.children, counter);
//         counter = counter.slice(0, -2);
//       }
//     })
//   }
//   companyDepartment(company);

function companyDepartment(company, func) {
    company.forEach(data => {
      func(data);
      data.children && companyDepartment(data.children, func);
    })
  }
  
  companyDepartment(company, node => {
    let i = "-";
    node.parent != null ?
      console.log(`${i.repeat(node.parent)} ${node.name}(${node.users_count})`) :
      console.log(`${node.name}(${node.users_count})`);
  })