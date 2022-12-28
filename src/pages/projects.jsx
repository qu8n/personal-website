import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoQuan from '@/images/logos/quan.svg'
import logoShopify from '@/images/logos/shopify.svg'
import logoNYC from '@/images/logos/nyc.svg'
import logoRuby from '@/images/logos/ruby.svg'
import logoTwitter from '@/images/logos/twitter.svg'
import logoArc from '@/images/logos/arc.svg'

const projects = [
  {
    name: 'NYC Rent Dashboard',
    description:
      'Dashboard showing the latest historical median rent data in NYC across 5 boroughs and ~200 areas. Data soure: StreetEasy.',
    keywords: 'Streamlit, Python, requests, zipfile, io, pandas, altair',
    link: { href: 'https://nycrent.streamlit.app/', label: 'Streamlit App' },
    logo: logoNYC,
  },
  {
    name: 'Arc Browser Extension',
    description:
      'Boost (browser extension) for the Arc browser that activates a countdown upon entering distracting websites.',
    keywords: 'JavaScript, CSS',
    link: {
      href: 'https://github.com/quanvs/arc-boost-mindful-media',
      label: 'GitHub Repo',
    },
    logo: logoArc,
  },
  {
    name: 'Tweet Scheduler',
    description:
      'Full-stack Ruby on Rails web application that sends out tweets on a scheduled basis.',
    keywords:
      'Ruby, Ruby on Rails, Twitter API, Sidekiq and Redis (background jobs), PostgreSQL, Boostrap',
    link: {
      href: 'https://github.com/quanvs/tweet-scheduler',
      label: 'GitHub Repo',
    },
    logo: logoTwitter,
  },
  {
    name: 'E-Commerce Store',
    description:
      'Online brand selling apparel & accessories with cultural designs. Sold over 1,000 items across 11 countries.',
    keywords:
      'Shopify, JavaScript, CSS, HTML, Liquid (Ruby-based markup language)',
    link: { href: 'https://viettown.simvoly.com/', label: 'Archived Website' },
    logo: logoShopify,
  },
  {
    name: 'Team Trip Automator',
    description:
      'Slack bot paired with full-stack Ruby on Rails application that automated team offsite operations. Built during my time at Metawork.',
    keywords:
      'Ruby, Ruby on Rails, PostgreSQL, Heroku, Slack API, Google Calendar API',
    link: {
      href: 'https://github.com/quanvs/metawork_opsbot',
      label: 'Private GitHub Repo',
    },
    logo: logoRuby,
  },
  {
    name: 'This Personal Website',
    description:
      "Minimal mod of Tailwind UI's Spotlight template that focuses on showcasing projects and articles.",
    keywords: 'JavaScript, React, Next.js, Tailwind CSS',
    link: {
      href: 'https://github.com/quanvs/personal-website',
      label: 'GitHub Repo',
    },
    logo: logoQuan,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Quan Nguyen</title>
        <meta name="description" />
      </Head>
      <SimpleLayout
        title="Projects"
        intro="A collection of my personal and professional projects."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <Card.Keywords>{project.keywords}</Card.Keywords>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-sky-600 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
