// Blog data
const blogData = [
  {
    id: 1,
    title: 'Complete Guide to NEET 2024 Counseling Process',
    date: 'March 15, 2024',
    author: 'Admin',
    excerpt: 'Everything you need to know about NEET counseling - from registration to seat allotment. Learn about AIQ, state quota, and choice filling strategies.',
    content: `
      <h3>Understanding NEET Counseling</h3>
      <p>NEET counseling is a crucial step after clearing the NEET exam. It determines which medical college you'll get admission to based on your rank, preferences, and seat availability.</p>
      
      <h3>Types of Counseling</h3>
      <p><strong>All India Quota (AIQ):</strong> Conducted by MCC for 15% seats in government colleges and 100% seats in central universities.</p>
      <p><strong>State Quota:</strong> Conducted by respective state authorities for 85% seats in state government colleges.</p>
      <p><strong>Deemed/Private Universities:</strong> Separate counseling conducted by individual institutions.</p>
      
      <h3>Counseling Process Steps</h3>
      <ul>
        <li>Registration on official counseling portal</li>
        <li>Choice filling and locking</li>
        <li>Seat allotment based on rank and preferences</li>
        <li>Reporting to allotted college</li>
        <li>Document verification</li>
      </ul>
      
      <h3>Important Documents Required</h3>
      <ul>
        <li>NEET Admit Card and Score Card</li>
        <li>Class 10th and 12th Mark Sheets</li>
        <li>Category Certificate (if applicable)</li>
        <li>Domicile Certificate</li>
        <li>ID Proof (Aadhar Card)</li>
        <li>Passport size photographs</li>
      </ul>
      
      <h3>Choice Filling Strategy</h3>
      <p>Fill maximum choices (up to 500 in AIQ). Start with dream colleges, then realistic options, and include safe choices. Consider location, fees, and college reputation.</p>
    `
  },
  {
    id: 2,
    title: 'Top 10 Medical Colleges in India 2024',
    date: 'March 10, 2024',
    author: 'Admin',
    excerpt: 'Discover the best medical colleges in India based on NIRF rankings, infrastructure, faculty, and placement records.',
    content: `
      <h3>Best Medical Colleges in India</h3>
      <p>India has some of the finest medical institutions in the world. Here's our list of top 10 medical colleges based on various parameters.</p>
      
      <h3>Top 10 List</h3>
      <ul>
        <li><strong>AIIMS Delhi</strong> - The premier medical institute with world-class facilities</li>
        <li><strong>PGIMER Chandigarh</strong> - Excellence in medical education and research</li>
        <li><strong>CMC Vellore</strong> - Top private medical college with excellent infrastructure</li>
        <li><strong>KGMU Lucknow</strong> - One of the oldest and most prestigious medical colleges</li>
        <li><strong>JIPMER Puducherry</strong> - Central institute with excellent academics</li>
        <li><strong>BHU Varanasi</strong> - Historic institution with modern facilities</li>
        <li><strong>MAMC Delhi</strong> - Top state government medical college</li>
        <li><strong>AFMC Pune</strong> - Premier armed forces medical college</li>
        <li><strong>SGPGI Lucknow</strong> - Excellence in postgraduate medical education</li>
        <li><strong>NIMHANS Bangalore</strong> - Leading institute for neurosciences</li>
      </ul>
      
      <h3>Selection Criteria</h3>
      <p>These colleges were selected based on NIRF rankings, faculty expertise, research output, infrastructure, hospital facilities, and student feedback.</p>
    `
  },
  {
    id: 3,
    title: 'MBBS in Russia: Complete Guide for Indian Students',
    date: 'March 5, 2024',
    author: 'Admin',
    excerpt: 'Why Russia is a popular destination for MBBS? Learn about top universities, admission process, fees, and living expenses.',
    content: `
      <h3>Why Choose Russia for MBBS?</h3>
      <p>Russia has become one of the most preferred destinations for Indian students pursuing MBBS abroad due to affordable fees, quality education, and MCI/NMC recognition.</p>
      
      <h3>Top Medical Universities in Russia</h3>
      <ul>
        <li>Kazan Federal University</li>
        <li>First Moscow State Medical University</li>
        <li>Peoples' Friendship University of Russia</li>
        <li>Crimea Federal University</li>
        <li>Bashkir State Medical University</li>
      </ul>
      
      <h3>Admission Process</h3>
      <p>No entrance exam required. Admission is based on NEET qualification and 12th marks. The process is simple and straightforward with minimal documentation.</p>
      
      <h3>Fee Structure</h3>
      <p>Total course fee ranges from ₹15-25 lakhs for 6 years, which is significantly lower than private medical colleges in India.</p>
      
      <h3>Living Expenses</h3>
      <p>Monthly living expenses including accommodation, food, and transportation: ₹15,000 - ₹25,000.</p>
    `
  },
  {
    id: 4,
    title: 'Management Quota Admissions: Facts vs Myths',
    date: 'February 28, 2024',
    author: 'Admin',
    excerpt: 'Clear all your doubts about management quota admissions. Learn about the legitimate process and avoid fraudulent practices.',
    content: `
      <h3>What is Management Quota?</h3>
      <p>Management quota is a legitimate admission process where private medical colleges reserve a certain percentage of seats (usually 15-25%) for direct admissions.</p>
      
      <h3>Common Myths Debunked</h3>
      <p><strong>Myth 1:</strong> Management quota is illegal - FALSE. It's a legal process approved by regulatory bodies.</p>
      <p><strong>Myth 2:</strong> No NEET required - FALSE. NEET qualification is mandatory for all MBBS admissions.</p>
      <p><strong>Myth 3:</strong> Degree not valid - FALSE. The degree is equally valid as regular quota.</p>
      
      <h3>Legitimate Process</h3>
      <ul>
        <li>NEET qualification is mandatory</li>
        <li>Direct application to college</li>
        <li>Transparent fee structure</li>
        <li>Proper documentation and receipts</li>
        <li>Same curriculum and degree as merit students</li>
      </ul>
      
      <h3>How to Avoid Fraud</h3>
      <p>Always deal directly with college authorities, verify college recognition, get proper receipts, and avoid agents promising guaranteed admissions.</p>
    `
  },
  {
    id: 5,
    title: 'How to Choose the Right Medical College',
    date: 'February 20, 2024',
    author: 'Admin',
    excerpt: 'Important factors to consider when selecting a medical college - location, fees, infrastructure, faculty, and career prospects.',
    content: `
      <h3>Key Factors to Consider</h3>
      
      <h3>1. Recognition and Accreditation</h3>
      <p>Ensure the college is recognized by NMC (National Medical Commission) and has proper accreditation. Check the annual intake and recognition status.</p>
      
      <h3>2. Infrastructure and Facilities</h3>
      <p>Visit the campus if possible. Check for well-equipped labs, library, hospital facilities, hostel accommodation, and sports facilities.</p>
      
      <h3>3. Faculty Quality</h3>
      <p>Research about the faculty-student ratio, qualifications of professors, and their teaching methodology.</p>
      
      <h3>4. Hospital Attached</h3>
      <p>A good teaching hospital with adequate patient flow is crucial for clinical exposure and practical learning.</p>
      
      <h3>5. Fee Structure</h3>
      <p>Consider the total cost including tuition fees, hostel charges, and other expenses. Ensure transparency in fee structure.</p>
      
      <h3>6. Location</h3>
      <p>Consider proximity to home, climate, language, and overall environment of the city.</p>
      
      <h3>7. Placement and Alumni Network</h3>
      <p>Check the college's track record in PG entrance exams and career opportunities for graduates.</p>
    `
  },
  {
    id: 6,
    title: 'NEET Preparation Tips for 2024 Aspirants',
    date: 'February 15, 2024',
    author: 'Admin',
    excerpt: 'Effective study strategies, time management tips, and resources to help you crack NEET with a high score.',
    content: `
      <h3>Preparation Strategy</h3>
      
      <h3>1. Understand the Syllabus</h3>
      <p>NEET covers Physics, Chemistry, and Biology (Botany & Zoology) from Class 11 and 12 NCERT. Focus on NCERT first.</p>
      
      <h3>2. Create a Study Schedule</h3>
      <p>Dedicate 8-10 hours daily. Divide time equally among subjects. Include revision and practice tests in your schedule.</p>
      
      <h3>3. NCERT is Your Bible</h3>
      <p>Read NCERT thoroughly, especially Biology. Many questions come directly from NCERT.</p>
      
      <h3>4. Practice Mock Tests</h3>
      <p>Take at least 2-3 mock tests weekly. Analyze your mistakes and work on weak areas.</p>
      
      <h3>5. Focus on Weak Areas</h3>
      <p>Identify topics where you're weak and give them extra time. Don't ignore any chapter completely.</p>
      
      <h3>6. Revision is Key</h3>
      <p>Revise regularly. Make short notes and formulas for quick revision before exam.</p>
      
      <h3>7. Stay Healthy</h3>
      <p>Maintain good sleep schedule, eat healthy, exercise regularly, and take breaks to avoid burnout.</p>
    `
  },
  {
    id: 7,
    title: 'State Quota vs All India Quota: Which is Better?',
    date: 'February 10, 2024',
    author: 'Admin',
    excerpt: 'Understand the differences between state quota and AIQ counseling. Learn which option suits you best based on your rank.',
    content: `
      <h3>Understanding the Quotas</h3>
      
      <h3>All India Quota (AIQ)</h3>
      <p>15% seats in government medical colleges across India. Open to all Indian citizens regardless of domicile. Conducted by MCC.</p>
      
      <h3>State Quota</h3>
      <p>85% seats in state government colleges. Reserved for domicile students of that state. Conducted by state authorities.</p>
      
      <h3>Key Differences</h3>
      <ul>
        <li><strong>Eligibility:</strong> AIQ - All Indians | State - State domicile required</li>
        <li><strong>Competition:</strong> AIQ - National level | State - State level</li>
        <li><strong>Seat Availability:</strong> AIQ - 15% | State - 85%</li>
        <li><strong>Counseling Authority:</strong> AIQ - MCC | State - State authorities</li>
      </ul>
      
      <h3>Which is Better for You?</h3>
      <p><strong>Choose AIQ if:</strong> You have a very good rank, want to study outside your state, or your state has limited medical colleges.</p>
      <p><strong>Choose State Quota if:</strong> You want to study in your home state, have domicile certificate, or your state has good medical colleges.</p>
      
      <h3>Pro Tip</h3>
      <p>Participate in both counselings to maximize your chances. You can always choose the better option if you get seats in both.</p>
    `
  },
  {
    id: 8,
    title: 'MBBS Abroad: Country Comparison Guide',
    date: 'February 5, 2024',
    author: 'Admin',
    excerpt: 'Compare popular countries for MBBS - Russia, China, Philippines, Georgia, and more. Find the best fit for you.',
    content: `
      <h3>Popular Countries for MBBS</h3>
      
      <h3>Russia</h3>
      <p><strong>Pros:</strong> Affordable fees (₹15-25L), quality education, NMC recognized<br>
      <strong>Cons:</strong> Cold climate, language barrier<br>
      <strong>Best for:</strong> Budget-conscious students</p>
      
      <h3>China</h3>
      <p><strong>Pros:</strong> Modern infrastructure, English medium, affordable<br>
      <strong>Cons:</strong> Cultural differences, food adaptation<br>
      <strong>Best for:</strong> Students wanting modern facilities</p>
      
      <h3>Philippines</h3>
      <p><strong>Pros:</strong> English speaking, similar culture, US-based curriculum<br>
      <strong>Cons:</strong> Higher fees than Russia/China<br>
      <strong>Best for:</strong> Students preferring English environment</p>
      
      <h3>Georgia</h3>
      <p><strong>Pros:</strong> European education system, safe country, affordable<br>
      <strong>Cons:</strong> Limited Indian community<br>
      <strong>Best for:</strong> Students wanting European exposure</p>
      
      <h3>Kazakhstan</h3>
      <p><strong>Pros:</strong> Very affordable, easy admission, growing Indian community<br>
      <strong>Cons:</strong> Extreme weather<br>
      <strong>Best for:</strong> Budget students with good adaptability</p>
      
      <h3>How to Choose?</h3>
      <p>Consider your budget, climate preference, language comfort, and career goals. Research thoroughly and consult with education counselors.</p>
    `
  },
  {
    id: 9,
    title: 'Scholarships for Medical Students in India',
    date: 'January 30, 2024',
    author: 'Admin',
    excerpt: 'Comprehensive list of scholarships available for MBBS students. Learn about eligibility criteria and application process.',
    content: `
      <h3>Government Scholarships</h3>
      
      <h3>1. National Scholarship Portal (NSP)</h3>
      <p>Various scholarships for SC/ST/OBC/Minority students. Amount: ₹20,000 - ₹50,000 per year.</p>
      
      <h3>2. Post Matric Scholarship</h3>
      <p>For students from reserved categories. Covers tuition fees and maintenance allowance.</p>
      
      <h3>3. Merit-cum-Means Scholarship</h3>
      <p>For economically weaker students with good academic record. Amount: ₹20,000 per year.</p>
      
      <h3>Private Scholarships</h3>
      
      <h3>1. Inspire Scholarship</h3>
      <p>For top 1% students in board exams. Amount: ₹80,000 per year for 5 years.</p>
      
      <h3>2. Sitaram Jindal Foundation</h3>
      <p>For meritorious students from economically weaker sections.</p>
      
      <h3>3. Dr. APJ Abdul Kalam Scholarship</h3>
      <p>For students with excellent academic records.</p>
      
      <h3>How to Apply?</h3>
      <ul>
        <li>Register on National Scholarship Portal</li>
        <li>Fill application form with accurate details</li>
        <li>Upload required documents</li>
        <li>Submit before deadline</li>
        <li>Track application status regularly</li>
      </ul>
      
      <h3>Required Documents</h3>
      <ul>
        <li>Income certificate</li>
        <li>Caste certificate (if applicable)</li>
        <li>Previous year mark sheets</li>
        <li>Bank account details</li>
        <li>Aadhar card</li>
      </ul>
    `
  }
];

// Open blog detail
function openBlogDetail(blogId) {
  const blog = blogData.find(b => b.id === blogId);
  if (!blog) return;
  
  const detailHTML = `
    <div class="blog-detail-content">
      <div class="blog-detail-header">
        <h2>${blog.title}</h2>
        <button class="close-btn" onclick="closeBlogDetail()">✕</button>
      </div>
      <div class="blog-detail-body">
        <div class="blog-detail-meta">
          <span><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg> ${blog.date}</span>
          <span><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> ${blog.author}</span>
        </div>
        ${blog.content}
      </div>
    </div>
  `;
  
  let detailDiv = document.querySelector('.blog-detail');
  if (!detailDiv) {
    detailDiv = document.createElement('div');
    detailDiv.className = 'blog-detail';
    document.body.appendChild(detailDiv);
  }
  
  detailDiv.innerHTML = detailHTML;
  detailDiv.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBlogDetail() {
  const detailDiv = document.querySelector('.blog-detail');
  if (detailDiv) {
    detailDiv.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('blog-detail')) {
    closeBlogDetail();
  }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBlogDetail();
  }
});

// Attach click handlers to blog cards
document.addEventListener('DOMContentLoaded', () => {
  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openBlogDetail(index + 1);
    });
  });
});
