'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // auth logic placeholder
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>

        {/* App icon */}
        <div className={styles.appIcon}>
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 10L12 3l9 7v11a1 1 0 01-1 1H4a1 1 0 01-1-1V10z"/>
            <path d="M9 22V15h6v7"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>Sign in to your PodcastVille account</p>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label className={styles.label} htmlFor="password">Password</label>
              <Link href="/forgot-password" className={styles.forgotLink}>Forgot password?</Link>
            </div>
            <input
              id="password"
              type="password"
              className={styles.input}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>Sign In</button>
        </form>

        {/* OR divider */}
        <div className={styles.orDivider}>
          <span className={styles.orLine}/>
          <span className={styles.orText}>or</span>
          <span className={styles.orLine}/>
        </div>

        {/* Continue with Google */}
        <button className={styles.googleBtn}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Privacy */}
        <p className={styles.privacyText}>
          By continuing, you agree to PodcastVille&apos;s{' '}
          <a href="#" className={styles.privacyLink}>Terms of Service</a>
          {' '}and{' '}
          <a href="#" className={styles.privacyLink}>Privacy Policy</a>.
        </p>

        {/* Sign up CTA */}
        <p className={styles.bottomText}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" className={styles.bottomLink}>Sign up for free</Link>
        </p>

      </div>
    </div>
  );
}
