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
            title: 'AppScan',
            description: 'Comprehensive application security solutions with best-in-class testing tools and centralized platforms for oversight and visibility, available on-cloud, cloud-native, and on-premises',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/appscan/Welcome.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Actian X',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/actianx/index.html#page/Welcome/Welcome_to_Actian_X_Documentation.htm'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Avalanche Cloud Data Platform',
            description: 'A unified experience for ingesting, transforming, analyzing, and storing data. Flexible deployment options include public cloud, hybrid or on-premises environments.',
            category: 'Data, Analytics and Insights',
            link: "https://docs.actian.com/avalanche/index.html#page/Welcome/What's_New_in_Actian_Warehouses.html"
        },
        {
            id: 1,
            image:"images/HCL_BigFix_Color_Icon.svg",
            title: 'BigFix',
            description: 'Automate discovery, management and remediation of all on-premise, virtual, and cloud endpoints regardless of operating system, location, or connectivity.',
            category: 'Automation',
            link: 'https://help.hcl-software.com/bigfix/landing/index.html'
        },
        {
            id: 6,
            image:"images/HCL_Clara_Color_Icon.svg",
            title: 'HCL AIDA',
            description: 'AI & ML built-in patterns to capture and control process execution. Enables fast troubleshooting and data-driven decision-making to guarantee stability through risk assessment.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/clara/index.html'
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
            title: 'Commerce',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/commerce/index.html'
        },
        {
            id: 4,
            image:"images/HCL_Compass_Color_Icon.svg",
            title: 'Compass',
            description: 'Intro',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/compass/index.html'
        },
        {
            id: 5,
            image:"images/",
            title: 'Connections',
            description: 'People power your business. HCL Connections powers your people.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/connections/welcome/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'DataConnect',
            description: 'Use this intelligent, low-code integration platform to address your most complex use cases with automated, intuitive, and reusable integrations.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/dataconnect/#page/Welcome/Welcome_to_DataConnect_Documentation.htm'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'DataFlow',
            description: 'Actian DataFlow enables easy-to-use, high-performance data extraction, analysis, transformation, and loading.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/dataflow/#page/Welcome/Welcome_to_DataFlow_Documentation.htm'
        },
        {
            id: 4,
            image:"images/DevOps_ClearCase.svg",
            title: 'DevOps Code ClearCase',
            description: 'Intro',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/code/clearcase/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_CodeRT.svg",
            title: 'DevOps Code RealTime',
            description: 'Create stateful, event-driven realtime applications in C++. It supports the Art language and runs as an extension of Visual Studio Code and Eclipse Theia.',
            category: 'Secure DevOps',
            link: 'https://secure-dev-ops.github.io/code-realtime/'
        },

        {
            id: 4,
            image:"images/DevOps_deploy_black.svg",
            title: 'DevOps Deploy',
            description: 'Learn to automate your deployment process across dev, test, and production environments for faster and reliable software delivery.',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/deploy/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_ModelRT.svg",
            title: 'DevOps Model RealTime',
            description: 'An Eclipse-based modeling and development environment for creating stateful, event-driven realtime applications in C++. It supports UML and its realtime profile UML-RT.',
            category: 'Secure DevOps',
            link: 'https://model-realtime.hcldoc.com/help/index.jsp'
        },
        {
            id: 4,
            image:"images/DevOps_test_black.svg",
            title: 'DevOps Test',
            description: 'Intro',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/test/index.html'
        },
        {
            id: 4,
            image:"images/DevOps_velocity_black.svg",
            title: 'DevOps Velocity',
            description: 'Intro',
            category: 'Secure DevOps',
            link: 'https://help.hcl-software.com/devops/velocity/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Digital_Experience_Color_Icon.svg",
            title: 'Digital Experience',
            description: 'The world’s most trusted digital experience platform.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/digital-experience/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Color_Icon.svg",
            title: 'Domino',
            description: 'Your secure rapid application development server and secure email platform.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Leap_Color_Icon.svg",
            title: 'Domino Leap',
            description: 'Provides no-code application building for business users with IT governance and control.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino-leap/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'Domino C API',
            description: 'Set of subroutines and data structures that allow you to write programs in C that access Domino applications.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino_volt/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'Domino Designer',
            description: 'Client for rapid application development and administration of Domino.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino_volt/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'HCL Enterprise Integrator (HEI)',
            description: 'Domino add-on product for high-volume data transfers, synchronizing disparate data sources, and providing real-time integration between Domino and back-end data sources such as DB2, SQL, and Oracle.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino_volt/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'Domino REST API',
            description: 'Contemporary REST API capability for Domino applications, enabling a modern programming experience.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino_volt/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'Domino Connector for SAP Solutions 2.0.2',
            description: 'Add-on product for access to the SAP ERP system, working in conjunction with the HCL Enterprise Integrator and Connector LotusScript Extension classes.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/domino_volt/welcome/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Enterprise Access',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/entaccess/index.html#page/Welcome/Welcome_to_Enterprise_Access_Documentation.htm'
        },
        {
            id: 3,
            image:"images/HCL_Informix.png",
            title: 'HCL Informix',
            description: 'Tap into the speed, reliability, and security you need in a database, along with cost-optimized high performance across thousands of users.',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcl-software.com/hclinformix/index.html'
        },
        {
            id: 6,
            image:"images/HCL_HERO_Color_Icon.svg",
            title: 'HCL HERO',
            description: 'Allows IT administrators monitor the health of product infrastructure and perform actions with a specialized runbook.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/hero/index.html'
        },
        {
            id: 5,
            image:"images/Intelliservice_Logo.png",
            title: 'IntelliService',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/Intelliservice/home/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Integration Manager',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/integrationmanager/#page/Welcome/Welcome_to_Integration_Manager_Documentation.htm'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Ingres',
            description: 'Transform faster using the world’s most trusted transactional database that has been delivering ground-breaking insights for decades—it was in the room when data happened. It has run billions of OLTP operations for thousands of enterprises, and it can help you too.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/ingres/#page/Welcome/Welcome_to_Ingres_Documentation.htm'
        },
        {
            id: 5,
            image:"images/HCL_Leap_Color_Icon.svg",
            title: 'Leap',
            description: 'Provides no-code application building for business users with IT governance and control.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/Leap/welcome/index.html'
        },
        {
            id: 3,
            image:"images/HCL_Link_Color_Icon.svg",
            title: 'Link',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcl-software.com/hcllink/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'NoSQL Database',
            description: 'Make application development fast and easy with our NoSQL Object Database. Benefit from agile development, high availability, synchronous and asynchronous replication, and more.',
            category: 'Data, Analytics and Insights',
            link: 'https://esd.actian.com/product/Versant_Object_Database/10/docs/Actian_NoSQL_Database_10_Documentation'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'NoSQL FastObjects',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://esd.actian.com/product/Versant_FastObjects/14.0/docs/NoSQL_FastObjects_14.0_Documentation'
        },
        {
            id: 5,
            image:"images/HCL_Nomad_Color_Icon.svg",
            title: 'Nomad, including Mobile',
            description: 'Domino application access from your desktop web browser or a mobile device.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/nomad/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'Client Application Access',
            description: 'A stand-alone application for Domino applications, integrated with the Verse web-mail client.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/notes/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'Notes',
            description: 'Client software that integrates email, social collaboration, messaging, and business applications into a single workspace.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/notes/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'iNotes',
            description: 'Browser client for access to Domino mail, contacts, calendar, scheduling, and collaboration features.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/notes/welcome/index.html'
        },
        
        {
            id: 3,
            image:"images/Actian.png",
            title: 'OpenROAD',
            description: 'OpenROAD gives you the ability to develop and deploy mission-critical, n-tier business applications on a variety of platforms.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/openroad/index.html#page/Welcome/Welcome_to_OpenROAD_Documentation.htm'
        },
        
        {
            id: 3,
            image:"images/HCL_OneDB_Color_Icon.svg",
            title: 'OneDB',
            description: 'It gives you a fast, affordable path to the cloud with minimal risk. You gain versatility, reliability, and ease of use to address data management and application development challenges.',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcl-software.com/onedb/index.html'
        },
                                   
        {
            id: 5,
            image:"images/HCL_SafeLinx_Color_Icon.svg",
            title: 'SafeLinx',
            description: 'Provides secure web-based and client-based access to enterprise applications.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/safelinx/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Sametime_Color_Icon.svg",
            title: 'Sametime',
            description: 'Secure video meetings and chat for the enterprise.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/sametime/welcome/index.html'
        },
        {
            id: 5,
            image:"images/Traveler.svg",
            title: 'Traveler, including Verse mobile',
            description: 'Provides enterprise-level Domino email, calendar, and contacts synchronization for mobile devices.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/traveler/welcome/index.html'
        },
        {
            id: 5,
            image:"images/Traveler.svg",
            title: 'HCL Traveler for Microsoft Office (HTMO)',
            description: 'Allows users to connect to the Domino mail server to access their mail, calendar, and contacts through the Outlook client.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/traveler/welcome/index.html'
        },
        {
            id: 6,
            image:"images/HCL_T-VREX_Color_Icon.svg",
            title: 'T-VREX',
            description: 'A leap into the future. This innovative and versatile solution is integrated into HCL Workload Automation, enabling a complete and immersive troubleshooting and collaboration experience.',
            category: 'Innovations',
            link: 'https://help.hcl-software.com/solutions/tvrex/index.html'
        },
        {
            id: 1,
            image:"images/HCL_UniversalOrchestrator_Color_Icon.svg",
            title: 'Universal Orchestrator',
            description: 'Discover HCL Universal Orchestrator and learn how to manage both multi-cloud and hybrid environments from a single point of control.',
            category: 'Automation',
            link: 'https://help.hcl-software.com/UnO/v1.1/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Unica_Color_Icon.svg",
            title: 'Unica',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/unica/uc/unica_welcome_portal.html'
        },
        {
            id: 5,
            image:"images/HCL_Discover_Color_Icon.svg",
            title: 'Unica Discover',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcl-software.com/UnicaDiscover/UD/index.html'
        },
        
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Vector',
            description: 'Discover how easy business users can access the latest data for fast analytics across your data centers and clouds.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/vector/#page/Welcome/Welcome_to_Vector_Documentation.htm'
        },
        {
            id: 4,
            image:"images/HCL_VersionVault_Color_Icon.svg",
            title: 'VersionVault',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Verse_Color_Icon.svg",
            title: 'Verse',
            description: 'User-centric email and messaging experience including social analytics and advanced search capabilities.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/verse_onprem/welcome/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Volt_MX_Color_Icon.svg",
            title: 'Volt MX',
            description: 'Low-code application development platform for both professional and citizen developers.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/docs/voltmx-prod-doc-landing-page/index.html'
        },
        {
            id: 5,
            image:"images/HCL_Volt_MX_Color_Icon.svg",
            title: 'Volt MX Go',
            description: 'Extends the value of Domino applications with the Volt MX platform.',
            category: 'Digital Solutions',
            link: 'https://help.hcl-software.com/docs/voltmx-prod-doc-landing-page/index.html'
        },
        {
            id: 1,
            image:"images/HCL_WorkloadAutomation_Color_Icon.svg",
            title: 'Workload Automation',
            description: ' Discover the potential of HCL Workload Automation, a platform designed to efficiently automate all your enterprise processes across diverse environments.',
            category: 'Automation',
            link: 'https://help.hcl-software.com/workloadautomation/welcome/index.html'
        },
        {
            id: 3,
            image:"images/Actian.png",
            title: 'Zen',
            description: 'Trust the Zen family of databases—Zen Core, Zen Edge, Zen Enterprise, and Zen Cloud Server—for a small footprint, low maintenance, high-performance database management system.',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/zen/#page/Welcome/Welcome_to_Zen_2fPSQL_Documentation.htm'
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Transformation_Color_Icon.svg",
            title: 'Z and I Emulator for Transformation',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zie/zietrans/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Web_Color_Icon.svg",
            title: 'Z and I Emulator for Web (ZIEWeb)',
            description: 'HCL ZIE for Web is a security-rich browser emulator solution that simplifies access to business critical applications & data.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zie/zieweb/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Windows_Color_Icon.svg",
            title: 'Z and I Emulator for Windows (ZIEWin)',
            description: 'HCL ZIE for Windows is a highly reliable emulator explicitly designed for Windows operating system users to connect with mainframe or host system. HCL ZIE for Windows is the best choice for mainframe customers worldwide who demand the highest level of reliability, security and performance.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zie/ziewin/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Z_Abend_Investigator_Color_Icon.svg",
            title: 'Z Abend Investigator (ZAI)',
            description: 'Efficiently diagnose root-cause of application failures (abends).',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zai/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Z_Asset_Optimizer_Color_Icon.svg",
            title: 'Z Asset Optimizer (ZAO)',
            description: 'Discover, manage, and optimize mainframe software assets.',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zao/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Z_Data_Tools_Color_Icon.svg",
            title: 'Z Data Tools (ZDT)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zdt/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Mainframe_ZCC.png",
            title: 'Z Common Components (ZCC)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: 'https://help.hcl-software.com/zcc/welcome/index.html'
        },
        {
            id: 7,
            image:"images/HCL_Mainframe_ZLV.png",
            title: 'Z License Verification (ZLV)',
            description: 'Intro',
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
                                <img class='images' src=${image}></img>
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${description}</p>
                                <a href="${link}" target="_blank" ></a>
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