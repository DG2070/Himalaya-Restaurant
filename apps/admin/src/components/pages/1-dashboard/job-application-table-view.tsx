import { DataTable } from "./job-application-table";
import { jobColumns } from "./job-applications-column";

const jobData = [
  {
    jobId: "J123456",
    firstName: "Alice",
    lastName: "Nguyen",
    email: "alice.nguyen@example.com",
    phoneNumber: "+1-555-321-7890",
    resume: "https://example.com/resumes/alice_nguyen.pdf",
    portfolioUrl: "https://aliceportfolio.dev",
    linkedinUrl: "https://linkedin.com/in/alicenguyen",
    coverLetter:
      "I am excited to apply for this opportunity. With over 5 years of frontend development experience...",
    experience: "5",
    githubUrl: "https://github.com/alicenguyen",
    currentCompany: "TechVerse",
    currentRole: "Frontend Developer",
    createdAt: "2025-04-18T10:30:00Z",
    expectedSalary: "$95,000",
  },
  {
    jobId: "J123457",
    firstName: "Marcus",
    lastName: "Lee",
    email: "marcus.lee@example.com",
    phoneNumber: "+1-555-222-4567",
    resume: "https://example.com/resumes/marcus_lee.pdf",
    portfolioUrl: "https://marcuslee.dev",
    linkedinUrl: "https://linkedin.com/in/marcuslee",
    coverLetter:
      "As a full-stack engineer, I bring a strong passion for scalable backend systems...",
    experience: "7 ",
    githubUrl: "https://github.com/marcuslee",
    currentCompany: "Cloudify",
    currentRole: "Senior Full-Stack Engineer",
    createdAt: "2025-04-18T14:15:00Z",
    expectedSalary: "$120,000",
  },
  {
    jobId: "J123458",
    firstName: "Fatima",
    lastName: "Khan",
    email: "fatima.khan@example.com",
    phoneNumber: "+1-555-789-1234",
    resume: "https://example.com/resumes/fatima_khan.pdf",
    portfolioUrl: "https://fatimakhan.design",
    linkedinUrl: "https://linkedin.com/in/fatimakhan",
    coverLetter:
      "With a strong foundation in UI/UX and a passion for design thinking...",
    experience: "4",
    githubUrl: "https://github.com/fatimakhan",
    currentCompany: "DesignLab",
    currentRole: "UI/UX Designer",
    createdAt: "2025-04-18T09:45:00Z",
    expectedSalary: "$85,000",
  },
];

const JobTableView = () => {
  return (
    <div>
      <DataTable columns={jobColumns} data={jobData} />
    </div>
  );
};

export default JobTableView;
