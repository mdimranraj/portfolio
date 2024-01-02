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
        featured: true,
        title:"Ask Me",
        image:"askme.png",
        link:"http://askme.000.pe/",
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","PHP", "SQL"],
        libraries: ["Bootstrap"],
        images:["https://drive.google.com/uc?export=download&id=1N4r6KGekEzYul-50-uARSghX5vZJIgm-","https://drive.google.com/uc?export=download&id=1vJm4zoKun2ROXubBOCWz790CW2mdqQI5","https://drive.google.com/uc?export=download&id=1yKjQCy4QU6-6qP_K5LR_82Dwa4YOGRVL","https://drive.google.com/uc?export=download&id=14Dyrk_8a6OKx8-Wq3I_Oa6O1FbfKTMy_"],
        content:{
            overview: ["Ask me creates a platform for effective teaching and learning. A website to ask your doubts to your teachers directly. "],
            details: ["Ask me gives you an anonymous way to clear your doubts. Ask your silly questions and have no fear of being mocked by your peers or teachers. Well you can also give your name if you want credit. "],
        }
    },
    {
        id:"3",
        featured: true,
        title:"Balaji Bakeries",
        image:"balajibakeries.png",
        link:"http://balaji-bakeries.42web.io",
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","PHP", "Laravel", "SQL"],
        libraries: ["Bootstrap", "Stripe"],
        images:["https://drive.google.com/uc?export=download&id=1NhbJxJkjUBrVKANVrobLcIKyyk9LiJkU","https://drive.google.com/uc?export=download&id=17un5osJN8to8j0k5y1hAQLDrh46yEWgB","https://drive.google.com/uc?export=download&id=1UffbIihL_GGB95cHFBNkHaysG73hibPx","https://drive.google.com/uc?export=download&id=1ntSRr37oHEHmvp-Snyhs-kgIiQRZbXgj","https://drive.google.com/uc?export=download&id=1WOlMrb43uyF0-4Tx30z2Y4Fnj46B-UvW","https://drive.google.com/uc?export=download&id=1z6X6zTCxjsQuAgvHSG76h2XHosMfra99","https://drive.google.com/uc?export=download&id=1Dvk1vqZYgFePCwWNraV5z9l72QxCQqN0","https://drive.google.com/uc?export=download&id=1J4SxZzjPb7FQ-sIp2eHilkcdOAciO8eu","https://drive.google.com/uc?export=download&id=1Ve8UpPWFvMM6IaRWgAioGmOn9njKmdux"],
        content:{
            overview: ["Balaji Bakeries is an online cakes and bakeries shop. It provides a variety of bakery items to be ordered online. "],
            details: ["It uses an API by STRIPE for card payments. Cash on Delivery options are available."],
        }
    },
    {
        id:"4",
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
        id:"5",
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
        id:"6",
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
        id:"7",
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
        id:"8",
        title:"MIR Cakes",
        featured: true,
        image:"mircakes.png",
        link:"https://mdimranraj.github.io/Cake-Design-Suggestor/",
        images:["https://drive.google.com/uc?export=download&id=1yw9f21nM01XPEMgwoQSxnmJJ3P7_xG6x","https://drive.google.com/uc?export=download&id=14cJc8p0lBw4jWzSe_9bovFlRGYN2dAyi","https://drive.google.com/uc?export=download&id=1zHN6DE0V-dcsSk5Xtn3CdRpngul96naX","https://drive.google.com/uc?export=download&id=1EiV5UjLG7c7It7uexyKF91NIBzlY-5Pg","https://drive.google.com/uc?export=download&id=1bsFrCX28gSApB-r3jpOq1IvgD9x0y-15"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap"],
        content:{
            overview:["MIR Cakes is a Cakes Website.","It provides designs and recipes for various cakes and for various occasions."],
            details:["It has cakes for different categories, from old and young to children.","You can make the cake yourself by looking at the recipe provided.", "Thank us later."],
        }
    },
    {
        id:"9",
        title:"Cassette",
        featured: false,
        image:"cassette.png",
        link:"https://cassette-azure.vercel.app/",
        images:["https://drive.google.com/uc?export=download&id=184bVo0fDwoWQ_cYcm4sv6B5U0Qkf2bWi","https://drive.google.com/uc?export=download&id=16nPOpR_v1Ujz6MxdtQJxkGTjhtFawoaK","https://drive.google.com/uc?export=download&id=1YNzldKSlB3ngWxd4hctiNd-JfqrlP2Oy","https://drive.google.com/uc?export=download&id=1QtvDS3rbd5zKw1deUV9Oxxn7anzBhyBH"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap","React"],
        libraries: ["Bootstrap","React-Router-DOM"],
        content:{
            overview:["Cassette is a online video store.","You can save your favorite YOUTUBE videos here."],
            details:["You can set Buckets or Category to save your videos.","Inside the buckets you can save your videos.","The videos are played online."],
        }
    },
    {
        id:"10",
        title:"Coding Ninjas LPU",
        featured: true,
        image:"cnlpu.png",
        link:"https://coding-ninjas-lpu.netlify.app",
        images:["https://drive.google.com/uc?export=download&id=1abKe5P_HYpO38RnYryaAFICsI73P4YJD","https://drive.google.com/uc?export=download&id=1sdcaBlBzw5t3O7OglbDFVvyHh90vbLyp","https://drive.google.com/uc?export=download&id=1oTKmvy5QV2edyobd6y6A4AlDj-zjqc-G","https://drive.google.com/uc?export=download&id=1LeLn4gxhxiPIs0UiaPTjEJof77ExCI8M","https://drive.google.com/uc?export=download&id=1NmEeJ0AkRIOGxFoTplg5c2jaqAPD1Zw3","https://drive.google.com/uc?export=download&id=1fXA72MJiwrBCD6WASkU8QjV7MY3ILfvf"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap","JQuery"],
        content:{
            overview:["Coding Ninjas LPU is the official website for the CN-LPU chapter.","It is an information website to know about the chapter."],
            details:["It was built using standard web technology, and does not claim any frameworks.","It has several pages providing various informations, from latest News to member details."],
        }
    },
    {
        id:"11",
        title:"Sushruta",
        featured: false,
        image:"sushruta.png",
        link:"https://mdimranraj.github.io/Sushruta",
        images:["https://drive.google.com/uc?export=download&id=1LBN6YvQIPs5Toew_GkxYWVpiNYZDPq38","https://drive.google.com/uc?export=download&id=1LiJnY01YRxWoBL8W9uVehQbwQQANVRWt","https://drive.google.com/uc?export=download&id=127wND-rXnNLymRIOjwG4P54dYp0bEP_W","https://drive.google.com/uc?export=download&id=1zam_QCPrmVOLtgwFyLTrOvPdeEFbfWB5","https://drive.google.com/uc?export=download&id=1Ni4RGVomM_FUM-immDRsFhdKX7hwPJ4F","https://drive.google.com/uc?export=download&id=1GQ1-5IicOzkfMrYb-yHDms8mbAie5z76","https://drive.google.com/uc?export=download&id=1fMM_jvUBZv6zTES4Vcfq0FDm7rYt4gdx","https://drive.google.com/uc?export=download&id=11srWDxry3P4GpVsbsfzWOXaZs31v3x90"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap"],
        content:{
            overview:["Sushruta was built as a prototype for Smart India Hackathon 2022 by the Govt. Of India.","It is a concept that could revolutionize the Indian Medical Infrastructure."],
            details:["Sushruta tackles with many modern problems in the medical system including transparency, medical history, bed availabality etc.","It also proposes a plan to put a permanent stop to Quacks.","Transparency helps the patient to see the genuinity in their treatment."],
        }
    },
    {
        id:"12",
        title:"Portfolio Part 1",
        featured: false,
        image:"portfolio1.png",
        link:"https://mdimranraj.github.io/own-website/",
        images:["https://drive.google.com/uc?export=download&id=1eMNZSc8qh_XpYU2I8KZ4Tj3Kx48V9geS","https://drive.google.com/uc?export=download&id=1QHasLYoBk1Z9JycFlNjgP68uQTyZpi7v","https://drive.google.com/uc?export=download&id=1EQ-gtiibBpandZmcqCMuXqMmuMYksy9P","https://drive.google.com/uc?export=download&id=1h5H3L3UzuP-p_ifiRUJPhXUxZyXQ8mdj","https://drive.google.com/uc?export=download&id=1Dhcjq3apPSg6DrjFv8VYdMcn5NgBTHQT"],
        stack: ["HTML", "CSS", "JavaScript","Bootstrap"],
        libraries: ["Bootstrap"],
        content:{
            overview:["This is the very first portfolio project that I built."],
            details:["It was built using standard web technologies.","No frameworks were used."],
        }
    },
    {
        id:"13",
        title:"Fitness Club",
        featured: false,
        image:"fitnessclub.png",
        link:"https://mdimranraj.github.io/fitness-club/",
        images:["https://drive.google.com/uc?export=download&id=1vCKKbb2zUwO4KgYHNY4g_p08DqwC6ZTb","https://drive.google.com/uc?export=download&id=1_WI5G2eRuphap2ITR9ygONJKzse-a1Vk","https://drive.google.com/uc?export=download&id=1Iou8YpGjxpTcoHzCZAUMQEa8q8yk7GPY","https://drive.google.com/uc?export=download&id=1eKe4KwCAV1MjyzbkUDqHKumGtf-N8Ijb","https://drive.google.com/uc?export=download&id=1d7YbdP2lS9vRHkWPNVGFOVOmbVOF4y0t","https://drive.google.com/uc?export=download&id=1uRefbM96kCNYfhGcye7qOSD6_BhkcOSD","https://drive.google.com/uc?export=download&id=1FjXDmT3SYSZDE56f3-CCi5jMtC0rcwGl"],
        stack: ["HTML", "CSS", "JavaScript"],
        libraries: null,
        content:{
            overview:["Fitness club website is a simple website for a FITNESS CENTER."],
            details:["It was built using HTML, CSS and Javascript","It has multiple pages that inform about the Fitness Center."],
        }
    }, 
]

export default designlinks;