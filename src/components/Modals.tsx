import React from 'react';
import { Doctor, Department, BlogArticle, Facility } from '../types';
import {
  X,
  Calendar,
  GraduationCap,
  Award,
  Clock,
  CheckCircle2,
  BookOpen,
  Building,
  Shield,
  Phone,
  User,
} from 'lucide-react';

interface ModalsProps {
  selectedDoctor: Doctor | null;
  onCloseDoctor: () => void;
  onBookDoctor: (doctor: Doctor) => void;

  selectedDepartment: Department | null;
  onCloseDepartment: () => void;
  onBookDepartment: (departmentId: string) => void;

  selectedArticle: BlogArticle | null;
  onCloseArticle: () => void;

  selectedFacility: Facility | null;
  onCloseFacility: () => void;

  isPrivacyOpen: boolean;
  onClosePrivacy: () => void;

  isTermsOpen: boolean;
  onCloseTerms: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedDoctor,
  onCloseDoctor,
  onBookDoctor,
  selectedDepartment,
  onCloseDepartment,
  onBookDepartment,
  selectedArticle,
  onCloseArticle,
  selectedFacility,
  onCloseFacility,
  isPrivacyOpen,
  onClosePrivacy,
  isTermsOpen,
  onCloseTerms,
}) => {
  // Accessible keyboard ESC key handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedDoctor) onCloseDoctor();
        if (selectedDepartment) onCloseDepartment();
        if (selectedArticle) onCloseArticle();
        if (selectedFacility) onCloseFacility();
        if (isPrivacyOpen) onClosePrivacy();
        if (isTermsOpen) onCloseTerms();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    selectedDoctor,
    selectedDepartment,
    selectedArticle,
    selectedFacility,
    isPrivacyOpen,
    isTermsOpen,
    onCloseDoctor,
    onCloseDepartment,
    onCloseArticle,
    onCloseFacility,
    onClosePrivacy,
    onCloseTerms,
  ]);

  return (
    <>
      {/* 1. DOCTOR PROFILE MODAL */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onCloseDoctor}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#252C2D]/10 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseDoctor}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#252C2D] shadow-sm transition-colors"
              aria-label="Close doctor profile"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              {/* Doctor Photo */}
              <div className="sm:col-span-5 bg-[#FAF9F6] relative">
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="w-full h-full object-cover object-top min-h-[260px]"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-xs p-2.5 rounded text-xs">
                  <div className="font-semibold text-[#123D40]">{selectedDoctor.specialty}</div>
                  <div className="text-[11px] text-[#252C2D]/70">{selectedDoctor.clinicHours}</div>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="sm:col-span-7 p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-light text-[#123D40] tracking-tight">
                    {selectedDoctor.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#C6A66B] mt-0.5">
                    {selectedDoctor.designation}
                  </div>
                </div>

                <p className="text-xs text-[#252C2D]/80 leading-relaxed">
                  {selectedDoctor.biography}
                </p>

                {/* Education */}
                <div className="pt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#123D40] mb-1.5">
                    <GraduationCap className="w-4 h-4 text-[#C6A66B]" />
                    <span>Education & Training</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#252C2D]/75">
                    {selectedDoctor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C6A66B] mt-0.5">·</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Board Certifications */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#123D40] mb-1.5">
                    <Award className="w-4 h-4 text-[#C6A66B]" />
                    <span>Certifications & Honors</span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#252C2D]/75">
                    {selectedDoctor.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#C6A66B] mt-0.5">·</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#252C2D]/10 flex gap-3">
                  <button
                    onClick={() => {
                      onCloseDoctor();
                      onBookDoctor(selectedDoctor);
                    }}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#123D40] hover:bg-[#123D40]/90 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                    <span>Book with {selectedDoctor.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. DEPARTMENT DETAILS MODAL */}
      {selectedDepartment && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onCloseDepartment}
        >
          <div
            className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#252C2D]/10 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseDepartment}
              className="absolute top-4 right-4 p-2 text-[#252C2D] hover:text-[#123D40] rounded-md"
              aria-label="Close department details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase">
                <span>Center of Excellence</span>
              </div>
              <h3 className="text-2xl font-light text-[#123D40] tracking-tight">
                {selectedDepartment.name}
              </h3>

              <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#252C2D]/5 text-xs space-y-1">
                <div className="text-[#123D40] font-semibold">
                  Department Head: {selectedDepartment.headOfDepartment}
                </div>
                <div className="text-[#252C2D]/70">Capacity: {selectedDepartment.bedCapacity}</div>
              </div>

              <p className="text-xs sm:text-sm text-[#252C2D]/80 leading-relaxed">
                {selectedDepartment.fullDescription}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#123D40] mb-2">
                  Specialized Procedures & Clinical Conduits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedDepartment.keyServices.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#252C2D]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#252C2D]/10 flex gap-3">
                <button
                  onClick={() => {
                    onCloseDepartment();
                    onBookDepartment(selectedDepartment.id);
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#123D40] hover:bg-[#123D40]/90 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>Request Appointment in {selectedDepartment.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BLOG ARTICLE READING MODAL */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onCloseArticle}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#252C2D]/10 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseArticle}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#252C2D] shadow-sm transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full bg-[#FAF9F6]">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs text-[#252C2D]/60">
                <span className="text-[#C6A66B] font-semibold">{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-[#123D40] tracking-tight">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-[#123D40] pb-3 border-b border-[#252C2D]/5 font-medium">
                <User className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Written by {selectedArticle.author}</span>
                <span className="text-[#252C2D]/50">({selectedArticle.authorRole})</span>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#252C2D]/85 leading-relaxed font-normal">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F6] border-t border-[#252C2D]/10 text-center">
              <button
                onClick={onCloseArticle}
                className="px-6 py-2 text-xs font-semibold text-[#123D40] bg-white border border-[#252C2D]/15 rounded hover:bg-[#FAF9F6] cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. FACILITY LIGHTBOX MODAL */}
      {selectedFacility && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={onCloseFacility}
        >
          <div
            className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/20 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseFacility}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#252C2D] shadow transition-colors"
              aria-label="Close facility view"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#123D40] relative">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A66B]">
                  {selectedFacility.category}
                </span>
                <span className="text-xs font-mono text-[#252C2D]/60">{selectedFacility.specs}</span>
              </div>

              <h3 className="text-xl font-light text-[#123D40] tracking-tight">
                {selectedFacility.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#252C2D]/80 leading-relaxed">
                {selectedFacility.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 5. PRIVACY POLICY MODAL */}
      {isPrivacyOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClosePrivacy}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#252C2D]/10 relative my-8 max-h-[80vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClosePrivacy}
              className="absolute top-4 right-4 p-2 text-[#252C2D] hover:text-[#123D40]"
              aria-label="Close privacy policy"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-xl font-light text-[#123D40]">
                Patient Privacy Notice & HIPAA Compliance
              </h3>
              <p className="text-xs text-[#252C2D]/75 leading-relaxed">
                Aurelia Medical Center adheres to strict medical data confidentiality regulations,
                including HIPAA in the United States and GDPR standards for international patients.
              </p>
              <div className="space-y-2 text-xs text-[#252C2D]/80">
                <h4 className="font-semibold text-[#123D40]">1. Collection of Health Information</h4>
                <p>
                  Any clinical or personal data submitted via this website is utilized solely for
                  outpatient scheduling, triage evaluation, and medical record coordination.
                </p>
                <h4 className="font-semibold text-[#123D40]">2. Non-Disclosure Guarantee</h4>
                <p>
                  We never sell, monetize, or disclose patient medical details to third-party commercial
                  advertisers.
                </p>
                <h4 className="font-semibold text-[#123D40]">3. Encrypted Communication</h4>
                <p>
                  Electronic patient transmissions utilize 256-bit TLS encryption in transit and AES-256
                  encryption at rest.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#252C2D]/10 text-right mt-4">
              <button
                onClick={onClosePrivacy}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#123D40] rounded hover:bg-[#123D40]/90 cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. TERMS & CONDITIONS MODAL */}
      {isTermsOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onCloseTerms}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#252C2D]/10 relative my-8 max-h-[80vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseTerms}
              className="absolute top-4 right-4 p-2 text-[#252C2D] hover:text-[#123D40]"
              aria-label="Close terms"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 overflow-y-auto pr-2">
              <h3 className="text-xl font-light text-[#123D40]">
                Terms of Use & Clinical Triage Disclaimer
              </h3>
              <div className="space-y-2 text-xs text-[#252C2D]/80">
                <h4 className="font-semibold text-[#123D40]">1. Appointment Requests</h4>
                <p>
                  Submission of an appointment request via this portal does not establish an immediate
                  physician-patient relationship or constitute guaranteed booking until confirmed by
                  hospital staff.
                </p>
                <h4 className="font-semibold text-[#123D40]">2. Emergency Exclusion</h4>
                <p>
                  This web portal must never be used for acute, active, or life-threatening emergencies.
                  Call emergency services or report directly to our 24/7 trauma pavilion.
                </p>
                <h4 className="font-semibold text-[#123D40]">3. Medical Content Disclaimer</h4>
                <p>
                  Articles and clinical insights published on the Aurelia Medical Journal are for general
                  educational guidance only and should not replace personalized evaluation from a
                  licensed healthcare provider.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#252C2D]/10 text-right mt-4">
              <button
                onClick={onCloseTerms}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#123D40] rounded hover:bg-[#123D40]/90 cursor-pointer"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
