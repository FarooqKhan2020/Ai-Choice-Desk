'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    slug: 'gohighlevel',
    name: 'GoHighLeve',
    logo: '/AI receptionist/images/Go high level.png',
    description: 'Agency CRM with built-in voice and SMS automation.',
    bestFor: 'Agencies',
    price: 'From $97/mo',
    priceValue: 97,
    freePlan: false,
    status: 'Research data',
  },
  {
    slug: 'goodcall',
    name: 'Goodcall',
    logo: '/AI receptionist/images/Good call.png',
    description: 'AI phone agent aimed at local service businesses.',
    bestFor: 'Local services',
    price: 'From $59/mo',
    priceValue: 59,
    freePlan: false,
    status: 'Research data',
  },
  {
    slug: 'smith-ai',
    name: 'Smith.ai',
    logo: '/AI receptionist/images/Smith.png',
    description: 'AI and human reception for complex or high-value calls.',
    bestFor: 'Professional services',
    price: '$97.50/mo',
    priceValue: 97.5,
    freePlan: false,
    status: 'Research data',
  },
  {
    slug: 'synthflow-ai',
    name: 'Synthflow AI',
    logo: '/AI receptionist/images/synth flow.png',
    description: 'No-code voice agents for inbound and outbound calls.',
    bestFor: 'Custom workflows',
    price: 'From $29/mo',
    priceValue: 29,
    freePlan: false,
    status: 'Research data',
  },
];

const useCases = ['All use cases', ...new Set(products.map((p) => p.bestFor))];

const priceRanges = [
  { label: 'All prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $100', min: 50, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const fieldClass =
  'w-full appearance-none rounded-[10px] bg-accent-secondary-light px-4 py-3 text-[14px] text-text-primary outline-none focus:ring-2 focus:ring-brand-primary';

function Chevron({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-text-secondary ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductComparison() {
  const [search, setSearch] = useState('');
  const [useCase, setUseCase] = useState('All use cases');
  const [priceRange, setPriceRange] = useState('All prices');
  const [freePlanOnly, setFreePlanOnly] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');

  const visibleProducts = useMemo(() => {
    const range = priceRanges.find((r) => r.label === priceRange) ?? priceRanges[0];
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      if (query && !`${product.name} ${product.description}`.toLowerCase().includes(query)) {
        return false;
      }
      if (useCase !== 'All use cases' && product.bestFor !== useCase) return false;
      if (product.priceValue < range.min || product.priceValue >= range.max) return false;
      if (freePlanOnly && !product.freePlan) return false;
      return true;
    });

    if (sortBy === 'Price: low to high') {
      return [...filtered].sort((a, b) => a.priceValue - b.priceValue);
    }
    if (sortBy === 'Price: high to low') {
      return [...filtered].sort((a, b) => b.priceValue - a.priceValue);
    }
    if (sortBy === 'Name') {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;
  }, [search, useCase, priceRange, freePlanOnly, sortBy]);

  return (
    <section id="comparison" className="bg-tint-ice py-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="mb-4 text-[12px] font-semibold tracking-[0.12em] text-brand-primary uppercase">
              Product comparison
            </p>
            <h2 className="mb-4 text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary lg:text-[44px]">
              Every AI receptionist we track
            </h2>
            <p className="max-w-[560px] text-[16px] leading-[1.6] text-text-secondary">
              Compare positioning, starting price, free-plan availability, and research
              status. Select a product to view our detailed review.
            </p>
          </div>

          <div className="lg:w-[256px] lg:shrink-0">
            <label
              htmlFor="sort-products"
              className="mb-2 block text-[14px] font-medium text-text-primary"
            >
              Sort products
            </label>
            <div className="relative">
              <select
                id="sort-products"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className={`${fieldClass} pr-10`}
              >
                <option>Featured</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Name</option>
              </select>
              <Chevron />
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="mb-8 rounded-2xl bg-surface p-3">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative lg:flex-[1.4]">
              <svg
                className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-text-secondary"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="7.3" cy="7.3" r="4.8" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Products"
                aria-label="Search products"
                className={`${fieldClass} pl-11`}
              />
            </div>

            <div className="relative lg:flex-1">
              <select
                value={useCase}
                onChange={(event) => setUseCase(event.target.value)}
                aria-label="Filter by use case"
                className={`${fieldClass} pr-10`}
              >
                {useCases.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <Chevron />
            </div>

            <div className="relative lg:flex-1">
              <select
                value={priceRange}
                onChange={(event) => setPriceRange(event.target.value)}
                aria-label="Filter by price"
                className={`${fieldClass} pr-10`}
              >
                {priceRanges.map((range) => (
                  <option key={range.label}>{range.label}</option>
                ))}
              </select>
              <Chevron />
            </div>

            <label className="flex cursor-pointer items-center gap-2.5 rounded-[10px] bg-accent-secondary-light px-4 py-3 lg:w-[150px]">
              <input
                type="checkbox"
                checked={freePlanOnly}
                onChange={(event) => setFreePlanOnly(event.target.checked)}
                className="h-4 w-4 rounded border-input-border accent-brand-primary"
              />
              <span className="text-[14px] text-text-primary">Free plan</span>
            </label>
          </div>
        </div>

        {/* Table header */}
        <div className="hidden rounded-t-xl bg-surface-alt px-6 py-4 lg:grid lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr_0.85fr] lg:gap-4">
          {['Product', 'Best for', 'Starting price', 'Free plan', 'Status', 'Action'].map(
            (heading) => (
              <div
                key={heading}
                className="text-[11px] font-semibold tracking-[0.08em] text-text-secondary uppercase"
              >
                {heading}
              </div>
            )
          )}
        </div>

        {/* Rows */}
        <div>
          {visibleProducts.map((product) => (
            <div
              key={product.slug}
              className="grid grid-cols-1 gap-4 border-b border-divider px-6 py-6 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr_0.85fr] lg:items-center"
            >
              {/* Product */}
              <div className="flex items-start gap-4">
                <Image
                  src={product.logo}
                  alt={`${product.name} logo`}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-[10px] object-contain"
                />
                <div>
                  <h3 className="mb-1 text-[16px] font-bold text-text-primary">
                    {product.name}
                  </h3>
                  <p className="max-w-[260px] text-[13px] leading-[1.5] text-text-secondary">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Best for */}
              <div className="text-[14px] text-text-primary">
                <span className="mr-2 text-text-secondary lg:hidden">Best for:</span>
                {product.bestFor}
              </div>

              {/* Starting price */}
              <div className="text-[14px] font-medium text-text-primary">
                <span className="mr-2 font-normal text-text-secondary lg:hidden">
                  Starting price:
                </span>
                {product.price}
              </div>

              {/* Free plan */}
              <div className="text-[14px] text-text-secondary">
                <span className="mr-2 lg:hidden">Free plan:</span>
                {product.freePlan ? 'Yes' : 'No'}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-brand-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M5.5 8.2l1.7 1.7 3.3-3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] text-text-secondary">{product.status}</span>
              </div>

              {/* Action */}
              <div className="lg:justify-self-start">
                <Link
                  href={`/software/ai-receptionist/${product.slug}`}
                  className="inline-flex items-center justify-center rounded-[10px] border border-card-border bg-surface px-5 py-2.5 text-[13px] font-bold text-text-primary transition-colors hover:border-card-hover-border"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}

          {visibleProducts.length === 0 && (
            <p className="border-b border-divider px-6 py-10 text-center text-[14px] text-text-secondary">
              No products match these filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
