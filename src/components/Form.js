import React, { useState } from 'react';
import "../Styles/Form.css"

function Form() {
  // Define state variables for form inputs
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    destination: '',
    startDate: '',
    endDate: '',
    duration: '',
    nationality: '',
    accommodationType: '',
    transportationType: '',
  });

  // Handle input changes and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions like sending the data to a server here
  };

  return (
    <div className="App form">
      <h3>Fill the form and we'll calculate the budget for your next trip!</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ textAlign: 'right' }} /* Right-align the input */
          />
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="0">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Destination:</label>
          <select name="destination" value={formData.destination} onChange={handleInputChange} required>
            <option value="">Select Destination</option>
            <option value="0">Amsterdam	0</option>
            <option value="1">Athens	1</option>
            <option value="2">Auckland	2</option>
            <option value="3">Australia	3</option>
            <option value="4">Bali	4</option>
            <option value="5">Bangkok	5</option>
            <option value="6">Barcelona	6</option>
            <option value="7">Berlin	7</option>
            <option value="8">Brazil	8</option>
            <option value="9">Canada	9</option>
            <option value="10">Cancun	10</option>
            <option value="11">Cape Town	11</option>
            <option value="12">LDubai	12</option>
            <option value="13">Edinburgh	13</option>
            <option value="14">Egypt	14</option>
            <option value="15">France	15</option>
            <option value="16">Greece	16</option>
            <option value="17">Hawaii	17</option>
            <option value="18">Honolulu	18</option>
            <option value="19">Italy	19</option>
            <option value="20">Japan	20</option>
            <option value="21">London	21</option>
            <option value="22">Los Angeles	22</option>
            <option value="23">Marrakech		23</option>
            <option value="24">Mexico	24</option>
            <option value="25">New York	25</option>
            <option value="26">New York City	26</option>
            <option value="27">Paris 27</option>
            <option value="28">Phnom Pen 28</option>
            <option value="29">Phuket 29</option>
            <option value="30">Rio de Janeir 30</option>
            <option value="31">Rome 31</option>
            <option value="32">Santorini 32</option>
            <option value="33">Seoul 33</option>
            <option value="34">Spain 34</option>
            <option value="35">Sydney 35</option>
            <option value="36">Thailand 36</option>
            <option value="37">Tokyo 37</option>
            <option value="38">Vancouver 38</option>
          </select>
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Start Month:</label>
          <select name="month" value={formData.month} onChange={handleInputChange} required>
            <option value="">Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Duration (in days):</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Nationality:</label>
          <select name="nationality" value={formData.nationality} onChange={handleInputChange} required>
            <option value="">Select Nationality</option>
            <option value="0">0 American</option>
            <option value="1">1 Australian</option>
            <option value="2">2 Brazil</option>
            <option value="3">3 Brazilian</option>
            <option value="4">4 British</option>
            <option value="5">5 Cambodia</option>
            <option value="6">6 Canada</option>
            <option value="7">7 Canadian</option>
            <option value="8">8 China</option>
            <option value="9">9 Chinese</option>
            <option value="10">10 Dutch</option>
            <option value="11">11 Emirati</option>
            <option value="12">12 French</option>
            <option value="13">13 German</option>
            <option value="14">14 Germany</option>
            <option value="15">15 Greece</option>
            <option value="16">16 Hong Kong</option>
            <option value="17">17 Indian</option>
            <option value="18">18 Indonesian</option>
            <option value="19">19 Italian</option>
            <option value="20">20 Italy</option>
            <option value="21">21 Japan</option>
            <option value="22">22 Japanese</option>
            <option value="23">23 Korean</option>
            <option value="24">24 Mexican</option>
            <option value="25">25 Moroccan</option>
            <option value="26">26 New Zealander</option>
            <option value="27">27 Scottish</option>
            <option value="28">28 Singapore</option>
            <option value="29">29 South African</option>
            <option value="30">30 South Korea</option>
            <option value="31">31 South Korean</option>
            <option value="32">32 Spain</option>
            <option value="33">33 Spanish</option>
            <option value="34">34 Taiwan</option>
            <option value="35">35 Taiwanese</option>
            <option value="36">36 UK</option>
            <option value="37">37 USA</option>
            <option value="38">38 United Arab Emirates</option>
            <option value="39">39 United Kingdom</option>
            <option value="40">40 Vietnamese</option>
          </select>
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Accommodation Type:</label>
          <select name="accomodation" value={formData.accommodationType} onChange={handleInputChange} required>
            <option value="">Select Accommodation</option>
            <option value="0">0 Airbnb</option>
            <option value="1">1 Guesthouse</option>
            <option value="2">2 Hostel</option>
            <option value="3">3 Hotel</option>
            <option value="4">4 Resort</option>
            <option value="5">5 Riad</option>
            <option value="6">6 Vacation rental</option>
            <option value="7">7 Villa</option>
          </select>
        </div>
        <div className="form-space"></div>
        <div className="form-group">
          <label>Transportation Type:</label>
          <select name="transportation" value={formData.transportationType} onChange={handleInputChange} required>
            <option value="">Select Transportation</option>
            <option value="0">0 Airplane</option>
            <option value="1">1 Bus</option>
            <option value="2">2 Car</option>
            <option value="3">3 Car Rental</option>
            <option value="4">4 Ferry</option>
            <option value="5">5 Flight</option>
            <option value="6">6 Plane</option>
            <option value="7">7 Subway</option>
            <option value="8">8 Train</option>
          </select>
        </div>
        <div className="form-space1"></div>
        <div className="form-group">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
