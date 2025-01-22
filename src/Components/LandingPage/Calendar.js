import React, { useState } from 'react';
import './Calendar.css';
import sendFormDataToEmail from '../../services/emailService';

function Calendar({ selectedDate, setSelectedDate, hasErrors }) {
  const unavailableDates = ["2024-03-15", "2024-03-20", "2024-03-25", "2024-04-01"];
  const limitedDates = ["2024-03-10", "2024-03-11"];
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isDateUnavailable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return true;

    const dateString = date.toISOString().split('T')[0];
    return unavailableDates.includes(dateString);
  };

  const isDateLimited = (date) => {
    if (!date) return false;
    const dateString = date.toISOString().split('T')[0];
    return limitedDates.includes(dateString);
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const handleDayClick = (date) => {
    if (!date || isDateUnavailable(date)) return;
    if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  const monthYearString = currentDate.toLocaleString('ro-RO', { month: 'long', year: 'numeric' });
  const weekDays = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

  return (
    <div className={`calendar-column ${hasErrors && !selectedDate ? 'invalid' : ''}`}>
      <h1 className="page-title">Verifică disponibilitatea</h1>
      {(!selectedDate && hasErrors) && (
        <div className="error-message">Vă rugăm să selectați o dată din calendar.</div>
      )}
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>&lt;</button>
          <h3>{monthYearString}</h3>
          <button onClick={() => changeMonth(1)}>&gt;</button>
        </div>

        <div className="calendar">
          <div className="weekdays">
            {weekDays.map((day, index) => (
              <div key={`${day}-${index}`} className="weekday">{day}</div>
            ))}
          </div>

          <div className="days">
            {getDaysInMonth(currentDate).map((date, index) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const unavailable = isDateUnavailable(date);
              const limited = isDateLimited(date);
              const selected = selectedDate && date && selectedDate.toDateString() === date.toDateString();
              const isToday = date && date.toDateString() === today.toDateString();
              const dayClass = `
                day
                ${date ? 'valid-day' : ''}
                ${unavailable ? 'unavailable' : ''}
                ${limited ? 'limited' : ''}
                ${selected ? 'selected' : ''}
                ${isToday ? 'today' : ''}
              `.trim();

              return (
                <div
                  key={date ? date.toISOString() : `empty-${index}`}
                  className={dayClass}
                  onClick={() => handleDayClick(date)}
                >
                  {date ? date.getDate() : ''}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color today"></div>
            <span>Astăzi</span>
          </div>
          <div className="legend-item">
            <div className="legend-color available"></div>
            <span>Disponibil</span>
          </div>
          <div className="legend-item">
            <div className="legend-color limited"></div>
            <span>Locuri limitate</span>
          </div>
          <div className="legend-item">
            <div className="legend-color unavailable"></div>
            <span>Indisponibil</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ selectedDate, setHasErrors, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!selectedDate) {
      newErrors.date = 'Vă rugăm să selectați o dată din calendar.';
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Completați numele.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Completați adresa de email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduceți un email valid.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Completați numărul de telefon.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Telefonul trebuie să aibă 10 cifre.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Completați mesajul.';
    }

    setErrors(newErrors);
    setHasErrors(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Formular trimis către handleSubmit");
    if (isSubmitting) return; // Prevenirea cererilor duplicate
    if (validate()) {
      setIsSubmitting(true);
      try {
        console.log("Trimitere date către sendFormDataToEmail:", formData);
        const { success, message } = await sendFormDataToEmail({
          ...formData,
          selectedDate: selectedDate.toISOString(),
        });
        if (success) {
          console.log("Email trimis cu succes");
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({});
          setHasErrors(false);
          onSuccess();
        } else {
          console.log("Eroare la trimitere:", message);
          setErrors((prev) => ({
            ...prev,
            submit: message,
          }));
        }
      } catch (error) {
        console.error("Eroare în timpul trimiterii:", error);
        setErrors((prev) => ({
          ...prev,
          submit: 'A apărut o eroare la trimiterea formularului. Vă rugăm să încercați din nou.',
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="form-column" id="form-column">
      <h2 className="form-title">Completează formularul și te sunăm noi</h2>
      
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {errors.date && <div className="error-message">{errors.date}</div>}
        
        <div className="form-group">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Nume"
            className={errors.name ? 'error-field' : ''}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="form-group">
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="Email"
            className={errors.email ? 'error-field' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="Telefon"
            maxLength={10}
            className={errors.phone ? 'error-field' : ''}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <textarea
            rows="4"
            value={formData.message}
            onChange={handleChange('message')}
            placeholder="Mesaj. Adaugati si pachetul selectat!"
            className={errors.message ? 'error-field' : ''}
          />
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>

        {errors.submit && (
          <div className="error-message submit-error">{errors.submit}</div>
        )}

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Se trimite...' : 'Trimite'}
        </button>
      </form>
    </div>
  );
}

function SuccessPopup({ onClose }) {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal-content">
        <h3 className="modal-title">Mesaj trimis cu succes!</h3>
        <p className="modal-message">
          Vă mulțumim pentru mesaj. Vom lua legătura cu dvs. în cel mai scurt timp.
        </p>
        <button className="modal-close-button" onClick={onClose}>Închide</button>
      </div>
    </div>
  );
}

function CalendarContactPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hasErrors, setHasErrors] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSuccess = () => {
    setShowPopup(true);
  };

  return (
    <div className="page-container">
      <div className="calendar-form-section">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          hasErrors={hasErrors}
        />
        <ContactForm
          selectedDate={selectedDate}
          setHasErrors={setHasErrors}
          onSuccess={handleSuccess}
        />
      </div>
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default CalendarContactPage;
