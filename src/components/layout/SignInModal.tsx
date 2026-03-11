'use client';

import { useEffect, useRef } from 'react';
import styles from './SignInModal.module.scss';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SignInModal({ open, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on overlay backdrop click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="signin-title">

        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* App icon — house outline */}
        <div className={styles.appIcon}>
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a2 2 0 01-2 2H5a2 2 0 01-2-2V9.5z"/>
            <path d="M9 22V14h6v8"/>
          </svg>
        </div>

        {/* Title */}
        <h2 id="signin-title" className={styles.title}>Sign In</h2>
        <p className={styles.subtitle}>Sign in to PodcastVille to save your library and sync across devices.</p>

        {/* Form */}
        <div className={styles.form}>
          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            autoComplete="email"
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            autoComplete="current-password"
          />
          <a href="/forgot-password" className={styles.forgotLink}>Forgot password?</a>
        </div>

        {/* Continue button */}
        <button className={styles.continueBtn}>Continue</button>

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

        {/* Privacy text */}
        <p className={styles.privacyText}>
          By continuing, you agree to PodcastVille&apos;s{' '}
          <a href="#" className={styles.privacyLink}>Terms of Service</a>
          {' '}and{' '}
          <a href="#" className={styles.privacyLink}>Privacy Policy</a>.
        </p>

        {/* Sign up link */}
        <p className={styles.signUpText}>
          Don&apos;t have an account?{' '}
          <a href="/signup" className={styles.signUpLink}>Sign up</a>
        </p>

      </div>
    </div>
  );
}
