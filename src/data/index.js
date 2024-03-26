import {
  icon_policemen,
  icon_lock,
  compliant,
  icon_training,
  icon_threat,
  protection,
  scan_virus,
  icon_service,
  casino_cctv,
  response_plan,
} from "@/../public/icons";
//exporting all the data in form of JSON

export const data = {
  categories: [
    {
      id: "1",
      name: "Cybersecurity",
    },
    {
      id: "2",
      name: "Data Privacy",
    },
    {
      id: "3",
      name: "Cyber Threats",
    },
    {
      id: "4",
      name: "Cyber Laws",
    },
    {
      id: "5",
      name: "Cyber Insurance",
    },
    {
      id: "6",
      name: "Cyber Careers",
    },
  ],
  services: [
    {
      src: icon_lock,
      title: "Cyber security Assessment ",
    },
    {
      src: icon_policemen,
      title: "Intrusion Detection and Prevention",
    },
    {
      src: compliant,
      title: "Incident Response and Recovery",
    },
    {
      src: icon_training,
      title: "Cyber security Assessment ",
    },
    {
      src: icon_threat,
      title: "Intrusion Detection and Prevention",
    },
    {
      src: casino_cctv,
      title: "Incident Response and Recovery",
    },
    {
      src: protection,
      title: "Cyber security Assessment ",
    },
    {
      src: scan_virus,
      title: "Intrusion Detection and Prevention",
    },
    {
      src: icon_service,
      title: "Incident Response and Recovery",
    },
  ],
  defaultServices: [
    {
      src: icon_lock,
      title: "Cyber security Assessment ",
      description:
        "Identify and mitigate vulnerabilities in your digital infrastructure with our comprehensive penetration testing services.",
    },
    {
      src: casino_cctv,
      title: "Intrusion Detection and Prevention",
      description:
        "Ensure the robustness of your digital security with our comprehensive security audits and assessments.",
    },
    {
      src: response_plan,
      title: "Incident Response and Recovery",
      description:
        "Empower your team with the knowledge and skills to navigate the digital landscape securely.",
    },
  ],
  resources: [
    {
      title: "Robust Threat Detection",
      description:
        "Employ cutting-edge technologies to detect and mitigate evolving cyber threats, safeguarding clients' digital assets.",
    },
    {
      title: "Client-Centric Security Solutions",
      description:
        "Prioritize customer needs by delivering customized cybersecurity solutions that ensure resilience and compliance in diverse business environments.",
    },
    {
      title: "Global Compliance Assurance",
      description:
        "Strive for continuous compliance with international cybersecurity standards, ensuring the highest level of data protection and regulatory adherence.",
    },
    {
      title: "Cybersecurity Education Hub",
      description:
        "Foster a culture of awareness and knowledge by providing educational resources to clients, empowering them to navigate the dynamic cybersecurity landscape.",
    },
    {
      title: "Rapid Incident Response",
      description:
        "Guarantee swift and effective response to security incidents, minimizing downtime and preserving the integrity of digital infrastructures.",
    },
    {
      title: "Innovation in Security Solutions",
      description:
        "Drive innovation in cybersecurity by researching and implementing state-of-the-art technologies, staying ahead of emerging threats in the digital landscape.",
    },
    {
      title: "Ethical Hacking Advocacy",
      description:
        "Promote ethical hacking practices and collaborate with the cybersecurity community to strengthen defenses and uncover vulnerabilities before malicious actors do.",
    },
    {
      title: "Continuous Security Monitoring",
      description:
        "Establish 24/7 security monitoring systems to proactively identify and address potential risks, ensuring real-time protection for our clients.",
    },
    {
      title: "Cyber Resilience Workshops",
      description:
        "Conduct workshops to enhance organizational cyber resilience, empowering employees with the knowledge and skills to fortify the human element of cybersecurity.",
    },
  ],
};
