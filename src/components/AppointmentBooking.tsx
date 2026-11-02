import React, { useState, useEffect } from 'react';
import { AppointmentFormData } from '../types';
import { DEPARTMENTS, DOCTORS } from '../data/hospitalData';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  AlertCircle,
  CheckCircle2,
  Loader2,
  ShieldAlert,
  Info,
} from 'lucide-react';

interface AppointmentBookingProps {
  initialDepartment?: string;
  initialDoctorId?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialDepartment = '',
  initialDoctorId = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    department: initialDepartment,
    preferredDoctor: initialDoctorId,
    preferredDate: '',
    preferredTime: '',
    reason: '',
    urgency: 'routine',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    details: AppointmentFormData;
    submittedAt: string;
  } | null>(null);

  // Sync initial department or doctor if passed from external buttons
  useEffect(() => {
    if (initialDepartment) {
      setFormData((prev) => ({ ...prev, department: initialDepartment }));
    }
  }, [initialDepartment]);

  useEffect(() => {
    if (initialDoctorId) {
      const doc = DOCTORS.find((d) => d.id === initialDoctorId);
      if (doc) {
        setFormData((prev) => ({
          ...prev,
          department: doc.departmentId,
          preferredDoctor: doc.id,
        }));
      }
    }
  }, [initialDoctorId]);

  // Available doctors for selected department
  const availableDoctors = formData.department
    ? DOCTORS.filter((d) => d.departmentId === formData.department)
    : DOCTORS;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full legal name (at least 3 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneRegex = /^[\d\+\-\(\)\s]{7,18}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid contact telephone number.';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a clinical department.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred appointment date.';
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.preferredDate = 'Appointment date cannot be in the past.';
      }
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time window.';
    }

    if (!formData.reason.trim() || formData.reason.trim().length < 5) {
      newErrors.reason = 'Please provide a brief reason for your visit (minimum 5 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clinical dispatch processing
    setTimeout(() => {
      const randomRef = `AMC-REQ-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;
      setSubmittedData({
        referenceId: randomRef,
        details: { ...formData },
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      department: '',
      preferredDoctor: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
      urgency: 'routine',
    });
    setErrors({});
  };

  const timeSlots = [
    '08:30 AM – 10:00 AM (Morning)',
    '10:30 AM – 12:00 PM (Mid-Day)',
    '01:30 PM – 03:00 PM (Afternoon)',
    '03:30 PM – 05:00 PM (Late Afternoon)',
  ];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white border-t border-[#FAF9F6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Outpatient Coordination</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Request an Appointment
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-base text-[#252C2D]/75 leading-relaxed">
            Submit your consultation preferences. Our clinical coordination desk will contact you to
            finalize timing, physician availability, and pre-visit guidelines.
          </p>
        </div>

        {/* Clear Request Status Notice */}
        <div className="mb-8 p-4 rounded-lg bg-[#FAF9F6] border border-[#C6A66B]/30 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
          <p className="text-xs text-[#252C2D]/80 leading-relaxed">
            <strong className="text-[#123D40] font-semibold">Important Notice:</strong> This submission
            is an appointment request and is <span className="underline decoration-[#C6A66B]">not confirmed</span> until
            Aurelia Medical Center contacts you. If you are experiencing a life-threatening medical emergency,
            please immediately call 911 or proceed to our 24/7 Emergency Center.
          </p>
        </div>

        {/* Form Container or Success Confirmation */}
        <div className="bg-[#FAF9F6] rounded-xl p-6 sm:p-10 border border-[#252C2D]/10 shadow-sm">
          {!submittedData ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Katherine Pierce"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                    <User className="w-4 h-4 text-[#252C2D]/40 absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="e.g. katherine@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                    <Mail className="w-4 h-4 text-[#252C2D]/40 absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                    <Phone className="w-4 h-4 text-[#252C2D]/40 absolute right-3 top-3 pointer-events-none" />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Department & Doctor */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Select Department *
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        department: e.target.value,
                        preferredDoctor: '', // Reset doctor when dept changes
                      })
                    }
                    className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                      errors.department ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                    } focus:outline-none focus:border-[#123D40]`}
                  >
                    <option value="">-- Choose Clinical Department --</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name} ({dept.headOfDepartment.split(',')[0]})
                      </option>
                    ))}
                  </select>
                  {errors.department && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Preferred Doctor (Optional)
                  </label>
                  <select
                    value={formData.preferredDoctor}
                    onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded bg-white border border-[#252C2D]/15 focus:outline-none focus:border-[#123D40]"
                  >
                    <option value="">Any available certified specialist</option>
                    {availableDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name} – {doc.specialty}
                      </option>
                    ))}
                  </select>
                  <span className="text-[11px] text-[#252C2D]/55 mt-1 block">
                    {formData.department
                      ? `${availableDoctors.length} specialist(s) available in this department`
                      : 'Select a department above to filter doctors'}
                  </span>
                </div>
              </div>

              {/* Row 3: Date & Preferred Window */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                        errors.preferredDate ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                      } focus:outline-none focus:border-[#123D40]`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                    Preferred Time Window *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                      errors.preferredTime ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                    } focus:outline-none focus:border-[#123D40]`}
                  >
                    <option value="">-- Choose Preferred Time --</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Reason for Appointment */}
              <div>
                <label className="block text-xs font-semibold text-[#123D40] uppercase tracking-wider mb-2">
                  Brief Reason for Appointment *
                </label>
                <textarea
                  rows={3}
                  placeholder="Please describe symptoms, follow-up purpose, or specific evaluation needed (do not include sensitive financial or private records)..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className={`w-full px-3.5 py-2.5 text-sm rounded bg-white border ${
                    errors.reason ? 'border-red-500 ring-1 ring-red-500' : 'border-[#252C2D]/15'
                  } focus:outline-none focus:border-[#123D40]`}
                />
                {errors.reason && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.reason}
                  </p>
                )}
              </div>

              {/* Submit Button & Disclaimer */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#123D40] hover:bg-[#123D40]/90 disabled:opacity-75 rounded transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C6A66B]" />
                      <span>Transmitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#C6A66B]" />
                      <span>Request an Appointment</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#252C2D]/60 text-center sm:text-right">
                  Encrypted SSL · HIPAA Compliant Portal Ready · Free Cancellation
                </p>
              </div>
            </form>
          ) : (
            /* Submission Confirmation Screen */
            <div className="p-4 sm:p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#DCE8E2]/70 text-[#123D40] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#123D40]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-light text-[#123D40] tracking-tight">
                  Appointment Request Received
                </h3>
                <p className="text-xs uppercase font-mono tracking-wider text-[#C6A66B]">
                  Reference #{submittedData.referenceId}
                </p>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-5 rounded-lg bg-white border border-[#252C2D]/10 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#252C2D]/5 pb-2">
                  <span className="text-[#252C2D]/60">Patient Name:</span>
                  <span className="font-semibold text-[#123D40]">{submittedData.details.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-[#252C2D]/5 pb-2">
                  <span className="text-[#252C2D]/60">Department:</span>
                  <span className="font-semibold text-[#123D40] capitalize">
                    {submittedData.details.department}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#252C2D]/5 pb-2">
                  <span className="text-[#252C2D]/60">Requested Doctor:</span>
                  <span className="font-semibold text-[#123D40]">
                    {submittedData.details.preferredDoctor
                      ? DOCTORS.find((d) => d.id === submittedData.details.preferredDoctor)?.name ||
                        'First Available'
                      : 'First Available Specialist'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#252C2D]/5 pb-2">
                  <span className="text-[#252C2D]/60">Requested Date & Time:</span>
                  <span className="font-semibold text-[#123D40]">
                    {submittedData.details.preferredDate} ({submittedData.details.preferredTime.split(' ')[0]})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#252C2D]/60">Contact Email:</span>
                  <span className="font-semibold text-[#123D40]">{submittedData.details.email}</span>
                </div>
              </div>

              {/* Clear Demo & Architecture explanation as instructed */}
              <div className="max-w-lg mx-auto p-4 rounded bg-[#DCE8E2]/30 border border-[#123D40]/10 text-left text-xs text-[#252C2D]/80 leading-relaxed">
                <strong className="text-[#123D40] block mb-1">Demonstration Mode Notice:</strong>
                This form operates on the client-side for demonstration and design validation. In production,
                this endpoint connects to Aurelia’s secure HL7/FHIR compliant scheduling API with automated SMS
                confirmation and calendar integration.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2 text-xs font-semibold text-[#123D40] bg-white hover:bg-[#DCE8E2]/40 border border-[#123D40]/20 rounded transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
                <a
                  href="#contact"
                  className="px-5 py-2 text-xs font-semibold text-white bg-[#123D40] hover:bg-[#123D40]/90 rounded transition-colors"
                >
                  View Campus & Arrival Directions
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
