const workData = [
  {
    id: "1",
    herosection: {
      tags: ["Mobile App", "Desktop Dashboard", "UI Design"],
      title: "End-to-End Design for Mesha’s Data Management Solution",
      footerimage: "/assets/work-hero-footer-image.png",
    },
    ExecutiveSummary:
      "We developed a Flutter-based mobile application that connects via Bluetooth to UPS (Uninterruptible Power Supply) systems, fetching real-time parameters such as voltage, current, temperature, and battery health. This data is pushed to our cloud platform where it is analyzed and used to generate diagnostic reports. The system is used by service engineers and field technicians to instantly identify issues, leading to faster servicing and increased uptime for critical power systems.",
    ClientBackground: {
      type: "1",
      leftImage: "/assets/ClientBackground-left-image.png",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Powering Energy Intelligence",
        description:
          "The client is a power systems manufacturer with a large installed base of UPS units across industries. Their field teams previously relied on manual readings and inconsistent diagnostic methods, which slowed response times and impacted maintenance efficiency.",
        footerContent: [
          {
            title: "Energy Tech",
            description: "Industry",
          },
          {
            title: "2025",
            description: "Year of Implementation",
          },
          {
            title: "8 Months",
            description: "Time to Completion",
          },
          {
            title: "Mesha Energy",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "Solving <span>On-Site</span> Chaos",
      description:
        "Streamlined diagnostics with one tool—faster data, fewer errors, and complete fleet visibility",
      contentSection: {
        icon: "/assets/ProblemStatement-contentSection-icon.png",
        title: "Transforming Field Diagnostics",
        description:
          "Mesha’s field engineers lacked a standardized tool for capturing UPS data, relying on inconsistent, manual diagnostics prone to error. Without a centralized system for reporting or tracking, visibility into fleet performance was limited. This made it difficult to access real-time insights or make proactive, data-driven decisions.",
        rightsideData: [
          {
            id: "1",
            title: "Field engineers lacked a standard tool to collect UPS data",
          },
          {
            id: "2",
            title: "Diagnostics were manual, slow, and prone to errors",
          },
          {
            id: "3",
            title: "There was no centralized system for storing reports",
          },
          {
            id: "4",
            title: "Real-time fleet performance data was unavailable",
          },
          {
            id: "5",
            title: "The team couldn’t use data effectively for decision-making",
          },
        ],
      },
    },
    objectives: {
      title: "Behind the <span>Build</span>",
      description:
        "Building a unified diagnostic ecosystem for a smarter, faster UPS insights",
      realTimeDiagnostics: {
        icon: "/assets/objectives-realTimeDiagnostics-image.png",
        title: "Real-Time Diagnostics",
        description:
          "Access live data including voltage, current, temperature, and more. Get instant insights into the system’s performance right from the field.",
        rightsideimage: "/assets/objectives-realTimeDiagnostics-icons.png",
      },
      upsConnectivity: {
        title: "UPS Connectivity",
        description:
          "Easily pair with any UPS unit via Bluetooth using the mobile app. Collect field data wirelessly without needing extra hardware or manual setup.",
        image: "/assets/objectives-upsConnectivity-image.png",
      },
      smartReports: {
        title: "Smart Reports",
        description:
          "Generate detailed diagnostic reports in seconds. Identify issues quickly with auto-processed insights, reducing human error and saving time.",
        image: "/assets/objectives-smartReports-image.png",
      },
      cloudSync: {
        title: "Cloud Sync",
        icon: "/assets/objectives-cloudSync-icon.png",
        description:
          "Automatically upload diagnostic logs to a centralized cloud. Make data accessible to teams across locations and maintain a secure digital record.",
      },
      unifiedProcess: {
        title: "Unified Process",
        icon: "/assets/objectives-unifiedProcess-icon.png",
        description:
          "Streamline field operations with a standardized diagnostic workflow. One tool for all UPS models—ensuring consistent, reliable data collection.",
      },
    },
    Solution: {
      layout: "1",
      title: "<span>Scalable Diagnostics</span> <br/> Centralized Intelligence",
      description:
        "Robust tools engineered to standardize, automate, and optimize UPS field operations at scale",
      offlineFunctionality: {
        title: "Offline Functionality",
        description:
          "Ensures uninterrupted operation by storing data locally when offline and syncing to cloud once connected.",
        image: "/assets/tsSolution-offlineFunctionality-image.png",
        buttonImage: "/assets/tsSolution-offlineFunctionality-button.png",
      },
      realTimeDiagnostics: {
        title: "Real-Time Diagnostics",
        description:
          "Instantly captures and displays critical data like voltage, current, temperature, and battery cycles.",
        image: "/assets/Solution-realTimeDiagnostics-image.png",
      },
      seamlessBluetoothIntegration: {
        title: "Seamless Bluetooth Integration",
        description:
          "Automatically detects and connects to nearby UPS devices for effortless setup and communication.",
        image: "/assets/Solution-seamlessBluetoothIntegration-image.png",
      },
      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including Flutter, Firebase, GCP, and more.",
        image: "/assets/technologyBackbone-xplorean-ai.png",
      },
      technicianCommandCenter: {
        title: "Technician Command Center",
        description:
          "Offers a streamlined dashboard to track device history, current status, and actionable recommendations.",
        image: "/assets/Solution-technicianCommandCenter-image.png",
      },
      cloudPoweredAnalytics: {
        title: "Cloud-Powered Analytics",
        description:
          "Securely uploads diagnostic data for centralized tracking, analytics, and performance insights.",
        image: "/assets/Solution-cloudPoweredAnalytics-image.png",
      },
      automatedReporting: {
        title: "Automated Reporting",
        description:
          "Generates immediate, detailed reports highlighting faults, anomalies, and performance trends.",
        image: "/assets/Solution-automatedReporting-image.png",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Smart Solutions</span> <br /> for Complex Challenges",
      description:
        "Modular systems and adaptive technologies crafted to streamline UPS diagnostics and performance across all touchpoints",
      challenges: {
        title: "What we were up against",
        points: [
          "Handling diverse UPS firmware protocols across multiple models",
          "Maintaining reliable data sync in low-connectivity environments",
          "Achieving consistent performance across Android and iOS devices",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Developed a modular parser system that dynamically adapts to varying firmware architectures and ensures seamless compatibility",
          "Engineered an offline-first architecture with intelligent retry logic to ensure uninterrupted operations and accurate data capture",
          "Implemented Flutter for a unified codebase, ensuring cross-platform UI consistency and reduced development overhead",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "Where <span>Strategy meets Tangible</span> <br /> Results",
      description:
        "From faster service cycles to smarter diagnostics — here’s how our solutions made measurable impact in the real world",
      metrics: [
        {
          value: "~50%",
          description: "reduction in issue diagnosis time during servicing",
        },
        {
          value: "100%",
          description: "of service visits now generate cloud-logged reports",
        },
        {
          value: "Significant",
          description: "drop in UPS downtime due to faster fault detection",
        },
        {
          value: "~40%",
          description:
            "increased technician efficiency through streamlined workflows",
        },
        {
          value: "Multi-region",
          description:
            "deployment with active usage by technicians across zones",
        },
        {
          value: "Real-time",
          description: "analytics enabling data-driven maintenance decisions",
        },
        {
          value: "24/7",
          description:
            "system visibility enabled through real-time data logging",
        },
        {
          value: "<5 mins",
          description: "average time to generate & sync reports to the cloud",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/work-gallery-image-1.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-2.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-3.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-4.png",
      },
      {
        type: "multiple",
        images: [
          "/assets/work-gallery-image-5.png",
          "/assets/work-gallery-image-6.png",
        ],
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-7.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-8.png",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://example.com/testimonial-video.mp4",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },
  {
    id: "2",
    herosection: {
      tags: ["Mobile App", "UI Design"],
      title:
        "Xplorion AI – Crafting Seamless, AI-Powered Travel Itineraries with Smart Personalization",
      footerimage: "/assets/Xplorion AI-hero-footer-image.png",
    },
    ExecutiveSummary:
      "We partnered with Xplorion AI to design and develop a smart travel planning application that reimagines how itineraries are created. By leveraging real-time data from Google—reviews, photos, open hours, and directions—we built an intuitive system that delivers hyper-personalized, day-wise travel plans tailored to each user’s preferences. Our goal was to eliminate the complexity of trip planning and replace it with a seamless, AI-driven experience that feels effortless, insightful, and globally scalable.",
    ClientBackground: {
      type: "2",
      leftImage: "/assets/Xplorion AI client-backgournd-let-image-1.png",
      leftImage2: "/assets/Xplorion AI client-backgournd-let-image-2.png",
      rightContent: {
        topIcon: "/assets/ClientBackground-right-top-icon.png",
        title: "Personalizing Exploration Through AI",
        description:
          "Xplorion AI is a travel-tech startup built for modern explorers who value speed, flexibility, and personalization. The vision: eliminate planning hassles by delivering real-time, AI-powered itineraries tailored to each traveler’s interests and location.",
        footerContent: [
          {
            title: "Travel & AI",
            description: "Industry",
          },
          {
            title: "2024",
            description: "Year of Implementation",
          },
          {
            title: "8 Months",
            description: "Time to Completion",
          },
          {
            title: "Xplorion AI",
            description: "Client",
          },
        ],
      },
    },

    ProblemStatement: {
      title: "<span>Fixing the</span> Travel Planning <span>Mess</span>",
      description:
        "We replaced scattered tabs and generic plans with one smart solution, personalized, real-time itineraries made effortless",
      contentSection: {
        icon: "/assets/ProblemStatement-contentSection-icon-2.png",
        title: "Reimagining Travel Planning",
        description:
          "Modern travelers often face a fragmented, time-consuming planning experience. With endless tabs, scattered data, and generic recommendations, building a meaningful, personalized itinerary becomes a challenge. Xplorion set out to solve this by creating a smarter way to explore — one that’s fast, personal, and powered by real-time data.",
        rightsideData: [
          {
            id: "1",
            title:
              "Travelers spent hours manually researching destinations and planning each day",
          },
          {
            id: "2",
            title:
              "Itineraries lacked personalization and often missed offbeat or relevant spots",
          },
          {
            id: "3",
            title:
              "Live data like timings, reviews, and directions were scattered across platforms",
          },
          {
            id: "4",
            title:
              "No single tool offered a dynamic, all-in-one planning experience",
          },
          {
            id: "5",
            title:
              "There was no AI-powered solution to align plans with real-time user preferences",
          },
        ],
      },
    },
    objectives: {
      title: "Behind the <span>Journey</span> ",
      description:
        "Creating an AI-first travel experience that feels personal, seamless, and endlessly spontaneous",
      realTimeDiagnostics: {
        icon: "/assets/objectives-realTimeDiagnostics-image-2.png",
        title: "Automate Itinerary Creation",
        description:
          "Design a mobile experience that intelligently builds day-wise travel plans based on user preferences, travel dates, and interests.",
        rightsideimage: "/assets/Xplorion App ss  objectives.png",
      },
      upsConnectivity: {
        title: "Enable Dynamic Updates",
        description:
          "Ensure the app can adapt to changes in timing, availability, and other variables without requiring manual user intervention.",
        image: "/assets/Dynamic updates - objectives.png",
      },
      smartReports: {
        title: "Integrate Real-Time Context ",
        description:
          "Fetch and display live data like open hours, reviews, photos, and directions using Google integrations to ensure relevance and accuracy.",
        image: "/assets/xplorean-objectives-realtime-content.png",
      },
      cloudSync: {
        title: "Simplify Trip Planning",
        icon: "/assets/objectives-cloudSync-icon-2.png",
        description:
          "Reduce planning complexity by offering an intuitive, all-in-one interface that replaces multiple browser tabs and note-taking.",
      },
      unifiedProcess: {
        title: "Design Meets Function",
        icon: "/assets/objectives-unifiedProcess-icon-2.png",
        description:
          "Craft a visually engaging interface that’s as easy to use as it is delightful, blending personalization with smooth usability.",
      },
    },
    Solution: {
      layout: "2",
      title: "<span>Personalized Journeys</span> <br/> Tailored by AI",
      description:
        "An intelligent solution that transforms preferences into real time, personalized itineraries—effortlessly",
      offlineFunctionality: {
        title: "AI-Based Interest Detection",
        description:
          "Learns what you love through intuitive onboarding, tailoring every trip to your unique interests.",
        image: "/assets/xplorean-solution-image-1.png",
        buttonImage: "/assets/tsSolution-offlineFunctionality-button.png",
      },
      realTimeDiagnostics: {
        title: "Live Data Integration",
        description:
          "Pulls real-time data — like reviews, timings, and images, via Google APIs for context-aware recommendations.",
        image: "/assets/xplorean-solution-image-2.png",
      },

      technologyBackbone: {
        title: "Technology Backbone",
        description:
          "Built using a powerful tech stack including Flutter, Firebase,  Node.js and more.",
        image: "/assets/Tech stack - in xplorean ai.png",
      },

      seamlessBluetoothIntegration: {
        title: "Mapped to Move",
        description:
          "Visualize your entire journey at a glance—each stop marked, ordered, and clickable for quick access to rich place details.",
        image: "/assets/technologyBackbone-xplorean-ai-2.png",
      },

      technicianCommandCenter: {
        title: "Dynamic Itinerary Builder",
        description:
          "Creates optimized, day-wise plans based on your selected locations, pace, and priorities.",
        image: "/assets/xplorean ai -       technicianCommandCenter.png",
      },
      cloudPoweredAnalytics: {
        title: "Multi-Day Planning",
        description:
          "Plan trips across multiple days with structured timelines, grouped stops & seamless navigation.",
        image: "/assets/xplorean ai - cloudPoweredAnalytics.png",
      },
      automatedReporting: {
        title: "Directions & Map Integration",
        description:
          "Offers navigation & live previews, making it easy to get around without switching apps.",
        image: "/assets/xplorean ai - automatedReporting.png",
      },

      SaveandEditPlans: {
        title: "Save & Edit Plans",
        description:
          "Easily bookmark, customize, or reshuffle your itinerary on the go—flexible travel made simple.",
        image: "/assets/xplorean ai - SaveandEditPlans.png",
      },
    },

    ChallengesandResolutions: {
      title: "<span>Smart Solutions</span> <br /> for Complex Challenges",
      description:
        "Modular systems and adaptive technologies crafted to streamline UPS diagnostics and performance across all touchpoints",
      challenges: {
        title: "What we were up against",
        points: [
          "Handling diverse UPS firmware protocols across multiple models",
          "Maintaining reliable data sync in low-connectivity environments",
          "Achieving consistent performance across Android and iOS devices",
        ],
        image: "/assets/ChallengesandResolutions-right-side-image.png",
      },
      solutions: {
        title: "How we engineered the fix",
        points: [
          "Developed a modular parser system that dynamically adapts to varying firmware architectures and ensures seamless compatibility",
          "Engineered an offline-first architecture with intelligent retry logic to ensure uninterrupted operations and accurate data capture",
          "Implemented Flutter for a unified codebase, ensuring cross-platform UI consistency and reduced development overhead",
        ],
        image: "/assets/Solution-ChallengesandResolutions-right-side-image.svg",
      },
    },
    Results: {
      title: "Where <span>Strategy meets Tangible</span> <br /> Results",
      description:
        "From faster service cycles to smarter diagnostics — here’s how our solutions made measurable impact in the real world",
      metrics: [
        {
          value: "~50%",
          description: "reduction in issue diagnosis time during servicing",
        },
        {
          value: "100%",
          description: "of service visits now generate cloud-logged reports",
        },
        {
          value: "Significant",
          description: "drop in UPS downtime due to faster fault detection",
        },
        {
          value: "~40%",
          description:
            "increased technician efficiency through streamlined workflows",
        },
        {
          value: "Multi-region",
          description:
            "deployment with active usage by technicians across zones",
        },
        {
          value: "Real-time",
          description: "analytics enabling data-driven maintenance decisions",
        },
        {
          value: "24/7",
          description:
            "system visibility enabled through real-time data logging",
        },
        {
          value: "<5 mins",
          description: "average time to generate & sync reports to the cloud",
        },
      ],
    },
    gallery: [
      {
        type: "single",
        image: "/assets/work-gallery-image-1.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-2.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-3.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-4.png",
      },
      {
        type: "multiple",
        images: [
          "/assets/work-gallery-image-5.png",
          "/assets/work-gallery-image-6.png",
        ],
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-7.png",
      },
      {
        type: "single",
        image: "/assets/work-gallery-image-8.png",
      },
    ],
    testimonials: [
      {
        leftVideo: "https://example.com/testimonial-video.mp4",
        rightContent: {
          title: "Naren Nagaraj",
          description:
            "Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.",
          details: "Founder, CEO  • Naren Electrix ",
        },
      },
    ],
  },
];

export default workData;
