import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="1234 Main St"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Apartment, studio, or floor"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Ontario">Ontario</option>
                <option value="Quebec">Quebec</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                <option value="Manitoba">Manitoba</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter postal code"
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {submittedData && (
          <div className="submitted-info">
            <h2>Submitted Information</h2>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Full Name:</strong> {submittedData.fullName}</p>
            <p><strong>Address:</strong> {submittedData.address} {submittedData.address2}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
            <p><strong>Province:</strong> {submittedData.province}</p>
            <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
