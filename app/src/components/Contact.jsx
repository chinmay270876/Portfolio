import { useState } from 'react';
import { site } from '../data/site.js';

const socials = site.socials.filter(
  (social) => typeof social.href === 'string' && /^https?:\/\//.test(social.href),
);

const initialValues = {
  fullname: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  'bot-field': '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9().\-\s]{7,20}$/;

export function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');

  const onSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;

    setStatus({ type: 'idle', message: '' });

    if (values['bot-field']) {
      setStatus({ type: 'success', message: 'Message accepted.' });
      return;
    }

    const fullname = values.fullname.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const subject = values.subject.trim();
    const message = values.message.trim();

    if (!fullname || !email || !subject || !message) {
      setStatus({ type: 'error', message: 'Please complete the required fields.' });
      return;
    }

    if (!emailPattern.test(email)) {
      setStatus({ type: 'error', message: 'Enter a valid email address.' });
      return;
    }

    if (phone && !phonePattern.test(phone)) {
      setStatus({ type: 'error', message: 'Enter a valid mobile number, or leave it blank.' });
      return;
    }

    const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    if (isLocal) {
      setStatus({
        type: 'info',
        message: `This preview cannot send email. Write to ${site.contact.email} instead.`,
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          fullname,
          email,
          phone,
          subject,
          message,
          'bot-field': values['bot-field'],
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setValues(initialValues);
      setStatus({ type: 'success', message: 'Thanks. Your message was sent.' });
    } catch {
      setStatus({
        type: 'error',
        message: `The message could not be sent. Email ${site.contact.email} instead.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Contact <em>me</em>
        </h2>
      </div>
      <div className="contact-layout">
        <div data-reveal>
          <ul className="contact-facts">
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
            <li>
              <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>{site.contact.phone}</a>
            </li>
            <li>{site.contact.location}</li>
          </ul>
          {socials.length > 0 && (
          <ul className="contact-socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <i className={social.icon} aria-hidden="true" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          )}
        </div>
      <form
        name="contact"
        method="POST"
        onSubmit={onSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        noValidate
        aria-describedby={status.message ? 'contact-status' : undefined}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="honeypot" aria-hidden="true">
          <label htmlFor="bot-field">
            Do not fill this out
            <input id="bot-field" name="bot-field" value={values['bot-field']} onChange={onChange} tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className="input-box">
          <div className="field">
            <label htmlFor="fullname" className="sr-only">
              Full Name
            </label>
            <input
              id="fullname"
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
              aria-invalid={status.type === 'error' && !values.fullname.trim() ? true : undefined}
              value={values.fullname}
              onChange={onChange}
              autoComplete="name"
            />
          </div>
          <div className="field">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              required
              aria-invalid={status.type === 'error' && !emailPattern.test(values.email.trim()) ? true : undefined}
              value={values.email}
              onChange={onChange}
              autoComplete="email"
            />
          </div>
        </div>
        <div className="input-box">
          <div className="field">
            <label htmlFor="phone" className="sr-only">
              Mobile Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={values.phone}
              onChange={onChange}
              autoComplete="tel"
            />
          </div>
          <div className="field">
            <label htmlFor="subject" className="sr-only">
              Email Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
              aria-invalid={status.type === 'error' && !values.subject.trim() ? true : undefined}
              value={values.subject}
              onChange={onChange}
            />
          </div>
        </div>
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="6"
          placeholder="Your Message"
          required
          aria-invalid={status.type === 'error' && !values.message.trim() ? true : undefined}
          value={values.message}
          onChange={onChange}
        />
        <input type="submit" value={submitting ? 'Sending...' : 'Send Message'} className="btn" disabled={submitting} />
        <div
          id="contact-status"
          className={`form-status ${status.type}`}
          role={status.type === 'error' ? 'alert' : 'status'}
          aria-live={status.type === 'error' ? 'assertive' : 'polite'}
        >
          {status.message}
        </div>
      </form>
      </div>
    </section>
  );
}
