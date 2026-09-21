const ProjectData = [
  {
    id: "dev-card-1",
    url: "dev-card",
    title: "Developer Card",
    description:
      "A simple developer card exercise focusing on layouts, styling, and profile badge elements.",
    status: "Completed",
    emoji: "👨‍💻",
    category: "UI Components",
    difficulty: 1,
    hoursSpent: 2,
    notes:
      "Learned how to construct balanced flex layouts, style rounded badges, and configure visual hierarchy for profile interfaces.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/01-dev-card",
    demoUrl: "https://sandbox.io/dev-card",
    createdAt: "2026-06-10T10:00:00Z",
    tasks: [
      {
        id: "dc-t1",
        text: "Create the card container with balanced padding",
        completed: true,
      },
      {
        id: "dc-t2",
        text: "Implement skill badges grid with custom color bands",
        completed: true,
      },
      {
        id: "dc-t3",
        text: "Render skills list from dynamic JSON arrays",
        completed: true,
      },
      {
        id: "dc-t4",
        text: "Add custom avatar border and smooth hover-lift animations",
        completed: true,
      },
    ],
    resources: [
      {
        id: "dc-r1",
        name: "Tailwind Flexbox Docs",
        url: "https://tailwindcss.com/docs/flexbox-direction",
      },
    ],
  },
  {
    id: "date-counter-2",
    url: "date-counter",
    title: "Date Counter",
    description:
      "A date counter exercise managing dynamic steps and displaying relative dates from today.",
    status: "Completed",
    emoji: "📅",
    category: "State Management",
    difficulty: 2,
    hoursSpent: 3,
    notes:
      "Practiced combining multiple state variables. Learned how to manipulate dates cleanly using Javascript’s Date object without external libraries.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/02-date-counter",
    demoUrl: "https://sandbox.io/date-counter",
    createdAt: "2026-06-12T14:30:00Z",
    tasks: [
      {
        id: "dt-t1",
        text: "Create counter step and increment multipliers",
        completed: true,
      },
      {
        id: "dt-t2",
        text: 'Format output strings (e.g., "3 days ago" or "10 days from today")',
        completed: true,
      },
      {
        id: "dt-t3",
        text: "Add quick-reset button and custom range slider for steps",
        completed: true,
      },
    ],
    resources: [
      {
        id: "dt-r1",
        name: "MDN Date Objects",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
      },
    ],
  },
  {
    id: "flash-card-3",
    url: "flash-card",
    title: "Flash Card",
    description:
      "A simple interactive flash card exercise to reinforce core React concepts with smooth flips.",
    status: "Completed",
    emoji: "🎴",
    category: "State Management",
    difficulty: 2,
    hoursSpent: 4,
    notes:
      "Understood standard list rendering patterns and conditional state toggling. Implemented dynamic CSS classes for flipped visual states.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/03-flash-card",
    demoUrl: "https://sandbox.io/flash-card",
    createdAt: "2026-06-15T09:15:00Z",
    tasks: [
      {
        id: "fc-t1",
        text: "Map mock questions list into interactive grids",
        completed: true,
      },
      {
        id: "fc-t2",
        text: "Configure single-selection active tracking in local state",
        completed: true,
      },
      {
        id: "fc-t3",
        text: "Integrate custom CSS card-flip effect using transitions",
        completed: true,
      },
    ],
    resources: [
      {
        id: "fc-r1",
        name: "React Lists & Keys",
        url: "https://react.dev/learn/rendering-lists",
      },
    ],
  },
  {
    id: "steps-nav-4",
    url: "steps-navigation",
    title: "Steps Navigation",
    description:
      "A simple step navigation exercise with state-driven view switches.",
    status: "Completed",
    emoji: "🪜",
    category: "UI Components",
    difficulty: 2,
    hoursSpent: 3.5,
    notes:
      "Gained solid practice in conditional styling based on current state indices and absolute step boundaries.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/04-steps-nav",
    demoUrl: "https://sandbox.io/steps-nav",
    createdAt: "2026-06-18T16:00:00Z",
    tasks: [
      {
        id: "sn-t1",
        text: "Draw state indicators (1, 2, 3) connected with active lines",
        completed: true,
      },
      {
        id: "sn-t2",
        text: "Add step prev/next boundaries in click handlers",
        completed: true,
      },
      {
        id: "sn-t3",
        text: "Stagger message displays using Framer Motion",
        completed: true,
      },
    ],
    resources: [],
  },
  {
    id: "travel-list-5",
    url: "travel-list",
    title: "Travel List",
    description:
      "A simple travel packing list tracker to add, sort, and complete items.",
    status: "In Progress",
    emoji: "✈️",
    category: "Forms & Input",
    difficulty: 3,
    hoursSpent: 5,
    notes:
      "Combining forms with arrays. Experienced some challenges with lifting state up to share lists across sibling forms and lists.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/05-travel-list",
    demoUrl: "https://sandbox.io/travel-list",
    createdAt: "2026-06-22T11:00:00Z",
    tasks: [
      {
        id: "tl-t1",
        text: "Implement form controls with dynamic quantity selection",
        completed: true,
      },
      {
        id: "tl-t2",
        text: "Add list checkboxes with strike-through checked states",
        completed: true,
      },
      {
        id: "tl-t3",
        text: "Implement sort options (alphabetical, input order, packed status)",
        completed: false,
      },
      {
        id: "tl-t4",
        text: 'Add "Clear All" utility with dynamic confirmation modal',
        completed: false,
      },
    ],
    resources: [
      {
        id: "tl-r1",
        name: "Lifting State Up",
        url: "https://react.dev/learn/sharing-state-between-components",
      },
    ],
  },
  {
    id: "accordion-6",
    url: "accordion",
    title: "Accordion Component",
    description:
      "A simple accordion component exercise to toggle interactive details smoothly.",
    status: "Completed",
    emoji: "🪗",
    category: "UI Components",
    difficulty: 2,
    hoursSpent: 2.5,
    notes:
      "Focused on component reuse and passing rendering status dynamically. Used CSS max-height transitions for collapse effects.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/06-accordion",
    demoUrl: "https://sandbox.io/accordion",
    createdAt: "2026-06-25T08:45:00Z",
    tasks: [
      {
        id: "ac-t1",
        text: "Model item headers with expandable trailing arrows",
        completed: true,
      },
      {
        id: "ac-t2",
        text: "Implement mutual exclusion logic where only one FAQ remains open",
        completed: true,
      },
      {
        id: "ac-t3",
        text: "Enhance accessibility with active keyboard focus loops",
        completed: true,
      },
    ],
    resources: [],
  },
  {
    id: "tip-calc-7",
    url: "tip-calculator",
    title: "Tip Calculator Component",
    description:
      "A simple tip calculator component exercise displaying shared split balances.",
    status: "In Progress",
    emoji: "💰",
    category: "Forms & Input",
    difficulty: 2,
    hoursSpent: 2,
    notes:
      "Creating controlled inputs for numerical bill calculations. Need to ensure float values are always formatted to 2 decimals.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/07-tip-calc",
    demoUrl: "",
    createdAt: "2026-06-28T15:20:00Z",
    tasks: [
      {
        id: "tc-t1",
        text: "Bind controlled inputs for total bill and personal ratings",
        completed: true,
      },
      {
        id: "tc-t2",
        text: "Calculate custom percentage averages between both party ratings",
        completed: true,
      },
      {
        id: "tc-t3",
        text: "Create clear reset button appearing only when states are active",
        completed: false,
      },
    ],
    resources: [],
  },
  {
    id: "split-bill-8",
    url: "split-bill",
    title: "Eat and Split Bill Component",
    description:
      "A simple eat and split bill component with friend selection and balance logging.",
    status: "In Progress",
    emoji: "🍽️",
    category: "State Management",
    difficulty: 4,
    hoursSpent: 7,
    notes:
      "Relatively complex project involving deep objects, active tracking, and bidirectional calculations. Excellent state training.",
    githubUrl:
      "https://github.com/stephen/react-learning/tree/main/08-eat-and-split",
    demoUrl: "",
    createdAt: "2026-07-01T10:10:00Z",
    tasks: [
      {
        id: "sb-t1",
        text: "Create custom friend list with profile avatars and status cards",
        completed: true,
      },
      {
        id: "sb-t2",
        text: "Implement toggling slide-overs to split shared bills",
        completed: true,
      },
      {
        id: "sb-t3",
        text: "Recalculate owing/owed values dynamically and bind to active items",
        completed: false,
      },
    ],
    resources: [],
  },
  {
    id: "speaker-sched-9",
    url: "conference-speaker",
    title: "Conference Speaker Schedule",
    description:
      "A simple Conference Speaker Schedule exercise integrating timeline layout and details.",
    status: "Not Started",
    emoji: "🎙️",
    category: "API & Effects",
    difficulty: 3,
    hoursSpent: 0,
    notes:
      "Plan to use standard JSON lists, but eventually hook this up to a real external mock api to practice useEffect and loading spinners.",
    githubUrl: "",
    demoUrl: "",
    createdAt: "2026-07-04T12:00:00Z",
    tasks: [
      {
        id: "ss-t1",
        text: "Draw the timeline calendar nodes chronologically",
        completed: false,
      },
      {
        id: "ss-t2",
        text: "Fetch dynamic schedule info from open-source APIs",
        completed: false,
      },
      {
        id: "ss-t3",
        text: "Add local search filter based on speaker tags or tracks",
        completed: false,
      },
    ],
    resources: [
      {
        id: "ss-r1",
        name: "React useEffect Fetch Guide",
        url: "https://react.dev/reference/react/useEffect#fetching-data-with-effects",
      },
    ],
  },
];

export default ProjectData;
