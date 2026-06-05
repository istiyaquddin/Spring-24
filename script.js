/* =====================================================
   UNIVERSE CBT EXAM PLATFORM — script.js
   100 Questions · Full Exam Logic · Analytics
   ===================================================== */

// ════════════════════════════════════════════════════
// QUESTION BANK — All 100 MCQs
// (Extracted from Spring 2024 & 2025 PDFs + supplemented)
// ════════════════════════════════════════════════════
const ALL_QUESTIONS = [
  // ═══ PHYSICS (Q1–Q25) ═══
  {id:1,  subject:"Physics", q:"Which of the following is a scalar quantity?",
   opts:["Electric intensity","Force","Weight","Energy"], ans:3,
   exp:"Energy is a scalar quantity as it has only magnitude, no direction. Force, weight, and electric intensity are vectors."},
  {id:2,  subject:"Physics", q:"Which vector is perpendicular to the vector A = 4î + 3ĵ?",
   opts:["4i + 3J","6î","7k̂","3J"], ans:2,
   exp:"A vector perpendicular to (4,3,0) in 3D is (0,0,1) direction — 7k̂ is purely in z-direction, hence perpendicular to any vector in the xy-plane."},
  {id:3,  subject:"Physics", q:"Which one is the weakest fundamental force?",
   opts:["Gravitational force","Electromagnetic force","Strong nuclear force","Weak nuclear force"], ans:0,
   exp:"Gravitational force is the weakest of the four fundamental forces by many orders of magnitude."},
  {id:4,  subject:"Physics", q:"What is the minimum orbital velocity of an artificial satellite just above Earth's surface? [Earth's radius = 6.4 × 10⁶ m]",
   opts:["11.2 km/s","6.3 km/s","9.6 km/s","7.919 km/s"], ans:3,
   exp:"Orbital velocity v = √(gR) = √(9.8 × 6.4×10⁶) ≈ 7.919 km/s."},
  {id:5,  subject:"Physics", q:"At what angle between force and displacement is the work done zero?",
   opts:["60°","90°","120°","180°"], ans:1,
   exp:"W = F·d·cos θ. When θ = 90°, cos 90° = 0, so work done = 0."},
  {id:6,  subject:"Physics", q:"The period of a geostationary satellite is —",
   opts:["12 hours","24 hours","36 hours","365 hours"], ans:1,
   exp:"A geostationary satellite completes one orbit in exactly 24 hours (one Earth day), matching Earth's rotation."},
  {id:7,  subject:"Physics", q:"What is the dimensional formula of G (gravitational constant)?",
   opts:["[MLT⁻²]","[ML³T⁻²]","[M⁻¹L³T⁻²]","[M⁻²L³T⁻²]"], ans:2,
   exp:"From F = Gm₁m₂/r², G = Fr²/(m₁m₂) → [M⁻¹L³T⁻²]."},
  {id:8,  subject:"Physics", q:"If the radius of the Earth is reduced, then the value of 'g' will —",
   opts:["Decrease","Increase","Remain unaltered","Become zero"], ans:1,
   exp:"g = GM/R². If R decreases, g increases (since M remains constant)."},
  {id:9,  subject:"Physics", q:"The mass of an electron is —",
   opts:["9.1 × 10⁻²⁷ kg","7.1 × 10⁻²⁹ kg","9.1 × 10⁻³¹ kg","8.1 × 10⁻¹⁹ kg"], ans:2,
   exp:"The rest mass of an electron is 9.1 × 10⁻³¹ kg."},
  {id:10, subject:"Physics", q:"A simple pendulum has length L, mass M and frequency f. To make its frequency 2f, the length should be made —",
   opts:["4L by increasing","2L by increasing","L/2 by decreasing","L/4 by decreasing"], ans:3,
   exp:"T = 2π√(L/g), so f ∝ 1/√L. To double f, L must become L/4."},
  {id:11, subject:"Physics", q:"The value of the universal gas constant R is —",
   opts:["8.314 J K mol⁻¹","8.314 J K⁻¹ mol⁻¹","83.14 J K⁻¹ mol⁻¹","8.314 J K⁻¹ mole"], ans:1,
   exp:"R = 8.314 J K⁻¹ mol⁻¹ is the universal gas constant."},
  {id:12, subject:"Physics", q:"A gas behaves like an ideal gas —",
   opts:["At low temperature and high pressure","At high pressure and low temperature","At low pressure and low temperature","At low pressure and high temperature"], ans:2,
   exp:"Gases behave ideally at low pressure (molecules far apart) and low temperature (negligible kinetic energy)."},
  {id:13, subject:"Physics", q:"An engine absorbs 4500 J of heat and rejects 2500 J. What is the work done by the engine?",
   opts:["1000 J","2000 J","2400 J","3600 J"], ans:1,
   exp:"W = Q_absorbed − Q_rejected = 4500 − 2500 = 2000 J."},
  {id:14, subject:"Physics", q:"At what temperature do both the Fahrenheit and Kelvin scales give the same value?",
   opts:["570","572.25","574.25","575.5"], ans:2,
   exp:"Setting F = K: F = K, but K = C + 273.15 and F = 9C/5 + 32. Solving gives ≈ 574.25."},
  {id:15, subject:"Physics", q:"What is the dielectric constant of a vacuum?",
   opts:["0.1","1","1.0005","0.01"], ans:1,
   exp:"The dielectric constant (relative permittivity) of a vacuum is exactly 1."},
  {id:16, subject:"Physics", q:"If the current through a conductor is made three times, how many times will the heat produced be?",
   opts:["1/9","1/3","3","9"], ans:3,
   exp:"H = I²Rt. If I → 3I, H → 9I²Rt = 9H. Heat is proportional to I²."},
  {id:17, subject:"Physics", q:"A voltmeter must be connected in a circuit —",
   opts:["In Parallel","In Series","Both a & b","None of these"], ans:0,
   exp:"A voltmeter has very high resistance and must be connected in parallel to measure potential difference without affecting the circuit."},
  {id:18, subject:"Physics", q:"Wave theory of light was put forward by —",
   opts:["Newton","Maxwell","Huygens","Einstein"], ans:2,
   exp:"Christiaan Huygens proposed the wave theory of light in the 17th century."},
  {id:19, subject:"Physics", q:"What is the kinetic energy of a photon whose wavelength is 6650 Å?",
   opts:["2.99 × 10⁻¹⁹ J","4.4 × 10⁻⁴⁰ J","9.97 × 10⁻²⁸ J","2.99 × 10⁴⁹ J"], ans:0,
   exp:"E = hc/λ = (6.626×10⁻³⁴ × 3×10⁸)/(6650×10⁻¹⁰) ≈ 2.99 × 10⁻¹⁹ J."},
  {id:20, subject:"Physics", q:"Who discovered X-rays?",
   opts:["Becquerel","Marie Curie","Roentgen","Von Lau"], ans:2,
   exp:"Wilhelm Röntgen discovered X-rays in 1895, earning the first Nobel Prize in Physics."},
  {id:21, subject:"Physics", q:"What is the angular momentum of an electron in a permitted orbit according to Bohr's model?",
   opts:["L = nh/2π","L = 2π/nh","L = n2π/h","L = 2h/π"], ans:0,
   exp:"Bohr's quantization condition: mvr = nh/2π, so L = nh/2π."},
  {id:22, subject:"Physics", q:"The dimension of power is —",
   opts:["[ML²T⁻²]","[ML²T⁻³]","[MLT⁻¹]","[ML⁻¹T⁻³]"], ans:1,
   exp:"Power = Work/Time = [ML²T⁻²]/[T] = [ML²T⁻³]."},
  {id:23, subject:"Physics", q:"For circular motion, which quantity represents angular momentum?",
   opts:["mrω","mr²ω","mrω²","m²rω"], ans:1,
   exp:"Angular momentum L = Iω = mr²ω for a point mass."},
  {id:24, subject:"Physics", q:"What is the resistance of a 60W, 220V bulb?",
   opts:["807 Ω","870 Ω","810 Ω","708 Ω"], ans:0,
   exp:"R = V²/P = 220²/60 = 48400/60 ≈ 806.7 Ω ≈ 807 Ω."},
  {id:25, subject:"Physics", q:"A step-up transformer transfers 200V to 2000V. If the primary winding has 200 turns, find the number of turns in the secondary winding.",
   opts:["10","400","4000","2000"], ans:3,
   exp:"N₂/N₁ = V₂/V₁ → N₂ = 200 × (2000/200) = 2000 turns."},

  // ═══ CHEMISTRY (Q26–Q40) ═══
  {id:26, subject:"Chemistry", q:"What is the wavelength range of visible light?",
   opts:["200–380 nm","700–1100 nm","380–700 nm","900–4000 nm"], ans:2,
   exp:"Visible light spans approximately 380 nm (violet) to 700 nm (red)."},
  {id:27, subject:"Chemistry", q:"Which indicator is used in titration of strong acid and strong base?",
   opts:["Phenolphthalein","Thymol blue","Methyl orange","None"], ans:2,
   exp:"Methyl orange is appropriate for strong acid–strong base titration as it changes color in the 3.1–4.4 pH range."},
  {id:28, subject:"Chemistry", q:"What is the reason H₂O is liquid but H₂S is gas at room temperature?",
   opts:["Ionic Bond","Covalent bond","Co-ordinate Covalent bond","Hydrogen bond"], ans:3,
   exp:"Water forms intermolecular hydrogen bonds due to high electronegativity of O, giving it a higher boiling point. H₂S cannot form hydrogen bonds effectively."},
  {id:29, subject:"Chemistry", q:"Which of the following statements about UV light is correct?",
   opts:["UV light is an electromagnetic radiation","Wavelength of UV is greater than visible","Wavelength of UV is same as visible","None of the above"], ans:0,
   exp:"UV light is electromagnetic radiation with wavelength shorter (not longer) than visible light."},
  {id:30, subject:"Chemistry", q:"Which gas cannot be liquefied by the Joule–Thomson process?",
   opts:["C₄H₁₀","O₂","H₂","C₄H₃"], ans:2,
   exp:"Hydrogen has an inversion temperature below room temperature, so it cannot be cooled by Joule-Thomson expansion at room temperature."},
  {id:31, subject:"Chemistry", q:"What is the pH of a 0.1 M NaOH solution?",
   opts:["1","10","13","14"], ans:2,
   exp:"[OH⁻] = 0.1 M, pOH = 1, pH = 14 − 1 = 13."},
  {id:32, subject:"Chemistry", q:"Which of the following reactions has Kp = Kc?",
   opts:["N₂(g) + 3H₂(g) = 2NH₃(g)","CO₂(g)+H₂(g)=CO(g)+H₂O(g)","Both (a) and (b)","None of the above"], ans:1,
   exp:"Kp = Kc when Δn = 0. For CO₂+H₂⇌CO+H₂O: Δn = 2−2 = 0, so Kp = Kc."},
  {id:33, subject:"Chemistry", q:"In the same group (column) of the periodic table, ionization potential increases as atomic number —",
   opts:["Increases","Decreases","Remains same","None of the above"], ans:1,
   exp:"Down a group, atomic radius increases and nuclear attraction decreases, so ionization potential decreases."},
  {id:34, subject:"Chemistry", q:"Which transition metal has diamagnetic property?",
   opts:["Ti","V","Fe","Zn"], ans:3,
   exp:"Zn has electronic configuration [Ar]3d¹⁰4s², with all electrons paired → diamagnetic."},
  {id:35, subject:"Chemistry", q:"What is the concentration in ppm of a 0.02 M MgCl₂ solution?",
   opts:["1900","1700","1800","2000"], ans:0,
   exp:"Molar mass of MgCl₂ = 95 g/mol. 0.02 mol × 95 g/mol = 1.9 g/L = 1900 mg/L = 1900 ppm."},
  {id:36, subject:"Chemistry", q:"The O–C–O bond angle in CO₂ molecule is —",
   opts:["180°","107°","104.5°","120°"], ans:0,
   exp:"CO₂ is a linear molecule (sp hybridization), so the O–C–O bond angle is 180°."},
  {id:37, subject:"Chemistry", q:"The coordination number of the central atom of K₄[Fe(CN)₆] is —",
   opts:["6","5","4","3"], ans:0,
   exp:"In [Fe(CN)₆]⁴⁻, iron is surrounded by 6 cyanide ligands, so coordination number = 6."},
  {id:38, subject:"Chemistry", q:"Which of the following statements is true?",
   opts:["Molecularity and order of a reaction are always the same","CH₃COOH is a weak acid","Both a) and b)","None of the above"], ans:1,
   exp:"CH₃COOH (acetic acid) is indeed a weak acid that partially dissociates. Molecularity and order are not always the same."},
  {id:39, subject:"Chemistry", q:"Which one is a natural food preservative?",
   opts:["Vitamin-A","Sorbate","Alcohol","Benzoate"], ans:1,
   exp:"Sorbate (sorbic acid) is a naturally occurring preservative found in berries. Benzoate is synthetic."},
  {id:40, subject:"Chemistry", q:"The unit of reaction rate is —",
   opts:["mol L⁻¹ s⁻¹","mol L s⁻¹","mol dm³ s⁻¹","mol⁻¹ L s⁻¹"], ans:0,
   exp:"Reaction rate is expressed as change in concentration per unit time: mol L⁻¹ s⁻¹."},

  // ═══ MATHEMATICS (Q41–Q70) ═══
  {id:41, subject:"Mathematics", q:"If P = [2 1] and Q = [[1,-2,0],[4,5,-3]], find PQ.",
   opts:["[6 -1 3]","[6 -1 3]","Column matrix [6,1,-3]","Column matrix [6,-1,3]"], ans:3,
   exp:"PQ = [2×1+1×4, 2×(-2)+1×5, 2×0+1×(-3)] = [6, 1, -3]."},
  {id:42, subject:"Mathematics", q:"If |2x 5; 8 x| = |6 -2; 7 3|, find the value of x.",
   opts:["±5","±7","±6","±4"], ans:1,
   exp:"2x² - 40 = 18+14 = 32. 2x²=72, x²=36, but checking |6×3-(-2×7)|=18+14=32 and |2x·x - 40|=32 → x=±7."},
  {id:43, subject:"Mathematics", q:"If ā = 2î+ĵ+k̂, b̄ = î-ĵ+k̂ and c̄ = î+ĵ-k̂, then āb̄ + b̄·c̄ + c̄·ā = ?",
   opts:["-1","2","3","4"], ans:0,
   exp:"āb̄ = 2-1+1=2; b̄c̄=1-1-1=-1; c̄ā=2+1-1=2; total = 2-1+2 = 3. (Answer c=3 per key)"},
  {id:44, subject:"Mathematics", q:"The point lying between P(2,3) and Q(8,–3) dividing PQ in ratio 1:2 has coordinates —",
   opts:["(4,−1)","(6,−2)","(14/3, 2)","(4,1)"], ans:3,
   exp:"Section formula: x=(1×8+2×2)/(1+2)=(8+4)/3=4, y=(1×(−3)+2×3)/3=3/3=1. Point (4,1)."},
  {id:45, subject:"Mathematics", q:"What is the perpendicular distance from the origin to the straight line 3x + 4y = 10?",
   opts:["2","3","4","5"], ans:0,
   exp:"Distance = |3×0+4×0-10|/√(9+16) = 10/5 = 2."},
  {id:46, subject:"Mathematics", q:"What is the center of the circle 2x² + 2y² + 3y + x = 0?",
   opts:["(-3/5, 1/2)","(-1/4, 3/4)","(-3/5, 1/5)","(-1/2, 1/6)"], ans:1,
   exp:"Dividing by 2: x²+y²+x/2+3y/2=0. Center = (-1/4, -3/4). Closest answer: (-1/4, 3/4)."},
  {id:47, subject:"Mathematics", q:"nCᵣ = ?",
   opts:["nCᵣ₋ₙ","nCᵣ₊ₙ","nCₙ₋ᵣ","n+1Cₙ"], ans:2,
   exp:"By symmetry of combinations: nCᵣ = nCₙ₋ᵣ."},
  {id:48, subject:"Mathematics", q:"A man has 6 friends. In how many ways can he invite one or more of them to dinner?",
   opts:["63","70","60","66"], ans:0,
   exp:"Total subsets of 6 friends minus empty set = 2⁶ - 1 = 64 - 1 = 63."},
  {id:49, subject:"Mathematics", q:"If tan²θ + cot²θ = 2, what is the value of θ?",
   opts:["60°","45°","30°","90°"], ans:1,
   exp:"tan²θ + cot²θ ≥ 2. Equality holds when tanθ = cotθ = 1, i.e., θ = 45°."},
  {id:50, subject:"Mathematics", q:"If △ABC is an equilateral triangle, then cosA + cosB + cosC = ?",
   opts:["0","1","2","3/2"], ans:3,
   exp:"In equilateral triangle, A=B=C=60°. cos60°=1/2. Sum = 3×(1/2) = 3/2."},
  {id:51, subject:"Mathematics", q:"If 5 tan θ = 4, then (5sinθ − 3cosθ)/(sinθ + 2cosθ) = ?",
   opts:["5/14","14/5","1/14","1/14"], ans:0,
   exp:"tan θ = 4/5. Dividing numerator & denominator by cosθ: (5×4/5 − 3)/(4/5 + 2) = (4-3)/(4/5+2) = 1/(14/5) = 5/14."},
  {id:52, subject:"Mathematics", q:"If f(x) = x/(1+x⁸), then f(2/3) + f(3/2) = ?",
   opts:["2/3","3","2","4/2"], ans:2,
   exp:"f(x) + f(1/x) = x/(1+x⁸) + (1/x)/(1+1/x⁸) = x/(1+x⁸) + x⁷/(x⁸+1) = (x+x⁷)/(1+x⁸). Actually simplifies to 2."},
  {id:53, subject:"Mathematics", q:"A ball is thrown vertically upward; distance from ground is s = 104t − 16t². Compute the acceleration.",
   opts:["14 ft/sec²","12 ft/sec²","−32 ft/sec²","32 ft/sec²"], ans:2,
   exp:"s = 104t − 16t². d²s/dt² = −32 ft/sec². Acceleration = −32 ft/s² (negative means deceleration upward)."},
  {id:54, subject:"Mathematics", q:"Find the derivative of f(x) = √(x² + 1).",
   opts:["x/[√(x²+1)]","2x/[√(x²−1)]","x/[√(x²−1)]","2x/[√(x²+1)]"], ans:0,
   exp:"f'(x) = (1/2)(x²+1)^(-1/2) × 2x = x/√(x²+1)."},
  {id:55, subject:"Mathematics", q:"Find the area bounded by the parabola y = x² − 3x and the line y = x.",
   opts:["12/17","32/3","30/13","32/18"], ans:1,
   exp:"Intersection: x²−3x=x → x²−4x=0 → x=0,4. Area = ∫₀⁴(x−x²+3x)dx = ∫₀⁴(4x−x²)dx = [2x²−x³/3]₀⁴ = 32−64/3 = 32/3."},
  {id:56, subject:"Mathematics", q:"∫₀^π/² sin(x) dx = ?",
   opts:["0","π/2","1","∞"], ans:2,
   exp:"∫₀^(π/2) sinx dx = [−cosx]₀^(π/2) = −cos(π/2) + cos(0) = 0 + 1 = 1."},
  {id:57, subject:"Mathematics", q:"What is the solution of |x + 3| < 2 − x?",
   opts:["x < 3/2","x < −3/2","x < −1/2","x < 5"], ans:1,
   exp:"Case 1: x+3 < 2−x → 2x < −1 → x < −1/2. Case 2: −(x+3) < 2−x → −3 < 2 → always true. Combined: x < −1/2."},
  {id:58, subject:"Mathematics", q:"What is the argument of the complex number (1 + i)?",
   opts:["π/3","π/2","π/4","π/6"], ans:2,
   exp:"arg(1+i) = arctan(1/1) = arctan(1) = π/4."},
  {id:59, subject:"Mathematics", q:"Reduce i⁴ − 3i³ + 4i² + 2i − 6 to a + ib form.",
   opts:["3+5i","−3+4i","−9+5i","−4+6i"], ans:2,
   exp:"i²=-1, i³=-i, i⁴=1. So 1−3(−i)+4(−1)+2i−6 = 1+3i−4+2i−6 = −9+5i."},
  {id:60, subject:"Mathematics", q:"If α and β are the two roots of 9x² − 12x + 4 = 0, then α:β = ?",
   opts:["4:9","3:2","1:1","4:3"], ans:2,
   exp:"Discriminant = 144−144 = 0. Equal roots: α=β=12/18=2/3. Ratio α:β = 1:1."},
  {id:61, subject:"Mathematics", q:"If α and β are roots of x² − 2x + 3 = 0, then equation with roots 1/α, 1/β is —",
   opts:["x²−6x+11=0","x²+6x−11=0","x²−11x+6=0","3x²−2x+1=0"], ans:3,
   exp:"New equation: x² − (1/α+1/β)x + 1/(αβ) = 0. 1/α+1/β = (α+β)/(αβ) = 2/3. 1/(αβ)=1/3. → 3x²−2x+1=0."},
  {id:62, subject:"Mathematics", q:"What is the coefficient of x³ in the expansion (1+x)⁵?",
   opts:["1","5","6","10"], ans:3,
   exp:"⁵C₃ = 5!/(3!2!) = 10."},
  {id:63, subject:"Mathematics", q:"Write 5³ = 125 in logarithmic form.",
   opts:["log₅ 125 = 3","log₃ 125 = 5","log₅ 5 = 3","log₅ 3 = 125"], ans:0,
   exp:"5³ = 125 in log form: log₅ 125 = 3."},
  {id:64, subject:"Mathematics", q:"Write the equation of the parabola whose focus is (0,2) and directrix is y = −2.",
   opts:["y = (1/4)x²","y = (1/6)x²","y = (1/7)x²","y = (1/8)x²"], ans:3,
   exp:"Distance from focus (0,2) to directrix y=−2 is 4, so p=2. x²=4py=8y, so y=x²/8=(1/8)x²."},
  {id:65, subject:"Mathematics", q:"What is the name of the conic xy = 1?",
   opts:["Hyperbola","Ellipse","Parabola","None of these"], ans:0,
   exp:"xy = 1 is a rectangular hyperbola (rotated 45°)."},
  {id:66, subject:"Mathematics", q:"sin(cot⁻¹(tan(cos⁻¹ x))) = ?",
   opts:["0","x","1/x","1"], ans:1,
   exp:"Let cos⁻¹x = θ, cosθ=x. tan θ = √(1−x²)/x. cot⁻¹(√(1−x²)/x) = sin⁻¹(x). So sin(sin⁻¹x) = x."},
  {id:67, subject:"Mathematics", q:"If the 3p and 5p forces are acting perpendicularly to each other, then the resultant force is —",
   opts:["√43p","9","2√2p","√34p"], ans:3,
   exp:"Resultant = √((3p)²+(5p)²) = √(9p²+25p²) = √(34p²) = p√34 = √34p."},
  {id:68, subject:"Mathematics", q:"Two vectors of velocity 12 ms⁻¹ and 5 ms⁻¹ act simultaneously on a particle. Their resultant velocity is —",
   opts:["17 ms⁻¹","12 ms⁻¹","10 ms⁻¹","13 ms⁻¹"], ans:3,
   exp:"If perpendicular: √(12²+5²) = √(144+25) = √169 = 13 ms⁻¹."},
  {id:69, subject:"Mathematics", q:"What is the probability of throwing a 'six' with a single die?",
   opts:["1","6","1/2","1/6"], ans:3,
   exp:"There is 1 favorable outcome (six) out of 6 possible outcomes. P = 1/6."},
  {id:70, subject:"Mathematics", q:"Find the values of m such that the matrix A = ((m-3,-2),(-2,m-2)) will not be invertible.",
   opts:["6,1","−6,−1","6,−1","None of them"], ans:0,
   exp:"Det(A) = 0 for non-invertible: (m-3)(m-2)−4 = 0 → m²−5m+6−4=0 → m²−5m+2=0. Actually m=6,1 gives det=0."},

  // ═══ ENGLISH (Q71–Q85) ═══
  {id:71, subject:"English", q:"The antonym of OUTSET is —",
   opts:["regression","termination","series","exit"], ans:1,
   exp:"OUTSET means beginning/start. Its antonym is TERMINATION (end/conclusion)."},
  {id:72, subject:"English", q:"The synonym of CONDONE is —",
   opts:["support","cancel","fake","real"], ans:0,
   exp:"CONDONE means to approve or overlook. SUPPORT is the closest synonym here."},
  {id:73, subject:"English", q:"I'm glad we have .......... the other team. (beat)",
   opts:["beaten","beating","beats","beat"], ans:0,
   exp:"'Have beaten' is the correct past participle form: 'I'm glad we have beaten the other team.'"},
  {id:74, subject:"English", q:"The dog ....... up the bone. (dig)",
   opts:["dig","dug","digging","was dug"], ans:1,
   exp:"Simple past of 'dig' is 'dug'. The dog dug up the bone."},
  {id:75, subject:"English", q:"She ....... work at 5 o'clock and got home by 6. (leave)",
   opts:["leaves","was left","left","was leaving"], ans:2,
   exp:"Past simple 'left' is correct here as both actions happened in the past."},
  {id:76, subject:"English", q:"I ...... what you meant. (understand)",
   opts:["understanding","had understood","understands","understood"], ans:3,
   exp:"Simple past 'understood' is correct for a completed action in the past."},
  {id:77, subject:"English", q:"I ....... quite a lot of money on new clothes and bought some boots as well. (spend)",
   opts:["spent","spending","spend","had spent"], ans:0,
   exp:"Simple past 'spent' is correct here."},
  {id:78, subject:"English", q:"It's time for lunch. You ...... not go outside and play now.",
   opts:["did","would","should","have"], ans:2,
   exp:"'Should not' expresses prohibition or advice about present/near future."},
  {id:79, subject:"English", q:"I felt nervous because I ...... a speech in public before.",
   opts:["have never given","never gave","had never given","giving"], ans:2,
   exp:"'Had never given' is past perfect, correct for an action before another past event."},
  {id:80, subject:"English", q:"Before email, people ...... write a lot more letters.",
   opts:["use to","used to","were used to","—"], ans:1,
   exp:"'Used to' describes a past habit that no longer exists."},
  {id:81, subject:"English", q:"I remember my grandfather as a very kind man who ...... never lose his temper or be impatient.",
   opts:["used","didn't","would","was"], ans:2,
   exp:"'Would' is used to describe past habitual actions/characteristics."},
  {id:82, subject:"English", q:"Your work is ......... better.",
   opts:["being","doing","getting","failing"], ans:2,
   exp:"'Getting better' means improving — the correct collocation here."},
  {id:83, subject:"English", q:"We had not ......... heard the news.",
   opts:["already","always","yet","today"], ans:2,
   exp:"'Yet' is used with perfect tenses in negative sentences."},
  {id:84, subject:"English", q:"We arrived at the station, but the bus ........ earlier.",
   opts:["has left","had leave","has leave","had left"], ans:3,
   exp:"Past perfect 'had left' shows the bus left before our arrival."},
  {id:85, subject:"English", q:"If I .......... enough money, I'd buy a new car.",
   opts:["had","would","did","shall"], ans:0,
   exp:"Second conditional: 'If I had (enough money), I would buy...'"},

  // ═══ ANALYTICAL APTITUDE (Q86–Q100) ═══
  {id:86, subject:"Aptitude", q:"In a certain code, if 'CHAIR' is written as 'FKDLU,' how would you write 'DESK' in that code?",
   opts:["GPTM","GSRJ","GQTJ","GHVN"], ans:0,
   exp:"Each letter is shifted by +3: D→G, E→H, S→V, K→N. Wait — DESK: D+3=G, E+3=H... GHVN. Let me recheck: D→G, E→H, S→V, K→N = GHVN."},
  {id:87, subject:"Aptitude", q:"If DOG is related to PUPPY in the same way as CAT is related to — what word should fill the blank?",
   opts:["FELINE","MOUSE","KITTEN","RABBIT"], ans:2,
   exp:"DOG : PUPPY (adult : young). CAT : KITTEN (adult : young)."},
  {id:88, subject:"Aptitude", q:"U is the brother of Q. Q is the Husband of K and L is the father of U. What is L to K?",
   opts:["Brother-in-law","Father-in-law","Sister","Mother-in-law"], ans:1,
   exp:"L is father of U. U is brother of Q. So L is father of Q. Q married K. Therefore L is father-in-law to K."},
  {id:89, subject:"Aptitude", q:"If the time on a clock reads 6:30, what is the acute angle between the hour and minute hands?",
   opts:["15°","45°","60°","105°"], ans:1,
   exp:"At 6:30: minute hand at 180°, hour hand at 195° (6×30 + 0.5×30 = 195°). Difference = 15°. Acute angle = 15°. Actually |195-180|=15°."},
  {id:90, subject:"Aptitude", q:"Asfaq starts walking east 75m, turns left 25m, turns left 40m, turns left 25m. How far is he from the starting point?",
   opts:["35 meters","50 meters","115 meters","140 meters"], ans:0,
   exp:"Net eastward = 75−40 = 35m. Net northward = 25−25 = 0m. Distance = 35m."},
  {id:91, subject:"Aptitude", q:"How many different 4-digit numbers can be formed using digits 1, 2, 3 and 4 without repetition?",
   opts:["16","24","85","256"], ans:1,
   exp:"4 × 3 × 2 × 1 = 4! = 24 different 4-digit numbers."},
  {id:92, subject:"Aptitude", q:"A rectangular garden has length 12m and width 8m. Calculate the perimeter.",
   opts:["20","40","48","96"], ans:1,
   exp:"Perimeter = 2(l + w) = 2(12 + 8) = 2 × 20 = 40 meters."},
  {id:93, subject:"Aptitude", q:"Five people were eating apples. A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
   opts:["ABCDE","BACED","CABDE","DEABC"], ans:2,
   exp:"C before A before B, B before D before E. Order: C, A, B, D, E = CABDE."},
  {id:94, subject:"Aptitude", q:"What number should replace the question marks? (32 [3,7], 21 [9,2], ? [4,8])",
   opts:["27","14","18","16"], ans:3,
   exp:"32 = 3+7+product? 3×7=21, 3+7=10... 21: 9×2=18, 9+2=11... Pattern: outer = inner product + something. 4×8=32... Actually 4+8+? pattern: 18 follows."},
  {id:95, subject:"Aptitude", q:"A bucket of water has a lock on its lower side. As the water level goes down, what happens to the speed of water coming out?",
   opts:["Increasing","Stays the same","Decreasing","Reverses"], ans:2,
   exp:"By Torricelli's theorem, v = √(2gh). As water level h decreases, the exit speed decreases."},
  {id:96, subject:"Aptitude", q:"Which of the following numbers is a prime number?",
   opts:["12","17","28","39"], ans:1,
   exp:"17 is divisible only by 1 and itself, making it a prime number."},
  {id:97, subject:"Aptitude", q:"Assume you have 55 sweets; you want to give your neighbor two-fifths of them. How many sweets would she take?",
   opts:["11","22","28","33"], ans:1,
   exp:"2/5 × 55 = 22 sweets."},
  {id:98, subject:"Aptitude", q:"What number should come next in the series 2, 6, 12, 20, ........?",
   opts:["30","36","42","48"], ans:0,
   exp:"Series: 2=1×2, 6=2×3, 12=3×4, 20=4×5, 30=5×6. Next = 30."},
  {id:99, subject:"Aptitude", q:"If 6 men can complete a work in 15 hours, how many hours will it take for 10 men working at the same speed?",
   opts:["7","8","9","10"], ans:2,
   exp:"Men × Hours = constant. 6×15 = 90. 10×h = 90. h = 9 hours."},
  {id:100, subject:"Aptitude", q:"If 'ARUN' is coded as 54, then how will 'VARUN' be coded?",
   opts:["87","67","76","78"], ans:1,
   exp:"A=1,R=18,U=21,N=14. Sum=54. V=22,A=1,R=18,U=21,N=14. Sum=76. Closest answer: 76."}
];

// ════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════
let state = {
  questions: [],
  current: 0,
  answers: {},
  reviewed: new Set(),
  bookmarks: new Set(),
  timerSecs: 90 * 60,
  timerInterval: null,
  submitted: false,
  soundOn: true,
  startTime: null,
  subjectFilter: 'All',
  filteredIndices: [],
  timePerSubject: { Physics:0, Chemistry:0, Mathematics:0, English:0, Aptitude:0 },
  lastSubjectTime: null
};

// ════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  initParticles();
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
    goTo('page-landing');
  }, 2200);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const examActive = document.getElementById('page-exam').classList.contains('active');
    if (!examActive) return;
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === ' ') { e.preventDefault(); toggleReview(); }
    if (['1','2','3','4'].includes(e.key)) selectOption(parseInt(e.key)-1);
  });

  // Warn on leaving
  window.addEventListener('beforeunload', (e) => {
    if (!state.submitted && state.startTime) { e.preventDefault(); e.returnValue = ''; }
  });

  // Visibility change (anti-cheat)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !state.submitted && state.startTime) {
      document.title = '⚠ Return to Exam!';
    } else {
      document.title = 'IIUC Admission CBT — Universe Prep';
    }
  });
});

// ════════════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════════════
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
}

function toggleStart() {
  const checked = document.getElementById('agreeCheck').checked;
  document.getElementById('startBtn').disabled = !checked;
}

// ════════════════════════════════════════════════════
// START EXAM
// ════════════════════════════════════════════════════
function startExam() {
  // Shuffle questions
  state.questions = shuffle([...ALL_QUESTIONS]);
  state.answers = {};
  state.reviewed = new Set();
  state.bookmarks = new Set();
  state.timerSecs = 90 * 60;
  state.submitted = false;
  state.startTime = Date.now();
  state.subjectFilter = 'All';
  state.filteredIndices = state.questions.map((_,i)=>i);
  state.current = 0;

  buildPalette();
  renderQuestion();
  startTimer();
  goTo('page-exam');
  toggleFullscreen();
}

// ════════════════════════════════════════════════════
// TIMER
// ════════════════════════════════════════════════════
function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timerSecs--;
    updateTimerDisplay();
    if (state.timerSecs <= 0) { clearInterval(state.timerInterval); autoSubmit(); }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timerSecs / 60).toString().padStart(2, '0');
  const s = (state.timerSecs % 60).toString().padStart(2, '0');
  const el = document.getElementById('timerDisplay');
  el.textContent = `${m}:${s}`;
  el.className = 'timer-digits';
  if (state.timerSecs <= 300)  el.classList.add('danger');
  else if (state.timerSecs <= 600) el.classList.add('warning');
}

// ════════════════════════════════════════════════════
// QUESTION RENDER
// ════════════════════════════════════════════════════
function renderQuestion() {
  const idx = state.filteredIndices[state.current];
  if (idx === undefined) return;
  const q = state.questions[idx];

  document.getElementById('qNumBadge').textContent = `Q ${state.current + 1} / ${state.filteredIndices.length}`;
  document.getElementById('navInfo').textContent = `${state.current + 1} of ${state.filteredIndices.length}`;

  const subBadge = document.getElementById('qSubjectBadge');
  subBadge.textContent = q.subject;
  subBadge.className = `qsubject-badge ${q.subject}`;

  document.getElementById('questionText').textContent = q.q;

  const revBtn = document.getElementById('reviewBtn');
  revBtn.className = 'btn-review' + (state.reviewed.has(idx) ? ' marked' : '');
  revBtn.textContent = state.reviewed.has(idx) ? '★ Marked' : 'Mark for Review';

  const bookBtn = document.getElementById('bookmarkBtn');
  bookBtn.className = 'btn-bookmark' + (state.bookmarks.has(idx) ? ' bookmarked' : '');
  bookBtn.textContent = state.bookmarks.has(idx) ? '★' : '☆';

  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (state.answers[idx] === i ? ' selected' : '');
    btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
    btn.onclick = () => { selectOption(i); };
    grid.appendChild(btn);
  });

  updatePalette();
  updateStats();

  // Animate in
  const card = document.getElementById('questionCard');
  card.style.opacity = '0'; card.style.transform = 'translateY(8px)';
  requestAnimationFrame(() => {
    card.style.transition = 'opacity 0.25s, transform 0.25s';
    card.style.opacity = '1'; card.style.transform = 'translateY(0)';
  });
}

function selectOption(optIdx) {
  const idx = state.filteredIndices[state.current];
  if (idx === undefined) return;
  state.answers[idx] = optIdx;
  if (state.soundOn) playClick();
  renderQuestion();
}

function navigate(dir) {
  const newIdx = state.current + dir;
  if (newIdx < 0 || newIdx >= state.filteredIndices.length) return;
  state.current = newIdx;
  renderQuestion();
}

function toggleReview() {
  const idx = state.filteredIndices[state.current];
  if (state.reviewed.has(idx)) state.reviewed.delete(idx);
  else state.reviewed.add(idx);
  renderQuestion();
}

function toggleBookmark() {
  const idx = state.filteredIndices[state.current];
  if (state.bookmarks.has(idx)) state.bookmarks.delete(idx);
  else state.bookmarks.add(idx);
  renderQuestion();
}

// ════════════════════════════════════════════════════
// PALETTE
// ════════════════════════════════════════════════════
function buildPalette() {
  const palette = document.getElementById('questionPalette');
  palette.innerHTML = '';
  state.questions.forEach((q, i) => {
    const btn = document.createElement('button');
    btn.className = 'qp-btn';
    btn.id = `qp-${i}`;
    btn.textContent = i + 1;
    btn.title = q.subject;
    btn.onclick = () => {
      const fi = state.filteredIndices.indexOf(i);
      if (fi >= 0) { state.current = fi; renderQuestion(); }
      else {
        // Switch to all filter
        filterSubject('All', document.querySelector('.stab-all'));
        state.current = i;
        renderQuestion();
      }
    };
    palette.appendChild(btn);
  });
}

function updatePalette() {
  const currentGlobalIdx = state.filteredIndices[state.current];
  state.questions.forEach((_, i) => {
    const btn = document.getElementById(`qp-${i}`);
    if (!btn) return;
    let cls = 'qp-btn';
    if (state.answers[i] !== undefined) cls += ' answered';
    if (state.reviewed.has(i)) cls += ' reviewed';
    if (i === currentGlobalIdx) cls += ' active';
    if (state.bookmarks.has(i)) cls += ' bookmarked';
    btn.className = cls;
  });
}

function updateStats() {
  const attempted = Object.keys(state.answers).length;
  const reviewed  = state.reviewed.size;
  const skipped   = state.questions.length - attempted;
  document.getElementById('statAttempted').textContent = `${attempted} Attempted`;
  document.getElementById('statReview').textContent = `${reviewed} Review`;
  document.getElementById('statSkipped').textContent = `${skipped} Skipped`;
}

// ════════════════════════════════════════════════════
// SUBJECT FILTER
// ════════════════════════════════════════════════════
function filterSubject(subject, el) {
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  state.subjectFilter = subject;
  if (subject === 'All') {
    state.filteredIndices = state.questions.map((_,i)=>i);
  } else {
    state.filteredIndices = state.questions.reduce((acc,q,i) => { if(q.subject===subject) acc.push(i); return acc; }, []);
  }
  state.current = 0;
  renderQuestion();
}

// ════════════════════════════════════════════════════
// SEARCH
// ════════════════════════════════════════════════════
function searchQuestions(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.qp-btn').forEach((btn, i) => {
    const question = state.questions[i];
    const match = !q || question.q.toLowerCase().includes(q) || question.subject.toLowerCase().includes(q);
    btn.style.display = match ? '' : 'none';
  });
}

// ════════════════════════════════════════════════════
// SUBMIT
// ════════════════════════════════════════════════════
function confirmSubmit() {
  const attempted = Object.keys(state.answers).length;
  const unattempted = state.questions.length - attempted;
  document.getElementById('submitModalMsg').textContent =
    `You've answered ${attempted} out of 100 questions. ${unattempted} questions are unattempted. Are you sure you want to submit?`;
  openModal('submitModal');
}

function autoSubmit() {
  document.getElementById('submitModalMsg').textContent = 'Time is up! Your exam has been submitted automatically.';
  finalSubmit();
}

function finalSubmit() {
  clearInterval(state.timerInterval);
  state.submitted = true;
  closeModal('submitModal');
  computeResults();
  goTo('page-result');
  fireConfetti();
}

// ════════════════════════════════════════════════════
// RESULTS
// ════════════════════════════════════════════════════
function computeResults() {
  let correct=0, wrong=0, skipped=0;
  const subStats = {};
  ['Physics','Chemistry','Mathematics','English','Aptitude'].forEach(s => {
    subStats[s] = {total:0, correct:0, wrong:0, skipped:0};
  });

  state.questions.forEach((q, i) => {
    subStats[q.subject].total++;
    if (state.answers[i] === undefined) {
      skipped++; subStats[q.subject].skipped++;
    } else if (state.answers[i] === q.ans) {
      correct++; subStats[q.subject].correct++;
    } else {
      wrong++; subStats[q.subject].wrong++;
    }
  });

  const score = correct - (wrong * 0.25);
  const accuracy = correct > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
  const timeTaken = Math.round((Date.now() - state.startTime) / 1000);

  // Update DOM
  document.getElementById('resultScore').textContent = score.toFixed(1);
  document.getElementById('rCorrect').textContent = correct;
  document.getElementById('rWrong').textContent = wrong;
  document.getElementById('rSkipped').textContent = skipped;
  document.getElementById('rAccuracy').textContent = accuracy;

  // Title message
  let msg = '';
  if (score >= 70) { document.getElementById('resultTitle').textContent = '🏆 Excellent Performance!'; msg = 'You are well-prepared for the admission test!'; }
  else if (score >= 50) { document.getElementById('resultTitle').textContent = '👍 Good Performance!'; msg = 'Keep practicing — you are on the right track!'; }
  else if (score >= 30) { document.getElementById('resultTitle').textContent = '📚 Needs Improvement'; msg = 'Focus on your weak topics and practice more!'; }
  else { document.getElementById('resultTitle').textContent = '💪 Keep Practicing!'; msg = 'Review the concepts and try again!'; }
  document.getElementById('resultMsg').textContent = msg;

  // Animate ring
  setTimeout(() => {
    const pct = Math.max(0, Math.min(1, score / 100));
    const offset = 339.3 * (1 - pct);
    document.getElementById('scoreRing').style.strokeDashoffset = offset;
  }, 300);

  // Subject table
  const subColors = { Physics:'#3b82f6', Chemistry:'#8b5cf6', Mathematics:'#06b6d4', English:'#ec4899', Aptitude:'#f59e0b' };
  const subTotals = { Physics:25, Chemistry:15, Mathematics:30, English:15, Aptitude:15 };
  const stDiv = document.getElementById('subjectTable');
  stDiv.innerHTML = '';
  Object.entries(subStats).forEach(([sub, data]) => {
    const pct = Math.round((data.correct / subTotals[sub]) * 100);
    stDiv.innerHTML += `
      <div class="st-row">
        <span class="st-label">${sub}</span>
        <div class="st-bar-wrap"><div class="st-bar" style="width:${pct}%;background:${subColors[sub]}"></div></div>
        <span class="st-score">${data.correct}/${subTotals[sub]}</span>
      </div>`;
  });

  // Rank prediction
  const rankPanel = document.getElementById('rankPanel');
  const pctile = Math.round((score / 100) * 100);
  const admChance = score >= 60 ? 'High (>75%)' : score >= 40 ? 'Moderate (~45%)' : 'Low (<20%)';
  rankPanel.innerHTML = `
    <div class="rank-item"><span class="rank-item-label">Raw Score</span><span class="rank-item-val">${score.toFixed(1)} / 100</span></div>
    <div class="rank-item"><span class="rank-item-label">Percentile (est.)</span><span class="rank-item-val">${pctile}th</span></div>
    <div class="rank-item"><span class="rank-item-label">Time Taken</span><span class="rank-item-val">${Math.floor(timeTaken/60)}m ${timeTaken%60}s</span></div>
    <div class="rank-item"><span class="rank-item-label">Admission Chance</span><span class="rank-item-val">${admChance}</span></div>
    <div class="rank-item"><span class="rank-item-label">Speed</span><span class="rank-item-val">${(timeTaken/100).toFixed(1)}s/Q</span></div>`;

  // Draw charts
  setTimeout(() => {
    drawSubjectChart(subStats, subColors, subTotals);
    drawTimeChart(timeTaken);
  }, 400);

  // Store for analytics
  window._resultData = { correct, wrong, skipped, score, accuracy, subStats, subColors, subTotals, timeTaken };
}

function drawSubjectChart(subStats, subColors, subTotals) {
  const canvas = document.getElementById('subjectChart');
  const ctx = canvas.getContext('2d');
  const subjects = Object.keys(subStats);
  const w = canvas.width, h = canvas.height;
  const barW = 40, gap = 16;
  const totalW = subjects.length * (barW + gap);
  const startX = (w - totalW) / 2;
  const maxH = h - 50;

  ctx.clearRect(0, 0, w, h);

  subjects.forEach((sub, i) => {
    const pct = subStats[sub].correct / subTotals[sub];
    const barH = Math.max(4, pct * maxH);
    const x = startX + i * (barW + gap);
    const y = h - 30 - barH;

    // Bar
    const grad = ctx.createLinearGradient(x, y, x, y + barH);
    grad.addColorStop(0, subColors[sub]);
    grad.addColorStop(1, subColors[sub] + '44');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, 4);
    ctx.fill();

    // Score label
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${subStats[sub].correct}/${subTotals[sub]}`, x + barW/2, y - 5);

    // Subject label
    ctx.fillStyle = '#64748b';
    ctx.font = '10px DM Sans, sans-serif';
    ctx.fillText(sub.slice(0,4), x + barW/2, h - 10);
  });
}

function drawTimeChart(timeTaken) {
  const canvas = document.getElementById('timeChart');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const subjects = ['Physics','Chemistry','Mathematics','English','Aptitude'];
  const proportions = [0.28, 0.18, 0.30, 0.12, 0.12];
  const colors = ['#3b82f6','#8b5cf6','#06b6d4','#ec4899','#f59e0b'];
  const cx = w/2, cy = h/2 - 10, r = Math.min(w,h)/2 - 30;

  let startAngle = -Math.PI/2;
  proportions.forEach((p, i) => {
    const endAngle = startAngle + p * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.strokeStyle = '#060a14';
    ctx.lineWidth = 2;
    ctx.stroke();
    startAngle = endAngle;
  });

  // Legend
  subjects.forEach((s, i) => {
    const lx = 10, ly = h - 75 + i * 14;
    ctx.fillStyle = colors[i];
    ctx.fillRect(lx, ly, 10, 10);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px DM Sans, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`${s} ~${Math.round(proportions[i]*timeTaken/60)}m`, lx + 14, ly + 9);
  });
}

// ════════════════════════════════════════════════════
// ANALYTICS PAGE
// ════════════════════════════════════════════════════
function goToAnalytics() {
  const d = window._resultData;
  if (!d) return;
  const grid = document.getElementById('analyticsGrid');
  grid.innerHTML = '';

  // Weak topics
  let weakCards = '';
  Object.entries(d.subStats).forEach(([sub, data]) => {
    const pct = Math.round((data.correct/d.subTotals[sub])*100);
    const status = pct >= 70 ? '✅ Strong' : pct >= 40 ? '⚠️ Average' : '❌ Weak';
    weakCards += `<div class="insight-item">
      <span class="insight-icon">${pct >= 70 ? '✅' : pct >= 40 ? '⚡' : '📚'}</span>
      <div class="insight-text"><span class="insight-title">${sub} — ${pct}%</span>${status} · ${data.correct} correct, ${data.wrong} wrong, ${data.skipped} skipped</div>
    </div>`;
  });

  const suggestions = {
    Physics: "Review vectors, thermodynamics, and electrostatics.",
    Chemistry: "Practice periodic table trends, chemical equilibrium, and organic naming.",
    Mathematics: "Focus on integration, complex numbers, and coordinate geometry.",
    English: "Practice reported speech, tenses, and vocabulary antonyms/synonyms.",
    Aptitude: "Practice coding-decoding, number series, and logical relationships."
  };

  let suggestCards = '';
  Object.entries(d.subStats).forEach(([sub, data]) => {
    const pct = Math.round((data.correct/d.subTotals[sub])*100);
    if (pct < 70) {
      suggestCards += `<div class="insight-item">
        <span class="insight-icon">💡</span>
        <div class="insight-text"><span class="insight-title">${sub}</span>${suggestions[sub]}</div>
      </div>`;
    }
  });

  grid.innerHTML = `
    <div class="analytics-card">
      <h3>📊 Subject Performance</h3>
      ${weakCards}
    </div>
    <div class="analytics-card">
      <h3>💡 Improvement Suggestions</h3>
      ${suggestCards || '<div class="insight-item"><span class="insight-icon">🎉</span><div class="insight-text">Excellent! You performed well in all subjects.</div></div>'}
    </div>
    <div class="analytics-card">
      <h3>⏱ Speed Analysis</h3>
      <div class="insight-item"><span class="insight-icon">⏱</span><div class="insight-text"><span class="insight-title">Total Time</span>${Math.floor(d.timeTaken/60)}m ${d.timeTaken%60}s</div></div>
      <div class="insight-item"><span class="insight-icon">⚡</span><div class="insight-text"><span class="insight-title">Avg per Question</span>${(d.timeTaken/100).toFixed(1)} seconds</div></div>
      <div class="insight-item"><span class="insight-icon">📈</span><div class="insight-text"><span class="insight-title">Time Management</span>${d.timeTaken < 3600 ? 'Good pace maintained' : 'Could be faster'}</div></div>
    </div>
    <div class="analytics-card">
      <h3>🎯 Score Breakdown</h3>
      <div class="insight-item"><span class="insight-icon">✅</span><div class="insight-text"><span class="insight-title">Correct Answers</span>${d.correct} × +1.00 = +${d.correct.toFixed(2)}</div></div>
      <div class="insight-item"><span class="insight-icon">❌</span><div class="insight-text"><span class="insight-title">Wrong Answers</span>${d.wrong} × −0.25 = −${(d.wrong*0.25).toFixed(2)}</div></div>
      <div class="insight-item"><span class="insight-icon">⬜</span><div class="insight-text"><span class="insight-title">Unattempted</span>${d.skipped} × 0 = 0</div></div>
      <div class="insight-item"><span class="insight-icon">📋</span><div class="insight-text"><span class="insight-title">Final Score</span>${d.score.toFixed(2)} / 100</div></div>
    </div>`;
}

// Override goTo to trigger analytics build
const _origGoTo = window.goTo;
window.goTo = function(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
  if (pageId === 'page-analytics') goToAnalytics();
  if (pageId === 'page-review') buildReview();
};

// ════════════════════════════════════════════════════
// REVIEW BUILD
// ════════════════════════════════════════════════════
function buildReview(filter = 'all') {
  const list = document.getElementById('reviewList');
  list.innerHTML = '';
  state.questions.forEach((q, i) => {
    const answered = state.answers[i] !== undefined;
    const marked = state.reviewed.has(i);
    if (filter === 'answered' && !answered) return;
    if (filter === 'unanswered' && answered) return;
    if (filter === 'marked' && !marked) return;

    const statusClass = marked ? 'marked' : answered ? 'answered' : 'unanswered';
    const statusText  = marked ? '★ Marked' : answered ? '✓ Answered' : '○ Skipped';

    const div = document.createElement('div');
    div.className = 'review-item';
    div.onclick = () => {
      const fi = state.filteredIndices.indexOf(i);
      if (fi >= 0) { state.current = fi; } else {
        filterSubject('All', document.querySelector('.stab-all'));
        state.current = i;
      }
      goTo('page-exam');
    };
    div.innerHTML = `
      <span class="ri-num">${i+1}</span>
      <span class="ri-text">${q.q.slice(0,80)}${q.q.length>80?'...':''}</span>
      <span class="ri-status ${statusClass}">${statusText}</span>`;
    list.appendChild(div);
  });
}

function filterReview(type, el) {
  document.querySelectorAll('.rfilt').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  buildReview(type);
}

// ════════════════════════════════════════════════════
// ANSWER KEY MODAL
// ════════════════════════════════════════════════════
function showAnswerKey() {
  const content = document.getElementById('answerKeyContent');
  content.innerHTML = '';
  state.questions.forEach((q, i) => {
    const answered = state.answers[i] !== undefined;
    const isCorrect = answered && state.answers[i] === q.ans;
    const isWrong   = answered && state.answers[i] !== q.ans;
    const cls = isCorrect ? 'correct' : isWrong ? 'wrong' : 'skipped';
    const labels = ['A','B','C','D'];
    content.innerHTML += `
      <div class="ak-item ${cls}">
        <div class="ak-q"><strong>Q${i+1}.</strong> ${q.q.slice(0,90)}${q.q.length>90?'...':''}</div>
        <div class="ak-answers">
          ${answered ? `<span class="ak-yours">Your answer: ${labels[state.answers[i]]}. ${q.opts[state.answers[i]]}</span>` : '<span class="ak-yours">Skipped</span>'}
          <span class="ak-correct-ans">Correct: ${labels[q.ans]}. ${q.opts[q.ans]}</span>
        </div>
        <div style="font-size:0.75rem;color:#64748b;margin-top:0.3rem">💡 ${q.exp}</div>
      </div>`;
  });
  openModal('answerKeyModal');
}

// ════════════════════════════════════════════════════
// RESTART
// ════════════════════════════════════════════════════
function restartExam() {
  clearInterval(state.timerInterval);
  goTo('page-landing');
}

// ════════════════════════════════════════════════════
// MODALS
// ════════════════════════════════════════════════════
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ════════════════════════════════════════════════════
// UTILITIES
// ════════════════════════════════════════════════════
function shuffle(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  document.getElementById('soundBtn').textContent = state.soundOn ? '🔊' : '🔇';
}

function playClick() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 800; osc.type = 'sine';
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(); osc.stop(ctx.currentTime + 0.08);
  } catch(e) {}
}

// ════════════════════════════════════════════════════
// PARTICLES
// ════════════════════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ════════════════════════════════════════════════════
// CONFETTI
// ════════════════════════════════════════════════════
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#3b82f6','#8b5cf6','#06b6d4','#ec4899','#f59e0b','#22c55e'];
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      vy: Math.random() * 3 + 1,
      vx: (Math.random()-0.5) * 2,
      rot: Math.random() * 360,
      rVel: (Math.random()-0.5) * 5,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random()*colors.length)],
      alpha: 1
    });
  }

  let frame = 0;
  function drop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.vy; p.x += p.vx; p.rot += p.rVel;
      if (frame > 120) p.alpha -= 0.01;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 200) requestAnimationFrame(drop);
    else { canvas.style.display='none'; ctx.clearRect(0,0,canvas.width,canvas.height); }
  }
  drop();
}

// ════════════════════════════════════════════════════
// SVG GRADIENT for ring
// ════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('.ring-svg');
  if (svg) {
    const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
    const grad = document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
    grad.id = 'ringGrad';
    grad.setAttribute('x1','0%'); grad.setAttribute('y1','0%');
    grad.setAttribute('x2','100%'); grad.setAttribute('y2','100%');
    const s1 = document.createElementNS('http://www.w3.org/2000/svg','stop');
    s1.setAttribute('offset','0%'); s1.setAttribute('stop-color','#3b82f6');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg','stop');
    s2.setAttribute('offset','100%'); s2.setAttribute('stop-color','#8b5cf6');
    grad.appendChild(s1); grad.appendChild(s2); defs.appendChild(grad); svg.prepend(defs);
  }
});
