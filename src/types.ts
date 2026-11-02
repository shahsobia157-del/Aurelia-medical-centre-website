export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  designation: string;
  departmentId: string;
  biography: string;
  education: string[];
  certifications: string[];
  clinicHours: string;
  image: string;
  imageAlt: string;
}

export interface Department {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  headOfDepartment: string;
  keyServices: string[];
  iconName: string;
  bedCapacity: string;
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
  image?: string;
  turnaroundTime: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'clinical' | 'inpatient' | 'diagnostics' | 'wellness';
  description: string;
  image: string;
  specs: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  image: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  condition: string;
  department: string;
  quote: string;
  stayDuration: string;
  recoveryNote: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  urgency: 'routine' | 'priority' | 'followup';
}
