'use client'

import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { cn } from '../lib/utils'
import { sidebarLinks } from '../constants'
import { usePathname } from 'next/navigation'


const MobileNav = ({ user }: MobileNavProps) => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger>
                <Image
                    src='/icons/hamburger.svg'
                    alt='menu icon'
                    className='cursor-pointer'
                    width={30}
                    height={30}

                />
            </SheetTrigger>
            <SheetContent side="right" className='bg-white border-none'>
                <nav className='flex flex-col gap-4'>
                    <Link href='/'
                        className="cursor-pointer items-center gap-1 flex px-4">
                        <Image
                            src="/icons/logo.svg"
                            width={34}
                            height={34}
                            alt="Horizon"
                            className='size-[24px] max-xl:size-14'
                        />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>

                    </Link>
                    <div className='mobilenav-sheet'>
                        <nav className='flex flex-col h-full gap-6 pt-16 text-white'>
                            {sidebarLinks.map((link) => {
                                const isActive = link.route === pathName || pathName.startsWith(`${link.route}/`);
                                return (
                                    <SheetClose asChild key={link.label}>

                                        <Link
                                            href={link.route}
                                            key={link.label}
                                            className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                        >
                                                <Image
                                                    src={link.imgURL}
                                                    alt={`${link.label} icon`}
                                                    width={20}
                                                    height={20}
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                            <p className={cn('tex-16 font-semibold text-black-2', { '!text-white': isActive })}>{link.label}</p>
                                        </Link>
                                    </SheetClose>


                                )
                            }
                            )}
                        </nav>
                    </div>


                    USER
                </nav>
                FOOTER
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav