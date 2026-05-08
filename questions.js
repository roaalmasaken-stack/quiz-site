const questions = [
  {
    "paper": "Paper 1",
    "question": "Which of the following is generally the MOST correct use of a project network diagram?",
    "options": [
      "Showing the project schedule",
      "Documenting task interdependencies",
      "Defining project resources",
      "Defining the project costs"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "At a minimum, periodic forecasts must be done at what interval?",
    "options": [
      "monthly",
      "as requested by the owner",
      "as requested by the project manager",
      "as specified in the contract documents"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "The calculated duration for a project is 28.166. The standard deviation is 5.5. What technique would you use to compute the probability of completing a project on a specific day?",
    "options": [
      "PERT formula",
      "Monte Carlo simulation",
      "Probability analysis",
      "Variance analysis"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "The best reason to use multiple calendars is to",
    "options": [
      "sequence the float for the benefit of the contractor",
      "more accurately show how the project will be built",
      "give specialty contractors the information they need",
      "track owner activities according to their specific calendar"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "During planning you discover that the time needed to complete the project is longer than the time available. What do you do?",
    "options": [
      "Tell the customer that the required date cannot be met",
      "Tell management that the required date cannot be met",
      "Spend time determining what work can be done for the length of time available",
      "Determine options for crashing and/or fast tracking and present recommended option"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Free float is the",
    "options": [
      "difference between the early dates and late dates of an activity",
      "amount of time an activity can be delayed without impacting the early start of the successor",
      "difference in float value of the critical path and the specific activity",
      "difference between the early finish dates and late finish dates"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "In an activity-on-arrow diagram, the boxes represent:",
    "options": [
      "Activities.",
      "Tasks.",
      "Task dependencies.",
      "Arrows."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Every activity in a schedule, except the first and last activity, should have",
    "options": [
      "at least one constraint",
      "a milestone activity as a predecessor",
      "at least one predecessor and at least one successor",
      "a milestone activity as a successor"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "A project manager has increased project costs by US $100,000, but completed the project four weeks earlier than planned. What tool is BEST described here?",
    "options": [
      "Resource leveling",
      "Duration compression",
      "Crashing",
      "Fast tracking"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "An early start constraint dictates",
    "options": [
      "the planned start of an activity",
      "the planned start of a successor activity",
      "an activity's remaining duration",
      "the actual start of an activity"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Dummy activities are NOT used on which type of network diagram?",
    "options": [
      "CPM",
      "Detailed",
      "PDM",
      "PERT"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following is NOT required when performing weekly or monthly schedule updates?",
    "options": [
      "actual finish of activities",
      "original duration of activities",
      "percent complete",
      "Remaining duration of activities"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "During the creation of a project plan, you want to find the critical path. Which tool would you use?",
    "options": [
      "Work breakdown structure",
      "Network diagram",
      "Project control plan",
      "Critical Resource Histograms"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "All of the following describe the critical path of a schedule except:",
    "options": [
      "Determined by network logic and controls overall project completion time",
      "The series of activities having the least amount of total float",
      "Frequently defined as the shortest path through the schedule",
      "Changed by redefining logic or changing activity durations"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "How many types of relationships between activities can be found on a precedence diagram?",
    "options": [
      "4",
      "3",
      "Multiple",
      "2"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Project delays are best analyzed",
    "options": [
      "late in the project",
      "by an expert after the project is finished",
      "contemporaneously with the delay",
      "after contractor or owner acknowledges responsibility"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "All of the following relate to controlling the schedule EXCEPT?",
    "options": [
      "Value analysis.",
      "Crashing",
      "Mandatory",
      "Slack"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Hammock activities in a schedule include all of the following except that they",
    "options": [
      "are included in the forward and backward pass calculations",
      "depict a start-to-finish relationship in the same path",
      "measure the elapsed time between start and completion of a sequence",
      "may be separated by any number of activities in the logic path"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following assumptions regarding CPM is incorrect?",
    "options": [
      "He estimated each task with a single time estimate.",
      "The CPM can have no dummies.",
      "The CPM uses only an activity-on-arrow (AOA) diagram.",
      "The CPM helps to emphasize cost control and schedule flexibility."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following is NOT required while initially planning a project?",
    "options": [
      "A schedule that identifies all the tasks",
      "The duration of each task",
      "Resource identification and leveling",
      "Logical relationships between the tasks"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Project schedules help control all of the following except for",
    "options": [
      "time",
      "cost",
      "resources",
      "quality"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "What should be the output of a meeting to perform root cause analysis and plan schedule recovery?",
    "options": [
      "Corrective action",
      "WBS updates",
      "Activity list updates",
      "Schedule updates"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "The calculation of latest finish and start time for all incomplete activities is referred to as",
    "options": [
      "a backward pass",
      "a forward pass",
      "the remaining duration",
      "just-in-time scheduling"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following are GENERALLY illustrated better by bar charts than network diagrams?",
    "options": [
      "Logical relationships",
      "Critical paths",
      "Resource trade-off",
      "Progress or status"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "A schedule performance index of less than one indicates the project is",
    "options": [
      "ahead of schedule",
      "behind schedule",
      "over budget",
      "under budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "If the project will be completed two weeks ahead of the expected due date, what should you do?",
    "options": [
      "Delay the project for two weeks",
      "Prepare a list of risks that did not occur",
      "Pull resources off the critical path",
      "Increase the scope to consume two more weeks"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "An earned value-based system can use either of which two budgets as the basis?",
    "options": [
      "direct or indirect cost",
      "earned or budgeted cost yearly",
      "labor hours or dollars",
      "linear feet or dollars"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "While evaluating the Gantt chart, the PM determines the project is behind schedule. What should she do?",
    "options": [
      "Obtain approval from the customer to slip",
      "Report findings to management",
      "Evaluate the alternatives with the team",
      "Evaluate the alternatives with the customer"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "If optimistic is 1, pessimistic is 9, and most likely is 8, what is the PERT estimate?",
    "options": [
      "9",
      "7",
      "8",
      "3"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "A schedule organized based on the WBS is useful for reporting to management because",
    "options": [
      "it can be converted from ADM to PDM",
      "it can be manipulated to hide negative aspects",
      "it can be summarized to intermediate levels",
      "it can only be \"crashed\" if organized by WBS"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "A project is 3 months behind but under budget. To make up time and avoid rework, the PM should:",
    "options": [
      "Crash",
      "Fast Track",
      "Redefine the scope",
      "Resource level"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "A total float value less than zero indicates that the",
    "options": [
      "activity is being impacted by an imposed constraint",
      "activity is not on the critical path",
      "activity is either completed or ahead of schedule",
      "schedule variance is favorable"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "What BEST provides the basis for the most likely activity duration estimate?",
    "options": [
      "Labor productivity rates from a professional association",
      "A consultant's estimate of overall labor man-hours",
      "The initial estimate used to budget the project",
      "The schedule for a similar project completed two years earlier"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Total float is defined as the amount of time an activity can be delayed without impacting",
    "options": [
      "the next activity",
      "the end date of that activity",
      "the overall project completion",
      "the buoyancy of a successor activity"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "What is the duration of a milestone?",
    "options": [
      "Undefined",
      "Shorter than the activity it represents",
      "There is no duration.",
      "Same length as the activity it represents"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "When creating a baseline project schedule, the ideal outcome is",
    "options": [
      "more than 10 days of positive total float",
      "between 1 and 10 days of positive total float",
      "a zero total float value on the longest path",
      "less than 10 days of negative total float"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "To shorten the time of critical path tasks as the least costly means, the PM has:",
    "options": [
      "Fast tracked the critical path",
      "Decomposed the critical path WBS",
      "Leveled resources",
      "Crashed the critical path"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "What is a critical path method schedule?",
    "options": [
      "a graphic showing the project plan",
      "a plan for executing a given scope",
      "a network diagram of logically interconnected activities",
      "a list of work by responsible party and when"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "If the estimated completion date occurs after the desired date, what should you do FIRST?",
    "options": [
      "Add resources to the project",
      "Evaluate the possibility of doing more tasks in parallel",
      "Negotiate for more time",
      "Explain to the customer it cannot be done on time"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "What is the result of a forward pass calculation?",
    "options": [
      "the value of free float",
      "the value of total float",
      "the critical path",
      "the early start and early finish dates"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Which BEST describes comparing actual dates with planned dates?",
    "options": [
      "Schedule definition",
      "Resource leveling",
      "Variance analysis",
      "PERT"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "If the schedule is too long, the diagram cannot change, but you have extra resources:",
    "options": [
      "Fast track the project",
      "Level the resources",
      "Crash the project",
      "Perform a value analysis"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Resource planning must take all of the following into account except for",
    "options": [
      "earned value techniques established",
      "types of materials, equipment and labor skills",
      "cash flow (expenditure) limitations",
      "time available to complete the project"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "If earned value is lower than planned value and the trend continues, the outcome will be:",
    "options": [
      "Actual cost will be lower than planned",
      "Estimate at completion will be lower",
      "The project will finish behind schedule",
      "Project will finish below original cost estimate"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following describes a type of schedule logic?",
    "options": [
      "milestone-to-milestone",
      "start-to-finish",
      "forward and backward",
      "critical connection"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Given 38-day critical path and 2-day standard deviation, what is the max project float for a 40-day target?",
    "options": [
      "Zero days",
      "Two days",
      "Four days",
      "Six days"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Hard logic within a CPM schedule refers to activities",
    "options": [
      "with interrelationships that are fixed, worked in sequence",
      "with interrelationships that are fixed",
      "that are on the critical path",
      "that should always be worked in logic sequence"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Using weighted average duration estimates is an example of what mathematical analysis?",
    "options": [
      "Monte Carlo",
      "GERT",
      "CPM",
      "PERT"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "What is the primary difference between ADM and PDM?",
    "options": [
      "ADM uses arrows, PDM uses boxes",
      "ADM is manual, PDM is computerized",
      "PDM is a bar chart with logic, ADM is pure logic",
      "ADM is limited to finish-to-start, PDM is not"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "A heuristic is BEST described as a:",
    "options": [
      "Control tool",
      "Scheduling method",
      "Planning tool",
      "Rule of thumb"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "If a task needs more time and there is enough reserve, who needs to approve the change?",
    "options": [
      "Management",
      "Project manager",
      "Team member",
      "Functional manager"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "The \"baseline\" plan is usually initially reviewed and approved by the",
    "options": [
      "contractor",
      "subcontractors",
      "owner/employer",
      "permitting authority"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "If Task B actually takes 37 hours instead of 25 in the provided network, what is true?",
    "options": [
      "The critical path is 67 hours.",
      "The critical path changes to tasks B, D.",
      "The critical path is A, C, E, F.",
      "The critical path increases by 12 hours."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Longest path is identified by using",
    "options": [
      "driving relationships",
      "total float",
      "free float",
      "primary resource"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "If resource count is more important than time and cost, the BEST course of action is:",
    "options": [
      "Perform a Monte Carlo analysis",
      "Fast track the project",
      "Perform resource leveling",
      "Analyze the life-cycle costs"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "With Task A (2 mo) and B (3 mo) concurrent starting in July, what is the critical path duration?",
    "options": [
      "Two months",
      "Three months",
      "Five months",
      "Six months"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "A task with ES=3, LS=13, EF=9, LF=19:",
    "options": [
      "Is on the critical path.",
      "Has a lag.",
      "Is ahead of schedule.",
      "Is not on the critical path."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following is NOT a construction planning activity?",
    "options": [
      "Periodic Forecasts",
      "Commissioning Schedule",
      "Work Breakdown Structure",
      "Baseline Plan"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following is NOT correct about network diagrams?",
    "options": [
      "Critical path can run over a dummy",
      "All project interdependencies are shown",
      "Slack is time a task can delay without delaying project",
      "The path with the dummy is always the critical path"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "BEST method for estimating a task never done by the company before?",
    "options": [
      "CPM",
      "PERT",
      "Monte Carlo analysis",
      "Activity definition"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Prerequisite for summarizing status using an earned value-based system?",
    "options": [
      "Activities no longer than 30 days",
      "Schedule must be “resource-loaded”",
      "Must use PERT for most likely durations",
      "Diagram must use PDM notation"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Critical path is 6 weeks. Sponsor moves date 2 weeks sooner. If on schedule, what is project slack?",
    "options": [
      "Two weeks",
      "Four weeks",
      "Minus four weeks",
      "Minus two weeks"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "When resource leveling craft labor, the scheduler must:",
    "options": [
      "depend on results for useful realignment",
      "consider breaks in continuity of work",
      "ignore effects as it is theoretical",
      "compare requirement pattern for more deployment"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "All of the following are inputs to schedule development EXCEPT?",
    "options": [
      "Vacation schedules",
      "Need for delay between ordering and installing",
      "Establish interdependencies",
      "Planned start and finish dates for each activity"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Free slack is the time a task can be delayed without delaying the:",
    "options": [
      "Project",
      "Completion date required by customer",
      "Early start of its successor",
      "Project completion date"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Task with ES=3, LS=13, EF=9, LF=19. What is the duration?",
    "options": [
      "3",
      "6",
      "7",
      "10"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Master schedule with five logically tied subprojects. How many critical paths can be found?",
    "options": [
      "at least one",
      "at most two",
      "at least six",
      "at least five"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "How do three critical paths affect the project?",
    "options": [
      "Makes it easier to manage",
      "Increases the project risk",
      "Requires more people",
      "Makes it more expensive"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following will NOT affect the total float calculation?",
    "options": [
      "multiple calendars",
      "start and finish constraints",
      "front end loading",
      "preferential logic"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "BEST tool for showing the team schedule status during execution?",
    "options": [
      "Milestone chart",
      "Gantt chart",
      "Work breakdown structure",
      "Network diagram"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "After receiving duration estimates for a 4-level WBS project, what activity is NEXT?",
    "options": [
      "Create an activity list",
      "Update the WBS",
      "Collect historical records",
      "Duration compression"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Graphical earned value indicator representing both schedule and cost performance?",
    "options": [
      "Budgeted Cost of Work Scheduled",
      "Actual Cost of Work Scheduled",
      "Budgeted Cost of Work Performed",
      "Schedule Performance Index"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "If forecast remaining hours exceed planned hours, which analysis method validates this?",
    "options": [
      "EV-PV",
      "EV/AC",
      "EV/PV",
      "EV-AC"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "The slack of a task is determined by:",
    "options": [
      "Performing a Monte Carlo analysis",
      "Waiting time between tasks",
      "Lag",
      "Time it can delay before delaying critical path"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following is NOT an element of project planning?",
    "options": [
      "earned value analysis",
      "resource budgeting",
      "cost budgeting",
      "schedule development"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "In the provided 7-activity project (A-G), which activities have slack available?",
    "options": [
      "Activity A (2 weeks) and F (1 week)",
      "Activity F (1 week)",
      "No slack available",
      "Activity A (8 weeks)"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "A driving relationship is",
    "options": [
      "a finish-to-start relationship",
      "link between two related activities",
      "link between predecessor and the activity it controls",
      "a critical relationship"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Re-analyzing sequence of activities with least flexibility is using:",
    "options": [
      "Critical path",
      "Flow chart",
      "Precedence diagramming",
      "Work breakdown structure"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "If a calculated activity exhibits negative total float, it is certain the activity:",
    "options": [
      "was completed in the past",
      "has yet to be completed",
      "is on the critical path",
      "is a milestone"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "BEST report for senior management?",
    "options": [
      "Gantt chart",
      "Milestone chart",
      "Project plan",
      "Network diagram"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Primary use of project management software?",
    "options": [
      "Managing a project",
      "Creating and controlling a schedule",
      "Creating a complete project plan",
      "Creating a WBS"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Using average time from past projects to predict future creative work is:",
    "options": [
      "Parametric estimating",
      "PERT",
      "CPM",
      "Monte Carlo"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Which will always describe the critical path?",
    "options": [
      "Path with negative float",
      "Path with zero float",
      "Path with the longest duration",
      "Path with shortest duration and negative float"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Project cost 90k (planned 60k) and is behind schedule. Who has primary responsibility?",
    "options": [
      "Project manager",
      "Senior management",
      "Project sponsor / Owner",
      "Project Management Consultant"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "When to use a network diagram instead of a Gantt chart?",
    "options": [
      "Track progress for the team",
      "Create a WBS",
      "Show interdependencies between tasks",
      "Report to senior management"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Under what circumstances should one use resource-leveling calculations?",
    "options": [
      "provision for float-banking",
      "limited resources on critical path",
      "logic should already account for it",
      "resource limitations may override scheduled dates"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Which estimating method uses one time estimate for each task?",
    "options": [
      "PERT",
      "CPM",
      "Monte Carlo",
      "Control charts"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Task with ES=3, LS=13, EF=9, LF=19. What is the float?",
    "options": [
      "10",
      "6",
      "3",
      "Can not be determined"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Main drawback of critical path method scheduling?",
    "options": [
      "doesn’t account for interdependency",
      "assumes resources are unlimited",
      "allows PDM instead of ADM",
      "requires a backward pass"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Project spent 22k (expected 24k) but should have spent 30k. It is:",
    "options": [
      "Ahead of schedule",
      "Behind schedule",
      "On schedule",
      "Not enough information"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "Correct concerning a change control system?",
    "options": [
      "include method for controlling schedule",
      "focus on cost",
      "concentrate on risk",
      "created during execution"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Characteristic of PDM modeling differently than ADM:",
    "options": [
      "uses arrows for logic",
      "calculates late start/finish",
      "allows multiple relationship types",
      "allows more than one critical path"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "What is the critical path for the 7-activity project described in P.93?",
    "options": [
      "A, C, F",
      "B, C, E and G",
      "D, E and G",
      "Both B, C, E, G and D, E, G."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Optimistic 12, pessimistic 18. What is the standard deviation?",
    "options": [
      "1",
      "1.3",
      "6",
      "3"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Which is true of activity duration estimating?",
    "options": [
      "Estimates should include range of possible results",
      "It is more expensive",
      "Historical data is too old",
      "Critical paths help create original estimates"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 1",
    "question": "Shortest time to complete the 4-task project (Task 1: 1, Task 2: 4, Task 3: 5, Task 4: 10)?",
    "options": [
      "10",
      "9",
      "18",
      "11"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "What does NOT need to be done for a major delay on a non-critical path activity?",
    "options": [
      "Investigate the delay",
      "Reevaluate which path is critical",
      "Change the project schedule",
      "Review slack time for the task"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 1",
    "question": "Optimistic 12, pessimistic 18. What is the most likely estimate?",
    "options": [
      "15 days",
      "13 days",
      "16 days",
      "Unknown, it is a separate estimate"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 1",
    "question": "Which of the following is correct regarding compressing duration?",
    "options": [
      "Crashing always increases risk",
      "Fast tracking may cause rework; crashing costs more",
      "viable only if ahead/under budget",
      "Fast tracking results in less parallel tasks"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 1",
    "question": "The relationships in an activity-on-arrow diagram are:",
    "options": [
      "Finish to start",
      "Finish to finish",
      "All relationship types",
      "Start to start or start to finish"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "In a project network schedule \"Lag\" means?",
    "options": [
      "The amount of time a task can be delayed without delaying the project",
      "The amount of time a task can be delayed without delaying the early start date of its successor",
      "Waiting time",
      "The product of a forward and backward pass"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "A project manager may use ______ to make sure they clearly understand what work is included in each of their work package.",
    "options": [
      "The project scope statement",
      "The contract documents",
      "The detail Network Diagram",
      "The WBS dictionary"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "To manage a project effectively, work should be broken down into small pieces. Which of the following does not describe how far to decompose the work?",
    "options": [
      "Until it has meaningful conclusion",
      "Until it cannot be logically subdivided further",
      "Until it can be done by one person",
      "Until it can be accurately estimated."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The work breakdown structure can be best thought of as an effective aid for ______ communications.",
    "options": [
      "Project Team",
      "Project Organisation",
      "Senior management",
      "Stakeholder"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "The WBS numbering system helps the project team to:",
    "options": [
      "Integrate with the project management software.",
      "Help in cost estimating each work package.",
      "Identify the level in which each element could be found.",
      "Assist us in preparation of sub-contractor packages."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "All the following are characteristics of a project except:",
    "options": [
      "Temporary in nature.",
      "A start and end date",
      "It is repeated every month.",
      "Unique in its end result."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "A project manager is managing a project for the first time. A successful project manager spends most of their time:",
    "options": [
      "Planning with their team.",
      "Planning by themselves.",
      "Studying the technical aspects of the project.",
      "Communicating."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "A project manager is managing a project for the first time. They have to decide on the best organisational structure for the project. Which of the following organisational structures gives the project manager the least amount of authority?",
    "options": [
      "Projectised",
      "Matrix",
      "Strong Matrix",
      "Functional"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "A project manager is managing a project for the first time. They have to decide on the best organisational structure for the project. Which of the following organisational structures gives the project manager the most amount of authority?",
    "options": [
      "Strong Matrix",
      "Projectised",
      "Functional",
      "Matrix"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "The main difference between a project and an operational work is that a project is:",
    "options": [
      "Temporary",
      "Unique",
      "A and B",
      "All the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "A group of related projects managed in a co-ordinated way is called a:",
    "options": [
      "Portfolio",
      "Major project",
      "Programme",
      "Enterprise"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "Which of the following is not a part of the Project Management Office (PMO) function?",
    "options": [
      "Provide project management training",
      "Provide project management software",
      "Centralise and co-ordinate project management",
      "Provide technical engineering support"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "The person who provides the financial resources for the project is called the:",
    "options": [
      "Project Manager",
      "Customer",
      "Team member",
      "Sponsor"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "In a project network schedule \"Total Float\" means?",
    "options": [
      "The amount of time a task can be delayed without delaying the project",
      "The amount of time a task can be delayed without delaying the early start date of its successor",
      "Waiting time",
      "The product of a forward and backward pass"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "In a project network schedule \"Free Float\" means?",
    "options": [
      "The amount of time a task can be delayed without delaying the early start date of its successor",
      "The amount of time a task can be delayed without delaying the project",
      "Waiting time",
      "The product of a forward and backward pass"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "A project manager is using a ______ to show the project schedule to the senior management.",
    "options": [
      "Network Diagram",
      "Milestone Chart",
      "Bar Chart",
      "Flow Chart"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "A project manager is using a ______ to show the project schedule to the project team.",
    "options": [
      "Milestone Chart",
      "Bar Chart",
      "Network Diagram",
      "Flow Chart"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The Critical Path Method (CPM) is used to:",
    "options": [
      "Determine the shortest duration to complete the project",
      "Determine the cost of the project",
      "Determine the quality of the project",
      "Determine the risks of the project"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Critical Path\" is the:",
    "options": [
      "Shortest path in the network diagram",
      "Path with the most amount of float",
      "Path with the least amount of float",
      "Longest path in the network diagram"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "If the duration of a task on the critical path increases, the project duration will:",
    "options": [
      "Decrease",
      "Increase",
      "Stay the same",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "Which of the following is not a tool used in project scheduling?",
    "options": [
      "CPM",
      "PERT",
      "GERT",
      "WBS"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Forward Pass\" is used to determine:",
    "options": [
      "Late start and late finish dates",
      "Total float and free float",
      "Early start and early finish dates",
      "Critical path"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Backward Pass\" is used to determine:",
    "options": [
      "Early start and early finish dates",
      "Total float and free float",
      "Late start and late finish dates",
      "Critical path"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "A task has an Early Start (ES) of 5 and an Early Finish (EF) of 10. The Late Start (LS) is 7 and the Late Finish (LF) is 12. The Total Float is:",
    "options": [
      "2",
      "5",
      "7",
      "12"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "A task has an Early Start (ES) of 5 and an Early Finish (EF) of 10. The Late Start (LS) is 5 and the Late Finish (LF) is 10. This task is:",
    "options": [
      "On the critical path",
      "Not on the critical path",
      "Has a float of 5",
      "None of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "Which of the following relationships is the most commonly used in project scheduling?",
    "options": [
      "Start-to-Start (SS)",
      "Finish-to-Finish (FF)",
      "Finish-to-Start (FS)",
      "Start-to-Finish (SF)"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "A \"Milestone\" in a project schedule has a duration of:",
    "options": [
      "1 day",
      "5 days",
      "0 days",
      "Depends on the project"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Crashing\" a project schedule means:",
    "options": [
      "Adding more resources to critical path tasks to shorten their duration",
      "Doing tasks in parallel instead of in sequence",
      "Reducing the project scope",
      "Cancelling the project"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "\"Fast Tracking\" a project schedule means:",
    "options": [
      "Adding more resources to critical path tasks to shorten their duration",
      "Doing tasks in parallel instead of in sequence",
      "Reducing the project scope",
      "Cancelling the project"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "Which of the following is a disadvantage of \"Crashing\"?",
    "options": [
      "Increases project duration",
      "Increases project cost",
      "Decreases project cost",
      "Decreases project risk"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "Which of the following is a disadvantage of \"Fast Tracking\"?",
    "options": [
      "Increases project duration",
      "Increases project cost",
      "Increases project risk",
      "Decreases project cost"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Resource Leveling\" is used to:",
    "options": [
      "Increase the project duration",
      "Decrease the project cost",
      "Smooth out the resource usage over time",
      "Increase the resource usage"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Resource Leveling\" usually results in:",
    "options": [
      "Shortening the project duration",
      "Increasing the project duration",
      "No change in the project duration",
      "Decreasing the project cost"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Project Baseline\" is:",
    "options": [
      "The original project plan",
      "The latest project plan",
      "The project plan used for comparison with actual performance",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Earned Value Management\" (EVM) is used to:",
    "options": [
      "Measure project performance",
      "Measure project quality",
      "Measure project risk",
      "Measure project scope"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "In EVM, \"Planned Value\" (PV) is:",
    "options": [
      "The actual cost of the work performed",
      "The value of the work planned to be done",
      "The value of the work actually performed",
      "The total project budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "In EVM, \"Actual Cost\" (AC) is:",
    "options": [
      "The actual cost of the work performed",
      "The value of the work planned to be done",
      "The value of the work actually performed",
      "The total project budget"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "In EVM, \"Earned Value\" (EV) is:",
    "options": [
      "The actual cost of the work performed",
      "The value of the work planned to be done",
      "The value of the work actually performed",
      "The total project budget"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Schedule Variance\" (SV) is calculated as:",
    "options": [
      "EV - PV",
      "EV - AC",
      "PV - EV",
      "AC - EV"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Cost Variance\" (CV) is calculated as:",
    "options": [
      "EV - PV",
      "EV - AC",
      "PV - EV",
      "AC - EV"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "A positive \"Schedule Variance\" (SV) means the project is:",
    "options": [
      "Ahead of schedule",
      "Behind schedule",
      "On schedule",
      "None of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "A negative \"Cost Variance\" (CV) means the project is:",
    "options": [
      "Under budget",
      "Over budget",
      "On budget",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Schedule Performance Index\" (SPI) is calculated as:",
    "options": [
      "EV / PV",
      "EV / AC",
      "PV / EV",
      "AC / EV"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Cost Performance Index\" (CPI) is calculated as:",
    "options": [
      "EV / PV",
      "EV / AC",
      "PV / EV",
      "AC / EV"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "An SPI of 0.8 means the project is:",
    "options": [
      "Ahead of schedule",
      "Behind schedule",
      "On schedule",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "A CPI of 1.2 means the project is:",
    "options": [
      "Under budget",
      "Over budget",
      "On budget",
      "None of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Estimate At Completion\" (EAC) is:",
    "options": [
      "The original project budget",
      "The latest estimate of the total project cost",
      "The value of the work performed to date",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Estimate To Complete\" (ETC) is:",
    "options": [
      "The latest estimate of the total project cost",
      "The estimate of the remaining work cost",
      "The original project budget",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "\"Variance Analysis\" in project management involves:",
    "options": [
      "Comparing actual performance with the baseline",
      "Calculating the critical path",
      "Defining the project scope",
      "Identifying project risks"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Critical Path\" can have:",
    "options": [
      "Positive float",
      "Negative float",
      "Zero float",
      "All the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "In a Projectized organisation, the project manager has:",
    "options": [
      "Little authority",
      "High to almost total authority",
      "Moderate authority",
      "No authority"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "In a Strong Matrix organisation, the project manager has:",
    "options": [
      "Little authority",
      "High to almost total authority",
      "Moderate to high authority",
      "No authority"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Project Life Cycle\" consists of:",
    "options": [
      "Initiating, Planning, Executing, Monitoring & Controlling, Closing",
      "Design, Build, Test, Deploy",
      "Start, Middle, End",
      "None of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "\"Stakeholders\" are:",
    "options": [
      "Only the project team",
      "Only the customers",
      "Anyone who is affected by or can affect the project",
      "Only the sponsors"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Scope Creep\" means:",
    "options": [
      "The project scope is decreasing",
      "The project scope is being defined",
      "Uncontrolled changes in the project scope",
      "The project scope is being completed"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Quality Control\" involves:",
    "options": [
      "Planning for quality",
      "Auditing the quality processes",
      "Monitoring and recording results of executing quality activities",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Risk Identification\" should be done:",
    "options": [
      "Only at the beginning of the project",
      "Only at the end of the project",
      "Throughout the project",
      "Only when a problem occurs"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Risk Mitigation\" means:",
    "options": [
      "Ignoring the risk",
      "Transferring the risk to someone else",
      "Reducing the probability or impact of a risk",
      "Accepting the risk"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "\"Procurement Management\" involves:",
    "options": [
      "Managing the project team",
      "Purchasing goods and services from outside the project",
      "Managing the project budget",
      "Managing the project schedule"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Critical Success Factors\" for a project are:",
    "options": [
      "Only completing on time",
      "Only completing under budget",
      "Factors that must be present for a project to be successful",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The project manager's responsibility includes:",
    "options": [
      "Meeting the project objectives",
      "Managing the project team",
      "Communicating with stakeholders",
      "All the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 2",
    "question": "A \"Work Package\" is:",
    "options": [
      "The highest level of the WBS",
      "The lowest level of the WBS",
      "A group of related projects",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "\"Float\" or \"Slack\" is:",
    "options": [
      "The amount of time a task can be delayed without delaying the project",
      "The amount of time a task can be delayed without delaying its successor",
      "A and B",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Path Float\" is:",
    "options": [
      "The float of a single task",
      "The float of a path in the network diagram",
      "The float of the critical path",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "A \"Dummy Task\" in ADM (Activity on Diagram) is used to:",
    "options": [
      "Show a real task",
      "Show a logical relationship",
      "Show a resource constraint",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "The \"Project Charter\" is a document that:",
    "options": [
      "Formally authorises the project",
      "Defines the project scope in detail",
      "Lists the project team members",
      "None of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "\"Lessons Learned\" should be documented:",
    "options": [
      "Only at the end of the project",
      "Throughout the project",
      "Only if the project fails",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 2",
    "question": "If the SPI is 1.1 and the CPI is 0.9, the project is:",
    "options": [
      "Ahead of schedule and over budget",
      "Behind schedule and under budget",
      "Ahead of schedule and under budget",
      "Behind schedule and over budget"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "In attempting to complete the project faster, the project manager looks at the cost associated with crashing each task. The BEST approach to crashing would also include looking at the:",
    "options": [
      "The criticality and the risk impact of crashing each task.",
      "Customer's opinion of what tasks to crash.",
      "Owner’s opinion of what tasks to crash and in which order.",
      "The project phase in which the task is due to occur in."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 2",
    "question": "A project is a _________ effort, undertaken to create a ______________ product or service:",
    "options": [
      "Unique, Temporary",
      "Co-ordinated, Permanent.",
      "Team, Useful.",
      "Temporary, Unique."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "During what Time Management Process are the specific activities that must be performed to produce the deliverables in the WBS identified and documented?",
    "options": [
      "Activity Sequencing",
      "Activity Definition",
      "Schedule Development",
      "Activity Duration Estimating"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "A period of time in work weeks which includes non-working days is called:",
    "options": [
      "Elapsed Time",
      "Duration",
      "Effort",
      "Earned Time"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "The amount of time that an activity can be delayed from its early start without delaying the project end date is called:",
    "options": [
      "Negative Float",
      "Free Float",
      "Total Float",
      "Available Float"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "What are you likely to see as a project progresses in a schedule with must fix dates and little or no slack?",
    "options": [
      "Lots of free float",
      "Idle resources",
      "Negative float",
      "Positive float"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Given the following estimates: Optimistic 3 days, Pessimistic 9 days, and most likely 6 days, what is the PERT weighted average?",
    "options": [
      "6",
      "4",
      "2026-06-03 00:00:00",
      "2026-06-01 00:00:00"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "What is the standard deviation for the estimates in the above problem?",
    "options": [
      "0.6",
      "2",
      "2026-01-05 00:00:00",
      "1"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "In crashing the schedule, you would focus on:",
    "options": [
      "Accelerating as many tasks as possible",
      "Accelerating just the non-critical tasks",
      "Accelerating the performance of tasks on the critical path",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "All the following are tools and techniques of the Activity Duration Estimating process EXCEPT:",
    "options": [
      "Expert judgment",
      "Analogous estimating",
      "Activity-on-node diagramming",
      "Parametric estimating"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "A task has an early start of day 3, a late start of day 13, an early finish of day 9, and a late finish of day 19. What is the float for this task?",
    "options": [
      "3",
      "6",
      "10",
      "11"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "If the optimistic estimate for a task is 12 days and the pessimistic estimate is 18 days, what is the most likely estimate?",
    "options": [
      "15 days",
      "13 days",
      "16 days",
      "Unknown"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Which of the following is correct regarding compressing project duration?",
    "options": [
      "Crashing always increases risk",
      "Fast tracking often results in rework",
      "Crashing is only viable if the project is ahead of schedule",
      "Fast tracking results in fewer parallel tasks"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "The relationships in an activity-on-arrow diagram are:",
    "options": [
      "Finish to finish",
      "Start to start",
      "Start to finish",
      "Finish to start"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Which of the following describes the shortest time to complete the project?",
    "options": [
      "Critical path",
      "Slack time",
      "Expected time",
      "Scheduled time"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Every activity in a schedule, except the first and last activity, should have:",
    "options": [
      "At least one predecessor and at least one successor",
      "A milestone activity as a predecessor",
      "At least one constraint",
      "A milestone activity as a successor"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "A project manager has increased project costs by $100,000, but completed the project 4 weeks earlier. What tool is described here?",
    "options": [
      "Resource leveling",
      "Crashing",
      "Duration compression",
      "Fast tracking"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "An early start constraint dictates:",
    "options": [
      "The planned start of an activity",
      "The planned start of a successor activity",
      "An activity’s remaining duration",
      "The actual start of an activity"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Dummy activities are NOT used on which type of network diagram?",
    "options": [
      "PDM",
      "CPM",
      "Detailed",
      "PERT"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Which of the following is NOT required when performing weekly or monthly schedule updates?",
    "options": [
      "Actual finish of activities",
      "Original duration of activities",
      "Percent complete",
      "Remaining duration of activities"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "During the creation of a project plan, you want to find the critical path. Which tool would you use?",
    "options": [
      "WBS",
      "Project control plan",
      "Network diagram",
      "Critical Resource Histograms"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "All of the following describe the critical path of a schedule EXCEPT:",
    "options": [
      "Determined by network logic",
      "The series of activities having the least amount of total float",
      "Frequently defined as the shortest path through the schedule",
      "Changed by redefining logic"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "How many types of relationships between activities can be found on a precedence diagram?",
    "options": [
      "2",
      "3",
      "4",
      "Multiple"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Project delays are best analyzed:",
    "options": [
      "Late in the project",
      "By an expert after the project is finished",
      "After contractor acknowledges responsibility",
      "Contemporaneously with the delay"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "All of the following relate to controlling the schedule EXCEPT?",
    "options": [
      "Value analysis",
      "Crashing",
      "Mandatory",
      "Slack"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Which of the following are GENERALLY illustrated better by bar charts than network diagrams?",
    "options": [
      "Logical relationships",
      "Critical paths",
      "Resource trade-off",
      "Progress or status"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "A schedule performance index (SPI) of less than one indicates the project is:",
    "options": [
      "Ahead of schedule",
      "Behind schedule",
      "Over budget",
      "Under budget"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "If the project will be completed two weeks ahead of the expected due date, what should you do?",
    "options": [
      "Delay the project for two weeks",
      "Pull resources off the critical path",
      "Prepare a list of risks that did not occur",
      "Increase the scope"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "An earned value-based system can use either of which two budgets as the basis?",
    "options": [
      "Direct or indirect cost",
      "Labor hours or dollars",
      "Earned or budgeted cost yearly",
      "Linear feet or dollars"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "A schedule organized based on the WBS is useful for reporting to management because:",
    "options": [
      "It can be converted from ADM to PDM",
      "It can be manipulated to hide negative aspects",
      "It can be summarized to intermediate levels",
      "It can only be \"crashed\" if organized by WBS"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "A total float value less than zero indicates that the:",
    "options": [
      "Activity is on the critical path",
      "Activity is not on the critical path",
      "Activity is ahead of schedule",
      "Activity is impacted by an imposed constraint"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "What BEST provides the basis for the most likely activity duration estimate?",
    "options": [
      "Labor productivity rates",
      "A consultant's estimate",
      "The schedule for a similar project",
      "The initial estimate used for budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Total float is defined as the amount of time an activity can be delayed without impacting:",
    "options": [
      "The next activity",
      "The end date of that activity",
      "The buoyancy of a successor activity",
      "Overall project completion"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "What is the duration of a milestone?",
    "options": [
      "Undefined",
      "Shorter than the activity it represents",
      "Same length as the activity it represents",
      "There is no duration"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "When creating a baseline project schedule, the ideal outcome is:",
    "options": [
      "A zero total float value on the longest path",
      "Between 1 and 10 days of positive float",
      "More than 10 days of positive total float",
      "Less than 10 days of negative total float"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "What is a critical path method schedule?",
    "options": [
      "A graphic showing the project plan",
      "A plan for executing a given scope",
      "A network diagram of logically interconnected activities",
      "A list of work by responsible party"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "If the estimated completion date occurs after the desired date, what should you do FIRST?",
    "options": [
      "Evaluate the possibility of doing tasks in parallel",
      "Add resources to the project",
      "Negotiate for more time",
      "Explain to the customer it cannot be done"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "What is the result of a forward pass calculation?",
    "options": [
      "The value of free float",
      "The early start and early finish dates",
      "The critical path",
      "The value of total float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Which BEST describes comparing actual dates with planned dates?",
    "options": [
      "Variance analysis",
      "Resource leveling",
      "Schedule definition",
      "PERT"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "If the schedule is too long, the diagram cannot change, but you have extra resources:",
    "options": [
      "Fast track the project",
      "Level the resources",
      "Crash the project",
      "Perform a value analysis"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "The planning process group:",
    "options": [
      "Is not needed on projects",
      "Coordination of people",
      "Basis for successful completion",
      "Successful close"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Which of the following is NOT an input to Activity Sequencing?",
    "options": [
      "Activity list",
      "Mandatory dependencies",
      "Constraints",
      "WBS"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Most commonly used Network Diagramming method?",
    "options": [
      "ADM",
      "PDM",
      "GERT",
      "PERT"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Correct regarding a \"milestone\"?",
    "options": [
      "Activity takes no time",
      "Significant event",
      "Duration of zero",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Project with paths: 10, 12, 14, 14 weeks. True statement?",
    "options": [
      "One critical path",
      "Duration is 14 weeks",
      "Two critical paths",
      "B and C"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "ES 10, EF 20, LS 12, LF 22. Total float?",
    "options": [
      "2",
      "10",
      "12",
      "22"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Tool for schedule development?",
    "options": [
      "Mathematical analysis",
      "Duration compression",
      "Resource leveling",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "In PERT formula, \"M\" stands for:",
    "options": [
      "Maximum duration",
      "Minimum duration",
      "Most likely duration",
      "Mean duration"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "\"Lag\" in a network diagram means:",
    "options": [
      "Waiting time",
      "Relationship between tasks",
      "Overlap between tasks",
      "Lead time"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Progressively elaborating project work is:",
    "options": [
      "Scope definition",
      "Planning",
      "Decomposition",
      "Rolling wave planning"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "CP 50 days, Non-CP 40 days. Float for non-CP?",
    "options": [
      "0 days",
      "10 days",
      "40 days",
      "50 days"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Main output of Schedule Development?",
    "options": [
      "Project schedule",
      "Resource requirements",
      "Activity list",
      "WBS updates"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Resource leveling can:",
    "options": [
      "Change critical path",
      "Increase duration",
      "Reduce fluctuations",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Successor cannot start until predecessor finished?",
    "options": [
      "FS",
      "SS",
      "FF",
      "SF"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "A \"Lead\" in a schedule allows:",
    "options": [
      "Acceleration of successor",
      "Delay in successor",
      "Constraint on predecessor",
      "None"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Analogous estimating is also:",
    "options": [
      "Bottom-up",
      "Top-down",
      "Parametric",
      "Expert judgment"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Parametric estimating involves:",
    "options": [
      "Historical data/Statistical",
      "Single point estimate",
      "PERT formula",
      "Expert judgment only"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Shorten project schedule via:",
    "options": [
      "Crashing",
      "Fast tracking",
      "Reducing scope",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Negative float indicates:",
    "options": [
      "Ahead of schedule",
      "On schedule",
      "Behind target completion",
      "None"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Project with multiple critical paths:",
    "options": [
      "Low risk",
      "High risk",
      "Well-planned",
      "Efficient"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Purpose of a \"dummy\" in ADM?",
    "options": [
      "Show resource usage",
      "Maintain logical relationships",
      "Represent milestone",
      "Show progress"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "In project schedule, \"Data Date\" is:",
    "options": [
      "Start date",
      "Cutoff for reporting",
      "End date",
      "Baseline date"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "\"Critical Path\" is determined by:",
    "options": [
      "Project manager",
      "Customer",
      "Network logic and durations",
      "Sponsor"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Task with zero total float is:",
    "options": [
      "Milestone",
      "On the critical path",
      "Dummy task",
      "High-risk task"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "NOT a characteristic of \"Milestone Chart\"?",
    "options": [
      "Shows key dates",
      "Good for management",
      "Shows interdependencies",
      "Easy to read"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Calculation of ES and EF is:",
    "options": [
      "Backward pass",
      "Forward pass",
      "Variance analysis",
      "Crashing"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Calculation of LS and LF is:",
    "options": [
      "Forward pass",
      "Backward pass",
      "Resource leveling",
      "Fast tracking"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Project with SPI of 1.0 is:",
    "options": [
      "Behind schedule",
      "Ahead of schedule",
      "On schedule",
      "Over budget"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "A \"Hammock\" activity is used to:",
    "options": [
      "Show detailed work",
      "Summarize related activities",
      "Show milestones",
      "Represent dummy"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Example of \"Hard Logic\"?",
    "options": [
      "Preferential logic",
      "Mandatory dependency",
      "Soft logic",
      "External dependency"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Discretionary dependencies are:",
    "options": [
      "Hard logic",
      "Soft logic",
      "Mandatory logic",
      "External logic"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "External dependency?",
    "options": [
      "Testing follows coding",
      "Review follows design",
      "Waiting for permit",
      "Concrete follows formwork"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "To crash schedule, focus on:",
    "options": [
      "Highest cost/lowest float",
      "Lowest crash cost on CP",
      "Longest duration",
      "Most predecessors"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Fast tracking often leads to:",
    "options": [
      "Lower costs",
      "Increased risk of rework",
      "Fewer resources",
      "Zero float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "WBS is an input to:",
    "options": [
      "Activity definition",
      "Cost estimating",
      "Risk identification",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "In PDM, boxes are called:",
    "options": [
      "Links",
      "Nodes",
      "Arrows",
      "Dummies"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Total Float of an activity is:",
    "options": [
      "LF - EF",
      "LS - ES",
      "A or B",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Duration 10, Total Float 5. Free Float is:",
    "options": [
      "0",
      "5",
      "10",
      "0 or more, but not > 5"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Evaluate risk impact on schedule?",
    "options": [
      "Monte Carlo simulation",
      "WBS",
      "Gantt chart",
      "Milestone chart"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "A \"Target Schedule\" is:",
    "options": [
      "Original baseline",
      "Specific version for comparison",
      "Current working schedule",
      "Schedule with no logic"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "NOT a schedule compression technique?",
    "options": [
      "Crashing",
      "Fast tracking",
      "Resource leveling",
      "Scope reduction"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "The \"As-Built\" schedule shows:",
    "options": [
      "Future plans",
      "Original baseline",
      "What actually happened",
      "Resource requirements"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Resource leveling calculation is:",
    "options": [
      "Backward pass",
      "Forward pass",
      "Scheduling after leveling",
      "Network analysis"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Heuristic is best described as:",
    "options": [
      "Control tool",
      "Scheduling method",
      "Planning tool",
      "Rule of thumb"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Most likely duration in PERT?",
    "options": [
      "Optimistic",
      "Pessimistic",
      "Weighted average",
      "Realistic"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Standard deviation of project CP?",
    "options": [
      "Sum of SD of tasks",
      "Square root of sum of variances",
      "SD of longest task",
      "Average of SDs"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Project with SPI 0.75, CPI 0.9. It is:",
    "options": [
      "Ahead/Over budget",
      "Behind/Over budget",
      "Ahead/Under budget",
      "Behind/Under budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Primary benefit of Gantt chart?",
    "options": [
      "Shows interdependencies",
      "Shows critical path",
      "Easy to read and create",
      "Used for complex logic"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "Activity with no successors?",
    "options": [
      "Start activity",
      "Milestone",
      "Finish activity",
      "Dummy"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 3",
    "question": "GERT allows for:",
    "options": [
      "Loops and branching",
      "Only linear logic",
      "Multiple finishes",
      "Dummy activities"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Difference between Total and Free Float?",
    "options": [
      "TF > FF usually",
      "FF is for one activity",
      "TF is for the path",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 3",
    "question": "Probability of finishing on CP date?",
    "options": [
      "0.5",
      "0.95",
      "0.68",
      "1"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Resource histogram shows:",
    "options": [
      "Resource usage over time",
      "Task interdependencies",
      "Critical path",
      "Project costs"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Duration of a summary activity?",
    "options": [
      "Sum of subtasks",
      "Earliest start to latest finish",
      "Average of subtasks",
      "Fixed by manager"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Crashing only works if:",
    "options": [
      "Resources are added to CP",
      "Non-critical tasks are cut",
      "Scope is increased",
      "Quality is reduced"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "\"What-if\" analysis is part of:",
    "options": [
      "Schedule development",
      "Activity definition",
      "Scope planning",
      "Closing"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Project schedule must have:",
    "options": [
      "Start and end dates",
      "Resource names",
      "Cost data",
      "Risks"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Primary goal of schedule control?",
    "options": [
      "Keep project on track",
      "Change baseline often",
      "Add more resources",
      "Inform the owner only"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "SPI = EV / PV. If EV=100, PV=120, SPI is:",
    "options": [
      "0.83",
      "2026-01-02 00:00:00",
      "20",
      "-20"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Late Finish (LF) is determined by:",
    "options": [
      "Forward pass",
      "Backward pass",
      "Manager",
      "Owner"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 3",
    "question": "Total Float = 0 means activity is:",
    "options": [
      "Critical",
      "Delayed",
      "Completed",
      "Non-critical"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 3",
    "question": "Help PM verify assumptions/alternatives?",
    "options": [
      "Corrective action",
      "Historical information",
      "The project plan",
      "The company policy"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "If someone wanted to constrain a project's end date so that any project slippage would cause negative float...",
    "options": [
      "a \"late finish\" constraint on the last activity",
      "an \"early finish\" constraint on the last activity",
      "an \"early finish\" constraint on the first activity",
      "a \"late start\" constraint on the first activity"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "The process of creating a work breakdown structure results in:",
    "options": [
      "The project completion date",
      "List of the risk events",
      "Team buy-in",
      "An activity list"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Activity durations are normally estimated in an intuitive and subjective way. All of the following will improve duration accuracy EXCEPT",
    "options": [
      "Use gross building square footages. The pluses and minuses all average out",
      "Divide activities into smaller activities...",
      "Look at each activity independently and don't follow specific logic paths...",
      "Identify the resources responsible for performing the work..."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "During initiation... What should the project manager include in these meetings that would have the biggest impact on the project?",
    "options": [
      "Review of the action item list",
      "Review of identified risks",
      "Assignment of tasks to team members",
      "Estimating costs"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Who provides the KEY support role in creating project plans?",
    "options": [
      "Project Manager",
      "Project Team",
      "Functional Manager",
      "Senior Management"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Which of the following types of delay will NOT result in a time extension for a contractor?",
    "options": [
      "excusable delay",
      "non-excusable delay",
      "compensable delay",
      "non-compensable delay"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Assumptions made during the planning stage should be:",
    "options": [
      "replaced with facts as soon as they are known",
      "clearly stated as such in an internal memo",
      "a risk that is shifted to the implementers in the field",
      "solely based on a solid experiential database"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "The lowest level of the WBS is:",
    "options": [
      "Control Account",
      "Code of Account",
      "Work Package",
      "Summary Level task"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "When using a detailed estimate... which NOT need to be identified before the activity durations can be calculated?",
    "options": [
      "estimated labor-hours",
      "estimated cost",
      "hours in a standard work day",
      "projected crew size"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Which of the following statements are true about the work breakdown structure?",
    "options": [
      "Each level represents an increasing level of detail",
      "The work breakdown structure is deliverable oriented",
      "The work breakdown structure is a detailed management process",
      "None of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "In analyzing a logical chain of activities in a CPM schedule, what do differing total float values within that chain typically indicate?",
    "options": [
      "Certain activities in the critical path have no successors",
      "The schedule has too much detail...",
      "Different calendars are assigned to certain activities in the logical chain",
      "The schedule is projecting an \"early completion\""
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Which of the following factors contribute to productivity losses:",
    "options": [
      "wasted time",
      "inefficiencies in the work process",
      "Poor training",
      "all of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Characteristics of a code of accounts are:",
    "options": [
      "It uniquely identified each element of the WBS",
      "It includes work packages",
      "It is a numbering system",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "The practice of inserting delays or changes into a CPM schedule update as fragments... is called:",
    "options": [
      "\"But-For\" analysis",
      "Collapsed As-Built analysis",
      "As-Built versus Baseline analysis",
      "Time Impact analysis"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Activities in \"Arrow Diagram\" Critical Path Method schedules:",
    "options": [
      "must be completed before a successor activity can begin",
      "must be completed... and must be either an actual or dummy activity",
      "must show the resource required...",
      "must be either an actual or dummy activity"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "A project Work Package Control Account should:",
    "options": [
      "include sufficient detail...",
      "link directly to the project WBS",
      "make provision for tracking progress...",
      "all are considered part of a W.P. Control Account"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "What is a key first step in developing a critical path method schedule?",
    "options": [
      "drawing the logic diagram",
      "setting out the resource to be used...",
      "drawing a bar chart of the key phases...",
      "defining the execution plan to meet the required scope of work"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "The critical path in a project schedule Is:",
    "options": [
      "a method to determine if there is a cost overrun",
      "a method to project cost and schedule...",
      "a method to identify only those activities that cannot have their schedule slip...",
      "a method of reviewing all schedule activities..."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Tools and techniques for scope planning include:",
    "options": [
      "Performance measurement, product analysis...",
      "Performance reports, performance measurement...",
      "Project analysis, benefit/cost analysis...",
      "Product analysis, benefit/cost analysis, alternative identification, expert judgment"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "One way to shorten your project schedule is to assign three developers... This approach tends to:",
    "options": [
      "Reduce productivity",
      "Increase productivity",
      "Reduce the need for quality auditing...",
      "Improve production proportionately more..."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Each accurately describe total float (TF) in a schedule except:",
    "options": [
      "The amount of time an activity can be delayed without delaying the start... of any other activity",
      "Can be positive or negative",
      "Computed by subtracting early finish from late finish...",
      "The amount of time an activity can be delayed without delaying project completion"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "In a linear schedule ideal resource optimization is indicated when",
    "options": [
      "all activities have the same slope",
      "all activities have differing slopes",
      "when successive activity slopes are generally increasing",
      "when successive activity slopes are generally decreasing"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "What is the work breakdown structure typically used for?",
    "options": [
      "To define the project schedule",
      "To define who is responsible...",
      "To manage scope change",
      "As the basis for organizing and defining the total scope"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Which of the following statements apply to a project code of accounts?",
    "options": [
      "Must segregate cost for effective control",
      "The more detailed the information, the better",
      "PM will require detail... for evaluation of trends",
      "A & C only"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "In the first attempt in resource leveling the project schedule, what would you expect to occur?",
    "options": [
      "required resources to increase during certain periods",
      "required resources to decrease during certain periods",
      "overall project duration to increase",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "PERT estimate for expected duration (O=40, M=50, P=180)",
    "options": [
      "65 weeks",
      "70 weeks",
      "75 weeks",
      "80 weeks"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "The WBS which is an output of scope definition is:",
    "options": [
      "object-oriented grouping...",
      "multi-oriented grouping...",
      "deliverable-oriented grouping...",
      "listing of items outside the scope..."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "The project schedule is not used to determine:",
    "options": [
      "starting and finishing dates",
      "occasional changes to the activity listing",
      "total float",
      "project's budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Activity A (3 days) starts Mon 4th. Successor B (FS, 3 days lag, 4 days dur). Sun is non-work.",
    "options": [
      "Calendar time A start to B finish is 7 days",
      "Calendar time A start to B finish is 11 days",
      "Calendar time A start to B finish is 12 days",
      "Calendar time A start to B finish is 14 days"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Total allowable time for a series of activities minus the required time is:",
    "options": [
      "free float time",
      "activity priority time",
      "total slack time",
      "activity slip time"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Which phase does NOT describe the commonly accepted construction life cycle?",
    "options": [
      "planning and design",
      "claims and disputes",
      "installation",
      "turnover and start-up"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "An example of a \"soft logic\" dependency would be:",
    "options": [
      "Project A depends on prototype Project B",
      "install plumbing and electrical work at the same time...",
      "schedule moving equipment > 5 tons...",
      "wrapping box depends on manual and software"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Which are NOT considerations or constraints of the planning process?",
    "options": [
      "value engineering",
      "project variables",
      "consideration of all stakeholders",
      "interest rate of owner's construction bonds"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Subdivision of major deliverables... into smaller components is called:",
    "options": [
      "Parametric estimation",
      "Scope definition",
      "Feasibility analysis",
      "Benefit-Cost analysis"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Which update procedure is LEAST important in achieving an accurate forecast?",
    "options": [
      "estimating remaining durations",
      "making \"downstream\" logic revisions",
      "entering time impacts of delays...",
      "correct recording of actual start dates"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Which of the following statements apply to a project code of accounts?",
    "options": [
      "Must segregate cost...",
      "More detailed, the better",
      "PM requires detail for trends",
      "A & C only"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Basic element of work performed over a period to complete a project?",
    "options": [
      "WBS Element",
      "Activity",
      "Commodity",
      "Resource"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Relationship for parallel activities requiring a partial start of one activity?",
    "options": [
      "Start to Finish",
      "Finish to Finish",
      "Start to Start",
      "Finish to Start"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Tools and techniques used during schedule development iterations:",
    "options": [
      "CPM, GERT, Resource Requirements",
      "Resource Leveling Heuristics, Math Analysis, Calendars",
      "Duration compression, Leveling Heuristics, PERT",
      "GERT, PERT, Leads and Lags"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Unique identifiers assigned to each item of WBS:",
    "options": [
      "work package codes",
      "Cost codes",
      "Code of accounts",
      "project identifiers"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Change requests can occur due to:",
    "options": [
      "external change like regulation",
      "internal change like design revision",
      "error or omission in scope",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "What is the primary purpose of a milestone chart?",
    "options": [
      "show task dependencies",
      "show resource constraints",
      "show significant events/key deliverables",
      "highlight the critical path"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Latest allowable end time minus earliest allowable end time on an activity:",
    "options": [
      "Remaining Duration",
      "Just-In-Time Scheduling",
      "Total Float",
      "Free Float"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Linear Scheduling velocity diagram axes:",
    "options": [
      "Time and Location",
      "Time and Rate of Progress",
      "Time and Crew Size",
      "Location and Crew Size"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Time Management Process where deliverables in WBS are identified/documented?",
    "options": [
      "Activity Sequencing",
      "Activity Definition",
      "Schedule development",
      "Activity duration estimating"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Likely to see as project progresses with fix dates and little slack:",
    "options": [
      "Positive Float",
      "Negative float",
      "Idle resources",
      "Free float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "In crashing the schedule, you would focus on:",
    "options": [
      "accelerating as many task as possible",
      "accelerating non-critical tasks",
      "accelerating tasks on the critical path",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Time-scaled logic diagrams are:",
    "options": [
      "used to calculate probable duration",
      "only calculated using a computer",
      "logic networks drawn to match calendar",
      "same as pure-logic diagram"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Activity that consumes no time/resources and shows only dependency:",
    "options": [
      "A milestone",
      "A hammock",
      "A dummy",
      "All of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Modification of logical relationship allowing acceleration of successor:",
    "options": [
      "Lead time",
      "Lag time",
      "Either A or B",
      "Both A & B"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Calc duration: 240 hours, crew size 5, 8-hour workday",
    "options": [
      "4 days",
      "5 days",
      "6 days",
      "8 days"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "A good change management plan is",
    "options": [
      "detailed during planning phase",
      "best left up to legal",
      "kept loose for flexibility",
      "forced to fit organizational framework"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Network diagram using nodes to represent activities and arrows for dependency:",
    "options": [
      "AOA",
      "AON",
      "ADM",
      "GERT"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Best chance of schedule being used effectively in field:",
    "options": [
      "detailed specifications in contract",
      "consent/agreement from key personnel",
      "large time contingencies",
      "issue updates frequently"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Earned value: positive schedule variance indicates project is:",
    "options": [
      "under budget",
      "over budget",
      "behind schedule",
      "ahead of schedule"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Final timetable depicting actual dates, costs, resources used:",
    "options": [
      "as-built",
      "baseline",
      "target",
      "contract"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Best way to determine most likely as-built critical path of underway project?",
    "options": [
      "forward-looking critical path of update",
      "progressed portion of baseline",
      "progressed portion of all updates",
      "interview project personnel"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Assuming FS relationships, calculate schedule retaining existing logic means",
    "options": [
      "calculated using original logic",
      "calculated using logic reflecting out-of-sequence progress",
      "no such thing",
      "activity cannot resume until predecessors finished"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Each accurately describe total float except:",
    "options": [
      "time delay without delaying start of any other activity",
      "time delay without delaying project completion",
      "computed by ES/LS or EF/LF subtraction",
      "can be positive or negative"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Document of LEAST value to planner for baseline schedule of bridge near airport?",
    "options": [
      "project plans and specifications",
      "government report on future bridge projects",
      "regulations by aviation agency",
      "project geotechnical report"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Most value in determining schedule's work activity durations for plant?",
    "options": [
      "industry publications",
      "New Plant Task Duration Handbook",
      "cost estimate prepared by firm",
      "critical path schedules of similar projects"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Best chance of schedule being used effectively in field?",
    "options": [
      "detailed specifications in contract",
      "consent and agreement from key players",
      "large time contingencies",
      "large staff in the field"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Technique accounts for path convergence and estimates more accurately?",
    "options": [
      "CPM",
      "PERT",
      "Schedule simulation",
      "Path convergence method"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Usual impact to Owner's costs of a schedule extension:",
    "options": [
      "increase in raw materials",
      "increase in cost of property",
      "increase in project finance costs",
      "increase in property taxes"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Seller failed to deliver major item. What should you do?",
    "options": [
      "terminate for default",
      "work with seller to correct",
      "negotiate change to contract",
      "hire another seller to work side by side"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Initiation meeting... biggest impact on the project?",
    "options": [
      "Review action item list",
      "Review identified risks",
      "Assignment of tasks",
      "Estimating costs"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Best approach to crashing includes looking at:",
    "options": [
      "risk impact of crashing each task",
      "customer's opinion",
      "Boss's opinion",
      "project phase task is due to occur"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "NOT true concerning benefits of Resource Leveling of CPM:",
    "options": [
      "Identifies activities needing overtime",
      "Identifies where requirements exceed availability",
      "Provides revised sequencing",
      "Can delay overall completion date"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "CPI > 1.0 indication of:",
    "options": [
      "under run situation",
      "overrun situation",
      "budget-at-completion will not be met",
      "Productivity is better than planned"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Which element is NOT a key function in planning:",
    "options": [
      "understanding objectives/plan",
      "assessing critical path and float",
      "developing WBS",
      "developing the estimate"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Which common changes typically result in disputes?",
    "options": [
      "Design changes",
      "Execution plan changes",
      "Scope reduction programs",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "The Schedule Performance Index (SPI) is:",
    "options": [
      "BCWP / BCWS",
      "BCWP - BCWS",
      "BCWS - BCWP",
      "BCWS / BCWP"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Resource planning involves determining:",
    "options": [
      "Physical resources, quantities",
      "Quantities, physical resources",
      "Dynamic resources, parametric modeling",
      "Parametric modeling, dynamic resources"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Units completed divided by work-hours consumed is:",
    "options": [
      "Earned value",
      "Credit work-hours",
      "CPI",
      "Productivity"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Statement concerning Logic Loop is FALSE:",
    "options": [
      "circular fashion preceding each other",
      "creates negative total float",
      "group of activities can never begin/end",
      "pre-cludes analysis of forward/backward pass"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "SPI used to estimate completion date:",
    "options": [
      "EV/PV",
      "EV/AC",
      "ACWS/PV",
      "PV/EV"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "The critical path in a project schedule is:",
    "options": [
      "method for cost overrun",
      "project cost/schedule of each activity",
      "identify activities that cannot slip...",
      "review all schedule activities"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Each accurately describe total float (TF) except:",
    "options": [
      "time delay without delaying start... of any other activity",
      "can be positive or negative",
      "computed by early/late start/finish subtraction",
      "delay without delaying project completion"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "difference between actual work hours expended and earned?",
    "options": [
      "Final Costs/Forecasts",
      "Earned - Actual = Productivity Gain",
      "Actual - Earned = Productivity Loss",
      "All of the Above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "First attempt in resource leveling, expect to occur?",
    "options": [
      "required resources increase during certain periods",
      "required resources decrease during certain periods",
      "overall project duration to increase",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Equivalent units best used to measure progress for:",
    "options": [
      "long tasks with different units",
      "long tasks with many milestones",
      "level of effort work",
      "long tasks with similar units"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "PERT estimate for expected duration (O=40, M=50, P=180)",
    "options": [
      "65 weeks",
      "70 weeks",
      "75 weeks",
      "80 weeks"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Project schedule is not used to determine:",
    "options": [
      "starting and finishing dates",
      "changes to activity listing",
      "total float",
      "project's budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "NOT a characteristic of a work package:",
    "options": [
      "assigned under a control account",
      "summary task at middle level of WBS",
      "summary task at lowest level of WBS",
      "cost and duration can be estimated"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "Resources to cover known but undefined requirements:",
    "options": [
      "indirect costs",
      "budget",
      "allowances",
      "profit"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "True regarding schedule variances?",
    "options": [
      "always impact schedule, never cost",
      "always impact cost",
      "sometimes impact schedule",
      "sometimes impact schedule, always cost"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Total allowable time for series minus required time:",
    "options": [
      "free float time",
      "activity priority time",
      "total slack time",
      "activity slip time"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Activity duration estimate inputs include all EXCEPT:",
    "options": [
      "Activity lists",
      "Constraints",
      "Basis of Estimate",
      "Resource requirements"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Relationship for parallel activities requiring partial start:",
    "options": [
      "Start to Finish",
      "Finish to Finish",
      "Start to Start",
      "Finish to Start"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "covering work with less defined activities and conditional interrelationships?",
    "options": [
      "Hard logic",
      "Soft logic",
      "Deductive logic",
      "Inductive logic"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 4",
    "question": "Primary purpose of milestone chart?",
    "options": [
      "show task dependencies",
      "show resource constraints",
      "show significant events/deliverables",
      "highlight critical path"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Latest allowable end time minus earliest allowable end time:",
    "options": [
      "Remaining Duration",
      "Just-In-Time Scheduling",
      "Total Float",
      "Free Float"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "project progresses with fix dates and no slack:",
    "options": [
      "Positive Float",
      "Negative float",
      "Idle resources",
      "Free float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "crashing the schedule, focus on:",
    "options": [
      "accelerating as many as possible",
      "accelerating non-critical",
      "accelerating critical path",
      "None"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Activity consumes no time/resources and shows dependency:",
    "options": [
      "milestone",
      "hammock",
      "dummy",
      "All"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 4",
    "question": "Process involving identifying interactivity dependencies:",
    "options": [
      "Activity definition",
      "Activity sequencing",
      "Activity leveling",
      "Activity dependencies"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "work with less defined activities and conditional interrelationships?",
    "options": [
      "Inductive logic",
      "Soft logic",
      "Deductive logic",
      "Hard logic"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "historical info for duration estimating available from all EXCEPT:",
    "options": [
      "Commercial database",
      "Project files",
      "Simulations",
      "Project team knowledge"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 4",
    "question": "Which process is NOT included in Project Time Management?",
    "options": [
      "Activity definition",
      "WBS definition",
      "Activity sequencing",
      "Schedule development & control"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 4",
    "question": "project behind due to conflict... consider:",
    "options": [
      "Crashing the schedule",
      "Perform Resource leveling",
      "Conduct reverse resource allocation",
      "Use critical chair resources"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "To develop a work breakdown structure for a project you can consider to use the Delphi technique. What is the Delphi technique?",
    "options": [
      "A simulation technique.",
      "A mathematical analysis.",
      "A constrained optimization method.",
      "A consensus technique."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "The WBS helps the team of FOCUS! It is an excellent tool for communications and the basic for developing realistic estimates. You can best describe a WBS as a tool for the tracking of the:",
    "options": [
      "The schedule of the project",
      "The assigned resources",
      "The project costs.",
      "The project scope."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Prior to developing the detail schedule for any project you are required to develop a WBS for the project. In general for a project the WBS is?",
    "options": [
      "A description of the product component and subcomponents.",
      "A correct breakdown of the project reporting structure.",
      "S structure that defines the scope baseline for the project.",
      "A structure that defines work assignments by organizations."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Every project has a unique deliverable which is usually very complex in nature. What is the process of splitting a deliverable into smaller more manageable parts?",
    "options": [
      "The 100% rule.",
      "Scope decomposition.",
      "Activity definition.",
      "Activity lists."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "While accomplishing the scope of any project, many categories of resources are required. Which KEY factor should you consider when adding a required resource to your project?",
    "options": [
      "The impact the resource will have on the cost of the project.",
      "The impact the resource will have on the duration of the project.",
      "The impact the resource will have on the resource histograms.",
      "Whether the resource type and quantity considered is available, and its impact on the cost and duration of the project."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "What item below will you consider as a basis of the project to report your progress on the project budget, project schedule, resource allocation and the scope definition?",
    "options": [
      "Precedence diagramming method.",
      "The approved Project character.",
      "Work breakdown Structure.",
      "Project management plan."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Prior to developing the detail schedule for any project you are required to develop a WBS for the project. The process of creating a WBS results in:",
    "options": [
      "A detail project schedule",
      "Team buy-in",
      "A project completion date",
      "A list of risks"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Which of the following DOES NOT describe how far each element in WBS should be broken down?",
    "options": [
      "Result is the work package which should yield a deliverable.",
      "Result is the work package which cannot be logically subdivided further.",
      "Result is the work package which can be accomplished by one person.",
      "Result in the work package for which the cost and time can be realistically estimated."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Going from Level 3 to Level 4 in the work breakdown structure can result in:",
    "options": [
      "Less estimating accuracy for the deliverables.",
      "Better control of the project deliverables.",
      "Can create a lower status reporting costs",
      "A greater likelihood that it would create a scope gap or scope duplication."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "The key reason to creating and using a WBS is to?",
    "options": [
      "Understand, Plan and Organize the project scope effectively",
      "To prevent the scope gaps and slippage.",
      "Provide a basis for estimating and reporting the project.",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "What technique will you use to determine the confidence level and the probability of completing the project on a specific day (duration 18.5 months, SD 1.2)?",
    "options": [
      "PERT formula.",
      "The Monte Carlo simulation.",
      "The Probability analysis.",
      "The Variance analysis."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Regarding a project schedule using the CPM method which of the following statement is true?",
    "options": [
      "Both the PERT and CPM can be used to establish the critical path of the project.",
      "Both PERT and CPM can be used to establish the project duration.",
      "PERT uses probabilistic duration estimates while CPM uses deterministic duration estimates.",
      "All of the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "While updating the project schedule you compute the difference between an activity's schedule completion and actual completion. This is called:",
    "options": [
      "The earned value for the activity.",
      "The Schedule variance.",
      "The Schedule performance index.",
      "The Project variance."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Developing a Bar chart or performing Manual activity sequencing is most effective in the planning of?",
    "options": [
      "A very large project which requires good reporting needs.",
      "For Small projects with limited tasks.",
      "For effective management of High value projects.",
      "For use on low-priority projects."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "What are dummy activities?",
    "options": [
      "Represented by the arrows in AOA diagram which represent activities with low cost...",
      "Arrows in ADM which represent dependencies between nodes without real activities.",
      "These are dummy activities used in ADM technique to represent the delay...",
      "These are activities in PDM which are not required to be performed by team members."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Which of the following is usually not handled as a constraint while developing a detail project schedule?",
    "options": [
      "Laws and regulations.",
      "Limits of authorization.",
      "Team preferences.",
      "Physical site constraints."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "During project updates which of the following should not be a valid reason for establishing a revised baseline in a project?",
    "options": [
      "The owner instructed Scope changes.",
      "An approved Variation with a major Cost impact to the project.",
      "A Major schedule changes due to Force Majeure condition.",
      "New information indicating that the basis for the original project schedule and cost estimates was incorrect."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Which of the following statements regarding diagramming methods used for creating the project schedule is not true?",
    "options": [
      "PDM is based on the AON network.",
      "ADM is the same as AOA.",
      "GERT is the same as System Dynamics Model.",
      "GERT is used for sequence resulting in loops and System Dynamic Model is an example of conditional diagramming methods."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "While developing the project plan the assumptions and the basis for the plan are very important elements and hence should be recorded. Why should assumptions be documented?",
    "options": [
      "Assumptions might prove to be wrong. Knowing which assumptions were incorrect allows baseline adjustments...",
      "Assumption analysis is a valuable tool and technique of Risk Identification.",
      "Assumptions limit the project management team's options for decision making.",
      "In case of schedule or budget overruns, the documentation of assumptions supports a clear assignment..."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Which of the following is true regarding the definition of a project?",
    "options": [
      "A project is a unique service undertaken to create a temporary product.",
      "A project is the process of creating a product within a specific time.",
      "A project is a temporary endeavor undertaken to create a unique product or service.",
      "A project is a temporary undertaking to create a unique endeavor or service."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "A summary level activity in a network logic diagram is often referred to as a?",
    "options": [
      "A Work package.",
      "A Control Account.",
      "A Project Milestone.",
      "A hammock Activity."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "It is done to provide stake holders with information about the impact of the resources consumed on?",
    "options": [
      "The project objectives and deliverables",
      "The project budget.",
      "The productivity and the actual duration of the tasks",
      "All of the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Performance report should be updated for each monitoring period and communicated which should primarily include which of the following?",
    "options": [
      "The project status for cost, time and resources",
      "Actual project progress",
      "The forecast for the remaining period",
      "All the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "It involves comparing actual project results to?",
    "options": [
      "The Planned results.",
      "The published industry standards readily available.",
      "The performance results on other similar projects.",
      "Both A and B above."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "BCWS: 20k/17k/34k, BCWP: 25k/15k/42k. As a whole your project is:",
    "options": [
      "15% ahead of schedule",
      "You have achieved 86.59% of your planned schedule",
      "15% behind schedule, but over budget",
      "15% behind schedule."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "The unique identifier or the codes assigned to each item of a WBS are often known collectively as?",
    "options": [
      "The work package codes",
      "The cost codes",
      "The code of accounts",
      "The activity codes"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Which of the following is NOT an example of a type of schedule report?",
    "options": [
      "A Gantt chart",
      "A Milestone schedule",
      "An updated fishbone diagram",
      "A detail Network diagram"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "What is the primary purpose of a milestone chart?",
    "options": [
      "To show task dependencies.",
      "To show resource constraints.",
      "To show significant events in the project such as completion of key deliverables.",
      "To highlight the critical path."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Which Time Management Process would identify the specific activities that must be performed to produce the deliverables in the WBS identified and documented?",
    "options": [
      "Activity Sequencing",
      "Activity Definition",
      "Schedule Development",
      "Activity Duration Estimating"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "A period of time in work weeks which includes non-working days are called:",
    "options": [
      "The Elapsed Time",
      "The total Duration",
      "The data date",
      "Earned Time"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "The amount of time that any activity can be delayed from its early start date without delaying the project completion date is called:",
    "options": [
      "Negative Float",
      "Free Float",
      "Total Float",
      "The Activity Lag"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "What are you likely to see as an activity is delayed in a schedule with must finish on constraint and no slack?",
    "options": [
      "Idle resources",
      "Reduction in the Lag available",
      "Increase in Free float",
      "Negative float"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Activity never performed: Optimistic 3, Pessimistic 9, Most Likely 6. What is the PERT weighted average?",
    "options": [
      "6 days",
      "4 days",
      "6.3 days",
      "6.1 days"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "Activity never performed: Optimistic 3, Pessimistic 9, Most Likely 6. What is the standard deviation?",
    "options": [
      "0.6",
      "2",
      "1",
      "0.5"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Crashing the schedule is an effective duration compression technique. In crashing the schedule, your focus would be on?",
    "options": [
      "Accelerating the tasks one at a time",
      "Optimize the resource usage",
      "Accelerating the performance of tasks on the critical path.",
      "Conduct trade-off between time and cost with an attempt to reduce cost."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "In order to calculate the late start and late finish dates for a set of tasks, you must do?",
    "options": [
      "An analysis of the critical path",
      "A forwards pass",
      "A backwards pass",
      "Schedule update"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "A modification of a logical relationship that allows an acceleration of the successor task is represented by?",
    "options": [
      "Fast tracking of the schedule",
      "Lag time",
      "Negative Lag",
      "Lead time."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "In a project schedule developed using the network method, What is critical path?",
    "options": [
      "Shortest path... representing longest amount of time...",
      "The path with zero or minimum float.",
      "Longest path... representing shortest amount of time...",
      "Both B and C above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "The Time Management Process that involves identifying and documenting interactivity dependencies is called:",
    "options": [
      "Activity Definition",
      "Activity Duration Estimating",
      "Activity Dependencies",
      "Activity Sequencing"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "A project network diagram that uses nodes to represent activities and arrows to show activity dependencies and do not allow logic loops is called?",
    "options": [
      "AOA",
      "AON",
      "ADM",
      "GERT"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Status at 6 months ($50k project): BCWS $25k, BCWP $20k, ACWP $15k. Performance is:",
    "options": [
      "Behind schedule and over cost",
      "Ahead of schedule and under cost",
      "Ahead of schedule and over cost",
      "Behind schedule and under cost."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Prefer curing concrete during weekends to avoid work stopping for 2 days. This helps decrease the:",
    "options": [
      "Waiting Time",
      "Elapsed Time",
      "Project Schedule",
      "The project float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "All the following statements about float are correct except:",
    "options": [
      "Float refers to amount of time... without delaying project finish date.",
      "Float changes as project progresses...",
      "Float is the amount of time... without delaying early start of any immediately following activity.",
      "Float can also be referred to as Slack, Total Float or Path Float."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "During update, number of critical paths increases but duration remains same. Impact is:",
    "options": [
      "Crashing will be required",
      "Fast tracking will be required",
      "Increase resource allocation",
      "Risk of the project increases."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "All the following are inputs to Activity Duration Estimating process except?",
    "options": [
      "Constraints and Assumptions",
      "Resource Requirements",
      "Resource productivity",
      "Mandatory and Discretionary Dependencies"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Small project of 6 activities (Task M to Q). What is the minimum time required to complete entire project (Finish to Start)?",
    "options": [
      "13 Months",
      "8 Months",
      "39 Months",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "To reduce duration of the project (Question 46) while crashing, which activity would be first choice?",
    "options": [
      "Task M",
      "Task p",
      "Task Q",
      "None of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Minimum duration in which the project (Question 46) can be completed after crashing?",
    "options": [
      "13 Months",
      "8 Months",
      "39 Months",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Total cost of the project (Question 46) if scheduled using normal duration?",
    "options": [
      "$11,500",
      "$22,400",
      "$ 10,900",
      "None of the above"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "Constraint project must finish on 20 months (Question 46), what is the total cost?",
    "options": [
      "$11,500",
      "$11,175",
      "$ 10,900",
      "None of the above"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "A Gantt chart is useful in determining?",
    "options": [
      "The level of effort of each task",
      "When each task starts and stops",
      "How the tasks are related to each other",
      "What resources are to be assigned to each task."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Status: 28k hours scheduled, 25k earned, 26k paid. Correct conclusion is:",
    "options": [
      "Project operating at favorable cost efficiency ratio.",
      "Project spending more than planned",
      "The project is behind schedule",
      "The project is ahead of schedule."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "The __________ task relationship is defined by the activity duration.",
    "options": [
      "Start-to-start",
      "Finish-to-finish",
      "Start-to-finish",
      "The Early start date"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "The Critical Path Method of scheduling is:",
    "options": [
      "A mathematical analysis technique for schedule development",
      "A technique that uses weighted averages to calculate project duration",
      "A technique that uses sequential network logic for schedule development",
      "A technique that allows for probabilistic treatment..."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 5",
    "question": "A resource calendar is a resource pool which provides:",
    "options": [
      "The unit cost for each resource",
      "What are the resources are available, at what times and in what patterns",
      "Performance of the pool resources",
      "Duration of the project"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 5",
    "question": "Constraints do not include:",
    "options": [
      "Impacts of weather",
      "Organizational structure of the performing organization",
      "Collective bargaining",
      "Expected staff assignments"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "Using PDM, which dependencies would be used?",
    "options": [
      "Finish-to-start",
      "Start-to-start",
      "Finish-to-finish",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Using ADM, which dependency would NOT be used?",
    "options": [
      "Start-to-Finish",
      "Start-to-Start",
      "Finish-to-Finish",
      "None of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Main difference between ADM and PDM is the:",
    "options": [
      "ADM is more accurate.",
      "ADM is deterministic, PDM is probabilistic.",
      "PDM is deterministic, ADM is probabilistic.",
      "Placement of the activity on the logic diagram line."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 5",
    "question": "Shorten schedule by assigning 3 developers instead of 2. Project team doubles. This tends to?",
    "options": [
      "Reduce productivity",
      "Increase productivity",
      "Reduce need for quality auditing...",
      "Improve production proportionately more..."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 5",
    "question": "In first attempt in resource leveling, what would you expect to occur?",
    "options": [
      "required resources increase...",
      "required resources decrease...",
      "overall project duration to increase",
      "All of the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 6",
    "question": "Which of the following is generally the MOST correct use of a project network diagram?",
    "options": [
      "Showing the project schedule",
      "Documenting task interdependencies",
      "Defining project resources",
      "Defining the project costs"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "At a minimum, periodic forecasts must be done at what interval?",
    "options": [
      "monthly",
      "as requested by the owner",
      "as requested by the project manager",
      "as specified in the contract documents"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 6",
    "question": "The calculated duration for a project is 28.166. The standard deviation is 5.5. What technique would you use to compute the probability of completing a project on a specific day?",
    "options": [
      "PERT formula",
      "Monte Carlo simulation",
      "Probability analysis",
      "Variance analysis"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The best reason to use multiple calendars is to",
    "options": [
      "sequence the float for the benefit of the contractor",
      "more accurately show how the project will be built",
      "give specialty contractors the information they need",
      "track owner activities according to their specific calendar"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "During planning you discover that the time needed to complete the project is longer than the time available. What do you do?",
    "options": [
      "Tell the customer that the required date cannot be met",
      "Tell management that the required date cannot be met",
      "Spend time determining what work can be done for the length of time available",
      "Determine options for crashing and/or fast tracking the project"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 6",
    "question": "Which of the following is the BEST tool to use to determine the longest time the project will take?",
    "options": [
      "WBS",
      "Network Diagram",
      "Bar Chart",
      "Project Charter"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Critical Path\" in a project network is the series of activities that:",
    "options": [
      "Has the most resources assigned to it",
      "Has the highest risk of failure",
      "Determines the duration of the project",
      "Has the most tasks associated with it"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Total Float\" is the amount of time an activity can be delayed without:",
    "options": [
      "Delaying its successor activity",
      "Increasing the project cost",
      "Delaying the project finish date",
      "Changing the WBS"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Free Float\" is the amount of time an activity can be delayed without:",
    "options": [
      "Delaying the project finish date",
      "Delaying the early start of its successor",
      "Increasing the project cost",
      "Changing the critical path"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "In a project network schedule \"Lag\" means:",
    "options": [
      "The amount of time a task can be delayed",
      "Waiting time",
      "Overlap between activities",
      "The product of a forward and backward pass"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Milestone\" in a project schedule has a duration of:",
    "options": [
      "1 day",
      "5 days",
      "Zero",
      "Depends on the project size"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Crashing\" a schedule refers to:",
    "options": [
      "Doing tasks in parallel",
      "Adding resources to shorten duration",
      "Reducing project scope",
      "Cancelling the project"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Fast Tracking\" a schedule refers to:",
    "options": [
      "Adding more resources",
      "Doing tasks in parallel instead of in sequence",
      "Reducing the scope",
      "Cancelling the project"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Forward Pass\" in a network diagram determines:",
    "options": [
      "Late start and late finish dates",
      "Total float and free float",
      "Early start and early finish dates",
      "The critical path only"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Backward Pass\" in a network diagram determines:",
    "options": [
      "Late start and late finish dates",
      "Early start and early finish dates",
      "The critical path",
      "Total float"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "A Work Breakdown Structure (WBS) is a:",
    "options": [
      "Schedule development tool",
      "Cost estimating tool",
      "Deliverable-oriented grouping of project elements",
      "Risk management tool"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "The lowest level of a Work Breakdown Structure is:",
    "options": [
      "A task",
      "An activity",
      "A work package",
      "A deliverable"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "Which organizational structure gives the Project Manager the least authority?",
    "options": [
      "Projectized",
      "Strong Matrix",
      "Functional",
      "Weak Matrix"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "Which organizational structure gives the Project Manager the most authority?",
    "options": [
      "Strong Matrix",
      "Projectized",
      "Functional",
      "Weak Matrix"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A project is defined as:",
    "options": [
      "Ongoing and repetitive",
      "A group of related tasks",
      "A temporary endeavor to create a unique product",
      "A permanent structure"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "The person or group who provides the financial resources for the project is:",
    "options": [
      "Project Manager",
      "Customer",
      "Team member",
      "Sponsor"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 6",
    "question": "\"Resource Leveling\" usually results in:",
    "options": [
      "Increasing the project duration",
      "Decreasing the project duration",
      "No effect on duration",
      "Decreasing project cost"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Earned Value Management\" (EVM) is used to:",
    "options": [
      "Measure project performance",
      "Define project scope",
      "Identify risks",
      "Manage the project team"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "A negative Cost Variance (CV) indicates the project is:",
    "options": [
      "Under budget",
      "On budget",
      "Ahead of schedule",
      "Over budget"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 6",
    "question": "A Schedule Performance Index (SPI) of 0.9 means the project is:",
    "options": [
      "Ahead of schedule",
      "Behind schedule",
      "On schedule",
      "Over budget"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A Cost Performance Index (CPI) of 1.1 means the project is:",
    "options": [
      "Over budget",
      "Under budget",
      "On budget",
      "Behind schedule"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Baseline\" is:",
    "options": [
      "The original plan",
      "The latest schedule update",
      "Approved version of a plan for performance measurement",
      "Final project report"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Stakeholders\" are:",
    "options": [
      "Only the project team",
      "Only the customers",
      "Anyone affected by or who can affect the project",
      "Only the sponsors"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Scope Creep\" refers to:",
    "options": [
      "Defining the project scope",
      "Uncontrolled changes to the project scope",
      "Reducing the project scope",
      "Completing the project scope"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Risk Mitigation\" involves:",
    "options": [
      "Ignoring the risk",
      "Transferring the risk",
      "Reducing the probability or impact of a risk",
      "Accepting the risk"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Dummy Activity\" is used in which diagramming method?",
    "options": [
      "ADM (Arrow Diagramming Method)",
      "PDM (Precedence Diagramming Method)",
      "WBS",
      "GERT"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "The process of calculating ES, EF, LS, and LF is part of:",
    "options": [
      "Mathematical Analysis",
      "Variance Analysis",
      "Risk Analysis",
      "Scope Analysis"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Lead\" time in a schedule means:",
    "options": [
      "Waiting time between tasks",
      "Acceleration of a successor activity",
      "A project constraint",
      "Total float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Hard Logic\" is another term for:",
    "options": [
      "Preferential logic",
      "Mandatory dependency",
      "External dependency",
      "Soft logic"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Soft Logic\" is another term for:",
    "options": [
      "Mandatory dependency",
      "Discretionary dependency",
      "External dependency",
      "Hard logic"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Hammock Activity\" is used to:",
    "options": [
      "Show detailed work steps",
      "Summarize a group of related activities",
      "Represent a milestone",
      "Show resource allocation"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Critical Path\" can have:",
    "options": [
      "Positive float",
      "Negative float",
      "Zero float",
      "All of the above"
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 6",
    "question": "\"Variance Analysis\" involves:",
    "options": [
      "Comparing actual performance against the baseline",
      "Calculating the critical path",
      "Defining the scope",
      "Identifying new risks"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Project Charter\" is a document that:",
    "options": [
      "Defines the WBS",
      "Formally authorizes the project",
      "Lists all team members",
      "Defines the detailed schedule"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Lessons Learned\" should be documented:",
    "options": [
      "Only at the end of the project",
      "Only at the beginning",
      "Throughout the project life cycle",
      "Never"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "Which logical relationship is the most commonly used?",
    "options": [
      "Start-to-Start (SS)",
      "Finish-to-Finish (FF)",
      "Finish-to-Start (FS)",
      "Start-to-Finish (SF)"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "If EV=80 and PV=100, then SPI is:",
    "options": [
      "2026-01-25 00:00:00",
      "0.8",
      "20",
      "-20"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "If EV=100 and AC=90, then CPI is:",
    "options": [
      "0.9",
      "2026-01-11 00:00:00",
      "10",
      "-10"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A task has ES=10, EF=15, LS=12, LF=17. Its float is:",
    "options": [
      "2",
      "5",
      "10",
      "15"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Monte Carlo\" simulation is used for:",
    "options": [
      "Cost estimating",
      "Schedule risk analysis",
      "Scope definition",
      "Quality control"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"WBS Dictionary\" provides:",
    "options": [
      "Activity durations",
      "Detailed information about each WBS element",
      "Resource names",
      "Cost estimates"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Rolling Wave Planning\" is:",
    "options": [
      "Planning in detail for the near term",
      "Planning for the whole project at once",
      "Ignoring future tasks",
      "A fast-tracking technique"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "An \"As-Built\" schedule reflects:",
    "options": [
      "The original plan",
      "What actually happened during execution",
      "The future plan",
      "The baseline schedule"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Heuristics\" in project management are:",
    "options": [
      "Complex mathematical formulas",
      "Rules of thumb",
      "Software tools",
      "Project constraints"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Standard Deviation\" in PERT is calculated as:",
    "options": [
      "(P-O)/6",
      "(P+O)/2",
      "(P-O)/2",
      "(P+O)/6"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Constraint\" in a schedule is:",
    "options": [
      "A logical relationship",
      "A restriction that affects the schedule dates",
      "A project resource",
      "A project milestone"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Float\" is also commonly called:",
    "options": [
      "Gap",
      "Slack",
      "Delay",
      "Lag"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Critical Path\" is the _____ path through the network.",
    "options": [
      "Shortest",
      "Easiest",
      "Longest",
      "Riskiest"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "Resource Leveling can change the critical path of a project.",
    "options": [
      "True",
      "False",
      "None",
      "None"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "A project has an SPI of 1.0. This means it is:",
    "options": [
      "Behind schedule",
      "Ahead of schedule",
      "On schedule",
      "Over budget"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Scope Statement\" defines:",
    "options": [
      "Only what is included",
      "Both what is included and excluded",
      "Only what is excluded",
      "The resource list"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "Who is best suited to define project activities?",
    "options": [
      "Project Manager only",
      "Team members performing the work",
      "Project Owner only",
      "Sponsor only"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "PDM stands for:",
    "options": [
      "Project Data Management",
      "Precedence Diagramming Method",
      "Primary Design Method",
      "Process Diagramming Method"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "In PDM, activities are usually represented by:",
    "options": [
      "Arrows",
      "Nodes (Boxes)",
      "Lines",
      "Dots"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Lag\" time is typically added to:",
    "options": [
      "The predecessor activity",
      "The successor activity",
      "The logical relationship",
      "The milestone"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Negative Float\" indicates that the project is:",
    "options": [
      "Ahead of schedule",
      "Behind its target completion date",
      "On track",
      "Finished"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Work Package\" is an element that can be:",
    "options": [
      "Decomposed into activities",
      "Subdivided into further WBS levels",
      "Ignored during planning",
      "The project itself"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Quality Assurance\" is the process of:",
    "options": [
      "Monitoring results",
      "Auditing quality requirements",
      "Inspecting products",
      "Fixing errors"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A Project Manager usually spends 90% of their time:",
    "options": [
      "Planning",
      "Coding",
      "Communicating",
      "Testing"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "The standard \"Project Life Cycle\" stages are:",
    "options": [
      "Start, Plan, Do, Act",
      "Initiation, Planning, Execution, Control, Closing",
      "Design, Build, Close",
      "Concept, Design, Close"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Cost Performance Index\" (CPI) measures:",
    "options": [
      "Schedule efficiency",
      "Cost efficiency",
      "Quality efficiency",
      "Scope efficiency"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "If CPI is less than 1.0 (CPI < 1), the project is:",
    "options": [
      "Under budget",
      "Over budget",
      "On budget",
      "Ahead of schedule"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Crashing\" the schedule usually increases:",
    "options": [
      "The project duration",
      "The project cost",
      "The project quality",
      "The project scope"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Fast Tracking\" a schedule usually increases:",
    "options": [
      "The project cost",
      "The project risk",
      "The project duration",
      "The project quality"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Gantt Chart\" is another common name for:",
    "options": [
      "Network Diagram",
      "Bar Chart",
      "WBS",
      "Logic Chart"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Milestone Chart\" is most appropriate for:",
    "options": [
      "Detailed daily planning",
      "Team coordination",
      "Senior management reporting",
      "Resource allocation"
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 6",
    "question": "\"Activity Duration\" is defined as:",
    "options": [
      "Calendar time",
      "Work effort",
      "Elapsed time",
      "All of the above"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Parametric Estimating\" uses:",
    "options": [
      "Historical data and mathematical models",
      "Expert judgment only",
      "Guesses",
      "WBS elements only"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Analogous Estimating\" is a form of:",
    "options": [
      "Bottom-up estimating",
      "Top-down estimating",
      "Parametric estimating",
      "Detailed estimating"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"PERT\" weighted average formula is:",
    "options": [
      "(O+M+P)/3",
      "(O+4M+P)/6",
      "(O+P)/2",
      "(O+6M+P)/4"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "An \"External Dependency\" involves a relationship between:",
    "options": [
      "Internal project tasks",
      "Project tasks and non-project activities",
      "Mandatory logic steps",
      "Soft logic steps"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A Start-to-Start (SS) relationship with a lag means:",
    "options": [
      "Tasks start at the same time",
      "Successor starts after the predecessor starts plus a lag",
      "Tasks finish at the same time",
      "There is a delay in finishing"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Total Float\" is a property that belongs to:",
    "options": [
      "One specific activity",
      "The entire path",
      "The whole project",
      "The project owner"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Resource Overallocation\" occurs when:",
    "options": [
      "Resources are idle",
      "Resource demand exceeds available supply",
      "The project is ahead of schedule",
      "The project cost is low"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Critical Path Method\" (CPM) was originally developed in the:",
    "options": [
      "1950s",
      "1980s",
      "1920s",
      "2000s"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Schedule Compression\" techniques include:",
    "options": [
      "Resource Leveling",
      "Crashing and Fast Tracking",
      "Scope Creep",
      "Resource Analysis"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Near Critical Path\" is a path that has:",
    "options": [
      "High total float",
      "Low total float",
      "Zero float",
      "Negative float"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "If a project has many critical paths, it is considered:",
    "options": [
      "Easy to manage",
      "High risk",
      "Well planned",
      "Low risk"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Data Date\" in a schedule update is used for:",
    "options": [
      "Starting the project",
      "Status reporting and calculating remaining work",
      "Baselining the schedule",
      "Closing the project"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Actual Start\" is the:",
    "options": [
      "Planned start date",
      "Date work really began on an activity",
      "Baseline start date",
      "Constraint date"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Percent Complete\" is primarily used during:",
    "options": [
      "Project planning",
      "Progress updating and monitoring",
      "Project initiation",
      "Project closing"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Remaining Duration\" represents:",
    "options": [
      "Total original duration",
      "Time left to finish an activity",
      "Total elapsed time",
      "Buffer time"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Out-of-Sequence\" progress occurs when:",
    "options": [
      "Logic is perfectly followed",
      "A successor starts before its predecessor is finished",
      "An activity is on the critical path",
      "A delay happens"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Schedule Health Check\" is used to identify:",
    "options": [
      "Cost overruns",
      "Logic errors and anomalies",
      "Scope changes",
      "Quality defects"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"Float Ownership\" is often a subject of:",
    "options": [
      "Technical discussion",
      "Contractual dispute",
      "Resource planning",
      "Milestone definition"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The \"Baseline Schedule\" should ideally be:",
    "options": [
      "Changed every week",
      "Frozen and used as a yardstick for comparison",
      "Ignored once execution starts",
      "Created only at project completion"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Project Management Plan\" includes:",
    "options": [
      "Schedule, Cost, Quality, and Risk plans",
      "Only the schedule",
      "Only the budget",
      "Only the team member names"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Communication Plan\" defines:",
    "options": [
      "Who needs what information and when",
      "The technical design specifications",
      "The project WBS",
      "The project logic"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "\"Procurement Management\" involves:",
    "options": [
      "Hiring the project team",
      "Buying goods or services from outside the project team",
      "Managing internal risks",
      "Controlling the project schedule"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"EAC\" (Estimate at Completion) is a prediction of:",
    "options": [
      "Future schedule dates",
      "The total project cost when work is finished",
      "The original budget",
      "Sunk costs"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"ETC\" (Estimate to Complete) is the:",
    "options": [
      "Cost spent to date",
      "Expected cost to finish the remaining work",
      "Total project budget",
      "Cost variance"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "\"BAC\" (Budget at Completion) is the:",
    "options": [
      "Total planned budget for the project",
      "Actual cost spent",
      "Earned value of the work",
      "Planned value of the work"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 6",
    "question": "A \"Mandatory Dependency\" is often:",
    "options": [
      "A preferential choice",
      "A physical or contractual necessity",
      "Discretionary logic",
      "An external factor"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "Fast tracking usually results in more _____ than crashing.",
    "options": [
      "Resources needed",
      "Parallel activities",
      "Risk of rework",
      "Total cost"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 6",
    "question": "The relationships in an activity-on-arrow diagram are:",
    "options": [
      "Finish to start",
      "Finish to finish",
      "Start to start",
      "Multiple options"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "The traditional governmental contracting process in the United States is:",
    "options": [
      "Design, build, and operate",
      "Design, bid, build",
      "EPC",
      "Design, build"
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Critical delivery dates are referred to as",
    "options": [
      "Milestones.",
      "Phases.",
      "Substantial completion.",
      "Flags."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "When a planner-scheduler is collecting information about the project during the initial planning cycle, which information is of GREATEST value?",
    "options": [
      "Contract specifications.",
      "The contractor's pre-bid site visit meeting minutes and notes.",
      "The contract's Changes clause.",
      "A detailed scope of work statement."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "Project architects are:",
    "options": [
      "Stakeholders",
      "Developers",
      "Activists",
      "Special interest groups"
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Which is NOT normally considered a stakeholder on a Greenfield chemical plant project?",
    "options": [
      "Shop owners in an enclosed mall three miles downwind of the project.",
      "The owner's project banker's engineer.",
      "A third-tier electrical subcontractor.",
      "The employee-owned contractor."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "All project stakeholders provide input data and information during the initial planning process to set the overall project duration?",
    "options": [
      "Absolutely true.",
      "Absolutely false.",
      "Only by analyzing the contract can one determine if a change in duration is allowed.",
      "Only the project owner-client may set the overall duration..."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "Which should not be a reason why superintendents and project managers are reluctant to involve all stakeholders in the initial planning process?",
    "options": [
      "They do not want to spend the time.",
      "They are the ones that have to build it anyway.",
      "They want to control the process.",
      "It would be confusing and counter-productive."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "During the pre-planning phase, which input is the MOST valuable to the planner-scheduler?",
    "options": [
      "Contract requirements.",
      "Historical information.",
      "Professional experience.",
      "Input from project stakeholders."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "What is the purpose of the initial planning process?",
    "options": [
      "To define the project's scope.",
      "To set the overall project duration.",
      "To identify the project's stakeholders.",
      "To create the project's work breakdown structure."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Which of the following is NOT an element of a project?",
    "options": [
      "A start and end date.",
      "A unique product or service.",
      "Temporary in nature.",
      "Performed by a single department."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "The \"owner\" of a project is the person or organization that:",
    "options": [
      "Provides the financial resources.",
      "Manages the project.",
      "Performs the work.",
      "Uses the project's product or service."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "The project life cycle is a collection of:",
    "options": [
      "Project phases.",
      "Project tasks.",
      "Project milestones.",
      "Project activities."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Which is the most effective way to communicate the project's schedule to the project team?",
    "options": [
      "Network diagram.",
      "Bar chart.",
      "Milestone chart.",
      "WBS."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Which is the most effective way to communicate the project's schedule to senior management?",
    "options": [
      "Network diagram.",
      "Bar chart.",
      "Milestone chart.",
      "WBS."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "The Work Breakdown Structure (WBS) is a:",
    "options": [
      "Tool for schedule development.",
      "Tool for cost estimating.",
      "Tool for scope definition.",
      "All of the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "The lowest level of the WBS is called a:",
    "options": [
      "Task.",
      "Activity.",
      "Work package.",
      "Deliverable."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "The WBS numbering system helps to:",
    "options": [
      "Identify the level of each element.",
      "Estimate costs.",
      "Manage resources.",
      "Track progress."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Which of the following is NOT a characteristic of a project?",
    "options": [
      "Unique.",
      "Ongoing and repetitive.",
      "Temporary.",
      "Has a specific goal."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "The project manager is responsible for:",
    "options": [
      "Meeting the project's objectives.",
      "Providing the financial resources.",
      "Performing the technical work.",
      "Approving the project charter."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "In which organizational structure does the project manager have the LEAST authority?",
    "options": [
      "Projectized.",
      "Strong Matrix.",
      "Weak Matrix.",
      "Functional."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "In which organizational structure does the project manager have the MOST authority?",
    "options": [
      "Projectized.",
      "Strong Matrix.",
      "Weak Matrix.",
      "Functional."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "A program is a:",
    "options": [
      "Group of related projects.",
      "Single large project.",
      "Collection of project tasks.",
      "Type of organizational structure."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "The Project Management Office (PMO) is responsible for:",
    "options": [
      "Managing the project team.",
      "Providing the financial resources.",
      "Standardizing project-related governance processes.",
      "Performing the technical work."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "The project charter is a document that:",
    "options": [
      "Formally authorizes the project.",
      "Defines the project's scope.",
      "Lists the project team members.",
      "Outlines the project's schedule."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Stakeholders are individuals or organizations that:",
    "options": [
      "Are actively involved in the project.",
      "Have interests that may be affected by the project.",
      "Can influence the project.",
      "All of the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "Scope creep is:",
    "options": [
      "The process of defining the project's scope.",
      "Uncontrolled changes to the project's scope.",
      "A reduction in the project's scope.",
      "The process of verifying the project's scope."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Quality control involves:",
    "options": [
      "Planning for quality.",
      "Monitoring and recording results of quality activities.",
      "Auditing the quality processes.",
      "Defining the quality standards."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Risk identification should be performed:",
    "options": [
      "Only at the beginning of the project.",
      "Only at the end of the project.",
      "Throughout the project.",
      "Only when a problem occurs."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "Risk mitigation involves:",
    "options": [
      "Ignoring the risk.",
      "Transferring the risk to another party.",
      "Reducing the probability or impact of the risk.",
      "Accepting the risk."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "Procurement management involves:",
    "options": [
      "Managing the project team.",
      "Purchasing goods and services from external sources.",
      "Managing the project's budget.",
      "Developing the project's schedule."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "A milestone in a project schedule has a duration of:",
    "options": [
      "1 day.",
      "5 days.",
      "0 days.",
      "10 days."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "The critical path is the:",
    "options": [
      "Shortest path through the network.",
      "Path with the most float.",
      "Longest path through the network.",
      "Path with the most tasks."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "If a task on the critical path is delayed, the project's finish date will:",
    "options": [
      "Remain the same.",
      "Be delayed.",
      "Be completed earlier.",
      "Not be affected."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Total float is the amount of time a task can be delayed without:",
    "options": [
      "Delaying its successor.",
      "Delaying the project's finish date.",
      "Increasing the project's cost.",
      "Changing the critical path."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Free float is the amount of time a task can be delayed without:",
    "options": [
      "Delaying its successor's early start.",
      "Delaying the project's finish date.",
      "Increasing the project's cost.",
      "Changing the critical path."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "The forward pass is used to calculate:",
    "options": [
      "Late start and finish dates.",
      "Early start and finish dates.",
      "Total float.",
      "Free float."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "The backward pass is used to calculate:",
    "options": [
      "Late start and finish dates.",
      "Early start and finish dates.",
      "The critical path.",
      "Total float."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Crashing a schedule involves:",
    "options": [
      "Adding resources to shorten durations.",
      "Performing tasks in parallel.",
      "Reducing the project's scope.",
      "Extending the project's finish date."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Fast tracking a schedule involves:",
    "options": [
      "Adding resources to shorten durations.",
      "Performing tasks in parallel that were planned in sequence.",
      "Reducing the project's scope.",
      "Extending the project's finish date."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Resource leveling is used to:",
    "options": [
      "Shorten the project's duration.",
      "Balance the demand for resources.",
      "Increase the project's cost.",
      "Reduce the project's scope."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "The project baseline is:",
    "options": [
      "The original project plan.",
      "The current project plan.",
      "The version of the plan used for performance measurement.",
      "The final project plan."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "Earned Value Management (EVM) is used to:",
    "options": [
      "Measure project performance.",
      "Define the project's scope.",
      "Identify project risks.",
      "Develop the project's schedule."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Planned Value (PV) is the:",
    "options": [
      "Value of work actually performed.",
      "Actual cost of work performed.",
      "Budgeted cost of work scheduled to be done.",
      "Total project budget."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "Actual Cost (AC) is the:",
    "options": [
      "Value of work actually performed.",
      "Real cost incurred for work performed.",
      "Budgeted cost of work scheduled.",
      "Total project budget."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Earned Value (EV) is the:",
    "options": [
      "Value of work actually performed in terms of the budget.",
      "Actual cost of work performed.",
      "Budgeted cost of work scheduled.",
      "Total project budget."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Schedule Variance (SV) is calculated as:",
    "options": [
      "EV - PV.",
      "EV - AC.",
      "PV - EV.",
      "AC - EV."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Cost Variance (CV) is calculated as:",
    "options": [
      "EV - PV.",
      "EV - AC.",
      "PV - EV.",
      "AC - EV."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "One primary consideration for a planner-scheduler when developing a schedule is:",
    "options": [
      "Project cost.",
      "Project size, scope, complexity.",
      "Project quality.",
      "Project team size."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "The four types of schedules are:",
    "options": [
      "Bar, Gantt, CPM, Milestone.",
      "Bar/Gantt, CPM/Network, Linear/LOB, Milestone.",
      "CPM, PERT, GERT, WBS.",
      "Bar, CPM, WBS, Milestone."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "A project can be defined as a set of activities that:",
    "options": [
      "Is ongoing.",
      "Is repetitive.",
      "Is unique.",
      "Is constrained in time."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "The most common tool for monitoring and controlling a project's progress is:",
    "options": [
      "The budget.",
      "The schedule.",
      "The risk register.",
      "The WBS."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "In CPM scheduling, it is assumed that:",
    "options": [
      "Resources are unlimited.",
      "Work is performed continuously from start to finish.",
      "All tasks are critical.",
      "Costs are fixed."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "Which is the most important element for tracking an activity in a schedule?",
    "options": [
      "Activity name.",
      "Duration.",
      "Activity ID.",
      "Start date."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "A summary activity represents:",
    "options": [
      "A single task.",
      "Multiple elements of the scope of work.",
      "A milestone.",
      "A constraint."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "All progress should be measured against:",
    "options": [
      "The current schedule.",
      "The original schedule.",
      "The previous month's schedule.",
      "The baseline schedule."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "Those who have a vested interest in the project's outcome are:",
    "options": [
      "Contractors.",
      "Owners.",
      "Stakeholders.",
      "Managers."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "A project's architect is considered a:",
    "options": [
      "Developer.",
      "Contractor.",
      "Stakeholder.",
      "Sponsor."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "How is a schedule's level of detail determined?",
    "options": [
      "By the project manager.",
      "By the owner.",
      "By the contract.",
      "Based on the type of schedule used."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "Calendars are used in a schedule:",
    "options": [
      "To track holidays.",
      "To reflect specific conditions or circumstances.",
      "To manage resources.",
      "All of the above."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "The project duration is the ______ required to complete all activities.",
    "options": [
      "Cost.",
      "Effort.",
      "Timeframe.",
      "Resources."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "Schedule quality is determined by:",
    "options": [
      "Completeness.",
      "Logic.",
      "Accuracy.",
      "All of the above."
    ],
    "answer": "D"
  },
  {
    "paper": "Paper 7",
    "question": "If a non-critical task is delayed within its float, what is the impact on the project finish?",
    "options": [
      "Finish is delayed.",
      "No impact.",
      "Finish is earlier.",
      "Path becomes critical."
    ],
    "answer": "B"
  },
  {
    "paper": "Paper 7",
    "question": "When should a project be baselined?",
    "options": [
      "After it's finished.",
      "Every month.",
      "Prior to baselining the schedule.",
      "Never."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "A schedule should be updated regularly.",
    "options": [
      "True.",
      "False.",
      "None",
      "None"
    ],
    "answer": "True"
  },
  {
    "paper": "Paper 7",
    "question": "The critical path can change during project execution.",
    "options": [
      "True.",
      "False.",
      "None",
      "None"
    ],
    "answer": "True"
  },
  {
    "paper": "Paper 7",
    "question": "When should lessons learned be captured?",
    "options": [
      "Only at the end.",
      "Only at the beginning.",
      "Throughout the duration of the project.",
      "Never."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "The triple constraint of project management is:",
    "options": [
      "Time, quality, cost.",
      "Scope, risk, cost.",
      "Time, scope, quality.",
      "People, time, money."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "The purpose of schedule control is:",
    "options": [
      "Continual improvement in the schedule.",
      "To avoid all changes.",
      "To punish the contractor.",
      "To ignore delays."
    ],
    "answer": "A"
  },
  {
    "paper": "Paper 7",
    "question": "Who should be involved in the planning process?",
    "options": [
      "Only the PM.",
      "Only the owner.",
      "All stakeholders.",
      "Only the contractor."
    ],
    "answer": "C"
  },
  {
    "paper": "Paper 7",
    "question": "The frequency of schedule updates is determined by:",
    "options": [
      "The PM.",
      "The owner.",
      "Type of schedule used.",
      "The contractor."
    ],
    "answer": "C"
  }
];