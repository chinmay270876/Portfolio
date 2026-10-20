/**
 * Roles, dates, locations, and responsibilities are taken from the resume.
 * Infexial has no location on the resume.
 */
export const experience = [
  {
    id: 'genus',
    current: true,
    title: 'Graduate Engineering Trainee',
    place: 'Genus Power Infrastructures Ltd.',
    location: 'Jaipur',
    dates: 'April 2026 – Present',
    focus: [
      'Watchman monitoring dashboard',
      'HES/MDM data integration',
      'Grafana SQL visualizations',
      'PostgreSQL query and mapping checks',
    ],
    points: [
      'Develop and enhance the Watchman monitoring dashboard using React, Node.js, JavaScript, PostgreSQL, SQL, and HTML/CSS, integrating HES/MDM data with monitoring, reporting, filtering, and data-refresh functionality.',
      'Build and maintain Grafana dashboards and panels, converting reports into interactive SQL-based visualizations for Non-Communication, Wrong Connection, Low Consumption, RSSI, and Reserve Connection.',
      'Analyze and optimize PostgreSQL queries and database mappings; investigate missing or incorrect data using GitLab, pgAdmin, PostgreSQL, Grafana, Node.js, and VS Code/Cursor.',
    ],
  },
  {
    id: 'itron',
    current: false,
    title: 'Automation Intern',
    place: 'Itron India Pvt. Ltd.',
    location: 'Bangalore',
    dates: 'June 2024 – September 2024',
    points: [
      'Developed a Python automation tool to manage NLC board configurations through serial communication, supporting JSON-based read/write operations.',
      'Implemented error handling and logging to improve reliability and support future GUI, scalability, and cloud remote-management enhancements.',
    ],
  },
  {
    id: 'infexial',
    current: false,
    title: 'Ethical Hacking Intern',
    place: 'Infexial Software Solutions',
    location: null,
    dates: 'May 2023 – August 2023',
    points: [
      'Conducted vulnerability analysis and penetration testing on a blood bank application to identify security flaws and implemented secure communication protocols to protect donor/recipient data.',
    ],
  },
];

export const education = [
  {
    id: 'btech',
    title: 'B.Tech, Computer Science & Engineering (AI & ML)',
    place: 'Manipal University Jaipur',
    dates: '2021–2025',
    result: 'CGPA: 7.45/10',
  },
  {
    id: 'class-xii',
    title: 'Class XII (CBSE)',
    place: 'Ryan International School, Noida',
    dates: '2020–2021',
    result: '92.4%',
  },
  {
    id: 'class-x',
    title: 'Class X (CBSE)',
    place: 'Ryan International School, Noida',
    dates: '2018–2019',
    result: '89.8%',
  },
];
