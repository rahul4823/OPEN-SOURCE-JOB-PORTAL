const jobs = [
    {
      title: "Software Engineer",
      image: "software-engineer.svg",
      details:
        "Responsible for designing, developing and maintaining software systems and applications.",
      openPositions: "122",
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3909117622&keywords=software%20engineer&origin=JOBS_HOME_KEYWORD_AUTOCOMPLETE&refresh=true",
    },
  
    {
      title: "Data Scientist",
      image: "data-scientist.svg",
      details:
        "Seeking a Data Scientist with expertise in data analysis, machine learning, and statistical modeling to extract insights, drive business decisions, and develop predictive models..",
      openPositions: "23",
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3932434925&geoId=102713980&keywords=data%20scientist&location=India&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    },
  
    {
      title: "Project Manager",
      image: "project-manager.svg",
      details:
        "Seeking a highly organized and proactive Project Manager to lead and oversee projects from conception to completion, ensuring timely delivery, adherence to budget, and achievement of project goals.",
      openPositions: "81",
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3927359530&geoId=102713980&keywords=project%20manager&location=India&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    },
  
    {
      title: "hr Manager",
      image: "icons8-hr-manager-64.png",
      details:
        "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
      openPositions: "61",
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3941314228&geoId=102713980&keywords=hr%20Manager&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    },
  
    {
      title: "Sales Representative",
      image: "sales-representative.svg",
      details:
        "Responsible for reaching out to potential customers and closing sales deals.",
      openPositions: "34",
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3912993459&geoId=102713980&keywords=Sales%20Representative&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    },
  
    {
      title: "Marketing Manager",
      image: "marketing-manager.svg",
      details:
        "Responsible for creating and executing marketing strategies to promote a company or product.",
      openPositions: "21",
      link: "https://www.linkedin.com/jobs/search/?currentJobId=3924203611&geoId=102713980&keywords=Marketing%20Manager&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    },

    {
        title: "SEO Analyst",
        image: "presentation.png",
        details:
          "Seeking an SEO Analyst to develop, implement, and optimize search engine strategies to increase website traffic and improve rankings on search engines.t.",
        openPositions: "37",
        link: "https://www.linkedin.com/jobs/search/?currentJobId=3920628387&keywords=seo%20analyst&origin=SUGGESTION",
      },

      {
        title: "java developer",
        image: "java.png",
        details:
          "Seeking a skilled Java Developer with experience in building high-performing, scalable, enterprise-grade applications.",
        openPositions: "28",
        link: "https://www.linkedin.com/jobs/search/?currentJobId=3925422112&geoId=102713980&keywords=java%20developer&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
      },

      {
        title: "associate",
        image: "icons8-associate-64.png",
        details:
          "Seeking a detail-oriented associate to assist with administrative tasks, customer service, and sales support in a dynamic, fast-paced environment",
        openPositions: "11",
        link: "https://www.linkedin.com/jobs/search/?currentJobId=3940356319&distance=25&f_WT=2&geoId=105556991&keywords=associate&origin=JOB_SEARCH_PAGE_KEYWORD_HISTORY&refresh=true",
      },

      {
        title: "FullStackDeveloper",
        image: "icons8-full-stack-64.png",
        details: 
        "Seeking a skilled Full Stack Developer with expertise in front-end and back-end technologies to design, develop, and maintain web applications, ensuring high performance and responsiveness.",
        openPositions: "3",
        link: "https://www.linkedin.com/jobs/search/?currentJobId=3924990220&geoId=102713980&keywords=FullStackDeveloper&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
      },

      {
        title: "ReactDeveloper",
        image: "icons8-react-100.png",
        details: 
          "Seeking a skilled React Developer to build and maintain dynamic web applications, ensuring optimal performance and a seamless user experience.",
        openPositions: "23",
        link: "https://www.linkedin.com/jobs/search/?currentJobId=3943436433&distance=25&f_WT=2&geoId=105556991&keywords=react%20developer&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
      },

      {
        title: "hr intern",
        image: "icons8-human-resources-50.png",
        details: 
        "Seeking a proactive HR Intern to assist with recruitment, employee onboarding, and administrative tasks, while gaining hands-on experience in HR functions.",
        openPositions: "13",
        link: "https://www.linkedin.com/jobs/search/?currentJobId=3939463273&distance=25&f_WT=2&geoId=105556991&keywords=hr%20intern&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
      },
  ];
  document.addEventListener("DOMContentLoaded", function () {
    const jobsHeading = document.querySelector(".jobs-list-container h2");
    const jobsContainer = document.querySelector(".jobs-list-container .jobs");
    const jobSearch = document.querySelector(".jobs-list-container .job-search");

    let searchTerm = "";

    if (jobs.length == 1) {
        jobsHeading.innerHTML = `${jobs.length} Job`;
    } else {
        jobsHeading.innerHTML = `${jobs.length} Jobs`;
    }

    const createJobListingCards = () => {
        jobsContainer.innerHTML = "";

        jobs.forEach((job) => {
            if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                let jobCard = document.createElement("div");
                jobCard.classList.add("job");

                let image = document.createElement("img");
                image.src = job.image;

                let title = document.createElement("h3");
                title.innerHTML = job.title;
                title.classList.add("job-title");

                let details = document.createElement("div");
                details.innerHTML = job.details;
                details.classList.add("details");

                let detailsBtn = document.createElement("a");
                detailsBtn.href = job.link;
                detailsBtn.innerHTML = "More Details";
                detailsBtn.classList.add("details-btn");

                let openPositions = document.createElement("span");
                openPositions.classList.add("open-positions");

                if (job.openPositions == 1) {
                    openPositions.innerHTML = `${job.openPositions} open position`;
                } else {
                    openPositions.innerHTML = `${job.openPositions} open positions`;
                }

                jobCard.appendChild(image);
                jobCard.appendChild(title);
                jobCard.appendChild(details);
                jobCard.appendChild(detailsBtn);
                jobCard.appendChild(openPositions);

                jobsContainer.appendChild(jobCard);
            }
        });
    };

    createJobListingCards();

    jobSearch.addEventListener("input", (e) => {
        searchTerm = e.target.value;
        createJobListingCards();
    });
});
