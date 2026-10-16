'use client';

import { useState } from 'react';
import { AlertCircle, CalendarCheck, ChevronDown } from 'lucide-react';
import { reservationSlots, restaurant } from '@/lib/data';

type Values = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
};

const empty: Values = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  occasion: '',
  notes: '',
};

/** Field-level validation, run on submit and re-run live after first attempt. */
function validate(v: Values): Partial<Record<keyof Values, string>> {
  const e: Partial<Record<keyof Values, string>> = {};

  if (!v.name.trim()) e.name = 'Please tell us who the table is for.';
  else if (v.name.trim().length < 2) e.name = 'That name looks a little short.';

  if (!v.email.trim()) e.email = 'We need an email to confirm the booking.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = 'That email doesn’t look right — check the spelling.';

  if (!v.phone.trim()) e.phone = 'A number in case the kitchen needs to reach you.';
  else if (v.phone.replace(/\D/g, '').length < 10)
    e.phone = 'Please include the full number, area code included.';

  if (!v.date) {
    e.date = 'Pick a date.';
  } else {
    const chosen = new Date(`${v.date}T12:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) e.date = 'That evening has already happened.';
    else if (chosen.getDay() === 1) e.date = 'We’re closed on Mondays — try Tuesday.';
    else {
      const max = new Date(today);
      max.setDate(max.getDate() + 60);
      if (chosen > max) e.date = 'We take bookings up to 60 days ahead. Call us for larger parties further out.';
    }
  }

  if (!v.time) e.time = 'Pick a seating time.';

  if (v.notes.length > 300) e.notes = 'Keep it under 300 characters, we read every one.';

  return e;
}

export default function ReservationForm() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const set =
    (key: keyof Values) =>
    (
      ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const next = { ...values, [key]: ev.target.value };
      setValues(next);
      if (submitted) setErrors(validate(next)); // live re-validate after first submit
    };

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setSubmitted(true);
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      // Move focus to the first invalid field for keyboard/SR users
      const first = Object.keys(errs)[0];
      document.getElementById(`res-${first}`)?.focus();
      return;
    }
    setConfirming(true);
    // Demo only: pretend to hit the host stand. Real deployments wire this
    // to an API route or OpenTable/Resy here.
    setTimeout(() => setConfirming(false), 900);
  }

  const done = !confirming && submitted && Object.keys(errors).length === 0;

  if (done) {
    const pretty = new Date(`${values.date}T12:00:00`).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    return (
      <div
        role="status"
        className="rounded-card border border-terracotta-light bg-paper p-8 text-center md:p-12"
      >
        <CalendarCheck size={32} className="mx-auto text-terracotta" aria-hidden />
        <h2 className="mt-4 text-title font-display font-medium">
          Table for {values.guests}, {pretty} at {values.time}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">
          Thank you, {values.name.trim().split(' ')[0]}. A confirmation is on its
          way to <span className="text-ink">{values.email}</span>. If your plans
          change, call us on {restaurant.phone} — the kitchen preps the fire by
          headcount.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty);
            setErrors({});
            setSubmitted(false);
          }}
          className="btn-ghost mt-8"
        >
          Book another table
        </button>
      </div>
    );
  }

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`res-${k}-error`} className="field-error">
        <AlertCircle size={13} aria-hidden /> {errors[k]}
      </p>
    ) : null;

  const invalid = (k: keyof Values) =>
    errors[k] ? { 'aria-invalid': true, 'aria-describedby': `res-${k}-error` } : {};

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="res-name" className="field-label">
            Name
          </label>
          <input
            id="res-name"
            type="text"
            autoComplete="name"
            placeholder="Aysu Karaca"
            value={values.name}
            onChange={set('name')}
            className="field-input"
            {...invalid('name')}
          />
          {err('name')}
        </div>
        <div>
          <label htmlFor="res-phone" className="field-label">
            Phone
          </label>
          <input
            id="res-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(503) 555-0134"
            value={values.phone}
            onChange={set('phone')}
            className="field-input"
            {...invalid('phone')}
          />
          {err('phone')}
        </div>
      </div>

      <div>
        <label htmlFor="res-email" className="field-label">
          Email
        </label>
        <input
          id="res-email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={set('email')}
          className="field-input"
          {...invalid('email')}
        />
        {err('email')}
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="res-date" className="field-label">
            Date
          </label>
          <input
            id="res-date"
            type="date"
            value={values.date}
            onChange={set('date')}
            className="field-input"
            {...invalid('date')}
          />
          {err('date')}
        </div>
        <div>
          <label htmlFor="res-time" className="field-label">
            Seating
          </label>
          <div className="relative">
            <select
              id="res-time"
              value={values.time}
              onChange={set('time')}
              className="field-input appearance-none pr-10"
              {...invalid('time')}
            >
              <option value="">Choose a time</option>
              {reservationSlots.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              aria-hidden
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
            />
          </div>
          {err('time')}
        </div>
        <div>
          <label htmlFor="res-guests" className="field-label">
            Guests
          </label>
          <div className="relative">
            <select
              id="res-guests"
              value={values.guests}
              onChange={set('guests')}
              className="field-input appearance-none pr-10"
            >
              {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                <option key={n} value={n}>
                  {n} {n === '1' ? 'guest' : 'guests'}
                </option>
              ))}
              <option value="9+">9 or more — we’ll call you</option>
            </select>
            <ChevronDown
              size={16}
              aria-hidden
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-faint"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="res-occasion" className="field-label">
          Occasion <span className="normal-case tracking-normal text-ink-faint">(optional)</span>
        </label>
        <input
          id="res-occasion"
          type="text"
          placeholder="Birthday, first date, reconciliation…"
          value={values.occasion}
          onChange={set('occasion')}
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="res-notes" className="field-label">
          Anything the kitchen should know{' '}
          <span className="normal-case tracking-normal text-ink-faint">(optional)</span>
        </label>
        <textarea
          id="res-notes"
          rows={4}
          placeholder="Allergies, the counter if it’s open, no cilantro…"
          value={values.notes}
          onChange={set('notes')}
          className="field-input resize-none"
          {...invalid('notes')}
        />
        <div className="mt-1 flex items-start justify-between gap-4">
          {err('notes')}
          <span className="ml-auto text-xs text-ink-faint tabular-nums">
            {values.notes.length}/300
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button type="submit" className="btn-primary" disabled={confirming}>
          {confirming ? 'Holding the table…' : 'Request this table'}
        </button>
        <p className="text-xs leading-relaxed text-ink-faint">
          Requests are confirmed by email within one hour of opening.
          <br className="hidden sm:block" /> Parties of nine-plus: {restaurant.phone}.
        </p>
      </div>
    </form>
  );
}
