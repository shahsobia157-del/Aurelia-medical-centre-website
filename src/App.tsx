import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Departments } from './components/Departments';
import { Specialists } from './components/Specialists';
import { Services } from './components/Services';
import { PatientExperience } from './components/PatientExperience';
import { AppointmentBooking } from './components/AppointmentBooking';
import { Testimonials } from './components/Testimonials';
import { FacilitiesGallery } from './components/FacilitiesGallery';
import { HealthBlog } from './components/HealthBlog';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

import { Doctor, Department, BlogArticle, Facility } from './types';

export default function App() {
  // Modal states
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Pre-filled booking targets
  const [bookingDepartment, setBookingDepartment] = useState<string>('');
  const [bookingDoctorId, setBookingDoctorId] = useState<string>('');

  const scrollToBooking = (deptId?: string, docId?: string) => {
    if (deptId) setBookingDepartment(deptId);
    if (docId) setBookingDoctorId(docId);

    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const srvElem = document.getElementById('services');
    if (srvElem) {
      srvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#252C2D] selection:bg-[#DCE8E2] selection:text-[#123D40]">
      {/* 1. Header & Navigation (Top Bar Contract) */}
      <Header onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreServices={scrollToServices}
        />

        {/* 3. About Our Hospital */}
        <About />

        {/* 4. Medical Departments */}
        <Departments
          onSelectDepartment={(dept) => setSelectedDepartment(dept)}
          onBookDepartment={(deptId) => scrollToBooking(deptId)}
        />

        {/* 5. Our Specialists */}
        <Specialists
          onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          onBookDoctor={(doc) => scrollToBooking(doc.departmentId, doc.id)}
        />

        {/* 6. Advanced Medical Services */}
        <Services
          onSelectService={() => {}}
          onBookService={() => scrollToBooking()}
        />

        {/* 7. Patient Experience */}
        <PatientExperience onBookAppointment={() => scrollToBooking()} />

        {/* 8. Appointment Booking Section */}
        <AppointmentBooking
          initialDepartment={bookingDepartment}
          initialDoctorId={bookingDoctorId}
        />

        {/* 9. Patient Testimonials */}
        <Testimonials />

        {/* 10. Modern Facilities Gallery */}
        <FacilitiesGallery onOpenLightbox={(fac) => setSelectedFacility(fac)} />

        {/* 11. Health Blog */}
        <HealthBlog onReadArticle={(art) => setSelectedArticle(art)} />

        {/* 12. FAQ & Patient Resources */}
        <FaqSection />

        {/* 13. Contact & Campus Location */}
        <ContactSection />
      </main>

      {/* 14. Premium Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Interactive Modals */}
      <Modals
        selectedDoctor={selectedDoctor}
        onCloseDoctor={() => setSelectedDoctor(null)}
        onBookDoctor={(doc) => scrollToBooking(doc.departmentId, doc.id)}
        selectedDepartment={selectedDepartment}
        onCloseDepartment={() => setSelectedDepartment(null)}
        onBookDepartment={(deptId) => scrollToBooking(deptId)}
        selectedArticle={selectedArticle}
        onCloseArticle={() => setSelectedArticle(null)}
        selectedFacility={selectedFacility}
        onCloseFacility={() => setSelectedFacility(null)}
        isPrivacyOpen={isPrivacyOpen}
        onClosePrivacy={() => setIsPrivacyOpen(false)}
        isTermsOpen={isTermsOpen}
        onCloseTerms={() => setIsTermsOpen(false)}
      />
    </div>
  );
}
