// ═══════════════════════════════════════════════════════════════════
// ALGEBRA I REGENTS — EXAM DATA & METADATA
// All four exams with question text, standards tags, and flags
// ═══════════════════════════════════════════════════════════════════

const CONVERSION_CHARTS = {
  "June 2022": { maxRaw: 86, chart: {86:100,85:99,84:97,83:96,82:95,81:94,80:93,79:92,78:91,77:90,76:89,75:88,74:88,73:87,72:86,71:86,70:86,69:85,68:84,67:84,66:84,65:83,64:83,63:83,62:82,61:82,60:82,59:81,58:81,57:81,56:81,55:80,54:80,53:80,52:80,51:79,50:79,49:79,48:78,47:78,46:78,45:77,44:77,43:77,42:76,41:76,40:75,39:75,38:74,37:74,36:73,35:72,34:72,33:71,32:70,31:69,30:68,29:67,28:66,27:65,26:64,25:63,24:61,23:60,22:59,21:57,20:56,19:55,18:52,17:50,16:48,15:46,14:44,13:42,12:40,11:37,10:34,9:32,8:29,7:26,6:23,5:19,4:16,3:12,2:8,1:4,0:0} },
  "June 2023": { maxRaw: 86, chart: {86:100,85:99,84:97,83:96,82:95,81:94,80:93,79:92,78:91,77:90,76:89,75:89,74:88,73:87,72:87,71:86,70:86,69:86,68:85,67:84,66:84,65:83,64:83,63:83,62:82,61:82,60:82,59:82,58:81,57:81,56:81,55:80,54:80,53:80,52:80,51:79,50:79,49:79,48:78,47:78,46:78,45:77,44:77,43:77,42:76,41:76,40:75,39:75,38:74,37:74,36:73,35:72,34:72,33:71,32:70,31:69,30:68,29:67,28:66,27:65,26:64,25:63,24:62,23:60,22:59,21:58,20:56,19:55,18:53,17:51,16:49,15:47,14:45,13:43,12:40,11:38,10:35,9:32,8:30,7:26,6:23,5:20,4:16,3:13,2:9,1:4,0:0} },
  "June 2024": { maxRaw: 82, chart: {82:100,81:99,80:98,79:96,78:95,77:94,76:92,75:91,74:90,73:89,72:88,71:87,70:86,69:85,68:84,67:84,66:83,65:83,64:82,63:81,62:81,61:80,60:79,59:79,58:78,57:78,56:77,55:77,54:76,53:76,52:75,51:75,50:75,49:74,48:74,47:73,46:73,45:72,44:72,43:72,42:71,41:71,40:70,39:70,38:69,37:69,36:69,35:68,34:68,33:67,32:67,31:66,30:66,29:65,28:64,27:64,26:63,25:62,24:61,23:61,22:60,21:59,20:58,19:56,18:55,17:54,16:52,15:50,14:49,13:47,12:44,11:42,10:40,9:37,8:34,7:31,6:27,5:23,4:19,3:15,2:10,1:5,0:0} },
  "June 2025": { maxRaw: 82, chart: {82:100,81:99,80:97,79:95,78:94,77:92,76:91,75:90,74:89,73:88,72:87,71:86,70:85,69:84,68:84,67:83,66:82,65:82,64:81,63:81,62:80,61:80,60:79,59:79,58:78,57:78,56:77,55:77,54:76,53:76,52:75,51:75,50:74,49:74,48:74,47:73,46:73,45:72,44:72,43:71,42:71,41:71,40:70,39:70,38:69,37:69,36:68,35:68,34:67,33:67,32:66,31:66,30:66,29:65,28:64,27:63,26:63,25:62,24:61,23:60,22:59,21:58,20:57,19:56,18:55,17:54,16:52,15:51,14:49,13:47,12:45,11:43,10:40,9:38,8:35,7:32,6:28,5:25,4:21,3:16,2:11,1:6,0:0} },
};

// Standards / topic tags
const TOPICS = {
  LINEAR_EQ: "Linear Equations & Inequalities",
  LINEAR_FN: "Linear Functions & Modeling",
  SYSTEMS: "Systems of Equations & Inequalities",
  QUAD: "Quadratic Functions & Equations",
  QUAD_FACTOR: "Factoring",
  QUAD_FORMULA: "Quadratic Formula / Completing the Square",
  EXP: "Exponential Functions",
  POLY: "Polynomials",
  STATS: "Statistics & Data Analysis",
  REGRESSION: "Linear Regression",
  SEQUENCES: "Sequences",
  RECURSIVE: "Recursive Sequences (no longer assessed)",
  FUNCTIONS: "Functions — Domain, Range & Notation",
  TRANSFORMS: "Function Transformations",
  RATIONALS: "Rational & Irrational Numbers",
  RATE: "Rate of Change & Unit Conversion",
  GRAPHING: "Graphing",
};

const EXAMS = {
  "June 2022": {
    maxRaw: 86,
    notes: "Questions 26 and 35 cover function transformations and statistics/regression — topics not yet taught. Question 24 covers recursive sequences, a standard no longer assessed. These questions are flagged and excluded from your score calculation.",
    parts: [
      {
        id: "I", title: "Multiple Choice", credits: 2, partial: false,
        questions: [
          { n:1,  text: "Which correlation shows a causal relationship?", topic: TOPICS.STATS, flag: null },
          { n:2,  text: "Given f(x) = 3x − 5, which statement is true?", topic: TOPICS.LINEAR_FN, flag: null },
          { n:3,  text: "Benny's Café salad costs $5.75 plus $0.75 per topping. Which function gives cost c(s)?", topic: TOPICS.LINEAR_FN, flag: null },
          { n:4,  text: "Which expression is equivalent to x² − 5x + 6?", topic: TOPICS.QUAD_FACTOR, flag: null },
          { n:5,  text: "Peter has $100 for drinks. Lemonade $2, juice $0.50. Which inequality models this?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:6,  text: "Which domain is most appropriate for number of items placed in a laundry basket each day in January?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:7,  text: "What is the solution to ³⁄₂b − 5 = 17?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:8,  text: "Which table of values represents an exponential relationship?", topic: TOPICS.EXP, flag: null },
          { n:9,  text: "Which expression is NOT equivalent to (5²ˣ)³?", topic: TOPICS.POLY, flag: null },
          { n:10, text: "Which relation is a function?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:11, text: "Ax + By = C: which expression represents y in terms of A, B, C, and x?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:12, text: "What are the zeros of f(x) = (2x + 4)(3x − 4)?", topic: TOPICS.QUAD, flag: null },
          { n:13, text: "Joe has dimes and nickels totaling $1.45. Nickels = 5 more than twice the dimes. Which equation finds the number of dimes?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:14, text: "Donna and Andrew compare exam scores grade 8–12. Which statement is correct?", topic: TOPICS.STATS, flag: null },
          { n:15, text: "First term of a sequence is 5, fifth term is 17. What is the common difference?", topic: TOPICS.SEQUENCES, flag: null },
          { n:16, text: "A quadratic and linear function graphed together — which intersection situation is NOT possible?", topic: TOPICS.GRAPHING, flag: null },
          { n:17, text: "The expression (m − 3)² is equivalent to?", topic: TOPICS.POLY, flag: null },
          { n:18, text: "Three students explain why (3,4) solves 2y − 3x = 1. Which are correct?", topic: TOPICS.LINEAR_FN, flag: null },
          { n:19, text: "Four quadratic functions shown in different forms. Which statement about their maximums is true?", topic: TOPICS.QUAD, flag: null },
          { n:20, text: "Which is a sixth-degree polynomial with leading coefficient 7 and constant term 4?", topic: TOPICS.POLY, flag: null },
          { n:21, text: "A = P(1 + r)ᵗ — which statement correctly interprets the annual interest rate?", topic: TOPICS.EXP, flag: null },
          { n:22, text: "Tim runs 50 km in 4.5 hours. Which expression converts this to minutes per mile?", topic: TOPICS.RATE, flag: null },
          { n:23, text: "Solve x/a + (a−1)/4 = 3/4 for x in terms of a.", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:24, text: "Sequence: a₁ = 3, aₙ = 3aₙ₋₁ − 2. What is a₄?", topic: TOPICS.RECURSIVE, flag: "not-assessed", flagNote: "Recursive sequences are no longer an assessed standard in Algebra I. This question is excluded from your score." },
        ]
      },
      {
        id: "II", title: "Short Answer", credits: 2, partial: true,
        questions: [
          { n:25, text: "Is the product of √1024 and 3.4 rational or irrational? Explain your answer.", topic: TOPICS.RATIONALS, flag: null },
          { n:26, text: "Describe the transformations on f(x) = x² to obtain g(x) = (x + 3)² − 4.", topic: TOPICS.TRANSFORMS, flag: "not-yet-taught", flagNote: "Function transformations have not yet been taught. This question is excluded from your score." },
          { n:27, text: "Garage sale profit graph. Find the average rate of change (dollars/hour) over 1 ≤ x ≤ 4.", topic: TOPICS.RATE, flag: null },
          { n:28, text: "Subtract 3x(x − 2y) from 6(x² + xy) and express as a monomial.", topic: TOPICS.POLY, flag: null },
          { n:29, text: "State the domain and range of the graphed function.", topic: TOPICS.FUNCTIONS, flag: null },
          { n:30, text: "Solve 6x² − 5x − 6 = 0 algebraically for the exact values of x.", topic: TOPICS.QUAD_FORMULA, flag: null },
          { n:31, text: "Factor x⁴ − 36x² completely.", topic: TOPICS.QUAD_FACTOR, flag: null },
          { n:32, text: "Determine exact values of x for x² − 8x + 5 = 0 by completing the square.", topic: TOPICS.QUAD_FORMULA, flag: null },
        ]
      },
      {
        id: "III", title: "Extended Response", credits: 4, partial: true,
        questions: [
          { n:33, text: "Kite height graph — explain what zeros represent in context, state intervals where height is increasing, state maximum height.", topic: TOPICS.GRAPHING, flag: null },
          { n:34, text: "Graph f(x) = |x² − 1| and g(x) = 3x. For how many values of x does f(x) = g(x)? Explain.", topic: TOPICS.GRAPHING, flag: null },
          { n:35, text: "Driver age vs. speeding accidents data. Write the linear regression equation (round to nearest hundredth) and interpret the correlation coefficient.", topic: TOPICS.REGRESSION, flag: "not-yet-taught", flagNote: "Linear regression has not yet been taught. This question is excluded from your score." },
          { n:36, text: "Solve the system of inequalities graphically. Label solution set S. Is (0,3) a solution? Justify.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      },
      {
        id: "IV", title: "Extended Response", credits: 6, partial: true,
        questions: [
          { n:37, text: "Amusement park: write a system of equations for adult/child tickets, solve algebraically, then find cost for a group of 4 including 3 children.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      }
    ]
  },

  "June 2023": {
    maxRaw: 86,
    notes: "Questions 21 and 24 cover recursive sequences, a standard no longer assessed in Algebra I. These are flagged and excluded from your score.",
    parts: [
      {
        id: "I", title: "Multiple Choice", credits: 2, partial: false,
        questions: [
          { n:1,  text: "Which expression is equivalent to 9m² − 100?", topic: TOPICS.QUAD_FACTOR, flag: null },
          { n:2,  text: "Which expression represents an irrational number?", topic: TOPICS.RATIONALS, flag: null },
          { n:3,  text: "Which linear equation represents a line passing through (−3, −8)?", topic: TOPICS.LINEAR_FN, flag: null },
          { n:4,  text: "(5x² − x + 4) − 3(x² − x − 2) is equivalent to?", topic: TOPICS.POLY, flag: null },
          { n:5,  text: "The 24th term of the sequence −5, −11, −17, −23, … is?", topic: TOPICS.SEQUENCES, flag: null },
          { n:6,  text: "When completing the square for x² − 18x + 77 = 0, which equation is a correct step?", topic: TOPICS.QUAD_FORMULA, flag: null },
          { n:7,  text: "Which function has the greatest value when x > 1?", topic: TOPICS.EXP, flag: null },
          { n:8,  text: "In b = 1300(2.65)ˣ, the exponent represents?", topic: TOPICS.EXP, flag: null },
          { n:9,  text: "A company ships 30,000 items/week. Which expression gives items per minute?", topic: TOPICS.RATE, flag: null },
          { n:10, text: "A graph has a double root at x = 2 and a single root at x = −3. A possible equation is?", topic: TOPICS.QUAD, flag: null },
          { n:11, text: "If g(x) = −x² − x + 5, then g(−4) is equal to?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:12, text: "Popcorn box is 6×4×8 inches. Length and width each increase by x. Which function gives volume V(x)?", topic: TOPICS.POLY, flag: null },
          { n:13, text: "The expression 300(4)^(x+3) is equivalent to?", topic: TOPICS.EXP, flag: null },
          { n:14, text: "Ashley has 7 quarters and some dimes, needs at least $3.00. Which inequality finds the dimes d needed?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:15, text: "Area of trapezoid: A = ½(b₁ + b₂)h. Which expression gives height h?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:16, text: "g(x) = k|x| with k = ½. Which statement is true about the graphs of f(x) = |x| and g(x)?", topic: TOPICS.TRANSFORMS, flag: null },
          { n:17, text: "Survey: 240 adults chose SUV or sports car. Of those who preferred sports cars, approximately what percent were male?", topic: TOPICS.STATS, flag: null },
          { n:18, text: "The solution to 2x² = 72 is?", topic: TOPICS.QUAD, flag: null },
          { n:19, text: "Three quadratic functions given in different forms. Which have the same vertex?", topic: TOPICS.QUAD, flag: null },
          { n:20, text: "The domain of f(x) = x² + x − 12 is?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:21, text: "Father pays son allowance: year 1 = $10, each year = 2× previous − $8. Which recursive formula works?", topic: TOPICS.RECURSIVE, flag: "not-assessed", flagNote: "Recursive sequences are no longer an assessed standard in Algebra I. This question is excluded from your score." },
          { n:22, text: "What is the solution to 4 − (2/5)x ≥ (1/3)x + 15?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:23, text: "Which statement is correct about the polynomial 3x² + 5x − 2?", topic: TOPICS.POLY, flag: null },
          { n:24, text: "p(n) models a store's profit from selling n boxes of nails. A reasonable domain would be?", topic: TOPICS.FUNCTIONS, flag: null },
        ]
      },
      {
        id: "II", title: "Short Answer", credits: 2, partial: true,
        questions: [
          { n:25, text: "Solve algebraically: −2.4(x + 1.4) = 6.8x − 22.68", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:26, text: "State the zeros of f(x) from the graph. Explain your reasoning.", topic: TOPICS.QUAD, flag: null },
          { n:27, text: "Breanna's block pattern — a friend says it's growing exponentially. Is the friend correct? Explain.", topic: TOPICS.EXP, flag: null },
          { n:28, text: "Data: 20, 36, 52, 56, 24, 16, 40, 4, 28 books purchased. Construct a box plot.", topic: TOPICS.STATS, flag: null },
          { n:29, text: "Given A = x + 5 and B = x² − 18, express A² + B in standard form.", topic: TOPICS.POLY, flag: null },
          { n:30, text: "Two relations are not functions. Explain how to change each so they become functions.", topic: TOPICS.FUNCTIONS, flag: null },
          { n:31, text: "Factor 2x² + 16x − 18 completely.", topic: TOPICS.QUAD_FACTOR, flag: null },
          { n:32, text: "Solve 3d² − 8d + 3 = 0 algebraically, rounding to the nearest tenth.", topic: TOPICS.QUAD_FORMULA, flag: null },
        ]
      },
      {
        id: "III", title: "Extended Response", credits: 4, partial: true,
        questions: [
          { n:33, text: "Graph f(x) = |x| + 1 and g(x) = −x² + 6x + 1. Determine all values of x where f(x) = g(x).", topic: TOPICS.GRAPHING, flag: null },
          { n:34, text: "Temperature data over 24 hours in August. State increasing intervals, 3-hour interval with greatest rate of change, and average rate of change from hour 12 to 24. Interpret in context.", topic: TOPICS.RATE, flag: null },
          { n:35, text: "Solve system of inequalities graphically: 2x + 3y ≥ −6 and x < 3y + 6. Is (4,−2) in the solution set? Explain.", topic: TOPICS.SYSTEMS, flag: null },
          { n:36, text: "Height and weight data for 7 animals. Write linear regression equation (nearest hundredth). State and interpret the correlation coefficient.", topic: TOPICS.REGRESSION, flag: null },
        ]
      },
      {
        id: "IV", title: "Extended Response", credits: 6, partial: true,
        questions: [
          { n:37, text: "Dana bought roses and daisies on two occasions. Write a system of equations, solve algebraically for the cost of each, then find total savings if bought at sale prices.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      }
    ]
  },

  "June 2024": {
    maxRaw: 82,
    notes: "Question 21 involves interpreting a linear function — this is fair game. No questions are excluded from scoring on this exam.",
    parts: [
      {
        id: "I", title: "Multiple Choice", credits: 2, partial: false,
        questions: [
          { n:1,  text: "Ball launched into air — height recorded each second. Which statement is a valid conclusion?", topic: TOPICS.QUAD, flag: null },
          { n:2,  text: "Tour bus: at most 48 passengers, adult $18, child $12, need at least $650 profit. Which system of inequalities models this?", topic: TOPICS.SYSTEMS, flag: null },
          { n:3,  text: "Which equation is always true?", topic: TOPICS.POLY, flag: null },
          { n:4,  text: "−2(x² − 2x + 1) + (3x² + 3x − 5) is equivalent to?", topic: TOPICS.POLY, flag: null },
          { n:5,  text: "Which sum is irrational?", topic: TOPICS.RATIONALS, flag: null },
          { n:6,  text: "Solve 4(x − 5)/3 + 2 = 14.", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:7,  text: "A rabbit population doubled each month for two years. Which type of function best models this?", topic: TOPICS.EXP, flag: null },
          { n:8,  text: "In b = 1300(2.65)ˣ, the exponent represents?", topic: TOPICS.EXP, flag: null },
          { n:9,  text: "30,000 items shipped per week. Which expression gives items per minute?", topic: TOPICS.RATE, flag: null },
          { n:10, text: "Graph shows a curve with a double root at x = 2 and single root at x = −3. A possible equation is?", topic: TOPICS.QUAD, flag: null },
          { n:11, text: "Nancy's salary options: a(t) = 2ᵗ + 25, b(t) = 10t + 75, c(t) = √400t + 80, d(t) = 2(t+1)² − 10t + 50. Which gives highest salary in year 8?", topic: TOPICS.EXP, flag: null },
          { n:12, text: "3rd term of a sequence is 25, 5th term is 625. Which could be the common ratio?", topic: TOPICS.SEQUENCES, flag: null },
          { n:13, text: "Box plot of snowfall data for 12 locations. What is the interquartile range?", topic: TOPICS.STATS, flag: null },
          { n:14, text: "Four quadratic functions in different representations. Which has the smallest minimum value?", topic: TOPICS.QUAD, flag: null },
          { n:15, text: "Which equation represents the sequence −2, −5, −8, −11, −14, …?", topic: TOPICS.SEQUENCES, flag: null },
          { n:16, text: "Dot plot of Jessica's lacrosse goals. Which statement about mean, median, and mode is correct?", topic: TOPICS.STATS, flag: null },
          { n:17, text: "g(x) = 2(x − 3)² compared to f(x) = x². Which student description is correct?", topic: TOPICS.TRANSFORMS, flag: null },
          { n:18, text: "Dave's bike ride graph. What was his average rate of change in miles per hour?", topic: TOPICS.RATE, flag: null },
          { n:19, text: "(x − 5)(2x + 7) − (x + 5) is equivalent to?", topic: TOPICS.POLY, flag: null },
          { n:20, text: "f(x) and g(x) graphed together. What is the solution to f(x) = g(x)?", topic: TOPICS.GRAPHING, flag: null },
          { n:21, text: "Nicole's babysitting function C(h) = 6h + 5. The constant term represents?", topic: TOPICS.LINEAR_FN, flag: null },
          { n:22, text: "Solve 3x − 7 = ax + 5 for x in terms of a.", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:23, text: "Wayde van Niekerk ran 400m in 43.03 seconds. Which calculation gives average speed in miles per hour?", topic: TOPICS.RATE, flag: null },
          { n:24, text: "Which function has a domain of all real numbers and a range ≥ 3?", topic: TOPICS.FUNCTIONS, flag: null },
        ]
      },
      {
        id: "II", title: "Short Answer", credits: 2, partial: true,
        questions: [
          { n:25, text: "Solve algebraically: 5(x − 2) ≤ 3x + 20", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:26, text: "State the zeros of f(x) from the graph. Explain your reasoning.", topic: TOPICS.QUAD, flag: null },
          { n:27, text: "Given the relation R = {(−1,1),(0,3),(−2,−4),(x,5)}, state a value for x that makes this a function. Explain.", topic: TOPICS.FUNCTIONS, flag: null },
          { n:28, text: "150 students surveyed: 2/3 play video games, 85 of those also use social media, 20% of non-gamers don't use social media. Complete the two-way frequency table.", topic: TOPICS.STATS, flag: null },
          { n:29, text: "Use completing the square to find exact values of x for x² + 10x − 30 = 0.", topic: TOPICS.QUAD_FORMULA, flag: null },
          { n:30, text: "Factor 20x³ − 45x completely.", topic: TOPICS.QUAD_FACTOR, flag: null },
        ]
      },
      {
        id: "III", title: "Extended Response", credits: 4, partial: true,
        questions: [
          { n:31, text: "Graph y = x² − 3x − 6 and y = x − 1. State coordinates of all solutions.", topic: TOPICS.GRAPHING, flag: null },
          { n:32, text: "Movie earnings over 6 weeks. Write linear regression equation (nearest hundredth), state and interpret correlation coefficient.", topic: TOPICS.REGRESSION, flag: null },
          { n:33, text: "Use the quadratic formula to solve 3x² − 10x + 5 = 0. Express in simplest radical form.", topic: TOPICS.QUAD_FORMULA, flag: null },
          { n:34, text: "Graph system of inequalities: 3y + 2x ≤ 15 and y − x > 1. State coordinates of a point in the solution. Justify.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      },
      {
        id: "IV", title: "Extended Response", credits: 6, partial: true,
        questions: [
          { n:35, text: "Courtney buys lattes and donuts on two days. Write a system of equations, check if Courtney's guess is correct, then solve algebraically for exact prices.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      }
    ]
  },

  "June 2025": {
    maxRaw: 82,
    notes: "No questions are excluded from scoring on this exam. All topics have been taught.",
    parts: [
      {
        id: "I", title: "Multiple Choice", credits: 2, partial: false,
        questions: [
          { n:1,  text: "The expression 10/√2 is equivalent to?", topic: TOPICS.RATIONALS, flag: null },
          { n:2,  text: "A parabola is graphed. Over which interval is the parabola only increasing?", topic: TOPICS.QUAD, flag: null },
          { n:3,  text: "Which scenario represents an exponential relationship?", topic: TOPICS.EXP, flag: null },
          { n:4,  text: "Andrea and Joe's geometry test scores compared. Which statement is correct about mean and standard deviation?", topic: TOPICS.STATS, flag: null },
          { n:5,  text: "Which polynomial has a degree of 3 and a leading coefficient of 2?", topic: TOPICS.POLY, flag: null },
          { n:6,  text: "(−3x² + 9) − (7x² − 5x + 4) is equivalent to?", topic: TOPICS.POLY, flag: null },
          { n:7,  text: "Tomato plant height table. Between weeks 4 and 12, the average rate of change in inches per week is?", topic: TOPICS.RATE, flag: null },
          { n:8,  text: "Chloe solves x² + 5x = 3x + 3 → x² + 2x − 3 = 0. Which property justifies this step?", topic: TOPICS.QUAD, flag: null },
          { n:9,  text: "Which function represents w(x) = |x| shifted 2 units to the right?", topic: TOPICS.TRANSFORMS, flag: null },
          { n:10, text: "System: y + 4x = 5 and 2x − 3y = 10. A step using substitution would be?", topic: TOPICS.SYSTEMS, flag: null },
          { n:11, text: "Which equation is equivalent to x² − 6x = 27 after completing the square?", topic: TOPICS.QUAD_FORMULA, flag: null },
          { n:12, text: "Box plots comparing ages on swim team vs. track team. Which statement must be true?", topic: TOPICS.STATS, flag: null },
          { n:13, text: "Piecewise graph shown. The domain of this function is?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:14, text: "The sum of 3 and √5 is rational or irrational? Which statement is correct?", topic: TOPICS.RATIONALS, flag: null },
          { n:15, text: "Which expression is equivalent to a⁸ − b⁶?", topic: TOPICS.QUAD_FACTOR, flag: null },
          { n:16, text: "The sum of 2√27 and 4√12 is?", topic: TOPICS.RATIONALS, flag: null },
          { n:17, text: "Sum of Tim's age and Jack's age is 44. Tim's age is 4 less than 7 times Jack's age x. Which equation models this?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:18, text: "g(x) = (x² − 2)/(x + 3). What is the value of g(−2)?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:19, text: "Four graphs shown. Which represent a function?", topic: TOPICS.FUNCTIONS, flag: null },
          { n:20, text: "K = ½mv². When m is written in terms of K and v, the equation is?", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:21, text: "Solve 2(3x − 1)/3 = x + 2.", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:22, text: "Which equation represents the sequence 12, 6, 3, 3/2, … where a₁ = 12?", topic: TOPICS.SEQUENCES, flag: null },
          { n:23, text: "Which quadratic function has axis of symmetry x = 2?", topic: TOPICS.QUAD, flag: null },
          { n:24, text: "Train travels 49 mph, each car is 56 ft long. Which expression gives cars per minute passing Anna's house?", topic: TOPICS.RATE, flag: null },
        ]
      },
      {
        id: "II", title: "Short Answer", credits: 2, partial: true,
        questions: [
          { n:25, text: "Complete the two-way frequency table: 100 students, 44 seniors, 65 prefer videos, 42 of those are juniors.", topic: TOPICS.STATS, flag: null },
          { n:26, text: "Solve the inequality: 5(2 − y) > −11y − 8", topic: TOPICS.LINEAR_EQ, flag: null },
          { n:27, text: "Express (5x − 3)(−2x + 7) as a trinomial in standard form.", topic: TOPICS.POLY, flag: null },
          { n:28, text: "Arithmetic sequence: first term −20, fourth term −2. Determine the eighth term.", topic: TOPICS.SEQUENCES, flag: null },
          { n:29, text: "Write an equation in slope-intercept form for the line through (−2, 5) with slope −3.", topic: TOPICS.LINEAR_FN, flag: null },
          { n:30, text: "Factor x³ − 36x completely.", topic: TOPICS.QUAD_FACTOR, flag: null },
        ]
      },
      {
        id: "III", title: "Extended Response", credits: 4, partial: true,
        questions: [
          { n:31, text: "Graph f(x) = −3x and g(x) = x² + 2. State values of x where f(x) = g(x).", topic: TOPICS.GRAPHING, flag: null },
          { n:32, text: "Use the quadratic formula to solve 6x² + 2x − 1 = 0. Express in simplest radical form.", topic: TOPICS.QUAD_FORMULA, flag: null },
          { n:33, text: "Cell phone price vs. months since release. Write linear regression equation (nearest hundredth), state and interpret correlation coefficient.", topic: TOPICS.REGRESSION, flag: null },
          { n:34, text: "Solve algebraically: y = x² + 9x + 4 and y − 2x = −6.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      },
      {
        id: "IV", title: "Extended Response", credits: 6, partial: true,
        questions: [
          { n:35, text: "Sarah earns $6/hr babysitting, $12/hr tutoring, needs ≥$120/week, can work ≤14 hours. Write a system of inequalities, graph it, and state a valid combination of hours.", topic: TOPICS.SYSTEMS, flag: null },
        ]
      }
    ]
  }
};

// Sentence starters by topic
const STARTERS = {
  [TOPICS.LINEAR_EQ]:     "e.g. I set up the equation wrong because I confused which quantity was being multiplied…",
  [TOPICS.LINEAR_FN]:     "e.g. I mixed up the slope and y-intercept when reading the context of the problem…",
  [TOPICS.SYSTEMS]:       "e.g. I forgot to substitute back to find both variables after solving for one…",
  [TOPICS.QUAD]:          "e.g. I forgot that the vertex form tells you the max/min directly without completing the square…",
  [TOPICS.QUAD_FACTOR]:   "e.g. I forgot to check for a GCF before trying to factor the trinomial…",
  [TOPICS.QUAD_FORMULA]:  "e.g. I made an arithmetic error under the radical when applying the quadratic formula…",
  [TOPICS.EXP]:           "e.g. I confused exponential growth with linear growth when looking at the table…",
  [TOPICS.POLY]:          "e.g. I forgot to distribute the negative sign when subtracting polynomials…",
  [TOPICS.STATS]:         "e.g. I confused mean and median when the data set had an outlier…",
  [TOPICS.REGRESSION]:    "e.g. I reported the wrong value for r — I need to remember that r is the correlation, not r²…",
  [TOPICS.SEQUENCES]:     "e.g. I used the wrong formula — I mixed up arithmetic and geometric sequence rules…",
  [TOPICS.FUNCTIONS]:     "e.g. I confused domain and range, or forgot that a function can't have two outputs for one input…",
  [TOPICS.TRANSFORMS]:    "e.g. I confused a horizontal shift with a vertical shift when reading the equation…",
  [TOPICS.RATIONALS]:     "e.g. I forgot that adding a rational and irrational number always gives an irrational result…",
  [TOPICS.RATE]:          "e.g. I set up the unit conversion chain in the wrong order, so the units didn't cancel correctly…",
  [TOPICS.GRAPHING]:      "e.g. I found the intersection points correctly on my graph but didn't state both coordinates…",
  [TOPICS.RECURSIVE]:     "e.g. (This question is not assessed — no reflection needed)",
};
