'use client';
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    panel: 'White Label',
    budget: '50k - 5Lakh',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // NOTE: This URL should be replaced with the user's actual Google Sheet webhook (e.g. from Sheet Monkey or Google Apps Script)
      // For now, we simulate a delay to show the UI state.
      // const response = await fetch('YOUR_SHEET_WEBHOOK_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, created_at: new Date().toISOString() }),
      // });

      // Simulating network request
      await new Promise(resolve => setTimeout(resolve, 1500));

      // If actual integration:
      // if (response.ok) setStatus('success'); else setStatus('error');

      
      // Simulating network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // If actual integration:
      // if (response.ok) setStatus('success'); else setStatus('error');
      
      setStatus('success');
      setFormData({ name: '', phone: '', city: '', panel: 'White Label', budget: '50k - 5Lakh' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your <span className="text-[#D4AF37]">B2C Business</span> Now</h2>
            <p className="text-gray-400">Fill out the form below and our team will contact you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="tel"
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">City / Country</label>
                <input
                  type="text"
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="New York, USA"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Select Panel Type</label>
                <select
                <select 
                  name="panel"
                  value={formData.panel}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                >
                  <option>White Label</option>
                  <option>Turnkey Solution</option>
                  <option>Self-Service</option>
                  <option>API Integration</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Estimated Budget</label>
              <select
              <select 
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option>50k - 5Lakh</option>
                <option>5Lakh - 15Lakh</option>
                <option>15Lakh - 50Lakh</option>
                <option>50Lakh +</option>
              </select>
            </div>

            <button
              type="submit"
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-[#D4AF37] hover:bg-[#F4C430] text-black font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {status === 'submitting' ? (
                <span>Sending...</span>
              ) : (
                <>
                  Submit Request <Send size={18} />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded flex items-center gap-2">
                <CheckCircle size={18} />
                <span>Thank you! Your request has been sent successfully. We will contact you soon.</span>
              </div>
            )}

            
            {status === 'error' && (
              <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded flex items-center gap-2">
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again later.</span>
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
              By submitting this form, you agree to our Terms of Service and Privacy Policy. 
              <br/>To connect Google Sheets, simply add your webhook URL in the code.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
