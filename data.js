// Datos de los proyectos
const projects = [
    {
        id: 'pancha-revancha',
        title: 'Pancha Revancha',
        subtitle: 'Full Stack Dev + Design (2024)',
        image: 'images/pancha_revancha.png',
        detailImage: 'images/pancha_revanncha_detail.png',
        objective: 'Build an intuitive platform that makes it easy for individuals to buy and sell used clothing online, with a focus on accessibility, speed, and user trust.',
        segment: 'Second-hand clothing market – mainly individual sellers and buyers (not wholesalers), with a special emphasis on children\'s apparel sold by the piece.',
        role: 'I led the project as both Product Designer and Full-Stack Developer, overseeing the product vision, interface design, technical implementation, and iterative testing.',
        about: 'This project was inspired by the observation that many people, especially parents, buy and sell used clothes informally through WhatsApp groups. These networks are very active, but fragmented and unstructured. There wasn\'t a dedicated platform where users could easily upload, browse, and purchase individual clothing items without being forced into buying bulk lots or using inefficient communication channels.\n\nI set out to create a simple, web-based solution that replicated the ease and spontaneity of WhatsApp, but with better structure and scalability.\n\nFrom a technical perspective, the project involved:\n• Developing an image processing pipeline in Python to compress photos and remove backgrounds automatically, improving both user experience and page load performance.\n• Using Hotjar to analyze user sessions, identify friction points, and iteratively refine the UI and user flow.\n• Implementing a frictionless login system using WhatsApp as a 2FA (two-factor authentication) method, allowing users to sign in with just their phone number—no email or password required.',
        challenges: [
            'Authentication without email: Many users in this demographic are not comfortable with typical signup flows. I built a custom login system that allowed users to authenticate using just their phone number and a WhatsApp-based confirmation, bypassing the need for emails or passwords entirely.',
            'Image optimization: Sellers frequently upload poor-quality images. I developed a batch script using Python to resize, compress, and remove backgrounds, ensuring consistent visual quality and faster page loading without requiring user intervention.',
            'User behavior adaptation: Since users were used to the informal, conversational nature of WhatsApp, the interface had to feel casual and familiar. I avoided complex filters or category hierarchies in favor of a lightweight, feed-based layout with smart search and tagging.'
        ]
    },
    {
        id: 'oil-gas',
        title: 'Oil & Gas MVP',
        subtitle: 'Full Stack Dev + Design (2024)',
        image: 'images/image.png',
        detailImages: ['images/well_manager_detail.png'],
        objective: 'Construir un Producto Mínimo Viable (MVP) para un Well Manager basado en web adaptado a la industria de Oil & Gas. El objetivo era crear una herramienta que permita el monitoreo en tiempo real y la gestión operativa de pozos petroleros, mejorando la toma de decisiones y la eficiencia en el campo.',
        segment: 'Sector energético – Oil & Gas. Específicamente dirigido a equipos operativos que gestionan actividades de campo y el rendimiento de pozos para perforación, mantenimiento y producción.',
        role: 'Full Stack Developer & Product Designer. Fui responsable del diseño y desarrollo completo del MVP. Lideré el diseño UX/UI e implementé tanto el front end como el back end. También colaboré con expertos de campo para dar forma a la lógica del producto y asegurar que cumpliera con las necesidades de la industria.',
        about: 'Este MVP fue una aplicación web diseñada para proporcionar una visión clara de todos los pozos activos, su estado y datos operativos. Los usuarios podían:\n• Ver el rendimiento de pozos en tiempo real\n• Filtrar y analizar datos\n• Generar reportes personalizados\n• Rastrear registros de mantenimiento e incidentes\n\nLa plataforma fue diseñada para ser modular, permitiendo un escalado fácil y adaptación para diferentes operadores de campos petroleros.',
        challenges: [
            'Traducir complejidad: Convertir flujos de trabajo complejos de campos petroleros en componentes de UI intuitivos.',
            'Responsabilidades duales: Equilibrar tareas de diseño y desarrollo en una línea de tiempo acelerada de MVP.',
            'Conocimiento del dominio: Aprender rápidamente la terminología de la industria y las prácticas operativas para alinear la lógica del producto con el uso en el mundo real.',
            'Modelado de datos: Estructurar una base de datos flexible y escalable que pudiera representar diversos estados de pozos y flujos de trabajo.'
        ]
    },
    {
        id: 'insurance-ui',
        title: 'Modernizing Insurance UI',
        subtitle: 'Product Design (2023)',
        image: 'images/insurance_ui_1.png',
        detailImages: [
            'images/insurance_ui_2.png',
            'images/insurance_ui_3.png',
            'images/insurance_ui_4.png',
            'images/insurance_ui_5.png',
            'images/insurance_ui_6.png',
            'images/insurance_ui_7.png',
            'images/insurance_ui_8.png',
            'images/insurance_ui_9.png',
            'images/insurance_ui_10.png',
            'images/insurance_ui_11.png',
            'images/insurance_ui_12.png',
            'images/insurance_ui_13.png',
            'images/insurance_ui_14.png'
        ],
        objective: 'The objective of the project was reconstructing the User Interface for an insurance software.',
        segment: 'Insurance (Back Office saas)',
        role: 'Product designer, Project Manager, Front end development',
        about: 'My goal was to create a modern, user-friendly interface that adhered to industry standards. The primary objective was to improve the user experience.\n\nInitially, I handled both design and front-end development tasks. However, after a couple of months, the project faced challenges meeting deadlines, leading to expanding the team with additional developers. Consequently, I transitioned exclusively to UX/UI design.\n\nAs the team continued to grow, I eventually took on the role of project manager as well, overseeing the coordination and progress of the front end development as well as the design.\n\nI designed and managed the development an estimate 200 screens in total.',
        kickoff: 'For such a complex system, choosing the UI design kit was a key decision. The options included were Material UI, Chakra UI, and Ant Design. After conducting research, Ant Design was chosen as the most suitable option.',
        menuLayout: 'The app was developed using Micro Front Ends which implied a challenge as modules do not comunicate between each other, operating independently. Many different layouts were tested for placing the main menu (1) and the specific menu of the Micro Front End module (2).\n\nThe arising issue was that the toggling of the main menu (1) was complicated to communicate its state to the MFEs, leading to a iteration on the design of the position of the MFE menu (2)\n\nAfter several iterations of screens, the choice was for the layout of the menu of each module to occupy the full screen.\n\nThis implementation resulted in a flexible system capable of effectively displaying large menus.\n\nThe approach was crucial because, from day one it was challenging to anticipate the size of each menu.',
        discoveringUser: 'There was an absence of direct interaction with end users and the ability to conduct tests. This led to an approach focused on researching different systems and devising effective methods for presenting complex screens overloaded with information. Two premises about the user:\n\nThe user extensively uses the system.\nAs the software functions as a daily work tool, any design effort aimed at improving its efficiency is crucial.\n\nThe user performs complex processes.\nComplex processes and data are managed, which can potentially lead to confusion and inefficiency if information is not managed properly.',
        coreScreens: 'The 4 fundamentals:\n• Minimal Screens: UI always aims for simplicity in design, striving for a clean and organized appearance.\n• Floating Labels for Inputs: Implementing floating labels for inputs is a must for saving space and ensuring a more efficient use of the screen.\n• Minimized Columns in Tables: Number of columns should be reduced in tables in order to avoid horizontal scrolling.\n• Step-Driven for Complex Screens: If a screen is too complex, the UI shall be broken down into smaller, more manageable steps.',
        creatingPolicy: 'Creating a policy is a comprehensive process that involves gathering information from various sources to ensure that the policy addresses all relevant aspects and factors. This gathering of information can be quite intricate and time-consuming, often taking weeks or even longer, especially in complex or highly regulated domains.',
        keyScreen: 'Among all the screens, the most intricate was the Overview of a completed policy, which was challenging due to the abundance of information.\n\nBy prioritizing feedback and testing various iterations, the optimal layout was identified, leading to an interface in which elements guaranteed maximized usability and clarity for the end user.',
        challenges: [
            'Agile Prototype Iteration: Adapting from detailed documents to a swift, iterative design process posed challenges. Shifting to quick diagram-based discussions enabled rapid screen creation and multiple iterations, streamlining development.',
            'Coordination with developers: Managing the team, task delegation, and backlog oversight were challenging. Balancing design and development priorities demanded clear communication and efficient task management to align the project and ensure progress.'
        ],
        keyLearning: 'Adapting to the different roles that the project requires in different phases can be challenging but is essential for maintaining agility and efficiency.'
    },
    {
        id: 'logistics',
        title: 'Logistics Webapp',
        subtitle: 'Product Design (2022)',
        image: 'images/logistics_1.png',
        detailImages: [
            'images/logistics_2.png',
            'images/logistics_3.png',
            'images/logistics_4.png',
            'images/logistics_5.png',
            'images/logistics_6.png',
            'images/logistics_7.png',
            'images/logistics_8.png',
            'images/logistics_9.png'
        ],
        objective: 'To improve the processes of a wholesale distributor, an order management system was designed to provide easy and dynamic information about the status of an order.',
        segment: 'Auto parts',
        role: 'Product Designer, Front/ Back End Developer',
        about: 'The project was divided in three phases. Initially, the need for a solution arose when detecting a lack of centralized information. This marked the first phase. Subsequently, the application underwent rebuilding to accommodate new requirements and needs, constituting the second phase. Finally, in the third phase, the system was expanded to build specific views of the information for different actors representing an expansion in functionalities.',
        phase1: '1) The Beginning (2019-2021)\n\nWhen preparing a customer\'s order, the existing inefficiencies from order placement to delivery resulted in recurring errors. Some of the errors detected were:\n\n• Working Blindly: Lack of visibility into the status of orders, leading to uncertainty and potential errors in the process.\n• Missing Pending Items: Lack of a system to track items that were out of stock, resulting in incomplete records of orders.\n• Lack of Accountability: Difficulty in identifying the source of errors or issues within the system.\n• Ambiguous Manual Entries: Handwritten notes were often unclear, leading to misinterpretation of information.\n• Lack of Backup: Sole reliance on paper records, making it difficult to recover lost or misplaced orders.\n• Double Entry: Orders were entered manually twice, leading to duplication of efforts and increased likelihood of errors.\n\nThe solution was conceptualized and then delegated to a developer for its implementation, resulting in the deployment of the initial version within a month.',
        phase2: '2) Rebuilding the app (2021-2022)\n\nFor a while, the app ran smoothly without any updates. However, as time passed, new requirements emerged, and the developer was unable to accommodate the changes. Meanwhile, the wholesaler utilized an ERP system to manage invoices, client balances, stock, and prices. Integrating the two solutions became crucial to accessing real-time information.\n\nDuring this period, I began studying web development and had already created several web pages. After facing a few challenges, I ultimately succeeded in developing the initial version of the integration.',
        phase3: '3) Expansion (2022- ongoing)\n\nIn the third phase of the project, the app underwent significant expansion to better serve both sales agents and clients:\n\nPWA for Sales Agents:\nA Progressive Web Application (PWA) was developed specifically for sales agents, aiming to streamline their workflow and improve usability. This PWA provided them with easier access to essential features and functionalities, allowing them to manage orders and tasks more efficiently.\n\nWeb Application for Clients:\nAnother web application was designed specifically for clients, offering them a user-friendly platform to submit orders and check their balances. This dedicated interface empowered clients to interact with the system seamlessly, enhancing their overall experience and satisfaction.\n\nWhatsApp Bot for Internal Use:\nAdditionally, a WhatsApp bot was developed for internal use initially, providing a quick and convenient way for team members to access information such as stock availability, prices, and account balances. This bot significantly expedited the process of querying important data, improving overall operational efficiency.\n\nThese expansions diversified the functionality of the app, catering to the specific needs of both sales agents and clients while also streamlining internal processes for the wholesaler.'
    },
    {
        id: 'hydroponics',
        title: 'POC in Hydroponics',
        subtitle: 'Product Design (2021)',
        image: 'images/hydroponics_1.png',
        detailImages: [
            'images/hydroponics_2.png',
            'images/hydroponics_3.png',
            'images/hydroponics_4.png',
            'images/hydroponics_5.png',
            'images/hydroponics_6.png',
            'images/hydroponics_7.png',
            'images/hydroponics_8.png',
            'images/hydroponics_9.png',
            'images/hydroponics_10.png'
        ],
        objective: 'Create a web app for users to digitally harvest their own food',
        segment: 'Hydroponics',
        role: 'Product Design, Front end development',
        about: 'One of the effects of the pandemic was people becoming more engaged in household activities such as baking, cooking, etc. An idea that gained traction was also growing your own food. For this purpose, hydroponic techniques offer several advantages, such as reduced space usage, rapid growth, and relatively low maintenance.\n\nThe concept was that users would own a hydroponic tower and they would consume their harvest. Instead of planting their own seeds, they would digitally initiate their next "planting." They would do this digitally. The purpose of this was for them to receive seedlings with a few weeks of growth already started. This accelerates the growth process.',
        physicalProduct: 'The hydroponic tower was designed aimed for compact, indoor gardening. It enables users to grow fresh produce in limited spaces using hydroponic techniques, offering advantages such as rapid growth and low maintenance. With its self-contained ecosystem, users can easily cultivate vegetables without soil, making it an ideal solution for urban gardening enthusiasts.',
        digitalProduct: 'The foundation of the idea stemmed from the use of phenol foam, which is typically employed for planting seeds in this method. Initially, the concept aimed for users to visualize and plant using this approach. After a couple of iterations, the image of the phenol foam was replaced by a design that attempted to mimic its appearance.\n\nOn the other hand, for the Proof of Concept, once the user would place the order or plant the seeds, an email would be sent containing the user\'s selection. This represented the main flow of the web app and the outcome of such a process.',
        beyondMVP: 'The next stage of development would concentrate on the tower itself. This involved implementing features enabling users to monitor variables such as temperature, humidity, and pH levels, and to track their crops\' progress over time. This would entail integrating IoT tools to directly measure this data from the tower and then presenting it to users through straightforward charts and notifications.',
        keyLearning: 'Starting from real-world actions can lead to intuitive interface design. By basing digital interactions on familiar concepts, users engage effortlessly, enhancing their experience and satisfaction.'
    },
    {
        id: 'que-hacemos-hoy',
        title: 'Que Hacemos Hoy',
        subtitle: 'Product Design (2019)',
        image: 'images/que_hacemos_hoy_1.png',
        detailImages: [
            'images/que_hacemos_hoy_2.png',
            'images/que_hacemos_hoy_3.png',
            'images/que_hacemos_hoy_4.png',
            'images/que_hacemos_hoy_5.png',
            'images/que_hacemos_hoy_6.png',
            'images/que_hacemos_hoy_7.png',
            'images/que_hacemos_hoy_8.png',
            'images/que_hacemos_hoy_9.png',
            'images/que_hacemos_hoy_10.png',
            'images/que_hacemos_hoy_11.png'
        ],
        objective: 'Create an efficient way to display cultural events happening near the user',
        segment: 'Cultural Agenda',
        role: 'Ux / Ui Design, Product Design',
        about: 'In our busy lives, finding the right events is overwhelming due to cluttered platforms and too much information. The proposed solution aims to simplify event discovery and attendance, simplifying the process of finding events that align with individual interests.\n\nWith a user-friendly interface, it offers browsing and filtering options based on preferences. Additionally, it presents event information in an alternative format, ensuring a seamless experience for discovering local cultural activities.',
        archetypes: 'Michael is a sociable intern at an accounting firm who enjoys going out with friends. In his free time, he seeks new experiences and connections. He\'s interested in exploring cultural events like exhibitions and concerts in his city. Michael relies on smartphone apps for convenience in discovering and customizing his outings, finding enjoyment and community connection through these experiences.\n\nMalena, 22, a nanny and music enthusiast, loves immersing herself in various genres of music. She enjoys attending concerts and music festivals in her free time, using smartphone apps to discover new musical experiences while balancing her work responsibilities.',
        benchmark: 'For the benchmark, I studied Meetup and Eventbrite. While they are not directly focused on cultural events, they share the same objective of informing users about various events. Meetup primarily focuses on facilitating group meetings and activities based on user interests, while Eventbrite serves as a platform for discovering and organizing a wide range of events, including workshops, conferences, and social gatherings. Despite their differences, both platforms embody the essence of connecting users with events that align with their interests and preferences.\n\n👍Clear Filtering System: Implemented a user-friendly filtering system with three key variables: location, time, and event type, ensuring ease of navigation and quick access to relevant events.\n\n👍Easy Access to Events of Interest: Users can easily find events of interest through the intuitive interface, allowing them to discover cultural experiences that align with their preferences and schedule.\n\n👎Inability to Visualize Information on Map: One limitation encountered was the inability to visualize event information on a map. While the filtering system provided efficient access to event details, the absence of a map interface hindered users from visually exploring event locations spatially.\n\n👎Confusing Filtering Interface: Encountered challenges with a visually confusing and unfriendly filtering system, making navigation difficult for users.\n\n👍Accessible Events: Despite the interface issues, users could still easily access events of interest, albeit with some effort to navigate through the confusion.\n\n👎Missing Map Visualization: Similar to previous cases, the absence of a map interface limited users from visually exploring event locations, despite still being able to access event details.',
        exploringAlternative: 'I conducted various explorations to visualize event data, focusing on two main variables: \'where\' and \'when.\' Firstly, I experimented with the location of the events, aiming to emphasize the metric of distance from my location. This involved designing interfaces that displayed events relative to the user\'s current position, providing easy access to nearby cultural experiences.\n\nSecondly, I explored different alternatives for visualizing the timing of events. This included consolidating information about when the events would occur. By experimenting with various layouts and formats, I aimed to present users with a clear overview of upcoming events, allowing them to plan their cultural outings efficiently.',
        wireframing: 'The process underwent numerous iterations, aiming to discover a new approach to presenting information in a simple manner. As depicted in the sketches above, various alternatives were explored. Below are some of the screens that were prototyped.\n\nIn both the low and medium fidelity stages, the focus was on designing three screens centered around an information filtering system, event listing, and user-friendly interface. During the medium fidelity stage, various filter models were explored. The aim throughout was to achieve agility and simplicity in user interaction.',
        testing: 'Users were presented with the following task:\n\n"You are single. Today is Monday, and you arranged a date for Thursday night. Both of you live in the same area. It\'s the third date, and you need to buy tickets for a music event. There\'s an application that helps you find events happening near you."\n\nThe flow of the screens to perform the task where the following\n\nThe testing resulted in a poor intuitive interface. None of the users were able to complete the flow successfully. They did not associate the points with the events, which proved to be a major problem as it is the key function of the application.\n\nTaking into account the results of the testing, several modifications were introduced.\n\n• One significant change that had a notable impact was the incorporation of animations for the events. Circular animations were implemented to simulate orbits around the user, conveying the concept that events are nearby.\n\n• Another modification was made to the date picker, which was compressed and redesigned for clarity.\n\n• Additionally, the color of the event bubble was adjusted to change when selected, enhancing visibility and user interaction.',
        keyLearning: 'UI innovation can become complicated if they do not align with user understanding. UI design should resonate with users\' expectations and mental models.'
    },
    {
        id: 'auto-parts-wholesaler',
        title: 'Web app for Auto parts wholesaler',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_auto_parts.png',
        about: 'Dynamic platform displaying products and prices for auto parts wholesaler, with a node.js backend, data form SQL database was extracted in order to generate a web view of relevant information.',
        segment: 'Auto parts',
        role: 'Designer, Front end development, Back End Development',
        visitUrl: 'https://www.distribuidorarenova.com.ar/'
    },
    {
        id: 'deli-store-wholesaler',
        title: 'Deli Store Wholesaler',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_deli_store.png',
        about: 'Dynamic platform displaying products and prices for El Fuerte wholesaler. A google sheet was built for the front end to query up to date prices and stock.',
        segment: 'Deli store',
        role: 'Designer, Front end development',
        visitUrl: 'https://www.mayoristaelfuerte.com'
    },
    {
        id: 'lawyer-institutional',
        title: 'Lawyer institutional web',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_lawyer.png',
        about: 'HSR Abogados, a law firm offering diverse legal services, sought an institutional website highlighting their team, practice areas, and notable cases. The site was built on JAMstack with Next.js and Contentful CMS.',
        segment: 'Institutional, lawyer',
        role: 'Project Manager, UX UI design, Front End development',
        visitUrl: 'https://hsrabogados.vercel.app/'
    },
    {
        id: 'sports-betting-landing',
        title: 'Landing page for sports betting app',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_sports_betting.png',
        about: 'A landing page was built to briefly explain the product of RMBL with a connection to google spreadsheet in order for them to easily modify key information about the different scores of sports events, which was key for the product.',
        segment: 'Landing',
        role: 'Ux UI design, Front End development',
        visitUrl: 'https://landingrmbl.vercel.app/'
    },
    {
        id: 'pastry-commerce',
        title: 'Web Page for pastry commerce',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_pastry.png',
        about: 'Insumos Moreno, a food and pastry wholesaler, required a website to display their products and prices to clients. Initially a landing page, it evolved into a dynamic site showing personalized price lists. Utilizing Next.js, the site fetches data from various Google Sheets.',
        segment: 'Landing',
        role: 'Ux UI design, Front End development',
        visitUrl: 'https://insumosmoreno.vercel.app/'
    },
    {
        id: 'pharma-wholesaler',
        title: 'Pharma wholesaler',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_pharma.png',
        about: 'Redesigning a pharmaceutical wholesaler\'s website with a product catalog. The project involved redesigning an existing institutional website. design alternatives to enhance the site\'s functionality and aesthetics.',
        segment: 'Pharma, Medical Devices',
        role: 'Project Manager, Front End development',
        visitUrl: 'https://qualimed.vercel.app/'
    },
    {
        id: 'comercial-library',
        title: 'Comercial Library',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_library.png',
        about: 'Designed for a commercial library, this HTML, CSS, and JS web page integrates with Google Sheets for easy product updates.',
        segment: 'Commercial',
        role: 'Front End development',
        visitUrl: 'https://www.libreria770.com/'
    },
    {
        id: 'gastronomic-chamber',
        title: 'Institutional Gastronomic Chamber',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_gastronomic.png',
        about: 'Static web page for the gastronomic chamber of Quilmes. SVG animations were meticulously crafted, to give a modern and minimalist impression.',
        segment: 'Institutional',
        role: 'Front End development',
        visitUrl: 'https://camaraquilmes.netlify.app/'
    },
    {
        id: 'gourmet-ecommerce',
        title: 'Ecommerce for gourmet market',
        subtitle: 'WEB DESIGN',
        image: 'images/web_design_gourmet.png',
        about: 'Web page for an online gourmet market, featuring a design inspired by the store\'s special discounts, with a magical touch reminiscent of a magician\'s hat.',
        segment: 'E-commerce',
        role: 'UX UI desgin, Front End development'
    },
    {
        id: 'ideas-inspiration',
        title: 'Ideas & Inspiration',
        subtitle: 'Collection of Concepts',
        image: 'images/logistics_1.png',
        objective: 'Document and share a collection of diagrams, concepts, and ideas that shape my thinking and approach to design and problem-solving.',
        segment: 'Personal Collection',
        role: 'Content Creator',
        about: 'A Collection of Diagrams, Concepts, and Ideas That Shape My Thinking. This is a curated space where I document visual representations of processes, frameworks, and creative thoughts that influence my approach to design and problem-solving.',
        visitUrl: 'https://ihourquescos.com/process-1',
        detailImages: [
            'images/ideas_inspiration_1.png',
            'images/ideas_inspiration_2.png',
            'images/ideas_inspiration_3.png',
            'images/ideas_inspiration_4.png',
            'images/ideas_inspiration_5.png',
            'images/ideas_inspiration_6.png',
            'images/ideas_inspiration_7.png'
        ]
    }
];

