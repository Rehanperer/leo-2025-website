"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ChevronDown, ChevronRight } from 'lucide-react';

export type PillNavItem = {
    label: string;
    href: string;
    ariaLabel?: string;
    items?: PillNavItem[];
};

export interface PillNavProps {
    logo: string;
    logoAlt?: string;
    items: PillNavItem[];
    activeHref?: string;
    className?: string;
    ease?: string;
    baseColor?: string;
    pillColor?: string;
    hoveredPillTextColor?: string;
    pillTextColor?: string;
    onMobileMenuClick?: () => void;
    initialLoadAnimation?: boolean;
}

const Dropdown = ({ items, depth = 0 }: { items: PillNavItem[], depth?: number }) => {
    return (
        <ul className={`
            absolute top-full left-0 pt-4 w-56
            opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible
            transition-all duration-200 ease-out z-[9999]
            ${depth > 0 ? 'top-0 left-full pt-0 ml-2' : ''}
        `}>
            <div className="bg-[#1a1a1a] rounded-xl shadow-xl py-2 border border-white/10">
                {items.map((subItem, index) => (
                    <li key={index} className="relative group/submenu px-1">
                        <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                            {subItem.label}
                            {subItem.items && <ChevronRight className="w-4 h-4 ml-2 text-gray-500" />}
                        </Link>
                        {/* Nested Dropdown */}
                        {subItem.items && (
                            <ul className={`
                                absolute top-0 left-full ml-1 w-48 pt-0
                                opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible
                                transition-all duration-200 ease-out z-[9999]
                            `}>
                                <div className="bg-[#1a1a1a] rounded-xl shadow-xl py-2 border border-white/10">
                                    {subItem.items.map((nestedItem, nestedIndex) => (
                                        <li key={nestedIndex} className="relative group/submenu-deep px-1">
                                            <Link
                                                href={nestedItem.href}
                                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                {nestedItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        )}
                    </li>
                ))}
            </div>
        </ul>
    );
};

const PillNav: React.FC<PillNavProps> = ({
    logo,
    logoAlt = 'Logo',
    items,
    activeHref,
    className = '',
    ease = 'power3.easeOut',
    baseColor = '#fff',
    pillColor = '#060010',
    hoveredPillTextColor = '#060010',
    pillTextColor,
    onMobileMenuClick,
    initialLoadAnimation = true
}) => {
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
    const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
    const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
    const logoImgRef = useRef<HTMLImageElement | null>(null);
    const logoTweenRef = useRef<gsap.core.Tween | null>(null);
    const hamburgerRef = useRef<HTMLButtonElement | null>(null);
    const mobileMenuRef = useRef<HTMLDivElement | null>(null);
    const navItemsRef = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

    useEffect(() => {
        // Force overflow visible immediately to debounce any animation glitches
        if (navItemsRef.current) {
            navItemsRef.current.style.overflow = 'visible';
        }

        const layout = () => {
            circleRefs.current.forEach(circle => {
                if (!circle?.parentElement) return;

                // The circle is inside the Link/a tag, which is the immediate parent
                const pill = circle.parentElement as HTMLElement;
                const rect = pill.getBoundingClientRect();
                const { width: w, height: h } = rect;
                const R = ((w * w) / 4 + h * h) / (2 * h);
                const D = Math.ceil(2 * R) + 2;
                const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
                const originY = D - delta;

                circle.style.width = `${D}px`;
                circle.style.height = `${D}px`;
                circle.style.bottom = `-${delta}px`;

                gsap.set(circle, {
                    xPercent: -50,
                    scale: 0,
                    transformOrigin: `50% ${originY}px`
                });

                const label = pill.querySelector<HTMLElement>('.pill-label');
                const white = pill.querySelector<HTMLElement>('.pill-label-hover');

                if (label) gsap.set(label, { y: 0 });
                if (white) gsap.set(white, { y: h + 12, opacity: 0 });

                const index = circleRefs.current.indexOf(circle);
                if (index === -1) return;

                tlRefs.current[index]?.kill();
                const tl = gsap.timeline({ paused: true });

                tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: 'auto' }, 0);

                if (label) {
                    tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: 'auto' }, 0);
                }

                if (white) {
                    gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
                    tl.to(white, { y: 0, opacity: 1, duration: 2, ease, overwrite: 'auto' }, 0);
                }

                tlRefs.current[index] = tl;
            });
        };

        layout();

        const onResize = () => layout();
        window.addEventListener('resize', onResize);

        if (document.fonts) {
            document.fonts.ready.then(layout).catch(() => { });
        }

        const menu = mobileMenuRef.current;
        if (menu) {
            gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 });
        }

        if (initialLoadAnimation) {
            const logo = logoRef.current;
            const navItems = navItemsRef.current;

            if (logo) {
                gsap.set(logo, { scale: 0 });
                gsap.to(logo, {
                    scale: 1,
                    duration: 0.6,
                    ease
                });
            }

            if (navItems) {
                gsap.set(navItems, { width: 0, overflow: 'hidden' });
                gsap.to(navItems, {
                    width: 'auto',
                    duration: 0.6,
                    ease,
                    onComplete: () => {
                        gsap.set(navItems, { overflow: 'visible' });
                    }
                });
            }
        } else {
            // Assume visible if no animation
            if (navItemsRef.current) {
                navItemsRef.current.style.overflow = 'visible';
            }
        }

        return () => window.removeEventListener('resize', onResize);
    }, [items, ease, initialLoadAnimation]);

    const handleEnter = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLeave = (i: number) => {
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const handleLogoEnter = () => {
        const img = logoImgRef.current;
        if (!img) return;
        logoTweenRef.current?.kill();
        gsap.set(img, { rotate: 0 });
        logoTweenRef.current = gsap.to(img, {
            rotate: 360,
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };

    const toggleMobileMenu = () => {
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);

        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;

        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
            } else {
                gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
                gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
            }
        }

        if (menu) {
            if (newState) {
                gsap.set(menu, { visibility: 'visible' });
                gsap.fromTo(
                    menu,
                    { opacity: 0, y: 10, scaleY: 1 },
                    {
                        opacity: 1,
                        y: 0,
                        scaleY: 1,
                        duration: 0.3,
                        ease,
                        transformOrigin: 'top center'
                    }
                );
            } else {
                gsap.to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: () => {
                        gsap.set(menu, { visibility: 'hidden' });
                    }
                });
            }
        }

        onMobileMenuClick?.();
    };

    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor,
        ['--nav-h']: '60px',
        ['--logo']: '50px',
        ['--pill-pad-x']: '24px',
        ['--pill-gap']: '5px'
    } as React.CSSProperties;

    return (
        <div className="absolute top-[1em] z-[1000] w-full left-0 md:w-auto md:left-auto md:right-auto md:ml-4">
            <nav
                className={`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${className} rounded-full`}
                aria-label="Primary"
                style={cssVars}
            >
                <Link
                    href={items?.[0]?.href || '/'}
                    aria-label="Home"
                    onMouseEnter={handleLogoEnter}
                    role="menuitem"
                    ref={el => {
                        logoRef.current = el;
                    }}
                    className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
                    style={{
                        width: 'var(--nav-h)',
                        height: 'var(--nav-h)',
                        background: 'var(--base, #000)'
                    }}
                >
                    <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-contain block" />
                </Link>

                {/* Desktop Nav Items */}
                <div
                    ref={navItemsRef}
                    className="relative items-center rounded-full hidden md:flex ml-2"
                    style={{
                        height: 'var(--nav-h)',
                        background: 'var(--base, #000)'
                    }}
                >
                    <ul
                        role="menubar"
                        className="list-none flex items-stretch m-0 p-[5px] h-full"
                        style={{ gap: 'var(--pill-gap)' }}
                    >
                        {items.map((item, i) => {
                            const isActive = activeHref === item.href;

                            const pillStyle: React.CSSProperties = {
                                background: 'var(--pill-bg, #fff)',
                                color: 'var(--pill-text, var(--base, #000))',
                                paddingLeft: 'var(--pill-pad-x)',
                                paddingRight: 'var(--pill-pad-x)'
                            };

                            // Reusable Content for the Pill
                            const PillContent = (
                                <>
                                    <span
                                        className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                                        style={{
                                            background: 'var(--base, #000)',
                                            willChange: 'transform'
                                        }}
                                        aria-hidden="true"
                                        ref={el => {
                                            circleRefs.current[i] = el;
                                        }}
                                    />
                                    <span className="label-stack relative inline-block leading-[1] z-[2] flex items-center gap-1">
                                        <span
                                            className="pill-label relative z-[2] inline-block leading-[1] flex items-center gap-1"
                                            style={{ willChange: 'transform' }}
                                        >
                                            {item.label}
                                            {item.items && <ChevronDown className="w-3 h-3 ml-1" />}
                                        </span>
                                        <span
                                            className="pill-label-hover absolute left-0 top-0 z-[3] inline-block flex items-center gap-1"
                                            style={{
                                                color: 'var(--hover-text, #fff)',
                                                willChange: 'transform, opacity'
                                            }}
                                            aria-hidden="true"
                                        >
                                            {item.label}
                                            {item.items && <ChevronDown className="w-3 h-3 ml-1" />}
                                        </span>
                                    </span>
                                    {isActive && (
                                        <span
                                            className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                                            style={{ background: 'var(--base, #000)' }}
                                            aria-hidden="true"
                                        />
                                    )}
                                </>
                            );

                            const basePillClasses =
                                'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[14px] leading-[0] uppercase tracking-[1px] whitespace-nowrap cursor-pointer px-0';

                            return (
                                <li key={item.href} role="none" className="flex h-full relative group/menu">
                                    {/* The Main Pill Link/Trigger */}
                                    <Link
                                        role="menuitem"
                                        href={item.href}
                                        className={basePillClasses}
                                        style={pillStyle}
                                        aria-label={item.ariaLabel || item.label}
                                        onMouseEnter={() => handleEnter(i)}
                                        onMouseLeave={() => handleLeave(i)}
                                    >
                                        {PillContent}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.items && <Dropdown items={item.items} />}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Mobile Hamburger */}
                <button
                    ref={hamburgerRef}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                    className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
                    style={{
                        width: 'var(--nav-h)',
                        height: 'var(--nav-h)',
                        background: 'var(--base, #000)'
                    }}
                >
                    <span
                        className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ background: 'var(--pill-bg, #fff)' }}
                    />
                    <span
                        className="hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{ background: 'var(--pill-bg, #fff)' }}
                    />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="md:hidden absolute top-[4.5em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top"
                style={{
                    ...cssVars,
                    background: 'var(--base, #f0f0f0)'
                }}
            >
                <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
                    {items.map(item => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                style={{
                                    background: 'var(--pill-bg, #fff)',
                                    color: 'var(--pill-text, #fff)'
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>

                            {/* Simple mobile nested support */}
                            {item.items && item.items.map(sub => (
                                <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className="block py-2 px-8 text-sm font-medium opacity-80"
                                    style={{ color: 'var(--pill-text, #fff)' }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    - {sub.label}
                                </Link>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PillNav;
