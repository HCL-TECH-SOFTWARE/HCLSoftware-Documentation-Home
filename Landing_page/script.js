/*Function for filtering the cards list based on categories*/

 const btns = [
    {
        id: 1,
        name: 'Automation'
    },
    {
        id: 2,
        name: 'Commerce and Marketing'
    },
    
    {
        id: 3,
        name: 'Data, Analytics and Insights'
    },
    {
        id: 4,
        name: 'Secure DevOps'
    },
    {
        id: 5,
        name: 'Digital Solutions'
    },
    {
        id: 6,
        name: 'Innovations'
    },
    {
        id: 7,
        name: 'Mainframe Solutions'
    },
    ];


 const products = [
        {
            id: 1,
            image:"images/HCL_BigFix_Color_Icon.svg",
            title: 'BigFix',
            description: 'Welcome to the BigFix Platform documentation, where you can find information about how to install, maintain, and use BigFix.',
            category: 'Automation',
            link: 'https://help.hcltechsw.com/bigfix/landing/index.html'
        },

        {
            id: 1,
            image:"images/HCL_WorkloadAutomation_Color_Icon.svg",
            title: 'Workload Automation',
            description: 'Intro',
            category: 'Automation',
            link: 'https://help.hcltechsw.com/workloadautomation/welcome/index.html'
        },
        {
            id: 1,
            image:"images/HCL_UniversalOrchestrator_Color_Icon.svg",
            title: 'Universal Orchestrator',
            description: 'Intro',
            category: 'Automation',
            link: 'https://help.hcltechsw.com/UnO/v1.1/index.html'
        },
        {
            id: 2,
            image:"images/HCL_Commerce_Color_Icon.svg",
            title: 'Commerce',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcltechsw.com/commerce/index.html'
        },
        {
            id: 2,
            image:"images/hh-2.jpg",
            title: 'IntelliService',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcltechsw.com/Intelliservice/home/index.html'
        },
        {
            id: 2,
            image:"images/HCL_Unica_Color_Icon.svg",
            title: 'Unica',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcltechsw.com/unica/uc/unica_welcome_portal.html'
        },
        {
            id: 2,
            image:"images/HCL_Discover_Color_Icon.svg",
            title: 'Unica Discover',
            description: 'Intro',
            category: 'Commerce and Marketing',
            link: 'https://help.hcltechsw.com/UnicaDiscover/UD/index.html'
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'Avalanche Cloud Data Platform',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: "https://docs.actian.com/avalanche/index.html#page/Welcome/What's_New_in_Actian_Warehouses.html"
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'Vector',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/vector/#page/Welcome/Welcome_to_Vector_Documentation.htm'
        },
        {
            id: 3,
            image:"image/dd-2.jpg",
            title: 'DataConnect',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/dataconnect/#page/Welcome/Welcome_to_DataConnect_Documentation.htm'
        },
        {
            id: 3,
            image:"images/HCL_Link_Color_Icon.svg",
            title: 'Link',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcltechsw.com/hcllink/index.html'
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'Integration Manager',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/integrationmanager/#page/Welcome/Welcome_to_Integration_Manager_Documentation.htm'
        },
        {
            id: 3,
            image:"image/dd-2.jpg",
            title: 'DataFlow',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/dataflow/#page/Welcome/Welcome_to_DataFlow_Documentation.htm'
        },
        {
            id: 3,
            image:"image/dd-2.jpg",
            title: 'Actian X',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/actianx/index.html#page/Welcome/Welcome_to_Actian_X_Documentation.htm'
        },
        {
            id: 3,
            image:"image/dd-2.jpg",
            title: 'Ingres',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/ingres/#page/Welcome/Welcome_to_Ingres_Documentation.htm'
        },
        {
            id: 3,
            image:"image/dd-2.jpg",
            title: 'OpenROAD',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/openroad/index.html#page/Welcome/Welcome_to_OpenROAD_Documentation.htm'
        },
        {
            id: 3,
            image:"image/dd-2.jpg",
            title: 'Enterprise Access',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/entaccess/index.html#page/Welcome/Welcome_to_Enterprise_Access_Documentation.htm'
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'HCL Informix',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcltechsw.com/hclinformix/index.html'
        },
        {
            id: 3,
            image:"images/HCL_OneDB_Color_Icon.svg",
            title: 'OneDB',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://help.hcltechsw.com/onedb/index.html'
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'NoSQL Database',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://esd.actian.com/product/Versant_Object_Database/10/docs/Actian_NoSQL_Database_10_Documentation'
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'NoSQL FastObjects',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://esd.actian.com/product/Versant_FastObjects/14.0/docs/NoSQL_FastObjects_14.0_Documentation'
        },
        {
            id: 3,
            image:"images/dd-2.jpg",
            title: 'Zen',
            description: 'Intro',
            category: 'Data, Analytics and Insights',
            link: 'https://docs.actian.com/zen/#page/Welcome/Welcome_to_Zen_2fPSQL_Documentation.htm'
        },
        {
            id: 4,
            image:"images/HCL_AppScan_Color_Icon.svg",
            title: 'AppScan',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 4,
            image:"images/HCL_Compass_Color_Icon.svg",
            title: 'Compass',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 4,
            image:"images/dd-2.jpg",
            title: 'DevOps Code RealTime',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 4,
            image:"images/dd-2.jpg",
            title: 'DevOps Deploy',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 4,
            image:"images/dd-2.jpg",
            title: 'DevOps Model RealTime',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 4,
            image:"images/HCL_OneTest_Color_Icon.svg",
            title: 'DevOps Test',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
        },
        {
            id: 4,
            image:"images/HCL_DevOps_Color_Vertical.svg",
            title: 'DevOps Velocity',
            description: 'Intro',
            category: 'Secure DevOps',
            link: ''
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
            image:"images/HCL_Digital_Experience_Color_Icon.svg",
            title: 'Digital Experience',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Domino_Color_Icon.svg",
            title: 'Domino',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Domino_Leap_Color_Icon.svg",
            title: 'Domino Leap',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Domino_Volt_Color_Icon.svg",
            title: 'Domino Volt',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Leap_Color_Icon.svg",
            title: 'Leap',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Nomad_Color_Icon.svg",
            title: 'Nomad, including Mobile',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Notes_Color_Icon.svg",
            title: 'Notes',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_SafeLinx_Color_Icon.svg",
            title: 'SafeLinx',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Sametime_Color_Icon.svg",
            title: 'Sametime',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/dd-2.jpg",
            title: 'Traveler',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Verse_Color_Icon.svg",
            title: 'Verse',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 5,
            image:"images/HCL_Volt_MX_Color_Icon.svg",
            title: 'Volt MX',
            description: 'Intro',
            category: 'Digital Solutions',
            link: ''
        },
        {
            id: 6,
            image:"images/HCL_Clara_Color_Icon.svg",
            title: 'Clara',
            description: 'Intro',
            category: 'Innovations',
            link: ''
        },
        {
            id: 6,
            image:"images/HCL_HERO_Color_Icon.svg",
            title: 'HERO',
            description: 'Intro',
            category: 'Innovations',
            link: ''
        },
        {
            id: 6,
            image:"images/HCL_T-VREX_Color_Icon.svg",
            title: 'T-VREX',
            description: 'Intro',
            category: 'Innovations',
            link: ''
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Transformation_Color_Icon.svg",
            title: 'Z and I Emulator for Transformation',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Web_Color_Icon.svg",
            title: 'Z and I Emulator for Web (ZIEWeb)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/HCL_ZIE_Windows_Color_Icon.svg",
            title: 'Z and I Emulator for Windows (ZIEWin)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/HCL_Z_Abend_Investigator_Color_Icon.svg",
            title: 'Z Abend Investigator (ZAI)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/HCL_Z_Asset_Optimizer_Color_Icon.svg",
            title: 'Z Asset Optimizer (ZAO)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/HCL_Z_Data_Tools_Color_Icon.svg",
            title: 'Z Data Tools (ZDT)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/dd-2.jpg",
            title: 'Z Common Components (ZCC)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },
        {
            id: 7,
            image:"images/dd-2.jpg",
            title: 'Z License Verification (ZLV)',
            description: 'Intro',
            category: 'Mainframe Solutions',
            link: ''
        },


    ];

const filters = [...new Set(btns.map((btn)=>
    {return btn}))]

    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p sidebarbutton' onclick='filterItems("+(id)+`)'>${name}</button>`)
    }).join('');


    const categories = [...new Set(products.map((item)=>{
        return item }))]

        const filterItems = (a) => {
            const flterCategories = categories.filter(item);
            function item(value) {
                if(value.id==a) {
                    return(value.id)
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
                                <p class="card-text"></p>
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