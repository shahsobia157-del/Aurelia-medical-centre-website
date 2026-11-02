import React, { useState } from 'react';
import { FAQS } from '../data/hospitalData';
import { ChevronDown, HelpCircle, FileText, Download } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#252C2D]/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Patient Guidance & Resources</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-base text-[#252C2D]/75 leading-relaxed">
            Essential information regarding appointments, insurance coverage, inpatient admissions, and emergency access.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-[#252C2D]/8 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F6]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#123D40]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C6A66B] shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#252C2D]/75 leading-relaxed border-t border-[#252C2D]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Patient Resources Download Strip */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-[#252C2D]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-[#DCE8E2]/50 text-[#123D40]">
              <FileText className="w-5 h-5 text-[#C6A66B]" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#123D40]">
                Download Patient Admission Guide (PDF)
              </h4>
              <p className="text-xs text-[#252C2D]/60 mt-0.5">
                Contains hospital checklist, dietary policies, parking guide, and insurance FAQs.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              // Simulated guide download
              const element = document.createElement('a');
              const file = new Blob(
                [
                  'AURELIA MEDICAL CENTER - PATIENT ADMISSION & VISITOR GUIDE\n\nWelcome to Aurelia Medical Center. Exceptional Care. Extraordinary Lives.\n\nAddress: 450 Aurelia Way, Medical District\n24/7 Hotline: +1 (800) 458-7200\n\nAdmissions Checklist:\n- Valid Photo ID\n- Insurance Card\n- Current Medication List\n- Prior Imaging/Lab Records'
                ],
                { type: 'text/plain' }
              );
              element.href = URL.createObjectURL(file);
              element.download = 'Aurelia_Patient_Admission_Guide.txt';
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            }}
            className="px-4 py-2 text-xs font-semibold text-[#123D40] bg-[#FAF9F6] hover:bg-[#DCE8E2]/40 border border-[#123D40]/20 rounded transition-colors flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C6A66B]" />
            <span>Download Guide</span>
          </button>
        </div>
      </div>
    </section>
  );
};
