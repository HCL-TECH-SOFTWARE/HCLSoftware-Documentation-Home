/*Function for filtering the cards list based on categories*/

 const btns = [
    {
        id: 1,
        name: 'AI and Automation'
    },
        
    {
        id: 3,
        name: 'Data, Analytics and Insights'
    },
    
    {
        id: 5,
        name: 'Digital Transformation'
    },
    {
        id: 6,
        name: 'Innovations'
    },
    {
        id: 7,
        name: 'Mainframe Solutions'
    },
    {
        id: 4,
        name: 'Secure DevOps'
    },
    ];

 const products = [
        {
            id: 4,
            image:"images/HCL_AppScan_Color_Icon.svg",
            title: 'HCL AppScan',
            description: 'Comprehensive application security solutions with best-in-class testing tools and centralized platforms for oversight and visibility, available on-cloud, cloud-native, and on-premises',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/appscan/Welcome.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Actian Ingres (Linux & Windows)',
            description: 'A data analytics platform that transforms your business by simplifying how you connect, manage, and analyze data.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/actianx/index.html#page/Welcome/Welcome_to_Actian_X_Documentation.htm'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Actian Data Platform',
            description: 'A single, unified data platform for real-time insights. It provides end-to-end integration, data warehouse, and analytics across your entire hybrid environment.',
            category: 'Data, Analytics and Insights',
            link: "https://docs.actian.com/avalanche/index.html#page/Welcome/What's_New_in_Actian_Warehouses.html"
        },
        {
            id: 1,
            image:"images/HCL_BigFix_Color_Icon.svg",
            title: 'HCL BigFix',
            description: 'An endpoint management solution that automates discovery, management, and remediation of on-premise, virtual, and cloud endpoints regardless of operating system, location, or connectivity.',
            category: 'Automation',
            link: 'https://help.hcl-software.com/bigfix/landing/index.html'
        },
        {
            id: 6,
            image:"images/HCL_Clara_Color_Icon.svg",
            title: 'HCL AIDA',
            description: 'AI & ML built-in patterns that capture and control process execution. Data-driven decision-making and fast troubleshooting guarantees stability through risk assessment.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/clara/index.html'
        },
        {
            id: 5,
            image:"images/CDPlogo.svg",
            title: 'HCL CDP',
            description: 'A foundational platform for transforming customer interactions and unifying customer data across touchpoints to create real-time and personalized customer engagement.',
            category: 'Digital Solutions',
            link: 'https://help.hcltechsw.com/hclcdp/cdp/index.html'
        },
        
        {
            id: 6,
            image:"images/HCL_Clara_Color_Icon.svg",
            title: 'HCL Clara',
            description: 'Conversational UI enabling democratization and Self-Service automation with natural language processing interactions.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/clara/index.html'
        },
        
        {
            id: 5,
            image:"images/HCL_Commerce_Color_Icon.svg",
            title: 'HCL Commerce',
            description: 'A unified customer interaction platform for omni-channel commerce. It is customizable and scalable to do business directly with customers (B2C) and directly with businesses (B2B).',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/commerce/index.html'
        },
        {
            id: 4,
            image:"images/HCL_Compass_Color_Icon.svg",
            title: 'HCL Compass',
            description: 'Change management software for enterprise level scaling, process customization, and control to accelerate project delivery and increase developer productivity.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/compass/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Connections_Color_Icon.svg",
            title: 'HCL Connections',
            description: 'People power your business. HCL Connections powers your people.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/connections/welcome/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL DataConnect',
            description: 'An intelligent, low-code integration platform that addresses the most complex use cases with automated, intuitive, and reusable integrations.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/dataconnect/#page/Welcome/Welcome_to_DataConnect_Documentation.htm'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL DataFlow',
            description: 'An enterprise platform that enables easy-to-use, high-performance data extraction, analysis, transformation, and loading.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/dataflow/#page/Welcome/Welcome_to_DataFlow_Documentation.htm'
        },
        {
            id: 4,
            image:"images/DevOps_ClearCase.svg",
            title: 'HCL DevOps Code ClearCase',
            description: 'Software configuration management for source code and other software assets. Manage changes throughout development lifecycles, from design to test.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/code/clearcase/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_CodeRT.svg",
            title: 'HCL DevOps Code RealTime',
            description: 'An application that creates stateful, event-driven realtime applications in C++. It supports the Art language and runs as an extension of Visual Studio Code and Eclipse Theia.',
            category: 'Secure DevOps',
            link: 'https://secure-dev-ops.github.io/code-realtime/'
        },

        {
            id: 4,
            image:"images/DevOps_deploy_black.svg",
            title: 'HCL DevOps Deploy',
            description: 'A continuous integration and delivery solution that automates enterprise application deployment to any environment ranging from mainframes, middleware, and containers to cloud environments.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/deploy/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_ModelRT.svg",
            title: 'HCL DevOps Model RealTime',
            description: 'An Eclipse-based modeling and development environment for creating stateful, event-driven realtime applications in C++. It supports UML and its realtime profile UML-RT.',
            category: 'Secure DevOps',
            link: 'https://model-realtime.hcldoc.com/help/index.jsp'
        },
        {
            id: 4,
            image:"images/DevOps_Plan.png",
            title: 'HCL DevOps Plan',
            description: 'Low code change management software designed for comprehensive change tracking and issue management with custom workflow automation.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/plan/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_test_black.svg",
            title: 'HCL DevOps Test',
            description: 'A suite of testing tools that offers a comprehensive solution for all your testing needs including API testing, performance testing, UI testing, synthetic data generation, service virtualization and embedded testing.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/test/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_velocity_black.svg",
            title: 'HCL DevOps Velocity',
            description: 'A value stream management platform that automates releases through pipeline orchestration with multiple DevOps tools and provides real-time analytics to make strategic decisions.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/velocity/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Digital_Experience_Color_Icon.svg",
            title: 'HCL Digital Experience',
            description: 'The world’s most trusted digital experience platform.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/digital-experience/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Color_Icon.svg",
            title: 'HCL Domino',
            description: 'Your secure rapid application development server and secure email platform.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Leap_Color_Icon.svg",
            title: 'HCL Domino Leap',
            description: 'A scalable no-code application building for business users with IT governance and control.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino-leap/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'HCL Domino C API',
            description: 'Set of subroutines and data structures that allow you to write programs in C that access Domino applications.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'HCL Domino Designer',
            description: 'Client for rapid application development and administration of Domino.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'HCL Enterprise Integrator',
            description: 'Domino add-on product for high-volume data transfers, synchronizing disparate data sources, and providing real-time integration between Domino and back-end data sources.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'HCL Domino REST API',
            description: 'Contemporary REST API capability for Domino applications, enabling a modern programming experience.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'HCL Domino Connector for SAP Solutions 2.0.2',
            description: 'Add-on product for access to the SAP ERP system, working in conjunction with the HCL Enterprise Integrator and Connector LotusScript Extension classes.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Enterprise Access',
            description: 'A sustainable platform designed to provide access to popular database systems on Windows and UNIX. Developers can build portable applications that are used to access databases and ODBC hosts.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/entaccess/index.html#page/Welcome/Welcome_to_Enterprise_Access_Documentation.htm'
        },
        {
            id: 3,
            image:"images/HCL_Informix.png",
            title: 'HCL Informix',
            description: 'Versatile database management system with speed, reliability, and security.It provides cost-optimized high performance across thousands of users.',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcl-software.com/hclinformix/index.html'
        },
        {
            id: 6,
            image:"images/HCL_HERO_Color_Icon.svg",
            title: 'HCL HERO',
            description: 'Application performance monitoring solution that IT administrators to monitor the health of product infrastructure and perform actions with a specialized runbook.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/hero/index.html'
        },
        {
            id: 5,
            image:"images/Intelliservice_Logo.png",
            title: 'HCL IntelliService',
            description: 'AI-Powered platform to unleash your marketing, sales and service excellence.',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/Intelliservice/home/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Integration Manager',
            description: 'An elastic cloud-based platform that enables the design, deployment, and management of web-based integrations.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/integrationmanager/#page/Welcome/Welcome_to_Integration_Manager_Documentation.htm'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Actian Ingres (Solaris, AIX, HP & VMS)',
            description: 'A data analytics platform that transforms your business by simplifying how you connect, manage, and analyze data.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/ingres/#page/Welcome/Welcome_to_Ingres_Documentation.htm'
        },
        {
            id: 5,
            image:"images/HCL_Leap_Color_Icon.svg",
            title: 'HCL Leap',
            description: 'An enterprise application integration platform that provides no-code application building for business users with IT governance and control.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/Leap/welcome/index.html'
        },
        {
            id: 3,
            image:"images/HCL_Link_Color_Icon.svg",
            title: 'HCL Link',
            description: 'It is a powerful, transaction-oriented, data integration solution that enables the development of high-volume, complex transactions without the need for hand-coding.',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcl-software.com/hcllink/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL NoSQL Database',
            description: 'A DBMS that Makes application development fast and easy with our NoSQL Object Database. Benefit from agile development, high availability, synchronous and asynchronous replication, and more.',
            category: 'Data, Analytics and Insights',
            link: 'https://esd.actian.com/product/Versant_Object_Database/10/docs/Actian_NoSQL_Database_10_Documentation'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL NoSQL FastObjects',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://esd.actian.com/product/Versant_FastObjects/14.0/docs/NoSQL_FastObjects_14.0_Documentation'
        },
        {
            id: 5,
            image:"images/HCL_Nomad_Color_Icon.svg",
            title: 'HCL Nomad, including Mobile',
            description: 'Domino application access from your desktop web browser or a mobile device.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/nomad/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'HCL Client Application Access',
            description: 'A stand-alone application for Domino applications, integrated with the Verse web-mail client.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/notes/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'HCL Notes',
            description: 'Client software that integrates email, social collaboration, messaging, and business applications into a single workspace.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/notes/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'HCL iNotes',
            description: 'Browser client for access to Domino mail, contacts, calendar, scheduling, and collaboration features.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/notes/welcome/index.html'
        },
        
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL OpenROAD',
            description: 'An application development tool that enables you to develop and deploy mission-critical, n-tier business applications on a variety of platforms.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/openroad/index.html#page/Welcome/Welcome_to_OpenROAD_Documentation.htm'
        },
        
        {
            id: 3,
            image:"images/HCL_OneDB_Color_Icon.svg",
            title: 'HCL OneDB',
            description: 'Enterprise database management software that enables you to address data management and application development challenges easily.',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcl-software.com/onedb/index.html'
        },
                                   
        {
            id: 5,
            image:"images/HCL_SafeLinx_Color_Icon.svg",
            title: 'HCL SafeLinx',
            description: 'VPN solution that provides secure web-based and client-based access to enterprise applications.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/safelinx/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Sametime_Color_Icon.svg",
            title: 'HCL Sametime',
            description: 'Cloud-based video conferencing solution that provides secure video meetings and chat for the enterprise.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/sametime/welcome/index.html'
        },
        {
            id: 5,
            image:"images/Traveler.svg",
            title: 'HCL Traveler, including Verse mobile',
            description: 'Provides enterprise-level Domino email, calendar, and contacts synchronization for mobile devices.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/traveler/welcome/index.html'
        },
        {
            id: 5,
            image:"images/Traveler.svg",
            title: 'HCL Traveler for Microsoft Office',
            description: 'Allows users to connect to the Domino mail server to access their mail, calendar, and contacts through the Outlook client.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/traveler/welcome/index.html'
        },
        {
            id: 6,
            image:"images/HCL_T-VREX_Color_Icon.svg",
            title: 'HCL T-VREX',
            description: 'Innovative and versatile solution, which is integrated into HCL Workload Automation, enables a complete and immersive troubleshooting and collaboration experience.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/tvrex/index.html'
        },
        {
            id: 1,
            image:"images/HCL_UniversalOrchestrator_Color_Icon.svg",
            title: 'HCL Universal Orchestrator',
            description: 'Hyper Automation enabler that manages both multi-cloud and hybrid environments from a single point of control.',
            category: 'Automation',
            link: 'https://help.hcl-software.com/UnO/v1.1/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Unica_Color_Icon.svg",
            title: 'HCL Unica',
            description: 'An advanced enterprise automated marketing platform to handle routine marketing tasks without human action & capture maximum efficient leads.',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/unica/uc/unica_welcome_portal.html'
        },
        {
            id: 5,
            image:"images/HCL_Discover_Color_Icon.svg",
            title: 'HCL Unica Discover',
            description: 'An enterprise class digital customer experience analytics platform that delivers behavioural insights for your web and mobile web applications.',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/UnicaDiscover/UD/index.html'
        },
        
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Vector',
            description: 'Analytics tool which enables you to access the latest data for fast analytics across your data centers and clouds.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/vector/#page/Welcome/Welcome_to_Vector_Documentation.htm'
        },
        
        {
            id: 5,
            image:"images/HCL_Verse_Color_Icon.svg",
            title: 'HCL Verse',
            description: 'User-centric email and messaging experience including social analytics and advanced search capabilities.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/verse_onprem/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Volt_MX_Color_Icon.svg",
            title: 'HCL Volt MX',
            description: 'Low-code application development platform for both professional and citizen developers.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/docs/voltmx-prod-doc-landing-page/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Volt_MX_Color_Icon.svg",
            title: 'HCL Volt MX Go',
            description: 'A platform that modernizes and extends the value of the Domino applications.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/docs/voltmx-prod-doc-landing-page/index.html'
        },
        {
            id: 1,
            image:"images/HCL_WorkloadAutomation_Color_Icon.svg",
            title: 'HCL Workload Automation',
            description: ' A platform designed to efficiently automate all your enterprise processes across diverse environments.',
            category: 'Automation',
            link: 'https://help.hcl-software.com/workloadautomation/welcome/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'HCL Zen',
            description: 'A high-performance database management system with the family of databases—Zen Core, Zen Edge, Zen Enterprise, and Zen Cloud Server—for a small footprint and low maintenance.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/zen/#page/Welcome/Welcome_to_Zen_2fPSQL_Documentation.htm'
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Transformation_Color_Icon.svg",
            title: 'HCL Z and I Emulator for Transformation',
            description: 'A transformational platform that extends mission critical terminal applications to the web, mobile or as APIs without touching the existing application.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zie/zietrans/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Web_Color_Icon.svg",
            title: 'HCL Z and I Emulator for Web',
            description: 'HCL ZIE for Web is a security-rich browser emulator solution that simplifies access to business critical applications & data.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zie/zieweb/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Windows_Color_Icon.svg",
            title: 'HCL Z and I Emulator for Windows',
            description: 'A reliable emulator that is designed for Windows operating system users to connect with the mainframe or host system. It provides reliability, security and performance.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zie/ziewin/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Z_Abend_Investigator_Color_Icon.svg",
            title: 'HCL Z Abend Investigator',
            description: 'An analysis tool that efficiently diagnoses root causes of application failures (abends).',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zai/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Z_Asset_Optimizer_Color_Icon.svg",
            title: 'HCL Z Asset Optimizer',
            description: 'Asset management software that discovers, manages, and optimizes mainframe software assets.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zao/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Z_Data_Tools_Color_Icon.svg",
            title: 'HCL Z Data Tools',
            description: 'An efficient tool that manages data stored on z/OS systems interactively and in batch processing with a simple, intuitive user interface and remote systems support.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zdt/welcome/index.html'
        },
        
        {
            id: 7,
            image:"images/HCL_Mainframe_ZLV.png",
            title: 'HCL Z License Verification',
            description: 'An efficient tool that empowers enterprises to identify software audit exposures quickly. It also creates actionable license verification insights and helps optimize costs.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/ZLicenseVerification/welcome/index.html'
        },

    ];

    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]

    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button id='clkid' class='fil-p sidebarbutton' onclick='filterItems("+(id)+`)'>${name}</button>`)
    }).join('');

    
    const categories = [...new Set(products.map((item)=>{
        return item }))]
        const filterItems = (a) => {
            const flterCategories = categories.filter(item);
            function item(value) {
                if(value.id==a) {
                    return(value.id);
                }
            }
            displayItem(flterCategories);
        }

        
        const displayItem = (items) => { 
            document.getElementById('root').innerHTML = items.map((item)=>{
                var{image, title, description, link} = item;
                /* return (`<div class='box'>
                <h5>${title}</h5>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h6>${description}</h6>
                <button class='learnButton'><span class="arrow-icon">&#8594;</span>Learn more</button>
                </div>
                </div>`) */
                return (`<div id="cardList" class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                <img class='images' src=${image} alt="${title}"></img>
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text"></p>
                                <a href="${link}" target="_blank">${description}</a>
                            </div>
                            </div>
                        </div>`)
                }).join('');
        }
        displayItem(categories);
        
        /* Function to search for a product by name */

        function searchProduct() {

            const searchInput = document.getElementById("searchProd").value.trim().toLowerCase();
            const mainCardId = document.getElementById("root");
            const cardlist = mainCardId.getElementsByClassName("col-md-8");
            for(var i = 0; i < cardlist.length; i++) {
                var h = cardlist[i].getElementsByTagName("h5")[0];
                var prodName = h.textContent || h.innerText;
                if(prodName.toLowerCase().indexOf(searchInput) > -1) {

                    cardlist[i].style.display = ""
                } else {
                    cardlist[i].style.display = "none"
                }
            }           
        }

    /*Category button will get highlighted, when user clicks on it*/

        var sidebarBtns = document.getElementById("catid");
        var btnsclass = sidebarBtns.getElementsByClassName("sidebarbutton");
        for(i=0; i<btnsclass.length; i++) {

            btnsclass[i].addEventListener('click', function() {
                //current = document.getElementById("clkid");
                var current = document.getElementsByClassName("active");

                // If there's no active class
                if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
                }
            
                // Add the active class to the current/clicked button
                this.className += " active";
            })
        }