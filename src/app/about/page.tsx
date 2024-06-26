import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
   GitHubIcon,
   InstagramIcon,
   LinkedInIcon,
   XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
					   className,
					   href,
					   children,
					   icon: Icon,
					}: {
   className?: string
   href: string
   icon: React.ComponentType<{ className?: string }>
   children: React.ReactNode
}) {
   return (
	 <li className={clsx(className, 'flex')}>
		<Link
		  href={href}
		  className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
		>
		   <Icon
			 className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
		   <span className="ml-4">{children}</span>
		</Link>
	 </li>
   )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
   return (
	 <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
		<path
		  fillRule="evenodd"
		  d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
		/>
	 </svg>
   )
}

export const metadata: Metadata = {
   title: 'About',
   description:
	 'I’m Wasim Said. I live in Sweden, karlstad , where I build projects for fun.',
}

export default function About() {
   return (
	 <Container className="mt-16 sm:mt-32">
		<div
		  className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		   <div className="lg:pl-20">
			  <div className="max-w-xs px-2.5 lg:max-w-none">
				 <Image
				   src={portraitImage}
				   alt=""
				   sizes="(min-width: 1024px) 32rem, 20rem"
				   className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
				 />
			  </div>
		   </div>
		   <div className="lg:order-first lg:row-span-2">
			  <h1
				className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
				 I'm Wasim Said, a passionate problem-solver, student and
				 self-taught full-stack developer
			  </h1>
			  <div
				className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
				 <p>
					My Journey started back in 2018 when i was playing games and
					started Cheating (csgo), yes i know *_* dumb decision but
					that exactly what got me thinking how did it all worked, so
					i started dive deep into this and did my first trainer in C#
					and this spiralled into web development over years with and
					other multiple projects in python, c#, c++ and so on.
				 </p>
				 <p>
					When I encounter a challenge or need a tool, I dive
					headfirst into
					building the solution myself. It's like a superpower, but
					instead
					of a cape, I wear a keyboard!
				 </p>
				 <p>
					One of my current projects is a resume AI site that
					automatically
					gathers IT job listings in Sweden and helps users generate
					personalized cover letters, emails, and resumes. It's my way
					of
					making the job hunt a bit more fun and a lot less stressful.
					After
					all, I'll be needing it myself in the near future!
				 </p>
				 <p>
					I've also worked on a streaming site as a proof of concept,
					which
					was so impressive that it earned me a DMCA takedown notice.
					I
					guess you could say my code was too good to handle! 😄
				 </p>
				 <p>
					Another project I'm excited about is a markdown editor that
					I plan
					to recode from scratch, complete with a plugin system and
					super
					rich features. It's like giving superpowers to your text!
				 </p>
				 <p>
					When I'm not building something new, you might find me
					tinkering
					with new technologies in web development industry (and you
					know
					how fast they change lmao) or diving into one of my many
					other
					small projects. I just can't help myself – I love the thrill
					of
					turning ideas into reality!
				 </p>
			  </div>
		   </div>
		   <div className="lg:pl-20">
			  <ul role="list">
				 <SocialLink href="https://www.instagram.com/vasya0320_"
							 icon={InstagramIcon} className="mt-4">
					Follow on Instagram
				 </SocialLink>
				 <SocialLink href="https://github.com/Shine1i" icon={GitHubIcon}
							 className="mt-4">
					Follow on GitHub
				 </SocialLink>
				 <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
					Follow on LinkedIn
				 </SocialLink>
				 <SocialLink
				   href="mailto:wasimysdev@gmail.com"
				   icon={MailIcon}
				   className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
				 >
					wasimysdev@gmail.com
				 </SocialLink>
			  </ul>
		   </div>
		</div>
	 </Container>
   )
}
