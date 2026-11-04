import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GoldFlourishDivider } from './DecorativeElements';
import { submitRSVP, getStoredRSVPs } from '../lib/supabase';
import { CheckCircle2, Send, MessageCircle, Users, Heart, List, Download, X } from 'lucide-react';

export const RSVPSection = ({ weddingData }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'attending', // 'attending' or 'declined'
    guestsCount: 1,
    eventsAttending: ['Haldi', 'Mehendi', 'Wedding'],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  // Couple guest responses modal state
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [guestList, setGuestList] = useState([]);
  const [loadingGuests, setLoadingGuests] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventCheckbox = (eventName) => {
    setFormData(prev => {
      const current = prev.eventsAttending;
      if (current.includes(eventName)) {
        return { ...prev, eventsAttending: current.filter(e => e !== eventName) };
      } else {
        return { ...prev, eventsAttending: [...current, eventName] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await submitRSVP(formData);
      setSubmitResult(res);
      setIsSubmitted(true);

      // Trigger celebratory confetti on attendance
      if (formData.attendance === 'attending') {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#962632', '#F1EDE4', '#AA8822']
        });
      }
    } catch (err) {
      console.error('RSVP Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp RSVP alternative
  const handleWhatsAppRSVP = () => {
    const name = formData.name.trim() || 'Guest';
    const statusText = formData.attendance === 'attending'
      ? `delighted to confirm my attendance (${formData.guestsCount} guest${formData.guestsCount > 1 ? 's' : ''})`
      : 'sending my warmest wishes and blessings, though I am unable to attend in person';
    
    const eventsText = formData.attendance === 'attending' && formData.eventsAttending.length > 0
      ? ` for: ${formData.eventsAttending.join(', ')}`
      : '';

    const customMsg = formData.message.trim() ? `\n\nBlessings: "${formData.message.trim()}"` : '';

    const text = encodeURIComponent(
      `Namaste Akhilesh & Simran! 🌸\n\nI am ${name}. I am ${statusText}${eventsText} on 24 November 2026.${customMsg}\n\nCongratulations!`
    );

    const phone = weddingData.whatsappContact.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  // Open Couple Admin list
  const handleOpenAdminList = async () => {
    setLoadingGuests(true);
    setShowAdminModal(true);
    try {
      const data = await getStoredRSVPs();
      setGuestList(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingGuests(false);
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    if (!guestList || guestList.length === 0) return;
    const headers = ['Name', 'Phone', 'Attendance', 'Guests Count', 'Events', 'Message', 'Date Submitted'];
    const rows = guestList.map(g => [
      `"${g.guest_name || ''}"`,
      `"${g.phone || ''}"`,
      `"${g.attendance || ''}"`,
      `"${g.guests_count || 1}"`,
      `"${Array.isArray(g.events_attending) ? g.events_attending.join(', ') : (g.events_attending || '')}"`,
      `"${(g.message || '').replace(/"/g, '""')}"`,
      `"${g.created_at || ''}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Akhilesh_Simran_Wedding_RSVPs.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="rsvp-section" className="py-20 px-4 bg-[#FAF8F5] relative overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Background Subtle Mandala */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#962632_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#654123] font-medium">
          Kindly Respond
        </p>
        <h2 className="font-script text-4xl sm:text-6xl text-[#962632] mt-1 mb-2">
          RSVP
        </h2>
        <GoldFlourishDivider text="CELEBRATE WITH US" />

        <p className="font-serif text-sm sm:text-base text-[#654123] max-w-lg mx-auto mb-10">
          Your presence and blessings will make our wedding day truly memorable. Please let us know if you can join our celebrations.
        </p>

        {/* RSVP Card */}
        <div className="bg-[#F1EDE4] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/60 text-left relative">
          
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#EBF7F0] border-2 border-[#2D6A4F] flex items-center justify-center text-[#2D6A4F]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-script text-3xl sm:text-5xl text-[#962632]">
                Thank You, {formData.name}!
              </h3>
              <p className="font-serif text-base text-[#4D453D] max-w-md mx-auto">
                {formData.attendance === 'attending' 
                  ? "We are thrilled to welcome you to our wedding celebrations! Your blessings mean the world to us."
                  : "Thank you for letting us know and sending your auspicious blessings. You will be missed in person!"
                }
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white text-[#962632] border border-[#962632] font-serif text-xs uppercase tracking-wider font-semibold hover:bg-[#FDF2F3]"
                >
                  Edit / Submit Another RSVP
                </button>
                <button
                  onClick={handleWhatsAppRSVP}
                  className="px-6 py-2.5 rounded-full bg-[#25D366] text-white font-serif text-xs uppercase tracking-wider font-semibold hover:bg-[#1EBE5D] flex items-center space-x-1.5 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-widest text-[#654123] font-semibold mb-2">
                  Guest Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma & Family"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/50 focus:border-[#962632] focus:ring-1 focus:ring-[#962632] outline-none text-[#4D453D] font-serif placeholder:text-gray-400"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-widest text-[#654123] font-semibold mb-2">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/50 focus:border-[#962632] focus:ring-1 focus:ring-[#962632] outline-none text-[#4D453D] font-serif placeholder:text-gray-400"
                />
              </div>

              {/* Attendance Status */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-widest text-[#654123] font-semibold mb-2">
                  Will you be attending? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, attendance: 'attending' }))}
                    className={`py-3 px-4 rounded-xl font-serif text-sm font-semibold border transition-all text-center ${
                      formData.attendance === 'attending'
                        ? 'bg-[#962632] text-white border-[#962632] shadow-md'
                        : 'bg-white text-[#654123] border-[#D4AF37]/50 hover:bg-white/80'
                    }`}
                  >
                    🌸 Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, attendance: 'declined' }))}
                    className={`py-3 px-4 rounded-xl font-serif text-sm font-semibold border transition-all text-center ${
                      formData.attendance === 'declined'
                        ? 'bg-[#654123] text-white border-[#654123] shadow-md'
                        : 'bg-white text-[#654123] border-[#D4AF37]/50 hover:bg-white/80'
                    }`}
                  >
                    ✉️ Regretfully Decline
                  </button>
                </div>
              </div>

              {/* If Attending: Number of Guests */}
              {formData.attendance === 'attending' && (
                <div>
                  <label className="block font-serif text-xs uppercase tracking-widest text-[#654123] font-semibold mb-2">
                    Total Number of Guests Attending
                  </label>
                  <select
                    name="guestsCount"
                    value={formData.guestsCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/50 focus:border-[#962632] outline-none text-[#4D453D] font-serif"
                  >
                    <option value={1}>1 Guest (Just Me)</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests (Family)</option>
                  </select>
                </div>
              )}

              {/* Events Attending Checkboxes */}
              {formData.attendance === 'attending' && (
                <div>
                  <label className="block font-serif text-xs uppercase tracking-widest text-[#654123] font-semibold mb-2">
                    Events You Plan to Attend
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {['Haldi Ceremony', 'Mehendi Ceremony', 'Wedding Ceremony'].map((ev) => (
                      <label 
                        key={ev} 
                        className="flex items-center space-x-2 p-2.5 rounded-xl bg-white border border-[#D4AF37]/40 cursor-pointer hover:bg-white/90"
                      >
                        <input
                          type="checkbox"
                          checked={formData.eventsAttending.includes(ev)}
                          onChange={() => handleEventCheckbox(ev)}
                          className="rounded text-[#962632] focus:ring-[#962632]"
                        />
                        <span className="text-xs font-serif text-[#4D453D] font-medium">{ev}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Wishes / Message */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-widest text-[#654123] font-semibold mb-2">
                  Special Wishes & Blessings for the Couple
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Send your heartfelt wishes to Akhilesh & Simran..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/50 focus:border-[#962632] focus:ring-1 focus:ring-[#962632] outline-none text-[#4D453D] font-serif placeholder:text-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#962632] hover:bg-[#721B24] text-white font-serif text-sm uppercase tracking-[0.2em] font-bold shadow-royal transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isSubmitting ? 'Saving RSVP...' : 'Submit RSVP Online'}</span>
                </button>

                {/* WhatsApp alternative button */}
                <button
                  type="button"
                  onClick={handleWhatsAppRSVP}
                  className="w-full py-3 px-6 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all shadow flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quick RSVP via WhatsApp</span>
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Couple View Guest Responses Option */}
        <div className="mt-8 text-center">
          <button
            onClick={handleOpenAdminList}
            className="inline-flex items-center space-x-1.5 text-xs font-serif uppercase tracking-widest text-[#654123] hover:text-[#962632] transition-colors underline decoration-[#D4AF37]"
          >
            <List className="w-3.5 h-3.5" />
            <span>Couple Access: View RSVP Responses & Download Guest List</span>
          </button>
        </div>

      </div>

      {/* Couple Guest List Modal */}
      {showAdminModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowAdminModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/40">
              <div>
                <h3 className="font-script text-3xl sm:text-4xl text-[#962632]">
                  Guest RSVP Submissions
                </h3>
                <p className="font-serif text-xs text-[#654123]">
                  Real-time responses for Akhilesh & Simran's Wedding
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={exportToCSV}
                  disabled={guestList.length === 0}
                  className="px-3 py-1.5 rounded-lg bg-[#962632] text-white text-xs font-serif flex items-center space-x-1 hover:bg-[#721B24] disabled:opacity-40"
                  title="Export to CSV Excel"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>

                <button
                  onClick={() => setShowAdminModal(false)}
                  className="p-1.5 rounded-full hover:bg-black/5 text-[#4D453D]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto py-4">
              {loadingGuests ? (
                <p className="text-center py-10 font-serif text-sm text-[#654123]">
                  Loading guest responses...
                </p>
              ) : guestList.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <p className="font-serif text-base text-[#654123]">
                    No RSVP submissions recorded yet.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Once guests submit the form above, their names and details will appear here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-serif text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-[#D4AF37]/50 text-[#654123] uppercase text-[11px] tracking-wider">
                        <th className="py-2.5 px-3">Guest Name</th>
                        <th className="py-2.5 px-3">Phone</th>
                        <th className="py-2.5 px-3">Attendance</th>
                        <th className="py-2.5 px-3">Guests</th>
                        <th className="py-2.5 px-3">Wishes / Blessings</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D4AF37]/20">
                      {guestList.map((g, idx) => (
                        <tr key={idx} className="hover:bg-white/60">
                          <td className="py-3 px-3 font-semibold text-[#962632]">
                            {g.guest_name}
                          </td>
                          <td className="py-3 px-3 text-[#4D453D]">
                            {g.phone || '-'}
                          </td>
                          <td className="py-3 px-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                              g.attendance === 'attending' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-stone-200 text-stone-700'
                            }`}>
                              {g.attendance}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-[#4D453D]">
                            {g.guests_count || 1}
                          </td>
                          <td className="py-3 px-3 text-xs italic text-[#654123] max-w-xs truncate">
                            {g.message || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-[#D4AF37]/40 text-center text-xs font-serif text-[#654123]">
              Total Responses: <span className="font-bold text-[#962632]">{guestList.length}</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
