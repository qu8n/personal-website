import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoMetawork from '@/images/logos/metawork.svg'
import logoBentoML from '@/images/logos/bentoml.svg'
import logoPenn from '@/images/logos/penn.svg'

import logoQuan from '@/images/logos/quan.svg'
import logoShopify from '@/images/logos/shopify.svg'
import logoNYC from '@/images/logos/nyc.svg'
import logoRuby from '@/images/logos/ruby.svg'
import logoTwitter from '@/images/logos/twitter.svg'
import logoArc from '@/images/logos/arc.svg'

function ResumeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-600 dark:text-zinc-200 dark:hover:text-sky-400"
      >
        <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-sky-600" />
        <span className="ml-2">{children}</span>
      </Link>
    </li>
  )
}

function ContactInfo() {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <SocialLink href="https://github.com" icon={GitHubIcon}>
        GitHub
      </SocialLink>
      <SocialLink href="https://linkedin.com" icon={LinkedInIcon}>
        LinkedIn
      </SocialLink>
      <SocialLink href="mailto:quanwnn@gmail.com" icon={MailIcon}>
        Email
      </SocialLink>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Penn Engineering',
      title: 'Admissions Ambassador',
      logo: logoPenn,
      period: 'Spring 2023',
    },
    {
      company: 'BentoML (via Major League Hacking)',
      title: 'Software Engineering Fellow',
      logo: logoBentoML,
      period: 'Fall 2022',
    },
    {
      company: 'Metawork',
      title: 'Startup Operator',
      logo: logoMetawork,
      period: '2021 - 2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-300 p-6 dark:border-zinc-500/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <ResumeIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-500/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Period</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {role.period}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download Full Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Quan Nguyen - Software Engineer</title>
        <meta
          name="description"
          content="I’m Quan, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Container className="mt-8">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Thanks for stopping by.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              I&#39;m a Computer Science student with former experience
              contributing to open-source projects, running an online e-commerce
              business, and working as a finance & analytics professional.
            </p>
            <ContactInfo />
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </Container>
    </>
  )
}

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

function Projects() {
  return (
    <>
      <h1 className="mb-10 mt-10 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Projects
      </h1>
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
    </>
  )
}
