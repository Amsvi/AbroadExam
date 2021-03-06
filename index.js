import React from 'react'
import ImageLC from 'Components/Lang/Components/ImageLC'
import ImageDarkmodeSwitch from 'Components/Theme/Components/ImageDarkmodeSwitch'

const AbroadLayout = ({ children }) => {
  return (
    <>
      {children}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'fixed',
          bottom: 0,
          right: '4rem',
          width: '150px',
          direction: 'ltr',
        }}
      >
        <ImageLC />
        <ImageDarkmodeSwitch />
      </div>
      <style global jsx>
        {`
          :root {
            --header-height: 56px;
            --site-width: 1280px;
            --su-1: 0.25rem;
            --su-2: 0.5rem;
            --su-3: 0.75rem;
            --su-4: 1rem;
            --su-5: 1.25rem;
            --su-6: 1.5rem;
            --su-7: 2rem;
            --su-8: 3rem;
            --su-9: 4rem;
            --su-10: 8rem;
            --radius: 25px;
            --transition-func: cubic-bezier(0.17, 0.67, 0.5, 0.71);
            --transition-time: 100ms;
            --transition-props: var(--transition-func) var(--transition-time);
            --fs-xs: 0.75rem;
            --fs-s: 0.875rem;
            --fs-base: 1rem;
            --fs-l: 1.125rem;
            --fs-xl: 1.25rem;
            --fs-2xl: 1.5rem;
            --fs-3xl: 1.875rem;
            --fs-4xl: 2.25rem;
            --fs-5xl: 3rem;
            --fw-normal: 400;
            --fw-medium: 500;
            --fw-bold: 700;
            --fw-heavy: 800;
            --lh-tight: 1.25;
            --lh-base: 1.5;
            --base: #08090a;
            --base-a90: rgba(8, 9, 10, 0.9);
            --base-a80: rgba(8, 9, 10, 0.8);
            --base-a70: rgba(8, 9, 10, 0.7);
            --base-a60: rgba(8, 9, 10, 0.6);
            --base-a50: rgba(8, 9, 10, 0.5);
            --base-a40: rgba(8, 9, 10, 0.4);
            --base-a30: rgba(8, 9, 10, 0.3);
            --base-a20: rgba(8, 9, 10, 0.2);
            --base-a10: rgba(8, 9, 10, 0.1);
            --base-a5: rgba(8, 9, 10, 0.05);
            --base-100: var(--base);
            --base-90: #202428;
            --base-80: #363d44;
            --base-70: #4d5760;
            --base-60: #64707d;
            --base-50: #7d8a97;
            --base-40: #99a3ad;
            --base-30: #b5bdc4;
            --base-20: #d2d6db;
            --base-10: #eef0f1;
            --base-0: #f9fafa;
            --base-inverted: #fff;
            --accent-brand: #3b49df;
            --accent-brand-darker: #1827ce;
            --accent-brand-lighter: #8d95f2;
            --accent-brand-a10: rgba(59, 73, 223, 0.1);
            --accent-success: #26d9ca;
            --accent-success-darker: #1ab3a6;
            --accent-success-lighter: #79ece2;
            --accent-success-a10: rgba(38, 217, 202, 0.1);
            --accent-warning: #ffcf4c;
            --accent-warning-darker: #f5b400;
            --accent-warning-lighter: #ffe499;
            --accent-warning-a10: rgba(255, 207, 76, 0.1);
            --accent-danger: #dc1818;
            --accent-danger-darker: #c20a0a;
            --accent-danger-lighter: #ec5050;
            --accent-danger-a10: rgba(220, 24, 24, 0.1);
            --body-bg: var(--base-10);
            --body-color: var(--base-100);
            --body-color-inverted: var(--base-inverted);
            --card-bg: var(--base-inverted);
            --card-color: var(--base-100);
            --card-color-secondary: var(--base-70);
            --card-color-tertiary: var(--base-60);
            --card-secondary-bg: var(--base-0);
            --card-secondary-color: var(--base-90);
            --card-headline-color: var(--base-100);
            --card-border: var(--base-a10);
            --card-secondary-border: var(--base-a5);
            --header-bg: var(--base-inverted);
            --header-bg-hover: var(--base-10);
            --header-bg-current: var(--base-20);
            --header-shadow: rgba(0, 0, 0, 0.1);
            --header-icons-color: var(--base-70);
            --header-icons-color-hover: var(--base-100);
            --logo-bg: var(--base-100);
            --logo-color: var(--base-inverted);
            --footer-bg: var(--base-20);
            --footer-color: var(--base-80);
            --footer-link-color: var(--base-80);
            --footer-link-color-hover: var(--base-100);
            --link-color: var(--base-90);
            --link-color-hover: var(--accent-brand-darker);
            --link-bg-hover: var(--base-a5);
            --link-bg-hover-alt: var(--base-inverted);
            --link-brand-color: var(--accent-brand);
            --link-color-current: var(--base-100);
            --link-color-secondary: var(--base-60);
            --link-color-secondary-hover: var(--base-70);
            --link-bg-current: var(--base-inverted);
            --button-primary-bg: var(--accent-brand);
            --button-primary-bg-hover: var(--accent-brand-darker);
            --button-primary-color: var(--base-0);
            --button-primary-color-hover: var(--base-0);
            --button-primary-inverted-bg: var(--accent-brand);
            --button-primary-inverted-bg-hover: var(--accent-brand-darker);
            --button-primary-inverted-color: var(--base-0);
            --button-primary-inverted-color-hover: var(--base-0);
            --button-secondary-bg: var(--base-20);
            --button-secondary-bg-hover: var(--base-30);
            --button-secondary-color: var(--base-80);
            --button-secondary-color-hover: var(--base-100);
            --button-secondary-inverted-bg: var(--base-70);
            --button-secondary-inverted-bg-hover: var(--base-60);
            --button-secondary-inverted-color: var(--base-10);
            --button-secondary-inverted-color-hover: var(--base-0);
            --button-outlined-bg: transparent;
            --button-outlined-bg-hover: rgba(0, 0, 0, 0.035);
            --button-outlined-border: var(--base-20);
            --button-outlined-border-hover: var(--base-40);
            --button-outlined-color: var(--base-80);
            --button-outlined-color-hover: var(--base-100);
            --button-outlined-inverted-bg: transparent;
            --button-outlined-inverted-bg-hover: rgba(255, 255, 255, 0.15);
            --button-outlined-inverted-border: var(--base-60);
            --button-outlined-inverted-border-hover: var(--base-40);
            --button-outlined-inverted-color: var(--base-30);
            --button-outlined-inverted-color-hover: var(--base-10);
            --button-ghost-bg: transparent;
            --button-ghost-bg-hover: rgba(0, 0, 0, 0.035);
            --button-ghost-color: var(--base-80);
            --button-ghost-color-hover: var(--base-100);
            --button-ghost-dimmed-color: var(--base-60);
            --button-ghost-dimmed-color-hover: var(--base-100);
            --button-ghost-inverted-bg: transparent;
            --button-ghost-inverted-bg-hover: rgba(255, 255, 255, 0.15);
            --button-ghost-inverted-color: var(--base-30);
            --button-ghost-inverted-color-hover: var(--base-10);
            --button-ghost-dimmed-inverted-color: var(--base-50);
            --button-ghost-dimmed-inverted-color-hover: var(--base-100);
            --form-bg: var(--base-0);
            --form-bg-focus: var(--base-0);
            --form-border: var(--base-30);
            --form-border-hover: var(--base-40);
            --form-border-focus: var(--accent-brand);
            --form-placeholder-color: var(--base-60);
            --label-primary: var(--base-90);
            --label-secondary: var(--base-60);
            --box: var(--base-90);
            --box-darker: var(--base-100);
            --snackbar-bg: var(--base-90);
            --snackbar-border: var(--base-100);
            --snackbar-color: var(--body-color-inverted);
            --indicator-accent-bg: var(--accent-brand);
            --indicator-accent-color: var(--body-color-inverted);
            --indicator-critical-bg: var(--accent-danger);
            --indicator-critical-color: var(--body-color-inverted);
            --indicator-default-bg: var(--button-secondary-bg);
            --indicator-default-color: var(--button-secondary-color);
            --tab-color: var(--base-80);
            --tab-color-hover: var(--accent-brand);
            --tab-color-current: var(--base-100);
            --tab-bg-hover: var(--accent-brand-a10);
            --tab-bg-current: var(--accent-brand);
            --tab-muted-color: var(--base-80);
            --tab-muted-color-hover: var(--base-90);
            --tab-muted-color-current: var(--base-100);
            --tab-muted-bg-hover: var(--base-a10);
            --tab-muted-bg-current: var(--base-20);
            --tab-pill-color-current: var(--base-inverted);
            --tag-color: var(--base-60);
            --tag-color-hover: var(--base-100);
            --story-comments-bg: var(--base-0);
            --select-icon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE2TDYgMTBIMThMMTIgMTZaIiBmaWxsPSIjMDgwOTBBIi8+Cjwvc3ZnPg==);
            --reaction-like-color: var(--accent-danger);
            --reaction-like-bg: var(--accent-danger-a10);
            --reaction-custom-color: var(--accent-success);
            --reaction-custom-bg: var(--accent-success-a10);
            --reaction-save-color: var(--accent-brand);
            --reaction-save-bg: var(--accent-brand-a10);
          }

          body {
            color: var(--body-color);
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            font-family: var(--font);
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default AbroadLayout
