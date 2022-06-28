const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

/* Tasks:
 1. Display all enterprises and their departments. Next to indicate the number of employees. For an enterprise, calculate the sum of all employees in all departments.
 **Example:**
 Enterprise 1 (45 employees)
 - Testing department (10 employees)
 - Marketing department (20 employees)
 - Administration (15 people)
 Enterprise 2 (75 employees)
 - Development department (50 employees)
 - Marketing department (20 employees)
 - Labor protection department (5 employees)
 Enterprise 3 (no employees)
 - Analytics department (no employees)
*/

function company() {
    for (let i = 0; i < enterprises.length; i++) {
      let summ = 0;
      for (let j = 0; j < enterprises[i].departments.length; j++) {
        summ += enterprises[i].departments[j].employees_count;
      }
      console.log(`${enterprises[i].name} (${summ} employees)`);
      for (let j = 0; j < enterprises[i].departments.length; j++) {
        console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count} employees)`);
      };
    }
  }
  company();