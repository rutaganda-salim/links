import { FiBook } from 'react-icons/fi'
import {
  SiDailydotdev,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  siPeerlist,
  siWhatsapp,
  SiX,
  SiYoutube
} from 'react-icons/si'

import Spotlight from '@/components/spotlight'

import PrimaryLinks from './primary-links'

const links = [
 
  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube',
    url: 'https://www.youtube.com/@BuildandDeploy-c1s'
  },
  {
    icon: <SiPeerlist className='text-zinc-300' />,
    title: 'Peerlist',
    url: 'https://peerlist.io/salim_'
  },
  {
    icon: <SiWhatsapp className='text-zinc-300' />,
    title: 'Whatsapp',
    url: 'https://wa.me/+250728107442'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: 'https://instagram.com/salimnunez01/'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: 'https://github.com/rutaganda-salim'
  },
  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'Discord',
    url: 'https://discord.com/users/salim_008_73292'
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'X',
    url: 'https://x.com/salimnunez01'
  },
  {
    icon: <SiLinkedin className='text-zinc-300' />,
    title: 'Linkedin',
    url: 'https://linkedin.com/in/salimdevi'
  },
  {
    icon: <SiDailydotdev className='text-zinc-300' />,
    title: 'Daily.dev',
    url: 'https://daily.dev/salimrutaganda'
  }
]

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
        <Spotlight className='-top-4 left-56' />
        <h1 className='text-xl font-semibold'>Salim</h1>
        <p className='text-[#a1a1a1]'>Product && Software Engineer</p>
      </div>
      <PrimaryLinks />
      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
