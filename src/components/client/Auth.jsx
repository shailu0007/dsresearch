import React, { useState } from 'react';
import axios from 'axios';
import { Scale } from 'lucide-react';

const Auth = () => {
  // State to manage whether the form is in login or signup mode
  const [isLoginMode, setIsLoginMode] = useState(true);
  // State to manage loading status during API calls
  const [loading, setLoading] = useState(false);
  // State to store validation errors for form fields
  const [errors, setErrors] = useState({});
  // States to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // State to display general success or error messages to the user
  const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success' or 'error'

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // Signup form state
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // State to track which input is currently focused for dynamic styling
  const [focusedInput, setFocusedInput] = useState(null);

  // Form validation rules
  const validateForm = (data, isLogin = true) => {
    const newErrors = {};

    // Email validation
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (data.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      // Additional signup validations
      if (!data.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!data.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!data.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
      if (!data.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (data.password !== data.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    return newErrors;
  };

  // Handler for login form input changes
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear general message on input change
    setMessage({ text: '', type: '' });
  };

  // Handler for signup form input changes
  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear general message on input change
    setMessage({ text: '', type: '' });
  };

  // Handler for input focus event
  const handleInputFocus = (name) => {
    setFocusedInput(name);
  };

  // Handler for input blur event
  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  // Handles login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const formErrors = validateForm(loginForm, true);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setMessage({ text: 'Please correct the errors in the form.', type: 'error' });
      return;
    }

    setLoading(true);
    setErrors({});
    setMessage({ text: '', type: '' }); // Clear previous messages

    try {
      // Mock API call for login (replace with your actual backend endpoint)
      const response = await axios.post('/api/index.php?action=login', {
        email: loginForm.email,
        password: loginForm.password,
        action: 'login'
      });

      console.log('Login successful:', response.data);
      setMessage({ text: 'Login successful! Welcome to StockPro', type: 'success' });

      // Reset form
      setLoginForm({ email: '', password: '' });

    } catch (error) {
      console.error('Login error:', error);
      setMessage({
        text: error.response?.data?.message || 'Login failed. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handles signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    const formErrors = validateForm(signupForm, false);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setMessage({ text: 'Please correct the errors in the form.', type: 'error' });
      return;
    }

    setLoading(true);
    setErrors({});
    setMessage({ text: '', type: '' }); // Clear previous messages

    try {
      // Mock API call for signup (replace with your actual backend endpoint)
      const response = await axios.post('/api/index.php?action=signup', {
        name: `${signupForm.firstName} ${signupForm.lastName}`,
        email: signupForm.email,
        phone: signupForm.phone,
        password: signupForm.password,
        action: 'signup'
      });
      const user = response.data.user;

if (user) {
  // Store user info in localStorage
  localStorage.setItem('userId', user.id);
  localStorage.setItem('role', user.role);
}

      console.log('Signup successful:', response.data);
      setMessage({ text: 'Account created successfully! Please verify your email.', type: 'success' });

      // Reset form
      setSignupForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error('Signup error:', error);
      setMessage({
        text: error.response?.data?.message || 'Signup failed. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Toggles between login and signup modes
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setLoginForm({ email: '', password: '' });
    setSignupForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setMessage({ text: '', type: '' }); // Clear messages on mode change
    setShowPassword(false);
    setShowConfirmPassword(false);
    setFocusedInput(null); // Clear focused input state
  };

  // --- Inline Styles (as per user request, these are not changed) ---
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    Scale:"90%",
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    maxWidth: '450px',
    width: '100%',
    padding: '40px',
    transition: 'all 0.3s ease'
  };

  const logoStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    marginBottom: '10px'
  };

  const subtitleStyle = {
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.1rem'
  };

  const formGroupStyle = {
    marginBottom: '20px',
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 20px',
    border: '2px solid #e1e5e9',
    borderRadius: '12px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    backgroundColor: '#f8f9fa',
    outline: 'none'
  };

  const inputErrorStyle = {
    ...inputStyle,
    borderColor: '#dc3545',
    backgroundColor: '#fff5f5'
  };

  const inputFocusStyle = {
    borderColor: '#667eea',
    backgroundColor: '#fff',
    boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
  };

  const errorTextStyle = {
    color: '#dc3545',
    fontSize: '0.875rem',
    marginTop: '5px'
  };

  const generalErrorStyle = {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '0.9rem'
  };

  const successMessageStyle = {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '15px',
    fontSize: '0.9rem'
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    background: loading ? '#ccc' : 'linear-gradient(45deg, #667eea, #764ba2)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: loading ? 'not-allowed' : 'pointer',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const buttonHoverStyle = {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
  };

  const toggleLinkStyle = {
    color: '#667eea',
    textDecoration: 'none',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const eyeButtonStyle = {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#666',
    fontSize: '18px'
  };

  const marketStatsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '30px',
    padding: '20px',
    background: 'rgba(102, 126, 234, 0.1)',
    borderRadius: '12px'
  };

  const statStyle = {
    textAlign: 'center'
  };

  const statValueStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#667eea'
  };

  const statLabelStyle = {
    fontSize: '0.8rem',
    color: '#666',
    marginTop: '2px'
  };

  // Helper function to apply input styles based on errors and focus
  const getInputStyle = (fieldName, isLoginMode) => {
    const currentErrors = errors[fieldName];
    const baseStyle = currentErrors ? inputErrorStyle : inputStyle;
    return focusedInput === fieldName ? { ...baseStyle, ...inputFocusStyle } : baseStyle;
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={logoStyle}>📈 StockPro</div>
        <div style={subtitleStyle}>
          Professional Stock Trading Platform
        </div>

        <div style={marketStatsStyle}>
          <div style={statStyle}>
            <div style={statValueStyle}>+2.34%</div>
            <div style={statLabelStyle}>S&P 500</div>
          </div>
          <div style={statStyle}>
            <div style={statValueStyle}>+1.87%</div>
            <div style={statLabelStyle}>NASDAQ</div>
          </div>
          <div style={statStyle}>
            <div style={statValueStyle}>+0.92%</div>
            <div style={statLabelStyle}>DOW</div>
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
            {isLoginMode ? 'Welcome Back' : 'Create Account'}
          </h3>

          {/* Display general messages (success or error) */}
          {message.text && (
            <div style={message.type === 'error' ? generalErrorStyle : successMessageStyle}>
              {message.text}
            </div>
          )}

          {!isLoginMode && (
            <>
              {/* Replaced .row and .col-6 with inline flexbox for responsiveness */}
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 45%' }}> {/* Approx col-6 */}
                  <div style={formGroupStyle}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={signupForm.firstName}
                      onChange={handleSignupInputChange}
                      style={getInputStyle('firstName', false)}
                      onFocus={() => handleInputFocus('firstName')}
                      onBlur={handleInputBlur}
                      required
                    />
                    {errors.firstName && <div style={errorTextStyle}>{errors.firstName}</div>}
                  </div>
                </div>
                <div style={{ flex: '1 1 45%' }}> {/* Approx col-6 */}
                  <div style={formGroupStyle}>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={signupForm.lastName}
                      onChange={handleSignupInputChange}
                      style={getInputStyle('lastName', false)}
                      onFocus={() => handleInputFocus('lastName')}
                      onBlur={handleInputBlur}
                      required
                    />
                    {errors.lastName && <div style={errorTextStyle}>{errors.lastName}</div>}
                  </div>
                </div>
              </div>

              <div style={formGroupStyle}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={signupForm.phone}
                  onChange={handleSignupInputChange}
                  style={getInputStyle('phone', false)}
                  onFocus={() => handleInputFocus('phone')}
                  onBlur={handleInputBlur}
                  required
                />
                {errors.phone && <div style={errorTextStyle}>{errors.phone}</div>}
              </div>
            </>
          )}

          <div style={formGroupStyle}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={isLoginMode ? loginForm.email : signupForm.email}
              onChange={isLoginMode ? handleLoginInputChange : handleSignupInputChange}
              style={getInputStyle('email', isLoginMode)}
              onFocus={() => handleInputFocus('email')}
              onBlur={handleInputBlur}
              required
            />
            {errors.email && <div style={errorTextStyle}>{errors.email}</div>}
          </div>

          <div style={formGroupStyle}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={isLoginMode ? loginForm.password : signupForm.password}
              onChange={isLoginMode ? handleLoginInputChange : handleSignupInputChange}
              style={getInputStyle('password', isLoginMode)}
              onFocus={() => handleInputFocus('password')}
              onBlur={handleInputBlur}
              required
            />
            <button
              type="button"
              style={eyeButtonStyle}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
            {errors.password && <div style={errorTextStyle}>{errors.password}</div>}
          </div>

          {!isLoginMode && (
            <div style={formGroupStyle}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupForm.confirmPassword}
                onChange={handleSignupInputChange}
                style={getInputStyle('confirmPassword', false)}
                onFocus={() => handleInputFocus('confirmPassword')}
                onBlur={handleInputBlur}
                required
              />
              <button
                type="button"
                style={eyeButtonStyle}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
              {errors.confirmPassword && <div style={errorTextStyle}>{errors.confirmPassword}</div>}
            </div>
          )}

          {isLoginMode && (
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <a href="#" style={toggleLinkStyle}>
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            style={buttonStyle}
            onClick={isLoginMode ? handleLogin : handleSignup}
            onMouseEnter={(e) => !loading && Object.assign(e.target.style, buttonHoverStyle)}
            onMouseLeave={(e) => !loading && Object.assign(e.target.style, buttonStyle)}
            disabled={loading}
          >
            {loading && <span>⏳</span>}
            {loading
              ? (isLoginMode ? 'Signing In...' : 'Creating Account...')
              : (isLoginMode ? 'Sign In' : 'Create Account')
            }
          </button>

          <div style={{ textAlign: 'center', marginTop: '25px', color: '#666' }}>
            {isLoginMode ? "Don't have an account? " : "Already have an account? "}
            <span
              style={toggleLinkStyle}
              onClick={toggleMode}
            >
              {isLoginMode ? 'Sign Up' : 'Sign In'}
            </span>
          </div>

          {isLoginMode && (
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <div style={{ color: '#999', marginBottom: '15px' }}>Or continue with</div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button
                  type="button"
                  style={{
                    padding: '10px 20px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    background: 'white',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  🔍 Google
                </button>
                <button
                  type="button"
                  style={{
                    padding: '10px 20px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    background: 'white',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  📘 Facebook
                </button>
              </div>
            </div>
          )}
        </div>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          background: 'rgba(102, 126, 234, 0.05)',
          borderRadius: '8px',
          fontSize: '0.9rem',
          color: '#666',
          textAlign: 'center'
        }}>
          🔒 Your data is encrypted and secure
        </div>
      </div>
    </div>
  );
};

export default Auth;
