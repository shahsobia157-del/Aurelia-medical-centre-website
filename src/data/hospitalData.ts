import { Doctor, Department, MedicalService, Facility, BlogArticle, Testimonial } from '../types';

// Distinct image mappings ensuring zero repetition across all cards and sections
export const IMAGES = {
  // Hero: Grand daylight atrium
  hero: '/src/assets/images/hero_medical_center_1793620906296.jpg',
  
  // About: Senior faculty consultation library
  about: '/src/assets/images/about_clinical_excellence_1793620906830.jpg',
  
  // Patient Experience: Scandinavian oak garden suite with reading chair
  patientExperience: '/src/assets/images/facility_executive_suite_1793620909064.jpg',
  
  // Doctors: 100% distinct medical portraits
  doctorElena: '/src/assets/images/specialist_dr_elena_vance_1793620907713.jpg',
  doctorMarcus: '/src/assets/images/specialist_dr_marcus_thorne_1793620908491.jpg',
  doctorAisha: '/src/assets/images/doctor_aisha_morales_1793621801855.jpg',
  doctorJonathan: '/src/assets/images/doctor_jonathan_sterling_1793621802704.jpg',
  doctorSophia: 'https://images.unsplash.com/photo-1594824813589-3cfd81b7e411?auto=format&fit=crop&q=80&w=800',
  doctorKenji: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',

  // Facilities: 6 completely different architectural spaces
  facilityExterior: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=1200',
  facilityReception: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
  facilitySuite: '/src/assets/images/facility_recovery_room_1793621802674.jpg', // Forest view VIP room (distinct from patientExperience)
  facilityOrRoom: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
  facilityMri: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
  facilityLounge: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200',

  // Services: Unique photography
  serviceImaging: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
  serviceLab: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
  servicePreventive: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  serviceSurgical: '/src/assets/images/service_surgical_theatre_1793621803075.jpg', // Dedicated Da Vinci robotics operating suite
  serviceEmergency: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
  serviceRehab: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',

  // Blog articles: 3 distinct lifestyle & medical scenes
  blogPreventive: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
  blogHabits: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
  blogConsult: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    shortDescription: 'Comprehensive cardiovascular diagnosis, non-invasive imaging, and advanced interventional care.',
    fullDescription: 'The Aurelia Heart & Vascular Center provides multidisciplinary cardiac solutions spanning 3D echocardiography, coronary angioplasty, electrophysiology, and preventative cardiovascular rehabilitation.',
    headOfDepartment: 'Dr. Elena Vance, MD, FACC',
    keyServices: ['3D Echocardiography', 'Cardiac Catheterization', 'Arrhythmia Management', 'Preventive Lipidology'],
    iconName: 'HeartPulse',
    bedCapacity: '42 Intensive & Step-Down Beds'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    shortDescription: 'Cutting-edge neurological assessments, stroke response systems, and comprehensive neurosurgery.',
    fullDescription: 'Our neurosciences team treats complex cranial, spinal, and neurovascular conditions with robotic-assisted micro-neurosurgery and continuous neuro-monitoring.',
    headOfDepartment: 'Dr. Marcus Thorne, MD, PhD',
    keyServices: ['Robotic Neuro-Navigation', 'Comprehensive Stroke Center', 'Epilepsy Monitoring', 'Spine Reconstruction'],
    iconName: 'Brain',
    bedCapacity: '36 Dedicated Neuro-ICU Beds'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    shortDescription: 'Pioneering joint replacement, sports injury restoration, and robotic spine interventions.',
    fullDescription: 'Restoring natural mobility through computer-navigated arthroplasty, minimally invasive tendon repair, and specialized post-operative physical therapy programs.',
    headOfDepartment: 'Dr. Jonathan Sterling, MD, FACS',
    keyServices: ['Robotic Total Knee & Hip', 'Arthroscopic Reconstruction', 'Sports Medicine & Biomechanics', 'Spinal Alignment'],
    iconName: 'Activity',
    bedCapacity: '48 Inpatient Orthopedic Suites'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    shortDescription: 'Warm, compassionate care designed specifically for neonatal, child, and adolescent wellness.',
    fullDescription: 'A child-centric wing featuring family-integrated suites, Level III NICU capabilities, pediatric sub-specialties, and 24/7 dedicated urgent care.',
    headOfDepartment: 'Dr. Aisha Morales, MD, FAAP',
    keyServices: ['Level III Neonatal Intensive Care', 'Pediatric Cardiology', 'Developmental Milestone Care', 'Child Life Therapy'],
    iconName: 'Baby',
    bedCapacity: '30 Pediatric & Neonatal Suites'
  },
  {
    id: 'dermatology',
    name: 'Dermatology',
    shortDescription: 'Advanced dermatopathology, targeted phototherapy, and precision skin cancer screenings.',
    fullDescription: 'Expert care for medical and procedural dermatology, utilizing digital dermoscopy, Mohs micrographic surgery, and therapeutic laser systems.',
    headOfDepartment: 'Dr. Sophia Aris, MD, FAAD',
    keyServices: ['Digital Dermoscopy & Mole Mapping', 'Mohs Micrographic Surgery', 'Targeted Excimer Laser', 'Complex Eczema & Psoriasis'],
    iconName: 'Sparkles',
    bedCapacity: 'Outpatient Clinical Suite'
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Obstetrics',
    shortDescription: 'Complete maternal-fetal medicine, minimally invasive pelvic surgery, and holistic women’s health.',
    fullDescription: 'Delivering compassionate guidance through every life stage, from luxury family birthing suites to robotic hysterectomy and fertility preservation.',
    headOfDepartment: 'Dr. Claire Laurent, MD, FACOG',
    keyServices: ['Bespoke Birthing Suites', 'High-Risk Maternal-Fetal Unit', 'Minimally Invasive Laparoscopy', 'Menopause Wellness'],
    iconName: 'Users',
    bedCapacity: '28 Luxury Maternity Suites'
  },
  {
    id: 'oncology',
    name: 'Oncology',
    shortDescription: 'Targeted immunotherapy, precision molecular diagnostics, and compassionate holistic oncology.',
    fullDescription: 'Our oncology pavilion pairs stereotactic radiation with clinical genomics, individualized chemotherapy infusions, and dedicated palliative comfort.',
    headOfDepartment: 'Dr. Kenji Takahashi, MD',
    keyServices: ['Next-Gen Genomic Profiling', 'Immunotherapy Infusion Suites', 'Stereotactic Body Radiotherapy', 'Integrative Support'],
    iconName: 'ShieldCheck',
    bedCapacity: '40 Private Oncology Suites'
  },
  {
    id: 'emergency',
    name: 'Emergency Medicine',
    shortDescription: 'Immediate, rapid-response trauma care with dedicated helipad and 24/7 critical triage.',
    fullDescription: 'Certified Level 1 equivalent trauma facility offering instant bedside diagnostics, dedicated cardiac catheterization conduits, and seamless surgical standby.',
    headOfDepartment: 'Dr. Robert Miller, MD, FACEP',
    keyServices: ['24/7 Rapid Triage Protocol', 'Helipad & Air Ambulance Access', 'Acute Resuscitation Bays', 'Point-of-Care Ultrasound'],
    iconName: 'Ambulance',
    bedCapacity: '24 Rapid Observation Bays'
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance',
    specialty: 'Chief of Cardiology',
    designation: 'MD, FACC, Harvard Medical School Alum',
    departmentId: 'cardiology',
    biography: 'With over 16 years of leadership in structural cardiology and preventative cardiovascular wellness, Dr. Vance champions individualized therapies combining digital hemodynamics with lifestyle longevity.',
    education: ['Harvard Medical School (MD)', 'Johns Hopkins Hospital (Cardiology Fellowship)', 'Massachusetts General Hospital (Residency)'],
    certifications: ['Board Certified in Cardiovascular Disease', 'Echocardiography Level III Certification', 'Fellow of American College of Cardiology'],
    clinicHours: 'Mon, Wed, Fri: 8:30 AM – 3:30 PM',
    image: IMAGES.doctorElena,
    imageAlt: 'Dr. Elena Vance, Chief of Cardiology at Aurelia Medical Center'
  },
  {
    id: 'dr-marcus-thorne',
    name: 'Dr. Marcus Thorne',
    specialty: 'Director of Neurosurgery',
    designation: 'MD, PhD, FAANS, Stanford Medical Alum',
    departmentId: 'neurology',
    biography: 'Dr. Thorne directs our neuroscience institute, specializing in stereotactic cranial navigation, complex spinal reconstructions, and computer-guided micro-surgical interventions with extreme precision.',
    education: ['Stanford University School of Medicine (MD/PhD)', 'UCSF Medical Center (Neurosurgical Residency)', 'Mayo Clinic (Spine Fellowship)'],
    certifications: ['American Board of Neurological Surgery', 'Fellow of the American Association of Neurological Surgeons'],
    clinicHours: 'Tue, Thu: 9:00 AM – 4:00 PM',
    image: IMAGES.doctorMarcus,
    imageAlt: 'Dr. Marcus Thorne, Director of Neurosurgery'
  },
  {
    id: 'dr-aisha-morales',
    name: 'Dr. Aisha Morales',
    specialty: 'Head of Pediatric Medicine',
    designation: 'MD, FAAP, Columbia University Alum',
    departmentId: 'pediatrics',
    biography: 'Dedicated to empathetic, family-integrated pediatric care, Dr. Morales combines developmental screening excellence with compassionate support for young patients and their families.',
    education: ['Columbia University Vagelos College of Physicians and Surgeons', 'Children’s Hospital of Philadelphia (Residency)', 'Boston Children’s (Neonatology Fellowship)'],
    certifications: ['American Board of Pediatrics', 'Pediatric Advanced Life Support (PALS) Instructor'],
    clinicHours: 'Mon through Thu: 8:00 AM – 2:00 PM',
    image: IMAGES.doctorAisha,
    imageAlt: 'Dr. Aisha Morales, Head of Pediatric Medicine'
  },
  {
    id: 'dr-jonathan-sterling',
    name: 'Dr. Jonathan Sterling',
    specialty: 'Chief of Orthopedic Surgery',
    designation: 'MD, FACS, Cornell Weill Alum',
    departmentId: 'orthopedics',
    biography: 'An authority in kinematic joint reconstruction and athletic limb preservation, Dr. Sterling has assisted over 2,500 patients in regaining peak physical freedom using minimally invasive robotics.',
    education: ['Weill Cornell Medical College (MD)', 'Hospital for Special Surgery (Orthopedic Residency)', 'Steadman Philippon Clinic (Sports Fellowship)'],
    certifications: ['American Board of Orthopaedic Surgery', 'Subspecialty Certification in Orthopaedic Sports Medicine'],
    clinicHours: 'Mon, Wed, Thu: 9:00 AM – 5:00 PM',
    image: IMAGES.doctorJonathan,
    imageAlt: 'Dr. Jonathan Sterling, Chief of Orthopedic Surgery'
  },
  {
    id: 'dr-sophia-aris',
    name: 'Dr. Sophia Aris',
    specialty: 'Consultant Dermatologist',
    designation: 'MD, FAAD, Yale School of Medicine',
    departmentId: 'dermatology',
    biography: 'Renowned for clinical precision in dermatopathology and advanced laser therapeutics, Dr. Aris provides meticulous skin cancer monitoring alongside holistic aesthetic skin rehabilitation.',
    education: ['Yale School of Medicine (MD)', 'New York University Langone (Dermatology Residency)'],
    certifications: ['American Board of Dermatology', 'American College of Mohs Surgery Associate'],
    clinicHours: 'Tue, Wed, Fri: 9:30 AM – 4:30 PM',
    image: IMAGES.doctorSophia,
    imageAlt: 'Dr. Sophia Aris, Consultant Dermatologist'
  },
  {
    id: 'dr-kenji-takahashi',
    name: 'Dr. Kenji Takahashi',
    specialty: 'Lead Medical Oncologist',
    designation: 'MD, University of Pennsylvania Alum',
    departmentId: 'oncology',
    biography: 'Leading translational immuno-oncology, Dr. Takahashi designs tailored cellular therapeutic strategies that balance therapeutic efficacy with superior quality of life and patient comfort.',
    education: ['Perelman School of Medicine at University of Pennsylvania', 'Memorial Sloan Kettering Cancer Center (Oncology Fellowship)'],
    certifications: ['American Board of Internal Medicine (Medical Oncology)', 'European Society for Medical Oncology Certified'],
    clinicHours: 'Mon, Tue, Fri: 8:30 AM – 3:00 PM',
    image: IMAGES.doctorKenji,
    imageAlt: 'Dr. Kenji Takahashi, Lead Medical Oncologist'
  }
];

export const SERVICES: MedicalService[] = [
  {
    id: 'imaging',
    title: 'Diagnostic Imaging',
    description: 'Ultra-high-definition 3T MRI, 512-slice spectral CT, and digital mammography offering rapid, crystal-clear anatomical precision.',
    features: ['Low-radiation dose protocols', 'Sub-millimeter volumetric rendering', 'Same-day urgent radiologist reads'],
    iconName: 'ScanLine',
    image: IMAGES.serviceImaging,
    turnaroundTime: 'Reports within 2–4 hours'
  },
  {
    id: 'laboratory',
    title: 'Laboratory Testing',
    description: 'Accredited clinical pathology suite performing automated genomic, biochemical, and hematological analyses around the clock.',
    features: ['Fully automated robotic assay tracks', 'Comprehensive metabolic & lipid panels', 'Direct encrypted digital delivery'],
    iconName: 'FlaskConical',
    image: IMAGES.serviceLab,
    turnaroundTime: 'Standard assays in 90 minutes'
  },
  {
    id: 'preventive',
    title: 'Preventive Health Checkups',
    description: 'Bespoke executive health assessments evaluating cardiac risk, metabolic vitality, bone density, and early cancer markers.',
    features: ['Full-day executive lounge itinerary', 'Personalized biometric longevity roadmap', '1-on-1 specialist consult summary'],
    iconName: 'HeartHandshake',
    image: IMAGES.servicePreventive,
    turnaroundTime: 'Comprehensive dossier in 24 hours'
  },
  {
    id: 'surgical',
    title: 'Surgical Care & Robotics',
    description: 'Minimally invasive laparoscopic and Da Vinci robotic surgical systems minimizing recovery times and incisions.',
    features: ['HEPA-filtered laminar airflow theaters', 'Enhanced Recovery After Surgery (ERAS)', 'Continuous anesthetic vitals tracking'],
    iconName: 'Scissors',
    image: IMAGES.serviceSurgical,
    turnaroundTime: 'Elective scheduling with 48h pre-op'
  },
  {
    id: 'emergency',
    title: '24/7 Emergency Care',
    description: 'Immediate acute critical care, chest pain assessment protocols, and acute trauma resuscitation bays standing by day and night.',
    features: ['Zero-delay door-to-doctor triage', 'Dedicated private observation cubicles', 'Rapid transit trauma surgical bays'],
    iconName: 'Stethoscope',
    image: IMAGES.serviceEmergency,
    turnaroundTime: 'Immediate clinical assessment'
  },
  {
    id: 'rehabilitation',
    title: 'Rehabilitation & Physiotherapy',
    description: 'Specialized hydrotherapy, zero-gravity gait retraining, and neurological physical therapy restoring independence.',
    features: ['Customized post-surgical biomechanics', 'Ergonomic occupational therapy rooms', 'Inpatient and outpatient programs'],
    iconName: 'Sparkles',
    image: IMAGES.serviceRehab,
    turnaroundTime: 'Initial evaluation in 24 hours'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'suite',
    title: 'Executive Inpatient Suites',
    category: 'inpatient',
    description: 'Light-filled private rooms crafted with Scandinavian oak, floor-to-ceiling forest vistas, discrete medical hookups, and dedicated companion daybeds.',
    image: IMAGES.facilitySuite,
    specs: 'Single-occupancy · Forest canopy panorama · Ambient acoustic dampening'
  },
  {
    id: 'exterior',
    title: 'Architectural Medical Campus',
    category: 'clinical',
    description: 'Designed as a sanctuary for healing, our sustainable glass campus features biophilic living walls, intuitive patient wayfinding, and private parking.',
    image: IMAGES.facilityExterior,
    specs: 'LEED Gold Certified · Accessible valet portal · 3 acres healing parkland'
  },
  {
    id: 'reception',
    title: 'Grand Welcome Pavilion',
    category: 'wellness',
    description: 'A serene, hospitality-inspired reception space with concierge patient services, quiet reading alcoves, and complimentary artisan refreshments.',
    image: IMAGES.facilityReception,
    specs: 'Direct check-in kiosks · Personal patient navigators · Air-purified atrium'
  },
  {
    id: 'operating',
    title: 'Hybrid Robotic Operating Suites',
    category: 'clinical',
    description: 'Ultra-sterile positive-pressure surgical theaters equipped with integrated intraoperative imaging and ergonomic digital surgical consoles.',
    image: IMAGES.facilityOrRoom,
    specs: 'ISO Class 5 air filtration · 4K surgical video walls · 8 dedicated theaters'
  },
  {
    id: 'mri',
    title: 'Advanced 3T Diagnostic Center',
    category: 'diagnostics',
    description: 'Quiet-bore magnetic resonance imaging with calming visual skylight displays, designed to eliminate claustrophobia while delivering sub-millimeter scans.',
    image: IMAGES.facilityMri,
    specs: '70cm wide bore · Ambient lighting themes · Pediatric scan mode'
  },
  {
    id: 'lounge',
    title: 'Therapeutic Courtyard & Solarium',
    category: 'wellness',
    description: 'Sun-drenched relaxation commons overlooking indigenous landscaped gardens, offering recovering patients and visiting families peace and restoration.',
    image: IMAGES.facilityLounge,
    specs: 'Open-air botanical path · Filtered natural light · Silent reading lounge'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'preventive-checkups',
    title: 'The Importance of Preventive Health Checkups',
    category: 'Preventative Wellness',
    date: 'October 28, 2026',
    readTime: '4 min read',
    excerpt: 'Early biological screening remains medicine’s most powerful tool. Discover which clinical biomarkers provide the clearest window into your long-term vitality.',
    author: 'Dr. Elena Vance, MD',
    authorRole: 'Chief of Cardiology',
    image: IMAGES.blogPreventive,
    content: [
      'Modern medicine has shifted decisively from reactive disease treatment toward proactive risk interception. Comprehensive annual screenings allow clinicians to detect subtle metabolic, vascular, and cellular variations years before clinical symptoms manifest.',
      'A thorough preventive evaluation at Aurelia Medical Center examines not only standard lipid panels and glucose levels, but also advanced cardiac inflammatory markers like high-sensitivity C-reactive protein (hs-CRP), coronary calcium scoring, and individualized genetic susceptibilities.',
      'By identifying biological markers early, personalized lifestyle interventions, micro-nutrition optimization, and targeted therapeutics can arrest or reverse cardiovascular decline, preserving vitality and cognitive sharpness throughout life.'
    ]
  },
  {
    id: 'healthy-habits',
    title: 'Building Healthy Everyday Habits for Cardiovascular Health',
    category: 'Cardiovascular Care',
    date: 'October 15, 2026',
    readTime: '5 min read',
    excerpt: 'Sustainable health is built in ordinary moments. Clinical insights on circadian rhythm alignment, zone-2 movement, and restorative sleep hygiene.',
    author: 'Dr. Jonathan Sterling, MD',
    authorRole: 'Chief of Orthopedic Surgery',
    image: IMAGES.blogHabits,
    content: [
      'Health transformation rarely stems from radical short-term interventions. Rather, it is the compounding effect of deliberate daily rhythms: how you regulate natural light exposure, how you fuel your cells, and how you protect restorative sleep.',
      'Our clinical team recommends anchoring daily physical activity to low-intensity aerobic movement—frequently described as Zone 2 training. Just 150 minutes weekly of conversational-pace movement strengthens mitochondrial density, stabilizes blood pressure, and accelerates cellular repair.',
      'Equally vital is evening blue-light discipline and consistent sleep architecture. Quality slow-wave sleep is the exact biological window during which the brain flushes neurotoxic metabolites and the vascular system undergoes essential cellular restoration.'
    ]
  },
  {
    id: 'regular-consultations',
    title: 'Understanding the Benefits of Regular Medical Consultations',
    category: 'Patient Guidance',
    date: 'September 30, 2026',
    readTime: '4 min read',
    excerpt: 'Establishing an ongoing relationship with your dedicated medical team builds continuity of care, sharper diagnostic insight, and peace of mind.',
    author: 'Dr. Aisha Morales, MD',
    authorRole: 'Head of Pediatric Medicine',
    image: IMAGES.blogConsult,
    content: [
      'When you consult with a physician who understands your unique baseline physiology, medical family history, and personal life context, medical decisions become collaborative and deeply contextualized.',
      'Routine visits enable doctors to spot subtle trend shifts—such as gradual blood pressure elevations, subtle thyroid imbalances, or changes in bone mineral density—that an emergency clinic or one-off provider might overlook.',
      'Above all, a trusted physician-patient partnership provides an ongoing forum for reassurance, empowering you with authoritative, medically grounded answers in an era often clouded by misinformation.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    patientName: 'Eleanor Sterling',
    condition: 'Cardiac Valve Repair',
    department: 'Cardiology & Surgical Care',
    quote: 'The level of personalized empathy and technical mastery at Aurelia was unlike any hospital I had experienced. Dr. Vance and her entire nursing staff ensured I felt calm, informed, and respected at every step.',
    stayDuration: '4-day recovery in Private Suite',
    recoveryNote: 'Returned to daily swimming and travel within 6 weeks.'
  },
  {
    id: 'test-2',
    patientName: 'David H. Miller',
    condition: 'Robotic Spine Decompression',
    department: 'Neurosurgery',
    quote: 'After months of debilitating nerve pain, Dr. Thorne’s minimally invasive intervention gave me my active life back. Walking out of the hospital the next afternoon pain-free felt nothing short of miraculous.',
    stayDuration: 'Overnight observation stay',
    recoveryNote: 'Full mobility restored; completed first 5K walk in 3 months.'
  },
  {
    id: 'test-3',
    patientName: 'Marianne & James Chen',
    condition: 'Family Maternity Delivery',
    department: 'Obstetrics & Pediatrics',
    quote: 'Welcoming our daughter at Aurelia felt more like a tranquil retreat than a hospital ward. The soothing suite, kind midwives, and immediate pediatric attention made our first hours as parents truly magical.',
    stayDuration: '3-day family suite stay',
    recoveryNote: 'Healthy baby girl; continuous lactation & pediatric home checkups.'
  }
];

export const STATS = [
  { value: '45+', label: 'Clinical Specialties', subtext: 'Comprehensive medical departments' },
  { value: '280+', label: 'Board-Certified Physicians', subtext: 'World-renowned medical leaders' },
  { value: '99.4%', label: 'Patient Satisfaction', subtext: 'Independently audited clinical care' },
  { value: '24/7', label: 'Critical Response', subtext: 'Dedicated trauma & emergency care' }
];

export const FAQS = [
  {
    question: 'How do I schedule an appointment with a specialist?',
    answer: 'You can submit an appointment request through our online booking section, call our dedicated outpatient appointment line at +1 (800) 458-7200, or speak with your primary physician for a direct electronic referral. Our patient coordination team will confirm your preferred timing within 2 to 4 business hours.'
  },
  {
    question: 'What health insurance and international medical plans do you accept?',
    answer: 'Aurelia Medical Center collaborates with major domestic commercial insurers, Medicare, and leading global international private health networks (including Bupa Global, Allianz Worldwide Care, Cigna Global, and Aetna International). Our financial coordinators provide transparent pre-authorization assessments.'
  },
  {
    question: 'What amenities are included in the private inpatient suites?',
    answer: 'Every private suite features floor-to-ceiling windows with landscaped garden views, acoustic insulation, customized climate controls, a private companion daybed, high-speed encrypted Wi-Fi, an en-suite marble bathroom, and an on-demand chef-prepared nutritional menu tailored to clinical requirements.'
  },
  {
    question: 'What should I bring for my first consultation?',
    answer: 'Please bring a valid government-issued photo ID, your insurance membership card, a current list of medications or supplements, and any recent diagnostic imaging discs, laboratory results, or medical records from the past 12 months.'
  },
  {
    question: 'Is emergency care available without a prior appointment?',
    answer: 'Yes. Our Emergency Medicine Department operates 24 hours a day, 365 days a year, with full emergency resuscitation, stroke protocols, cardiac catheterization standby, and immediate trauma surgical teams. No appointment or referral is ever required for emergency care.'
  }
];
