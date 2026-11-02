import React, { useState } from 'react';
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  Send,
  Navigation,
  Car,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldAlert,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTransitTab, setActiveTransitTab] = useState<'car' | 'transit' | 'emergency'>('car');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formState.name.trim()) errors.name = 'Please provide your name.';
    if (!formState.email.trim() || !formState.email.includes('@'))
      errors.email = 'Please provide a valid email address.';
    if (!formState.message.trim() || formState.message.trim().length < 10)
      errors.message = 'Message must be at least 10 characters.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Contact & Campus Location
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-base text-[#252C2D]/75 leading-relaxed">
            Our patient concierges and medical liaisons are available around the clock to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Campus Information & Interactive Map */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Emergency Hotline */}
              <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#252C2D]/8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-red-50 text-red-600">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#123D40] uppercase tracking-wider">
                      Emergency Trauma
                    </h3>
                    <div className="text-sm font-bold text-red-700">+1 (800) 458-7200</div>
                  </div>
                </div>
                <p className="text-xs text-[#252C2D]/60">24/7 dedicated critical care triage & helipad intake</p>
              </div>

              {/* Main Reception */}
              <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#252C2D]/8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#DCE8E2]/60 text-[#123D40]">
                    <PhoneCall className="w-5 h-5 text-[#123D40]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#123D40] uppercase tracking-wider">
                      General Inquiries
                    </h3>
                    <div className="text-sm font-bold text-[#123D40]">+1 (800) 458-7201</div>
                  </div>
                </div>
                <p className="text-xs text-[#252C2D]/60">Outpatient scheduling: 8:00 AM – 7:00 PM Daily</p>
              </div>

              {/* Campus Address */}
              <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#252C2D]/8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#DCE8E2]/60 text-[#123D40]">
                    <MapPin className="w-5 h-5 text-[#123D40]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#123D40] uppercase tracking-wider">
                      Campus Address
                    </h3>
                    <div className="text-sm font-medium text-[#123D40]">
                      450 Aurelia Way, Medical District
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#252C2D]/60">Metropolis Health Campus, Building A & B</p>
              </div>

              {/* Clinical Email */}
              <div className="p-5 rounded-lg bg-[#FAF9F6] border border-[#252C2D]/8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-[#DCE8E2]/60 text-[#123D40]">
                    <Mail className="w-5 h-5 text-[#123D40]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#123D40] uppercase tracking-wider">
                      Patient Liaison
                    </h3>
                    <div className="text-sm font-medium text-[#123D40]">concierge@aureliamedical.org</div>
                  </div>
                </div>
                <p className="text-xs text-[#252C2D]/60">Encrypted digital records & international referrals</p>
              </div>
            </div>

            {/* Stylized Interactive Campus Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-[#252C2D]/10 bg-[#FAF9F6] shadow-sm">
              <div className="p-4 bg-[#123D40] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C6A66B]" />
                  <span className="text-xs font-medium tracking-wide">Campus Wayfinding & Access</span>
                </div>
                <span className="text-[11px] text-[#C6A66B]">Complimentary Valet Parking</span>
              </div>

              {/* Map Canvas Graphic */}
              <div className="relative aspect-[16/8] bg-gradient-to-br from-[#FAF9F6] to-[#DCE8E2]/40 p-6 flex flex-col justify-between">
                {/* SVG architectural route grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#123D40" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Waypoint path */}
                  <path
                    d="M 50 150 Q 200 80 400 120 T 700 80"
                    fill="none"
                    stroke="#C6A66B"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />
                </svg>

                <div className="relative z-10 flex items-start justify-between">
                  <div className="bg-white/95 backdrop-blur-sm p-3 rounded shadow-sm border border-[#252C2D]/10 text-xs">
                    <strong className="text-[#123D40] block font-semibold">
                      Main Pavilion Gate 1
                    </strong>
                    <span className="text-[11px] text-[#252C2D]/70">Valet & Inpatient Check-in</span>
                  </div>

                  <div className="bg-red-50/95 backdrop-blur-sm p-3 rounded shadow-sm border border-red-200 text-xs text-right">
                    <strong className="text-red-700 block font-semibold">
                      Emergency Bay Gate 4
                    </strong>
                    <span className="text-[11px] text-red-600">Direct Ambulance & Triage</span>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4">
                  <div className="text-[11px] text-[#252C2D]/60 font-mono">
                    GPS: 40.7648° N, 73.9565° W
                  </div>
                  <div className="bg-[#123D40] text-white px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 shadow">
                    <Car className="w-3.5 h-3.5 text-[#C6A66B]" />
                    <span>Free Under-Building Garage</span>
                  </div>
                </div>
              </div>

              {/* Transit Tabs */}
              <div className="p-4 border-t border-[#252C2D]/10 bg-white grid grid-cols-3 gap-2 text-center text-xs">
                <button
                  onClick={() => setActiveTransitTab('car')}
                  className={`py-2 px-3 rounded transition-colors cursor-pointer ${
                    activeTransitTab === 'car'
                      ? 'bg-[#123D40] text-white font-semibold'
                      : 'bg-[#FAF9F6] text-[#252C2D]/70 hover:text-[#123D40]'
                  }`}
                >
                  By Car & Valet
                </button>
                <button
                  onClick={() => setActiveTransitTab('transit')}
                  className={`py-2 px-3 rounded transition-colors cursor-pointer ${
                    activeTransitTab === 'transit'
                      ? 'bg-[#123D40] text-white font-semibold'
                      : 'bg-[#FAF9F6] text-[#252C2D]/70 hover:text-[#123D40]'
                  }`}
                >
                  Public Transit
                </button>
                <button
                  onClick={() => setActiveTransitTab('emergency')}
                  className={`py-2 px-3 rounded transition-colors cursor-pointer ${
                    activeTransitTab === 'emergency'
                      ? 'bg-[#123D40] text-white font-semibold'
                      : 'bg-[#FAF9F6] text-[#252C2D]/70 hover:text-[#123D40]'
                  }`}
                >
                  Ambulance Gate
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & General Inquiries Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF9F6] p-8 rounded-xl border border-[#252C2D]/10 shadow-sm">
              <h3 className="text-xl font-light text-[#123D40] tracking-tight mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#252C2D]/75 leading-relaxed mb-6">
                For administrative, billing, medical records, or international patient services.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Thorne"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        formErrors.name ? 'border-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. michael@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        formErrors.email ? 'border-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded bg-white border border-[#252C2D]/15 focus:outline-none focus:border-[#123D40]"
                    >
                      <option value="general">General Information & Reception</option>
                      <option value="billing">Patient Billing & Insurance Coordination</option>
                      <option value="records">Medical Records & Imaging Transfer</option>
                      <option value="international">International Concierge Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="How may our clinical concierge team assist you?"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        formErrors.message ? 'border-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                    {formErrors.message && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 text-xs font-semibold text-white bg-[#123D40] hover:bg-[#123D40]/90 rounded transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C6A66B]" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#C6A66B]" />
                        <span>Send Clinical Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCE8E2] text-[#123D40] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-semibold text-[#123D40]">Inquiry Dispatched</h4>
                  <p className="text-xs text-[#252C2D]/70 leading-relaxed">
                    Thank you, {formState.name}. Your inquiry has been routed to our patient liaison
                    team. We respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: 'general', message: '' });
                    }}
                    className="text-xs font-semibold text-[#123D40] underline underline-offset-4 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
