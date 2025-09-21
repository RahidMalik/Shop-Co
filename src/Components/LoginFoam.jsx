import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Github, Twitter, Chrome } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function StylishLoginForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false
  });

  // Check if user is already logged in
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      navigate('/'); // Redirect to homepage if already logged in
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert(`Welcome back, ${user.name}!`);
        console.log('Login successful:', user);
        
        // Redirect to homepage after successful login
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        alert('Invalid credentials! Please check your email and password.');
      }
    } else {
      // Register logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === formData.email);
      
      if (existingUser) {
        alert('Email already exists! Please use a different email.');
        return;
      }
      
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      alert(`Welcome, ${newUser.name}! Account created successfully. Redirecting to homepage...`);
      console.log('Registration successful:', newUser);
      
      // Redirect to homepage after successful registration
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
    
    // Reset form
    setFormData({ name: '', email: '', password: '', rememberMe: false });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', rememberMe: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Glass Card Effect */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-lg">
              <User className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-300 text-sm">
              {isLogin ? 'Sign in to continue your journey' : 'Join us and start your journey'}
            </p>
          </div>

          {/* Form */}
          <div onSubmit={handleSubmit}>
            {/* Name Field (Register Only) */}
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-white transition-colors" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between mb-8">
                <label className="flex items-center text-sm text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded border-white/20 bg-white/5 text-white focus:ring-2 focus:ring-white/20"
                  />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-sm text-white hover:text-gray-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group shadow-lg"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-8">
            <button className="w-full flex items-center justify-center py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white hover:bg-white/10 transition-all duration-300">
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </button>
            <div className="flex space-x-3">
              <button className="flex-1 flex items-center justify-center py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white hover:bg-white/10 transition-all duration-300">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </button>
              <button className="flex-1 flex items-center justify-center py-3 px-4 bg-white/5 border border-white/20 rounded-2xl text-white hover:bg-white/10 transition-all duration-300">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </button>
            </div>
          </div>

          {/* Switch Mode */}
          <div className="text-center">
            <span className="text-gray-300 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              onClick={switchMode}
              className="ml-2 text-white font-semibold text-sm hover:text-gray-300 transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-xs">
            By continuing, you agree to our{' '}
            <button className="text-white hover:text-gray-300 transition-colors">
              Terms of Service
            </button>{' '}
            and{' '}
            <button className="text-white hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-10 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-white/15 rounded-full animate-pulse delay-700"></div>
    </div>
  );
}