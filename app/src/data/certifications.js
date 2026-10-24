import awsImage from '../assets/Images/AWS certificate.png';
import oneStopImage from '../assets/Images/1stop Certificate.png';
import anthropicImage from '../assets/Images/Anthropic Certificate.png';
import ibmImage from '../assets/Images/IBM Certification.png';
import infexialImage from '../assets/Images/Infexial Certificate.png';
import microsoftImage from '../assets/Images/Microsoft Certificate.png';
import udemyImage from '../assets/Images/Udemy Certificate.png';

/**
 * Resume entries keep their existing names and dates.
 * An image is attached only when its printed title, issuer, recipient, and date
 * match that entry. IBM and Anthropic are added from the printed certificates.
 */
export const certifications = [
  {
    id: 'microsoft-gen-ai',
    name: 'Microsoft Generative AI',
    date: 'January 2025',
    image: microsoftImage,
    imageAlt:
      'LinkedIn Learning and Microsoft certificate for Career Essentials in Generative AI, completed by Chinmay Mathur on January 25, 2025',
  },
  {
    id: 'aws-ccp',
    name: 'AWS Cloud Practitioner',
    date: 'January 2025',
    image: awsImage,
    imageAlt:
      'AWS Training and Certification certificate of completion for AWS Cloud Practitioner Essentials, awarded to Chinmay Mathur on January 13, 2025',
  },
  {
    id: 'ethical-hacking',
    name: 'Ethical Hacking, Infexial',
    date: 'August 2023',
    image: infexialImage,
    imageAlt:
      'Infexial Software Solutions and AICTE certificate of internship in Ethical Hacking, presented to Chinmay Mathur for May–August 2023',
  },
  {
    id: 'algorithms',
    name: 'Algorithms Design Techniques, Udemy',
    date: 'November 2023',
    image: udemyImage,
    imageAlt:
      'Udemy certificate of completion for Algorithm Design Techniques From beginner to advanced (DAA), awarded to Chinmay Mathur on November 22, 2023',
  },
  {
    id: 'ai-1stop',
    name: 'Artificial Intelligence, 1stop',
    date: 'August 2022',
    image: oneStopImage,
    imageAlt:
      '1stop and Techniche IIT Guwahati certificate of participation in Artificial Intelligence, awarded to Chinmay Mathur on August 16, 2022',
  },
  {
    id: 'ibm-applied-data-science',
    name: 'Applied Data Science with Python, IBM Skills Network',
    date: 'October 22, 2026',
    image: ibmImage,
    imageAlt:
      'Cognitive Class certificate for the Applied Data Science with Python learning path, powered by IBM Skills Network, issued to Chinmay Mathur on October 22, 2026',
  },
  {
    id: 'anthropic-claude-code',
    name: 'Claude Code 101, Anthropic',
    date: 'April 23, 2026',
    image: anthropicImage,
    imageAlt:
      'Anthropic certificate of completion for Claude Code 101, issued to Chinmay Mathur on April 23, 2026',
  },
];
