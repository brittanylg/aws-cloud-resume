const data = {
  bio: {
    name: 'Brittany Grant',
    title: 'DevOps Engineer',
    intro: 'Highly motivated and detail-oriented Web Developer of 5 years transitioning to a more operations-specific career path. Over 2 years of experience as a DevOps Engineer monitoring, maintaining, automating, and optimizing infrastructure on AWS. Knowledgeable of configuration management, source control, and infrastructure as code principles.',
  },
  contactInfo: {
    location: 'Maryland, USA',
    timeZone: 'Eastern Time Zone (UTC-5)',
    email: 'brittanylgrant00@gmail.com',
    linkedin: 'https://linkedin.com/in/brittanylg',
    github: 'https://github.com/brittanylg',
  },
  experience: [
    {
      company: 'D3 Corp',
      location: 'Ocean City, Maryland',
      positions: [
        {
          title: 'DevOps Engineer',
          dates: 'January 2020 - Present',
          duties: [
            'Deployed containerized web applications to AWS infrastructure provisioned using Terraform.',
            'Monitored infrastructure and mitigated vulnerabilities for maximum uptime.',
            'Collaborated with systems administrators to improve engineering tools, development procedures, and Ansible configurations.',
            'Performed periodic audits of AWS infrastructure and optimized services to lower company costs.',
          ],
          skills: [
            'AWS (EC2, RDS, Route53, S3, IAM)', 
            'Ubuntu Linux Server Administration (apache, nginx, ssh)', 
            'Ansible', 
            'Docker', 
            'Terraform', 
            'GitLab Administration', 
            'CI/CD (GitLab CI)', 
            'Grafana',
            'Bash',
          ],
        },
        {
          title: 'Team Lead',
          dates: 'August 2019 - December 2019',
          duties: [
            'Organized and mediated monthly department meetings as well as daily morning stand-ups within the development department.',
            'Communicated with project managers and client support team to prioritize department worklists and delegated tasks as needed.',
            'Collaborated with the Development Director on a variety of standards and procedures to be implemented within the department.',
          ],
          skills: [
            'People Management', 
            'Time Management', 
            'Procedural Writing',
          ],
        },
        {
          title: 'Web Developer',
          dates: 'June 2016 - February 2021',
          duties: [
            'Developed and maintained fully responsive websites using WordPress and in-house CMS platforms.',
            'Adhered to SEO and accessibility standards to improve and maintain client search rankings.',
            'Utilized code versioning tools and continuous deployment strategies to develop and maintain client websites.',
            'Assisted in training and onboarding junior employees and new hires.',
            'Wrote and maintained training documentation for technical and non-technical staff',
          ],
          skills: [
            'Git', 
            'HTML', 
            'CSS', 
            'JavaScript', 
            'PHP', 
            'Laravel', 
            'WordPress', 
            'Shopify',
          ],
        },
      ]
    },
  ]
}

export default data;