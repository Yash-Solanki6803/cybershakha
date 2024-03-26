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
};
