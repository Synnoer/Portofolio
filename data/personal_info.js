

export const personalInfo = [{
    term: "Name",
    description: "Dimas Arya Nurhakim"
},
{
    term: "Email",
    description: "dimas.yans338@gmail.com",
    href: "mailto:dimas.yans338@gmail.com"
},
{
    term: "Location",
    description: "Bandung, Indonesia"
},
{
    term: "Available",
    description: "Full-time / Part-time / Freelance"
},
];

export const skills = [
    {
        category: "Languages & Databases",
        items: [
            {
                name: "Python",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
                name: "SQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg"
            },
            {
                name: "PostgreSQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            }
        ],
    },
    {
        category: "ML & Data Science",
        items: [
            {
                name: "TensorFlow",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
            },
            {
                name: "PyTorch",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
            },
            {
                name: "LangChain",
                icon: "/icons/langchain.svg" // Added to reflect your core microservices work
            },
            {
                name: "Scikit-learn",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
            },
            {
                name: "Pandas",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
            },
            {
                name: "NumPy",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
            },
        ],
    },
    {
        category: "MLOps & Data Engineering",
        items: [
            {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            },
            {
                name: "FastAPI", // Moved here to emphasize model deployment & microservices
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
            },
            {
                name: "MLflow",
                icon: "/icons/mlflow.svg"
            },
            {
                name: "AWS Sagemaker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            },
            {
                name: "Streamlit",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg"
            },
        ],
    },
    {
        category: "Web & Tools",
        items: [
            {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            },
            {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            },
            {
                name: "Git",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            }
        ],
    },
];

export const contactInfo = [
    {
        name: "Phone",
        value: "+62 896 7016 9478",
        href: "tel:+6289670169478",
        icon: (props) => (
            <svg {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
        ),
    },
    {
        name: "Email",
        value: "dimas.yans338@gmail.com",
        href: "mailto:dimas.yans338@gmail.com",
        icon: (props) => (
            <svg {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
        ),
    },
    {
        name: "Location",
        value: "Bandung, Indonesia",
        href: "https://www.google.com/maps/place/Bandung,+Bandung+City,+West+Java",
        icon: (props) => (
            <svg {...props}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        ),
    },
];

export const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/Synnoer",
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/dimas-noer/",
        Icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    },
];