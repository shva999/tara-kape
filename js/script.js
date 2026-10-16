:root {
    --bg-color: #efe5d5;
    --paper-color: #f8f3eb;
    --primary-color: #5a4033;
    --secondary-color: #7d8c8d;
    --accent-color: #c19a6b;
    --text-color: #292522;
    --muted-color: #75695e;
    --serif: "DM Serif Display", Georgia, serif;
    --sans: "Montserrat", Arial, sans-serif;
}

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
}

body {
    margin: 0;
    overflow-x: hidden;
    background: var(--bg-color);
    color: var(--text-color);
    font-family: var(--sans);
    -webkit-font-smoothing: antialiased;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
}

.site-header {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 15px clamp(22px, 7vw, 100px);
    color: white;
}

.brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: inherit;
    font-family: var(--serif);
    font-size: 22px;
    text-decoration: none;
}

.logo-image {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
}

.site-nav,
.footer-nav {
    display: flex;
    align-items: center;
    gap: clamp(12px, 2.5vw, 34px);
}

.site-nav a,
.footer-nav a {
    color: inherit;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 160ms ease, background-color 160ms ease, color 160ms ease;
}

.site-nav a:hover,
.footer-nav a:hover {
    opacity: .72;
}

.site-nav .nav-cta {
    padding: 11px 18px;
    border: 1px solid rgba(255,255,255,.8);
    border-radius: 30px;
}

.site-nav .nav-cta:hover {
    background: white;
    color: var(--primary-color);
    opacity: 1;
}

.site-nav .current-page {
    text-decoration: underline;
    text-underline-offset: 6px;
}

.hero {
    position: relative;
    display: grid;
    min-height: min(780px, 100svh);
    min-height: max(620px, 100svh);
    place-items: center;
    overflow: hidden;
    background: #30241e;
    color: white;
    text-align: center;
}

.hero-video,
.hero-overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.hero-video {
    object-fit: cover;
    object-position: center;
}

.hero-overlay {
    background: linear-gradient(90deg, rgba(26,20,16,.62), rgba(26,20,16,.45)), rgba(0,0,0,.18);
}

.hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    max-width: 1050px;
    flex-direction: column;
    align-items: center;
    padding: 120px 24px 90px;
}

.eyebrow {
    margin: 0 0 16px;
    color: var(--secondary-color);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .2em;
    line-height: 1.5;
    text-transform: uppercase;
}

.eyebrow-light {
    color: #e3c9a3;
}

.hero-heading {
    margin: 0;
    font-family: var(--serif);
    font-size: clamp(48px, 8.2vw, 96px);
    font-weight: 400;
    letter-spacing: -.035em;
    line-height: 1.04;
}

.hero-heading-active {
    color: var(--accent-color);
}

.hero-subheading {
    margin: 17px 0 30px;
    color: rgba(255,255,255,.86);
    font-size: clamp(15px, 2vw, 20px);
    letter-spacing: .03em;
}

.button-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 40px;
    cursor: pointer;
    font: 700 11px var(--sans);
    letter-spacing: .04em;
    text-decoration: none;
    transition: transform 180ms ease, background-color 180ms ease, color 180ms ease;
}

.button:hover {
    transform: translateY(-2px);
}

.button-light {
    border-color: white;
    background: white;
    color: var(--primary-color);
}

.button-light:hover {
    background: transparent;
    color: white;
}

.button-dark {
    background: var(--primary-color);
    color: white;
}

.button-dark:hover {
    background: #38291f;
}

.text-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--primary-color);
    font-size: 11px;
    font-weight: 800;
    text-decoration: none;
}

.text-link:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
}

.text-link-light {
    color: white;
}

.scroll-cue {
    position: absolute;
    bottom: 25px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(255,255,255,.72);
    font-size: 9px;
    letter-spacing: .12em;
    text-decoration: none;
    text-transform: uppercase;
}

.section {
    padding: clamp(72px, 10vw, 140px) clamp(24px, 10vw, 150px);
}

.about-section {
    display: grid;
    min-height: 560px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: clamp(50px, 10vw, 150px);
}

.about-copy {
    max-width: 520px;
}

.section-title {
    margin: 0 0 20px;
    color: var(--primary-color);
    font-family: var(--serif);
    font-size: clamp(36px, 5vw, 58px);
    font-weight: 400;
    letter-spacing: -.025em;
    line-height: 1.08;
}

.section-title em,
.inner-hero h1 em {
    color: #a87945;
    font-weight: 400;
}

.body-copy {
    max-width: 540px;
    margin: 0 0 25px;
    color: var(--muted-color);
    font-size: 13px;
    line-height: 1.9;
}

.about-art {
    position: relative;
    display: grid;
    min-height: 340px;
    place-items: center;
    background: #e5d7c2;
}

.about-art > img {
    width: min(72%, 360px);
    mix-blend-mode: multiply;
}

.about-note {
    position: absolute;
    right: -26px;
    bottom: 28px;
    display: flex;
    width: min(275px, 75%);
    align-items: flex-start;
    gap: 10px;
    padding: 18px 20px;
    background: var(--primary-color);
    color: white;
    box-shadow: 0 14px 30px rgba(58,41,30,.16);
}

.about-note p {
    margin: 6px 0 0;
    font-family: var(--serif);
    font-size: 17px;
    line-height: 1.35;
}

.note-mark {
    color: #e4bd81;
    font-family: var(--serif);
    font-size: 38px;
    line-height: 1;
}

.values-band {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;
    padding: 62px clamp(24px, 10vw, 150px);
    background: var(--primary-color);
    color: white;
}

.values-band article {
    max-width: 300px;
}

.value-number,
.steps-grid article > span {
    color: #ddb77f;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .12em;
}

.values-band h3 {
    margin: 15px 0 9px;
    font-family: var(--serif);
    font-size: 22px;
    font-weight: 400;
}

.values-band p,
.steps-grid p {
    margin: 0;
    color: rgba(255,255,255,.72);
    font-size: 11px;
    line-height: 1.8;
}

.featured-section {
    padding-top: 105px;
    padding-bottom: 90px;
}

.section-heading-row {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 35px;
}

.section-heading-row .section-title {
    margin-bottom: 0;
}

.section-heading-row > .text-link {
    margin-bottom: 9px;
}

.featured-grid,
.menu-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.featured-card {
    display: block;
    padding-bottom: 22px;
    background: var(--paper-color);
    color: inherit;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease;
}

.featured-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 30px rgba(58,41,30,.09);
}

.featured-card img {
    width: 100%;
    height: clamp(190px, 25vw, 300px);
    object-fit: contain;
    background: #e9ddcb;
}

.card-kicker {
    display: block;
    margin: 19px 22px 7px;
    color: #9a6f43;
    font-size: 9px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
}

.featured-card h3,
.menu-card h3 {
    margin: 0 22px 7px;
    color: var(--primary-color);
    font-family: var(--serif);
    font-size: 25px;
    font-weight: 400;
}

.featured-card p,
.menu-card p {
    margin: 0 22px;
    color: var(--muted-color);
    font-size: 11px;
    line-height: 1.75;
}

.menu-note {
    margin: 22px 0 0;
    color: var(--muted-color);
    font-size: 10px;
    line-height: 1.7;
}

.review-invite {
    padding: 78px 24px 84px;
    background: #7d8c8d;
    color: white;
    text-align: center;
}

.review-stars {
    margin-bottom: 18px;
    color: #f0d2a4;
    letter-spacing: .35em;
}

.review-invite h2,
.locations-strip h2,
.menu-bottom-cta h2,
.franchise-inquiry h2 {
    margin: 0 0 15px;
    font-family: var(--serif);
    font-size: clamp(34px, 5vw, 54px);
    font-weight: 400;
    line-height: 1.1;
}

.review-invite > p:not(.eyebrow) {
    max-width: 470px;
    margin: 0 auto 25px;
    color: rgba(255,255,255,.84);
    font-size: 12px;
    line-height: 1.8;
}

.contact-section {
    display: grid;
    grid-template-columns: .85fr 1fr;
    align-items: start;
    gap: clamp(50px, 10vw, 150px);
    background: var(--paper-color);
}

.contact-aside {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-top: 35px;
    padding-top: 22px;
    border-top: 1px solid #ded2c2;
}

.contact-icon {
    color: #a87945;
    font-size: 22px;
}

.contact-aside p {
    margin: 0;
    color: var(--muted-color);
    font-size: 11px;
    line-height: 1.8;
}

.contact-aside a {
    color: var(--primary-color);
    font-weight: 700;
    text-decoration: none;
}

.contact-form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.contact-form label {
    margin: 17px 0 7px;
    color: var(--primary-color);
    font-size: 10px;
    font-weight: 700;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px 13px;
    border: 1px solid #d7caba;
    border-radius: 0;
    outline: none;
    background: transparent;
    color: var(--text-color);
    font: 12px var(--sans);
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(90,64,51,.1);
}

.contact-form textarea {
    min-height: 110px;
    resize: vertical;
}

.contact-form .button {
    align-self: flex-start;
    margin-top: 20px;
}

.form-note,
.form-status {
    margin: 12px 0 0;
    color: var(--muted-color);
    font-size: 10px;
    line-height: 1.7;
}

.form-status:empty {
    display: none;
}

.locations-strip {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding: 68px clamp(24px, 10vw, 150px);
    background: var(--primary-color);
    color: white;
}

.locations-strip h2 {
    margin: 0;
    font-size: clamp(30px, 4vw, 44px);
}

.locations-strip .button {
    flex-shrink: 0;
}

.site-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 30px clamp(24px, 7vw, 100px);
    background: #352820;
    color: white;
}

.footer-brand {
    font-size: 18px;
}

.footer-brand .logo-image {
    width: 34px;
    height: 34px;
}

.site-footer > p {
    margin: 0;
    color: rgba(255,255,255,.65);
    font-family: var(--serif);
    font-size: 14px;
}

.footer-nav {
    gap: 18px;
}

.footer-nav a,
.site-footer small {
    color: rgba(255,255,255,.72);
    font-size: 9px;
}

.inner-hero {
    position: relative;
    display: flex;
    min-height: 540px;
    align-items: center;
    overflow: hidden;
    padding: 130px clamp(24px, 11vw, 160px) 75px;
    background: var(--primary-color);
    color: white;
}

.inner-hero::after {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(43,31,24,.87) 0%, rgba(43,31,24,.69) 54%, rgba(43,31,24,.15) 100%);
    content: "";
}

.inner-hero-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
}

.inner-hero h1 {
    margin: 0 0 18px;
    font-family: var(--serif);
    font-size: clamp(48px, 7vw, 80px);
    font-weight: 400;
    letter-spacing: -.03em;
    line-height: 1;
}

.inner-hero h1 em {
    color: #dfbd8d;
}

.inner-hero-content > p:not(.eyebrow) {
    max-width: 450px;
    margin: 0 0 25px;
    color: rgba(255,255,255,.8);
    font-size: 12px;
    line-height: 1.8;
}

.inner-hero-beans,
.franchise-hero-image {
    position: absolute;
    z-index: 0;
    right: 5%;
    bottom: -10%;
    width: min(44vw, 560px);
    max-height: 100%;
    object-fit: contain;
    opacity: .55;
}

.menu-hero .inner-hero-beans {
    right: -2%;
    bottom: -23%;
    width: min(54vw, 680px);
    opacity: .34;
}

.franchise-hero-image {
    right: 4%;
    bottom: -4%;
    width: min(48vw, 610px);
    opacity: .94;
}

.menu-feature {
    display: grid;
    min-height: 510px;
    grid-template-columns: .8fr 1.2fr;
    align-items: center;
    gap: 5vw;
    padding: 72px clamp(24px, 10vw, 150px);
    overflow: hidden;
}

.menu-feature-copy {
    max-width: 380px;
}

.carousel-controls {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 35px;
}

.carousel-button {
    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border: 1px solid #c6b49d;
    border-radius: 50%;
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 17px;
    transition: background-color 160ms ease, color 160ms ease;
}

.carousel-button:hover {
    background: var(--primary-color);
    color: white;
}

.carousel-count {
    color: var(--muted-color);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .1em;
}

.menu-feature-art {
    position: relative;
    display: grid;
    min-height: 380px;
    place-items: center;
    overflow: hidden;
    background: #e5d7c2;
}

.menu-feature-art > img {
    position: relative;
    z-index: 1;
    width: min(70%, 390px);
    height: 340px;
    object-fit: contain;
    transition: opacity 160ms ease, transform 160ms ease;
}

.marquee-banner {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 0;
    width: 100%;
    overflow: hidden;
    transform: translateY(-50%);
}

.marquee-track {
    display: flex;
    width: max-content;
    animation: scroll-marquee 26s linear infinite;
}

.marquee-text {
    color: rgba(90,64,51,.2);
    font-size: clamp(60px, 9vw, 130px);
    font-weight: 800;
    white-space: nowrap;
}

@keyframes scroll-marquee {
    to { transform: translateX(-50%); }
}

.menu-list-section {
    padding-top: 85px;
    padding-bottom: 100px;
    background: var(--paper-color);
}

.menu-intro {
    max-width: 320px;
    margin-bottom: 0;
}

.menu-card {
    overflow: hidden;
    background: var(--bg-color);
}

.menu-card img {
    width: 100%;
    height: clamp(210px, 28vw, 340px);
    object-fit: contain;
    background: #e9ddcb;
}

.menu-card > div {
    padding: 0 0 24px;
}

.menu-card .card-kicker {
    margin-top: 21px;
}

.menu-card h3 {
    font-size: 27px;
}

.menu-card p {
    min-height: 40px;
}

.menu-bottom-cta {
    padding: 75px 24px;
    background: var(--secondary-color);
    color: white;
    text-align: center;
}

.menu-bottom-cta .button {
    margin-top: 10px;
}

.franchise-story {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    align-items: center;
    gap: clamp(50px, 10vw, 145px);
}

.franchise-story-copy {
    max-width: 460px;
}

.franchise-visual {
    margin: 0;
    padding: 20px;
    background: #e4d7c5;
}

.franchise-visual img {
    width: 100%;
    max-height: 380px;
    object-fit: contain;
}

.franchise-visual figcaption {
    padding-top: 15px;
    color: var(--muted-color);
    font-size: 10px;
    line-height: 1.6;
}

.franchise-steps {
    padding: 85px clamp(24px, 10vw, 150px);
    background: var(--primary-color);
    color: white;
}

.steps-heading {
    margin-bottom: 40px;
}

.steps-heading .section-title {
    color: white;
}

.steps-heading .section-title em {
    color: #dfbd8d;
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
}

.steps-grid article {
    padding: 25px 0 5px;
    border-top: 1px solid rgba(255,255,255,.28);
}

.steps-grid h3 {
    margin: 20px 0 9px;
    font-family: var(--serif);
    font-size: 23px;
    font-weight: 400;
}

.franchise-steps > .menu-note {
    color: rgba(255,255,255,.6);
}

.faq-section {
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    gap: clamp(50px, 9vw, 130px);
}

.faq-list details {
    border-bottom: 1px solid #d8caba;
}

.faq-list details:first-child {
    border-top: 1px solid #d8caba;
}

.faq-list summary {
    position: relative;
    padding: 20px 35px 20px 0;
    color: var(--primary-color);
    cursor: pointer;
    font-family: var(--serif);
    font-size: 19px;
    list-style: none;
}

.faq-list summary::-webkit-details-marker {
    display: none;
}

.faq-list summary::after {
    position: absolute;
    right: 4px;
    content: "+";
    font: 22px var(--sans);
}

.faq-list details[open] summary::after {
    content: "−";
}

.faq-list details p {
    max-width: 620px;
    margin: -4px 0 20px;
    color: var(--muted-color);
    font-size: 11px;
    line-height: 1.8;
}

.franchise-inquiry {
    display: grid;
    grid-template-columns: .9fr 1fr;
    gap: clamp(50px, 10vw, 150px);
    padding: 85px clamp(24px, 10vw, 150px);
    background: var(--primary-color);
    color: white;
}

.franchise-inquiry h2 {
    font-size: clamp(39px, 5vw, 57px);
}

.franchise-inquiry > div > p:not(.eyebrow) {
    max-width: 400px;
    color: rgba(255,255,255,.73);
    font-size: 11px;
    line-height: 1.8;
}

.inquiry-form label {
    color: white;
}

.inquiry-form input,
.inquiry-form textarea {
    border-color: rgba(255,255,255,.34);
    color: white;
}

.inquiry-form input:focus,
.inquiry-form textarea:focus {
    border-color: white;
    box-shadow: 0 0 0 2px rgba(255,255,255,.1);
}

.inquiry-form .button {
    background: white;
    color: var(--primary-color);
}

.inquiry-form .button:hover {
    background: transparent;
    color: white;
}

.inquiry-form .form-status {
    color: rgba(255,255,255,.78);
}

@media (max-width: 850px) {
    .site-header {
        padding-right: 24px;
        padding-left: 24px;
    }

    .site-nav {
        gap: 15px;
    }

    .site-nav a {
        font-size: 10px;
    }

    .section {
        padding-right: 7vw;
        padding-left: 7vw;
    }

    .about-section,
    .franchise-story {
        gap: 45px;
    }

    .contact-section,
    .franchise-inquiry {
        gap: 45px;
    }

    .values-band,
    .franchise-steps {
        padding-right: 7vw;
        padding-left: 7vw;
    }

    .site-footer {
        flex-wrap: wrap;
    }

    .footer-nav {
        order: 1;
        width: 100%;
        justify-content: center;
    }

    .inner-hero {
        padding-right: 7vw;
        padding-left: 7vw;
    }
}

@media (max-width: 620px) {
    html {
        scroll-padding-top: 20px;
    }

    .site-header {
        position: absolute;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        padding: 12px 16px;
    }

    .brand {
        gap: 7px;
        font-size: 17px;
    }

    .logo-image {
        width: 34px;
        height: 34px;
    }

    .site-nav {
        width: 100%;
        flex-wrap: nowrap;
        justify-content: center;
        gap: clamp(9px, 3vw, 15px);
        max-width: none;
        padding: 0;
    }

    .site-nav a {
        font-size: 9px;
        white-space: nowrap;
    }

    .site-nav .nav-cta {
        padding: 7px 9px;
    }

    .hero {
        min-height: 650px;
    }

    .hero-heading {
        font-size: clamp(42px, 12vw, 68px);
    }

    .button-row {
        flex-direction: column;
        gap: 17px;
    }

    .section {
        padding: 70px 23px;
    }

    .about-section,
    .contact-section,
    .franchise-story,
    .faq-section,
    .franchise-inquiry,
    .menu-feature {
        grid-template-columns: 1fr;
    }

    .contact-form input,
    .contact-form textarea {
        font-size: 16px;
    }

    .about-section {
        gap: 35px;
    }

    .about-art {
        min-height: 280px;
    }

    .about-note {
        right: 8px;
    }

    .values-band,
    .steps-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .values-band {
        padding: 50px 25px;
    }

    .featured-section {
        padding-top: 70px;
    }

    .section-heading-row {
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
    }

    .featured-grid,
    .menu-card-grid {
        grid-template-columns: 1fr;
    }

    .featured-card img,
    .menu-card img {
        height: 280px;
    }

    .review-invite {
        padding: 65px 25px;
    }

    .locations-strip {
        align-items: flex-start;
        flex-direction: column;
        padding: 55px 25px;
    }

    .site-footer {
        align-items: center;
        flex-direction: column;
        padding: 32px 20px;
    }

    .footer-nav {
        flex-wrap: wrap;
        order: 0;
        width: auto;
        gap: 14px;
    }

    .site-footer > p {
        order: 1;
    }

    .site-footer small {
        order: 2;
    }

    .inner-hero {
        min-height: 620px;
        padding: 150px 25px 70px;
    }

    .inner-hero::after {
        background: linear-gradient(90deg, rgba(43,31,24,.88), rgba(43,31,24,.56));
    }

    .inner-hero-beans {
        right: -18%;
        bottom: -7%;
        width: 75vw;
        opacity: .25;
    }

    .franchise-hero-image {
        right: -18%;
        bottom: -1%;
        width: 85vw;
        opacity: .34;
    }

    .menu-feature {
        gap: 30px;
        padding: 60px 23px;
    }

    .menu-feature-art {
        min-height: 300px;
    }

    .menu-feature-art > img {
        height: 280px;
    }

    .menu-list-section {
        padding-top: 65px;
        padding-bottom: 70px;
    }

    .franchise-steps {
        padding: 65px 23px;
    }

    .steps-grid {
        gap: 15px;
    }

    .franchise-inquiry {
        padding: 65px 23px;
    }
}

@media (max-width: 360px) {
    .site-header {
        padding-right: 10px;
        padding-left: 10px;
    }

    .site-nav {
        gap: 8px;
    }

    .site-nav a {
        font-size: 8px;
    }

    .site-nav .nav-cta {
        padding-right: 7px;
        padding-left: 7px;
    }

    .hero-content {
        padding-right: 18px;
        padding-left: 18px;
    }

    .section {
        padding-right: 18px;
        padding-left: 18px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }
}
