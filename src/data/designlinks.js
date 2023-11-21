const designlinks = [
    {
        id:"1",
        featured: true,
        title:"Star Wars",
        image:"starwars.png",
        link:"https://starwars-flame.vercel.app/",
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","React"],
        libraries: ["Bootstrap","React-Router-DOM"],
        images:["https://drive.google.com/uc?export=download&id=1RCasti3yBrHvX8_a05i9T4LsnKkjoU7f","https://drive.google.com/uc?export=download&id=1Xd7E_pRxvnl1j5GrGy-U6FFQj5TGuHaK","https://drive.google.com/uc?export=download&id=1YdgEBDr-TsWvHczwUo2N8bLf243OwFcj","https://drive.google.com/uc?export=download&id=1_eH_JnIljJURIKYqw8s2KL-PPn0kTYmj","https://drive.google.com/uc?export=download&id=1sXfwas6iCZHi3LLGFBG_BtlgpOpahUNP","https://drive.google.com/uc?export=download&id=1PnL01VSf6oETpSPmf3OykCv87hiejVNI"],
        content:{
            overview: ["Star Wars is Star Wars Universe descriptive website. "],
            details: ["It uses an API to fetch all the data shown in the website. Each Category shows data in two forms- a list view and a grid view."],
        }
    },
    {
        id:"2",
        title:"Visualise",
        featured: false,
        image:"visualise.png",
        link:"https://visualise-imran.vercel.app/",
        images:["https://drive.google.com/uc?export=download&id=1Wqf1prRRlxWAoDI5fIwt6czD2mCfTk_C","https://drive.google.com/uc?export=download&id=1ou2_esMZjf6IBqGpTQ-uuOOnF1oNI4-w","https://drive.google.com/uc?export=download&id=1HvOLD_zrWYdsPmp6HSth6Kn9XgB91CwW","https://drive.google.com/uc?export=download&id=1BFXpsB4AYgXaGZqFkXawoGV_7tP3c-OP"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","React"],
        libraries: ["Bootstrap","React-Router-DOM","Axios","Recharts"],
        content:{
            overview:["I made this project to learn API fetching and graphs."],
            details:["It's a single page application (SPA) with 2 views. The Landing Page contains a Navbar and a Footer component.","There is only a button \"Get Data\" in the middle of the page. Upon pressing the button \"Get Data\", the page re-directs to \"/chartData\".", "This page has a Histogram that displays the data corresponding to the frequency of top 20 most repeated words from the API \" https://www.terriblytinytales.com/test.txt \".","There is an \"EXPORT\" button below the graph, which downloads the .csv file for the data displayed in the graph.",]
        }
    },
    {
        id:"3",
        title:"Kanban Clone",
        featured: false,
        image:"kanban.png",
        link:"https://kanban-clone-three.vercel.app/",
        images:["https://drive.google.com/uc?export=download&id=1FcTTSPYGWiOpZaMCI5HUz7WT7KG2nTAa","https://drive.google.com/uc?export=download&id=1NhfczksWbO1BJlAFEsun0xp-s6Phx_hR","https://drive.google.com/uc?export=download&id=1knoQdoKBiEOJqcWoXcxmnx6D-D0EJFth","https://drive.google.com/uc?export=download&id=1P_UN4tt7c_s-5FMuKLMNeD9iAMvuSzli"],
        stack: ["HTML", "CSS", "JavaScript","React"],
        libraries: ["Bootstrap","React-Router-DOM"],
        content:{
            overview:["Kanban clone as the name suggests is a cheap clone of the Kanban app. It is used to keep track of ongoing tasks."],
            details:["3 boards namely TO DO, ON GOING and COMPLETED has cards that can be moved between them.","The cards can be dragged and dropped."],
        }
    },
    {
        id:"4",
        title:"Board",
        featured: true,
        image:"board.png",
        link:"https://listed-imran.vercel.app/",
        images:["https://drive.google.com/uc?export=download&id=1yArChTVV_1pAzNxbbSHbJ4pI7hMaY0Dq","https://drive.google.com/uc?export=download&id=1BxWUOFL2cMW91MJ6X-zQcKHHXCqwS8bL","https://drive.google.com/uc?export=download&id=1ZBC6nUqaZxlNB7KI9Sv_C-UQ7vxYPAX4","https://drive.google.com/uc?export=download&id=1oYPY53s8Lc54gqmIDjBruNXCg2-SeLKs","https://drive.google.com/uc?export=download&id=1CmGRo2A3wVMDyDBf8TSgS9OPF_JBQWvx","https://drive.google.com/uc?export=download&id=1hA_QNqSPEdIJEt7VuUiRRy_GqwF2v1GK"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","React"],
        libraries: ["Bootstrap","React-Router-DOM"],
        content:{
            overview:["Board is a Dashboard for data analysis and Administration.","It has only 2 pages. The login page and the dashboard page."],
            details:["There is an authentication system for logging in.","Each user gets their own customised dashboard."],
        }
    },
    {
        id:"5",
        title:"Leafy Leaks",
        featured: true,
        image:"leafyleaks.png",
        link:"https://cheerful-slippers-jay.cyclic.app/",
        images:["https://drive.google.com/uc?export=download&id=15DbuMX4nYJgTJGrVG0VaazxGKpUsNdcx","https://drive.google.com/uc?export=download&id=1PkD7CUjmYMXGNJy75-Y88X9ydUH8dXbB","https://drive.google.com/uc?export=download&id=1QVCZ9Li9VCCv5jTbMuDrTVFNw5_gJ_LZ","https://drive.google.com/uc?export=download&id=16darnex9wGji_eHvi0rVu7SAoNa2W1GO","https://drive.google.com/uc?export=download&id=16xuFsHdSpDYC1_c-rM2onVCzi9BhVvtn","https://drive.google.com/uc?export=download&id=14DqiNs2hyIm3lYZbYd8E8rPY0rCRPuD9","https://drive.google.com/uc?export=download&id=1UEzeu2BKpGDu-O4kxECrBTGb8nz-a9ZO"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","React","Node","express","MongoDB"],
        libraries: ["Bootstrap","React-Router-DOM","JWT","Mongoose","bcrypt"],
        content:{
            overview:["Leafy Leaks is a Plants Wikipedia and more. It was developed as a free website to provide information to plantation owners and hobbiests and farmers, who need information on various plant types.","It also has a personalised dashboard for each user."],
            details:["Users can Login to their account to see their personal dashboard, their favorite plants and search histories.","They can also provide and publish their own articles in the blogs sections.","It is a website for the people and by the people."],
        }
    },
    {
        id:"6",
        title:"MIR Cakes",
        featured: true,
        image:"mircakes.png",
        link:"https://mdimranraj.github.io/Cake-Design-Suggestor/",
        images:[],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap"],
        content:{
            overview:["MIR Cakes is a Cakes Website.","It provides designs and recipes for various cakes and for various occasions."],
            details:["It has cakes for different categories, from old and young to children.","You can make the cake yourself by looking at the recipe provided.", "Thank us later."],
        }
    },
    {
        id:"7",
        title:"Cassette",
        featured: false,
        image:"cassette.png",
        link:"https://cassette-azure.vercel.app/",
        images:[],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","React"],
        libraries: ["Bootstrap","React-Router-DOM"],
        content:{
            overview:["Cassette is a online video store.","You can save your favorite YOUTUBE videos here."],
            details:["You can set Buckets or Category to save your videos.","Inside the buckets you can save your videos.","The videos are played online."],
        }
    },
    {
        id:"8",
        title:"Coding Ninjas LPU",
        featured: true,
        image:"cnlpu.png",
        link:"https://coding-ninjas-lpu.netlify.app",
        images:[],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap","JQuery"],
        content:{
            overview:["Coding Ninjas LPU is the official website for the CN-LPU chapter.","It is an information website to know about the chapter."],
            details:["It was built using standard web technology, and does not claim any frameworks.","It has several pages providing various informations, from latest News to member details."],
        }
    },
    {
        id:"9",
        title:"Sushruta",
        featured: false,
        image:"sushruta.png",
        link:"https://mdimranraj.github.io/Sushruta",
        images:[],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap"],
        content:{
            overview:["Sushruta was built as a prototype for Smart India Hackathon 2022 by the Govt. Of India.","It is a concept that could revolutionize the Indian Medical Infrastructure."],
            details:["Sushruta tackles with many modern problems in the medical system including transparency, medical history, bed availabality etc.","It also proposes a plan to put a permanent stop to Quacks.","Transparency helps the patient to see the genuinity in their treatment."],
        }
    },
    {
        id:"10",
        title:"Portfolio Part 1",
        featured: false,
        image:"portfolio1.png",
        link:"https://mdimranraj.github.io/own-website/",
        images:[],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap"],
        content:{
            overview:["This is the very first portfolio project that I built."],
            details:["It was built using standard web technologies.","No frameworks were used."],
        }
    },
    {
        id:"11",
        title:"Fitness Club",
        featured: false,
        image:"fitnessclub.png",
        link:"https://mdimranraj.github.io/fitness-club/",
        images:[],
        stack: ["HTML", "CSS", "JavaScript"],
        libraries: null,
        content:{
            overview:["Fitness club website is a simple website for a FITNESS CENTER."],
            details:["It was built using HTML, CSS and Javascript","It has multiple pages that inform about the Fitness Center."],
        }
    }, 
]

export default designlinks;