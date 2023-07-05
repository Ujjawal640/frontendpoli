import React, { useEffect, useState } from 'react';
import './Policies.css';
import logoImg from '../src/assets/logo.jpg';

const Policies = (props) => {
  const [form, setForm] = useState({
    name: '',
    regNo: '',
    email: '',
    location: '',
    date: '',
  });
  const [generatedOTP, setgeneratedOTP] = useState("")
  
  useEffect(() => {
   
  }, [generatedOTP]);

  const [otp, setOtp] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };





  const generateOTP = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch('https://codeangopolicies.onrender.com/generate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          regNo: form.regNo,
        name: form.name, // Add the name field
        email: form.email, 
         }), // Assuming regNo is the email field
      });

      if (response.ok) {
        const data = await response.json();
        setgeneratedOTP(data.otp);
    
        
      } else {
        console.error('Failed to generate OTP');
      }
    } catch (error) {
      console.error(error);
    }
  };





  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = {
      name: form.name,
      regNo: form.regNo,
      email: form.email,
      location: form.location,
      date: form.date,
      otp: otp,
    };
 
    if (otp == generatedOTP) {
     
      try {
        const response = await fetch('https://codeangopolicies.onrender.com/send3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
  
        if (response.ok) {
       
          props.showAlert('Successfully Submitted', 'success');
          setForm({
            name: '',
            regNo: '',
            email: '',
            location: '',
            date: '',
          });
          setIsButtonDisabled(true);
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error(error);
      }
    }else{

    }

   
  };





  return (
    <div className="container">
      <div className="header">
        <div>
          <img className="policyLogo" src={logoImg} alt="Logo" />
        </div>
        <div className="line"></div>
        <h2 className="company-name">Codeango</h2>
      </div>
      <h1 className="policyHeading">
        Codeango Training & Placement Policies 2023
      </h1>

      <div className="instructions">
        <ol className="list-instruction">
          <h3 className="text-decoration-underline">
            Training Session & Attendance
          </h3>
          <li>Students must attend all the sessions conducted by Codeango.</li>
          <li>
            Only eligible candidates will be eligible for the E-CAP recruitment
            program. The eligibility criteria are: 85% Attendance during all
            Technical & Skill Development Trainings, Timely completion of
            Assignments, Project work, and any other training/sessions/talk
            related to the placements.
          </li>
          <li>
            Regular evaluation will be conducted, and students must secure a
            minimum of 65% in all the evaluations.
          </li>
          <li>
            All academic work should be completed and submitted within the
            timeline given by the faculties.
          </li>
          <li>
            It is mandatory for all the candidates interested in Placements to
            attend various Training programs arranged at Codeango.
          </li>
          <br />
          <h3 className="text-decoration-underline">Assignments & Projects</h3>
          <li>
            Codeango will give regular assignments after each module, and all
            students should submit the assignments on time. If there is any
            delay in submission of the assignments, the evaluation will not be
            considered.
          </li>
          <li>
            Marks secured in each assignment will be considered to evaluate the
            final cumulative rating of the student.
          </li>
          <li>2 Capstone Projects will be assigned to each student.</li>
          <li>Each student should submit the project on time.</li>
          <li>
            After successful submission of both the projects and all the
            assignments, a cumulative score will be generated, and Placement
            Opportunities + Internship Certificate will be issued.
          </li>
          <br />
          <h3 className="text-decoration-underline">Placements</h3>
          <li>All Placement opportunities offered are/will be PAN India.</li>
          <li>
            As per the job openings and opportunities offered, candidates may be
            asked to relocate.
          </li>
          <li>
            The CTC would vary based on the company, candidate’s capabilities,
            and geographical locations.
          </li>
          <li>
            Selection in an interview/CTC offered will vary from candidate to
            candidate and solely depends on the candidate’s individual
            performance during the selection process.
          </li>
          <li>
            All candidates should consult their Placement team before
            registering for the industry in case of queries.
          </li>
          <li>
            The information about the placement opportunities, schedules, etc.
            will be sent to registered personal email IDs and WhatsApp groups,
            and subsequently, learners have to respond to it immediately before
            the due date. After which, no responsibility of providing
            information lies with the Placement team.
          </li>
          <li>
            Attending an interview without basic preparation (Profile knowledge,
            Company info, etc.) will lead to debarment for a few months.
          </li>
          <li>
            Once registered, learners CANNOT drop off from further interview
            processes.
          </li>
          <li>
            Any candidate failing to attend the interview process without prior
            permission from the Placement Team will lead to disqualification
            from Placement Activities permanently.
          </li>
          <li>
            Once shortlisted, it is mandatory for the learners to go through the
            subsequent selection processes. Attending a process casually,
            underperforming is a disqualification for further opportunities.
          </li>
          <li>
            All candidates should maintain decorum and professionalism during
            the selection process.
          </li>
          <li>
            Candidates will not negotiate with the Industry regarding CTC,
            location, designation, etc. (unless it is permitted in Registration
            Mail). These details will be provided in the registration email/
            messages well in advance.
          </li>
          <li>
            All the candidate’s inquiries/grievances will be addressed through
            the Placement Team.
          </li>
          <li>
            Once selected, students will get further chances only with prior
            permission received from the Placement Team on a case-to-case basis.
          </li>
          <li>
            Once selected, learners have to join the company on a given date.
          </li>
          <li>
            For all the selected students under free training through campus
            drives, placement assurance is applicable only if they abide by all
            the terms and conditions of Codeango.
          </li>
          <li>
            Violation of any rule will lead to disciplinary action, including
            revoking the PPO issued by Codeango.
          </li>
          <li>
            All the placement opportunities provided by Codeango will be based
            on individual performance during the course, individual ratings,
            academic qualification, academic score, past experience if any.
          </li>
        </ol>
      </div>

      <div className="form">
        <div className="below-div">
          <form className="policy_form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="regNo">Registration No:</label>
              <input
                type="number"
                id="regNo"
                name="regNo"
                value={form.regNo}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={form.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={form.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="otp">OTP:</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                required
              />
              <a href="#" className="mx-2" onClick={generateOTP}>
                Generate OTP
              </a>
            </div>
            <div className="form-field subBtn">
              <button
                type="submit"
                disabled={isButtonDisabled}
                style={{
                  backgroundColor: isButtonDisabled ? "grey" : "#007bff",
                  cursor: "default",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Policies;
