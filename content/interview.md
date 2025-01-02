---
menu:
    main:
        name: 'Interview Questions & Responses'
        weight: 3
keywords: "interview,questions,responses,developer,full-stack"
---

# Interview Q/A

I found that I frequently encounter similar lines of questioning when speaking with prospective employers. Most of these questions are aimed to gauge reactions to individual situations and understand technical depth. I've created this page to address these commonly asked questions, as well as provide public reference point for how I approach situations like these.

As I encounter these, I'll be adding them to this post. If it gets too long, I'll make it a post series.


## 1. Describe a case where you faced a very difficult technical challenge? How did you overcome it? What did you learn?

A difficult technical challenge I overcame is an issue I faced when working on an application with a complex reporting system. The platform had a pre-existing reporting system, where PDF reports were generated for users after taking their assessments. The system has a bit of nuanced complexity, but here is the relevant information for this question:

The system as it was had historically laid scores in this PDF on a horizontal scale split into bands of various colors and sizes. The color of the band representing whether it was a "high", "medium" or "low" score, the size of the bar representing the amount of population scores that fell within the bucket for an individual dimension. The position of the user's score along this scale represents where they ranked within that bucket. There are multiple dimensions, each with multiple subdimensions, with the dimension score representing an average of their subdimensions. The goal of this system was to compare the user's aptitude in a given area with the world, and will be referenced as "World Wide Norms" (WWN) throughout this explanation.

Over time, it became clear that this system was confusing for our users, as it's not very straightforward to think about your score in relation to the size of the band your score had fallen within, as the size of the bar varied per-dimension and wasn't a very helpful visual guide. It was decided that normalizing the size of the bands would allow us to more clearly represent how a user's score compares with the rest of the world, and ideally minimize confusion. This would be simplified to have the colors still represent the bucket ranges "high", "medium", and "low", but the positioning of the user's score would now represent which percentile their responses fell within. This will be referred to as the "Percentile" scoring system.

These two systems needed to exist simultaneously, and the system had already stored user's scores in averages. We'd also need this system to allow administrators to pick which reporting system to use, and to switch between them at any point.

In addition, there was growing interest in allowing "interactive" reports, which were these same reports but displayed in a web browser, which was inherently incompatible with the existing system as the reports were rendered server-side using standard Rails templating, while the user-facing portion of our application was running React & GraphQL. As this new percentile reporting method was intended to become the default over time, it made sense to go into the project with these new requirements in mind to ensure that we'd be able re-use components of the reporting system in these interactive reports.

### The Approach

There were several other factors that led me to decide on this implementation, but overall this was my approach:
- Create a React application that will live on it's own, but within reach of the main application so that components can be pulled in for the interactive portion.
- Create a shared set of GraphQL types that the new React-based reporting application can use to pull data from the backend.
- Create a service responsible for converting our scores from our WWN scoring system to the new percentile-based system, using band sizes and averages to calculate the percentile score of the user.
- Re-create the reports in React 1-to-1 with our existing reports, and componentize as much as possible so that they can be pulled in when building the interactive portions.
- Augment our data model to allow report templates to have a linked "percentile" variant that will be what the system switches to when needed by administrators.
- Create a setting that administrators can toggle for a given group of assessments to use the new report format.
- Augment our report generation service to switch between the variants dependent on administrator settings.
- Update our job services to use Puppeteer instead of our existing WKHTMLtoPDF service (for technical reasons outside of the scope of this question)

### How it went

We hired contractors to aid in the effort, and I was in charge of breaking the task down into it's workable components, ensuring they understood the scope of the effort and what their contribution was targeting, and overall orchestrate the whole of the work to ensure we were meeting the requirements. Myself and one of them paired quite a bit to implement the backend changes needed, with smaller finer-detail tasks being handled individually. I had also set up the skeleton of the separate React app and had one of our contractors begin implementing a flexible component that we can use to represent the scales, and after that was completed began piecing the report together with dummy data to get it looking as 1 to 1 with the existing reports as possible. I spent a lot of my time bouncing around between these different pieces and ensuring that all of the backend data could flow seamlessly into what was being built in the front-end, and cleaning up pieces of our jobs and services to allow the work we were doing to slot in nicely to our existing platform. I also worked on adding our Puppeteer rendering system, as there were several annoying bugs with WebKit that were causing inconsistancies between the rendered reports.

The project was a success, and didn't exceed the expected time that I had proposed for completion. There were minor tweaks that were made after it's release, as sometimes not all requirements are not clear from the initial pitch (a global setting to turn percentiles off across the entire application comes to mind).

### What I learned

What I took away from this experience is the value of being able to clearly communicate a large issue and break it down to it's digestible sub-tasks, and to spend time talking to team members to really ensure that they're comforatable and confident in the direction of the project so that these pieces can be crafted separately but still fit together nicely when completed. Most of this work can be done upfront, by creating well-written tickets with itemized tasks, but also with asking questions about what areas might not make sense and being open to suggestions and alternate approaches. When it comes to large technical issues like this with many moving pieces, it's crucial to ensure everyone is on the same page, and their ideas are being considered as someone's first idea doesn't always mean it's the best, even if it's your own.