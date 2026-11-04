import { createClient } from '@supabase/supabase-js';
import { weddingData } from '../weddingData';

const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || weddingData.supabase.url;
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || weddingData.supabase.anonKey;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Save RSVP response to Supabase, falling back gracefully to LocalStorage
 */
export async function submitRSVP(rsvp) {
  const payload = {
    guest_name: rsvp.name,
    phone: rsvp.phone,
    attendance: rsvp.attendance,
    guests_count: parseInt(rsvp.guestsCount, 10) || 1,
    events_attending: rsvp.eventsAttending || ['All'],
    message: rsvp.message || '',
    created_at: new Date().toISOString()
  };

  // 1. Always store to localStorage for offline / client inspection
  try {
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    existing.unshift({ id: Date.now(), ...payload });
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }

  // 2. If Supabase is active, persist to database
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('wedding_rsvps')
        .insert([payload])
        .select();

      if (error) {
        console.error('Supabase insert error:', error);
        return { success: true, storedLocally: true, warning: 'Saved locally; database sync error: ' + error.message };
      }
      return { success: true, data };
    } catch (e) {
      console.error('Supabase exception:', e);
      return { success: true, storedLocally: true };
    }
  }

  return { success: true, storedLocally: true, message: 'Saved successfully in local storage' };
}

/**
 * Fetch all RSVPs (from Supabase if available, else localStorage)
 */
export async function getStoredRSVPs() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('wedding_rsvps')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.warn('Could not query Supabase, fallback to localStorage', e);
    }
  }

  try {
    return JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
  } catch {
    return [];
  }
}
