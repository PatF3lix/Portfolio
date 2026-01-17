const projectsData = [
  {
  "id": 1,
  "name": "Natours",
  "Description": "Natours is a pure frontend landing page project built with HTML5, SASS, and modern CSS layout techniques. It demonstrates a scalable SASS architecture using partials for abstracts, base, components, and layouts, with a focus on clean UI, animations, and responsive design.",
  "github": "https://github.com/PatF3lix/Natour-Project-Front-End",
  "url": "",
  "image": "natours.jpg",
  "features": [
    {
      "id": 1,
      "text": "Fully Responsive Layout: Designed to adapt seamlessly to mobile, tablet, and desktop screens, providing an optimal viewing experience.",
    },
    {
      "id": 2,
      "text": "Advanced CSS Animations and Transitions: Smooth, eye-catching effects throughout the landing page.",
    },
    {
      "id": 3,
      "text": "Modern Layout Techniques: Built with Flexbox and CSS Grid for clean and efficient structure.",
    },
    {
      "id": 4,
      "text": "Reusable SASS Components: Organized partials and modular architecture for easy scalability.",
    },
    {
      "id": 5,
      "text": "CSS-only Navigation and Popup Modal: Interactive elements without any JavaScript dependency.",
    },
    {
      "id": 6,
      "text": "Background Video Section and Card-based UI: Engaging visual sections and modern card layouts.",
    }
  ]
  },
    {
    id: 2,
    name: "Python Hacking Tools Collection",
    Description:
      "A collection of small Python-based hacking and network security tools built strictly for educational purposes. This project demonstrates fundamental concepts used in ethical hacking, penetration testing, and cybersecurity research, providing hands-on learning of security principles and common attack vectors in controlled environments.",
    github: "https://github.com/PatF3lix/Python-Hacking",
    "url": "",
    image: "python-hacking-tools.jpg",
    features: [
      {
        id: 1,
        text: "ARP Spoofing & Detection: Includes tools for performing ARP spoofing attacks and detecting ARP poisoning attempts on local networks."
      },
      {
        id: 2,
        text: "Network Scanning & Monitoring: Scans networks for active devices, captures packets, and analyzes network traffic using packet sniffing techniques."
      },
      {
        id: 3,
        text: "DNS & HTTPS Manipulation: Demonstrates DNS spoofing and SSL/TLS certificate pinning bypass techniques for educational analysis."
      },
      {
        id: 4,
        text: "Input & System Control Tools: Simulates keyboard input, injects code into running processes, and monitors file system activity."
      },
      {
        id: 5,
        text: "Credential & Data Capture Concepts: Includes keylogging and file interception tools to demonstrate common data capture techniques."
      },
      {
        id: 6,
        text: "MAC Address & Network Control: Allows changing MAC addresses and cutting network connections within a local environment."
      },
      {
        id: 7,
        text: "Reverse Access Demonstrations: Implements a reverse shell backdoor to illustrate how attackers gain remote access (educational use only)."
      },
      {
        id: 8,
        text: "Ethical Hacking Focus & Disclaimer: Designed strictly for learning and experimentation in legal, permission-based environments."
      }
    ]
  },
  {
    "id": 3,
    "name": "Gang of Four Design Patterns in Java",
    "Description": "A Java repository demonstrating core Gang of Four (GoF) design patterns, both creational, structural, and behavioral. This project helps developers understand object-oriented design principles and apply design patterns effectively in real-world Java applications. Completed as part of a Java Design Patterns course on Udemy.",
    "github": "https://github.com/PatF3lix/Design-Patterns",
    "url": "",
    "image": "design-patterns-java.jpg",
    "features": [
      {
        "id": 1,
        "text": "Core Design Principles: Covers Delegation, Dependency Injection, Liskov Substitution, Open/Closed, Single Responsibility, and Programming to Interface."
      },
      {
        "id": 2,
        "text": "Creational Patterns: Implements Builder, Factory, Prototype, and Singleton patterns to manage object creation effectively."
      },
      {
        "id": 3,
        "text": "Structural Patterns: Demonstrates Adapter, Bridge, Composite, Decorator, Façade, Flyweight, and Proxy patterns to manage object composition and relationships."
      },
      {
        "id": 4,
        "text": "Behavioral Patterns: Includes Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, and Visitor patterns to manage object behavior and interactions."
      }
    ]
  },
  {
    "id": 4,
    "name": "Ticket Sale Microservices",
    "Description": "A ticket sale application built using a microservices architecture with Node.js, TypeScript, and Kubernetes. The project includes multiple services such as authentication, ticket management, orders, payments, and expiration, providing a scalable and maintainable system for managing ticket sales.",
    "github": "https://github.com/PatF3lix/Ticketing",
    "url": "",
    "image": "ticket-sale-microservices.jpg",
    "features": [
    {
      "id": 1,
      "text": "Authentication Service: Handles secure user registration, login, and authentication, ensuring only authorized clients can access the system."
    },
    {
      "id": 2,
      "text": "Tickets Service: Manages available tickets, tracks inventory, and provides detailed ticket information to ensure accurate and seamless ticket management."
    },
    {
      "id": 3,
      "text": "Orders Service: Handles ticket order creation, processing, and management, keeping track of all purchases efficiently and reliably."
    },
    {
      "id": 4,
      "text": "Payments Service: Processes all ticket payments efficiently and securely, supporting multiple payment methods and ensuring transaction reliability."
    },
    {
      "id": 5,
      "text": "Expiration Service: Monitors and manages ticket expiration times, automatically enforcing rules to maintain system integrity and prevent misuse."
    },
    {
      "id": 6,
      "text": "Client Interface: Provides a user-friendly frontend interface for users to browse tickets, place orders, and interact with the ticketing system smoothly."
    },
    {
      "id": 7,
      "text": "Kubernetes Deployment: Ensures scalable and reliable local development and deployment using Kubernetes and Skaffold for a consistent environment."
    }
    ]
  }

];

export default projectsData;
