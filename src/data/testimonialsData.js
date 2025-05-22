const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    photo: "https://images.unsplash.com/photo-1608533240306-9bf2a56958c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "SkillUp Academy's Frontend Development course transformed my entire career trajectory. Having struggled with self-teaching for years, their structured curriculum and mentor-guided projects gave me exactly what I needed. Within three months of graduating, I landed my dream job with a 75% salary increase. The investment in this course has paid for itself many times over.",
    course: "Frontend Web Development Bootcamp",
    outcome: "Career changed from Marketing to Frontend Development",
    rating: 5,
    dateCompleted: "2023-09-15",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahj-dev"
    },
    metrics: {
      salaryIncrease: "75%",
      timeToJob: "3 months"
    },
    companyLogo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "DataMetrics Inc",
    location: "Boston, MA",
    photo: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "After hitting a career plateau in my analytics role, SkillUp Academy's Data Science program gave me the edge I needed to advance. The instructors were industry veterans who taught practical skills I could immediately apply. Their career coaching and networking events were invaluable—I interviewed with three companies and received offers from all of them! Now I'm earning 85% more and working on machine learning projects I'm genuinely passionate about.",
    course: "Data Science & Analytics Program",
    outcome: "Secured position at leading data analytics firm",
    rating: 4.9,
    dateCompleted: "2023-08-20",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/mchen-data"
    },
    metrics: {
      salaryIncrease: "85%",
      timeToJob: "2 months"
    },
    companyLogo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Miami, FL",
    photo: "https://images.unsplash.com/photo-1437913135140-944c1ee62782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "As a graphic designer wanting to pivot to UX/UI, I was struggling to make the transition until I found SkillUp Academy. Their UX/UI bootcamp focused on building a competitive portfolio through real client projects. The career transition support was exceptional—they helped revamp my resume, improve my interview skills, and connect me with hiring managers. I'm now leading my own design team and earning 60% more than before.",
    course: "UX/UI Design Bootcamp",
    outcome: "Promoted to Senior Designer within 6 months",
    rating: 5,
    dateCompleted: "2023-10-01",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/emilyrod",
      behance: "https://behance.net/emilydesigns"
    },
    metrics: {
      salaryIncrease: "60%",
      timeToJob: "1 month"
    },
    companyLogo: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: false
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Full Stack Developer",
    company: "TechStartup",
    location: "Austin, TX",
    photo: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "I was stuck in a dead-end IT support role before joining SkillUp Academy's Full Stack program. Despite having no prior coding experience, their step-by-step curriculum built my confidence from day one. The hands-on projects gave me real-world experience that impressed interviewers. I'm now developing apps that impact thousands of users, and I've nearly doubled my previous salary. This program literally changed the trajectory of my life.",
    course: "Full Stack Web Development",
    outcome: "Launched successful tech startup",
    rating: 4.8,
    dateCompleted: "2023-07-15",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jwilson-dev"
    },
    metrics: {
      salaryIncrease: "90%",
      timeToJob: "Immediate"
    },
    companyLogo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: false
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Cloud Solutions Architect",
    company: "CloudTech Solutions",
    location: "Seattle, WA",
    photo: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "With just a basic IT background, I was hesitant about pursuing a cloud architect role. SkillUp Academy's Cloud Computing program systematically built my AWS and Azure expertise while emphasizing real-world architecture scenarios. The certifications I earned through the program were crucial in landing interviews, but it was the practical experience that set me apart from other candidates. I've literally doubled my income and now lead cloud migration projects for major clients.",
    course: "Cloud Computing Certification",
    outcome: "Doubled previous salary",
    rating: 5,
    dateCompleted: "2023-11-10",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/priyapatel",
      twitter: "https://twitter.com/priya_cloud"
    },
    metrics: {
      salaryIncrease: "100%",
      timeToJob: "2 months"
    },
    companyLogo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true
  },
  {
    id: 6,
    name: "David Kim",
    role: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Chicago, IL",
    photo: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "Transitioning from general IT support to cybersecurity seemed impossible without years of experience. SkillUp Academy's Cybersecurity program provided the perfect bridge, combining theoretical knowledge with practical lab exercises that simulated real-world threats. Their industry partnerships meant I was solving actual security challenges, not just textbook examples. I passed multiple security certifications and received three job offers before even completing the program.",
    course: "Cybersecurity Professional Certification",
    outcome: "Transitioned from IT Support to Cybersecurity",
    rating: 4.9,
    dateCompleted: "2023-06-30",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/dkim-security"
    },
    metrics: {
      salaryIncrease: "70%",
      timeToJob: "3 months"
    },
    companyLogo: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: false
  },
  {
    id: 7,
    name: "Aisha Williams",
    role: "Product Manager",
    company: "InnovateX",
    location: "New York, NY",
    photo: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "Coming from a non-technical marketing background, I was intimidated by product management roles in tech companies. SkillUp Academy's Product Management course demystified technical concepts and taught me how to effectively communicate between business and development teams. Their focus on agile methodologies and data-driven decision making has been invaluable in my new role. I now confidently lead product teams at a top tech company.",
    course: "Product Management Intensive",
    outcome: "Achieved career change from Marketing to Product Management",
    rating: 5,
    dateCompleted: "2023-09-05",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/aishawilliams",
      twitter: "https://twitter.com/aisha_product"
    },
    metrics: {
      salaryIncrease: "65%",
      timeToJob: "2 months"
    },
    companyLogo: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: false
  },
  {
    id: 8,
    name: "Raj Patel",
    role: "DevOps Engineer",
    company: "CloudInfra Technologies",
    location: "Toronto, Canada",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "The DevOps Engineering program at SkillUp Academy bridges the gap perfectly between development and operations. Their practical approach to teaching CI/CD pipelines, infrastructure as code, and cloud services prepared me for real-world challenges. The instructors come from industry giants and bring relevant experience to every lesson. I implemented what I learned to automate my team's deployment process, cutting release time by 70%!",
    course: "DevOps Engineering Certification",
    outcome: "Secured remote position with 80% salary increase",
    rating: 4.9,
    dateCompleted: "2023-10-20",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/rajpatel",
      github: "https://github.com/raj-devops"
    },
    metrics: {
      salaryIncrease: "80%",
      timeToJob: "1 month"
    },
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true
  },
  {
    id: 9,
    name: "Alex Morgan",
    role: "Frontend Developer",
    company: "WebSolutions Inc",
    location: "Portland, OR",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: "SkillUp Academy's Frontend Development course transformed my entire career trajectory. Having struggled with self-teaching for years, their structured curriculum and mentor-guided projects gave me exactly what I needed. Within three months of graduating, I landed my dream job with a 75% salary increase. The investment in this course has paid for itself many times over.",
    course: "Advanced Frontend Development",
    outcome: "Transitioned from graphic design to frontend development",
    rating: 5,
    dateCompleted: "2023-12-05",
    verifiedStudent: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexmorgan",
      github: "https://github.com/alex-frontend"
    },
    metrics: {
      salaryIncrease: "75%",
      timeToJob: "3 months"
    },
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    featured: true
  }
];

export default testimonialsData;