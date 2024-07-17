import { NextResponse } from 'next/server';

const works = [
  {
    "empresa": "Revenue river",
    "rol": "Full Stack Developer",
    "stack": ["ReactJS", "Ruby on Rails", "Tailwind", "Bootstrap", "Typescript", "React router", "Hasura", "GraphQl"],
    "periodo": "2021-2024",
    "client": "INSTRUMENTAL - US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Baires",
    "rol": "Full Stack Developer",
    "stack": ["ReactJS", "Ruby on Rails", "Tailwind", "Bootstrap", "Typescript"],
    "periodo": "2020-2021",
    "client": "Baires - US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Asymm",
    "rol": "Full Stack Developer",
    "stack": ["ReactJS", "Ruby on Rails", "Tailwind", "Bootstrap", "Typescript", "React router", "Hasura", "GraphQl", "Docker", "Kubernets"],
    "periodo": "2021-2022",
    "client": "ASYMM - US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Delart",
    "rol": "Full Stack Developer",
    "stack": ["ReactJS", "Tailwind", "React router", "Hasura", "GraphQl"],
    "periodo": "2021",
    "client": "DRESSLER - US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Rings.io",
    "rol": "Frontend Developer",
    "stack": ["ReactJS", "Tailwind", "Salesforce API"],
    "periodo": "2021",
    "client": "SCREEN IT - Mexico Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Ford Motors Company US",
    "rol": "Frontend Developer",
    "stack": ["ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2021",
    "client": "US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "INNOCEAN México",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2021",
    "client": "US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Instituto Mexicano del Cemento y del Concreto A.C",
    "rol": "Full Stack Developer",
    "stack": ["ReactJS", "Tailwind", "React router", "Hasura", "GraphQl"],
    "periodo": "2011 - 2024",
    "client": "Mexico Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "Gobierno de la Ciudad de México - ADIP",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2020",
    "client": "Mexico Government",
    "responsabilidades": [
      "Responsible of database architecture",
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "THRIVE MARKET",
    "rol": "Frontend Developer",
    "stack": ["NextJS"],
    "periodo": "2020",
    "client": "US Based Company",
    "responsabilidades": [
      "Responsible of database architecture",
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "TRYBU",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "Wordpress", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2020-2022",
    "client": "US Based Company",
    "responsabilidades": [
      "Responsible of database architecture",
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "PASSUR",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "Wordpress", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2020",
    "client": "US Based Company",
    "responsabilidades": [
      "Responsible of database architecture",
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS",
      "Full Stack Development with React-Redux in multiple APP’s"
    ]
  },
  {
    "empresa": "AMGG",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "Wordpress", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2020",
    "client": "Asociación Mexicana de Gerontología y Geriatría",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS"
    ]
  },
  {
    "empresa": "MUNICIPIO DE COATZINTLA",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "Wordpress", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2020",
    "client": "Gobierno de la Veracruz",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS"
    ]
  },
  {
    "empresa": "SHINHAN BANK MÉXICO",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "Wordpress", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2015 - 2021",
    "client": "Asociación Mexicana de Gerontología y Geriatría",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS"
    ]
  },
  {
    "empresa": "BHUVI IT SOLUTIONS",
    "rol": "Full Stack Developer",
    "stack": ["PHP", "MySQL", "Wordpress", "ReactJS", "Bootstrap", "React router", "Salesforce API"],
    "periodo": "2016 - 2017",
    "client": "US Based Company",
    "responsabilidades": [
      "Involved in documentation of the architecture and configuration details",
      "Migrated existing systems to AWS using EC2 instances, auto-scaling, created VPN's, Security Groups, configuring a Load Balancers and creation of CloudFormation automation scripts",
      "Co-ordinate with UX designers and develop static content using front end with HTML 5, CSS3 and React/Angular JS"
    ]
  }
];
 
export async function GET(request: Request) {
  return NextResponse.json({ msg: works })
}