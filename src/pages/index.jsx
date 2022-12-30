import Image from 'next/image'
import Head from 'next/head'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SocialLink } from '@/components/SocialLink'
import {
  GitHubIcon,
  LinkedInIcon,
  ExperienceIcon,
  RequestResumeIcon,
  MailIcon,
  LinkIcon,
} from '@/components/Icons'
import logoMetawork from '@/images/logos/metawork.svg'
import logoBentoML from '@/images/logos/bentoml.svg'
import logoPenn from '@/images/logos/penn.svg'
import logoQuan from '@/images/logos/quan.svg'
import logoShopify from '@/images/logos/shopify.svg'
import logoNYC from '@/images/logos/nyc.svg'
import logoRuby from '@/images/logos/ruby.svg'
import logoTwitter from '@/images/logos/twitter.svg'
import logoArc from '@/images/logos/arc.svg'

function ContactInfo() {
  return (
    <div className="mt-6 flex flex-col gap-3">
      <SocialLink href="https://github.com/qu8n" icon={GitHubIcon}>
        GitHub
      </SocialLink>
      <SocialLink href="https://linkedin.com/in/nguyenhq" icon={LinkedInIcon}>
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
        <ExperienceIcon className="h-6 w-6 flex-none" />
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
      <Button
        href="https://drive.google.com/drive/folders/1rVwBOCFGicKq4aJwi_s3pGQi1jgJknaO?usp=sharing"
        variant="secondary"
        className="group mt-6 w-full"
      >
        <RequestResumeIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        Request Resume
      </Button>
    </div>
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
      href: 'https://github.com/qu8n/arc-boost-mindful-media',
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
      href: 'https://github.com/qu8n/tweet-scheduler',
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
      href: 'https://github.com/qu8n/metawork_opsbot',
      label: 'Private GitHub Repo',
    },
    logo: logoRuby,
  },
  {
    name: 'This Personal Website',
    description:
      "Tailwind UI's Spotlight template mod that replaces the multi-page with a minimal one-pager.",
    keywords: 'JavaScript, React, Next.js, Tailwind CSS',
    link: {
      href: 'https://github.com/qu8n/personal-website',
      label: 'GitHub Repo',
    },
    logo: logoQuan,
  },
]

function Projects() {
  return (
    <>
      <div className="mt-10">
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
      </div>
    </>
  )
}

function Description() {
  return (
    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
      I&#39;m Quan Nguyen. I&#39;m a Computer Science student at UPenn in the
      <a
        className={linkStyle}
        href="https://gradadm.seas.upenn.edu/masters/computer-and-information-technology-mcit/"
      >
        MCIT program
      </a>
      . Most recently, I was a
      <a className={linkStyle} href="https://fellowship.mlh.io/">
        Major League Hacking Fellow
      </a>{' '}
      and contributed to
      <a className={linkStyle} href="https://github.com/bentoml/BentoML">
        BentoML
      </a>
      , an open-source framework for operating machine learning models. Before
      this, I worked in various business functions from startups to Fortune 500
      companies.
    </p>
  )
}

const linkStyle =
  'pl-1.5 text-zinc-600/70 hover:text-sky-600/80 dark:text-zinc-300 dark:hover:text-sky-400'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quan Nguyen - Software Engineer</title>
        <meta name="description" />
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
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi there.
            </h1>
            <Description />
            <ContactInfo />
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Projects
          </h1>
          <Projects />
        </div>
      </Container>
    </>
  )
}
