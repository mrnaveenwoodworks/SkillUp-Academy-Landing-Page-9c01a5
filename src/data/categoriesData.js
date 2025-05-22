const categoriesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Master modern web technologies including HTML, CSS, JavaScript, React, and Node.js. Build responsive websites and dynamic web applications.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="80 40 40 40 40 216 80 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="176 40 216 40 216 216 176 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxQZXJzb24lMkJjb2RpbmclMkJvbiUyQmxhcHRvcCUyQndpdGglMkJtdWx0aXBsZSUyQm1vbml0b3JzfGVufDB8fHx8MTc0NzkxNDE5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 45,
    popularCourses: [
      {
        title: "Full Stack Web Development Bootcamp",
        rating: 4.9,
        students: 12500
      },
      {
        title: "React.js Master Course",
        rating: 4.8,
        students: 8900
      },
      {
        title: "Modern JavaScript Fundamentals",
        rating: 4.7,
        students: 15200
      }
    ],
    backgroundColor: "bg-blue-50",
    accentColor: "text-blue-600"
  },
  {
    id: 2,
    title: "Data Science",
    description: "Learn data analysis, machine learning, and statistical modeling. Master tools like Python, R, and SQL to drive data-driven decisions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><line x1="48" y1="216" x2="48" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48 56 176 56 176 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="48 104 224 104 224 152 48 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 152 144 200 48 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEYXRhJTJCc2NpZW50aXN0JTJCYW5hbHl6aW5nJTJCdmlzdWFsaXphdGlvbnN8ZW58MHx8fHwxNzQ3OTE0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 38,
    popularCourses: [
      {
        title: "Python for Data Science",
        rating: 4.9,
        students: 18900
      },
      {
        title: "Machine Learning Fundamentals",
        rating: 4.8,
        students: 9200
      },
      {
        title: "Data Visualization Mastery",
        rating: 4.7,
        students: 7800
      }
    ],
    backgroundColor: "bg-green-50",
    accentColor: "text-green-600"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Create beautiful, user-friendly interfaces. Learn design principles, prototyping, user research, and industry-standard tools.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><line x1="40" y1="108" x2="216" y2="108" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M156,152a8,8,0,0,0-7.92,9.13L152,208a24,24,0,0,1-48,0l3.92-46.87A8,8,0,0,0,100,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="172" y1="32" x2="172" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxEZXNpZ25lciUyQndvcmtpbmclMkJvbiUyQlVJJTJCbW9ja3VwfGVufDB8fHx8MTc0NzkxNDE5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 32,
    popularCourses: [
      {
        title: "Complete UI/UX Design Bootcamp",
        rating: 4.9,
        students: 14200
      },
      {
        title: "Figma Masterclass",
        rating: 4.8,
        students: 9800
      },
      {
        title: "User Research Fundamentals",
        rating: 4.7,
        students: 6500
      }
    ],
    backgroundColor: "bg-purple-50",
    accentColor: "text-purple-600"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Master digital marketing strategies including SEO, social media, content marketing, and paid advertising campaigns.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,156.18V196a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxNYXJrZXRpbmclMkJ0ZWFtJTJCYW5hbHl6aW5nJTJCZGlnaXRhbCUyQmNhbXBhaWdufGVufDB8fHx8MTc0NzkxNDIwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 28,
    popularCourses: [
      {
        title: "Complete Digital Marketing",
        rating: 4.8,
        students: 16700
      },
      {
        title: "SEO Optimization Mastery",
        rating: 4.7,
        students: 8900
      },
      {
        title: "Social Media Marketing",
        rating: 4.9,
        students: 12300
      }
    ],
    backgroundColor: "bg-orange-50",
    accentColor: "text-orange-600"
  },
  {
    id: 5,
    title: "Business & Management",
    description: "Develop leadership skills, learn business strategy, project management, and entrepreneurship fundamentals.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><line x1="112" y1="100" x2="144" y2="100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="60" width="192" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,60V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,114.31A191.09,191.09,0,0,1,128,140a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxCdXNpbmVzcyUyQm1lZXRpbmclMkJpbiUyQm1vZGVybiUyQm9mZmljZXxlbnwwfHx8fDE3NDc5MTQyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 35,
    popularCourses: [
      {
        title: "Project Management Professional",
        rating: 4.8,
        students: 11200
      },
      {
        title: "Business Strategy Fundamentals",
        rating: 4.7,
        students: 9500
      },
      {
        title: "Leadership & Management Skills",
        rating: 4.9,
        students: 13800
      }
    ],
    backgroundColor: "bg-yellow-50",
    accentColor: "text-yellow-600"
  },
  {
    id: 6,
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from cyber threats. Master security tools, ethical hacking, and threat analysis.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxDeWJlcnNlY3VyaXR5JTJCcHJvZmVzc2lvbmFsJTJCbW9uaXRvcmluZyUyQnNlY3VyaXR5JTJCc3lzdGVtc3xlbnwwfHx8fDE3NDc5MTQyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 25,
    popularCourses: [
      {
        title: "Ethical Hacking Bootcamp",
        rating: 4.9,
        students: 8900
      },
      {
        title: "Network Security Fundamentals",
        rating: 4.8,
        students: 7200
      },
      {
        title: "Cloud Security Certification",
        rating: 4.7,
        students: 5600
      }
    ],
    backgroundColor: "bg-red-50",
    accentColor: "text-red-600"
  },
  {
    id: 7,
    title: "Data Science & Analytics",
    description: "Transform your career with in-demand data skills. Learn to analyze complex datasets, create powerful visualizations, and drive business decisions with data.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M128,128a32,32,0,1,1,32-32A32,32,0,0,1,128,128Zm0,0a32,32,0,1,1-32,32,32,32,0,0,1,32-32Zm0,0a32,32,0,1,0,32,32,32,32,0,0,0-32-32Zm0,0a32,32,0,1,0-32-32A32,32,0,0,0,128,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwzfHxkYXRhJTIwYW5hbHlzdCUyMHdvcmtpbmd8ZW58MHx8fHwxNjg2MTg2MzExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    courseCount: 35,
    studentsCount: "200K+",
    rating: 4.9,
    popularCourses: [
      {
        title: "Advanced Data Analysis Techniques",
        rating: 4.9,
        students: 21500
      },
      {
        title: "Business Intelligence & Data Visualization",
        rating: 4.8,
        students: 16800
      },
      {
        title: "Predictive Analytics for Business",
        rating: 4.9,
        students: 14300
      }
    ],
    backgroundColor: "bg-indigo-50",
    accentColor: "text-indigo-600",
    stats: {
      courses: "35+",
      students: "200K+",
      rating: "4.9/5"
    }
  }
];

export default categoriesData;