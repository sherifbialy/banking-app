import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import BankCard from './BankCard'

const  RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar' >
            <section className='flex flex-col pb-8'>
                <div className='profile-banner' />
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='font-bold text-5xl text-blue-400'>{user.firstName[0]}</span>
                    </div>
                </div>
                <div className='profile-details'>
                    <h1 className='profile-name pl-2'>
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className='profile-email'>{user.email}</p>
                </div>
            </section>

            <section className='banks'>
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'> My banks</h2>
                    <Link href="/" className='flex gap-2'>
                        <Image
                            src='/icons/plus.svg'
                            width={20}
                            height={20}
                            alt='plus'
                        />
                        <h2 className='text-14 text-gray-600 font-semibold'>
                            Add Bank
                        </h2>
                    </Link>
                </div>
                {banks?.length > 0 && (
                <div className='relative flex flex-1 gap-5 items-center justify-center'>
                    <div className='relative z-10'>
                        <BankCard
                            key={banks[0].id}
                            account={banks[0]}
                            userName={`${user.firstName} ${user.lastName}`}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] && (
                        <div className='absolute right-0 top-8 z-0 w-[90%]'>
                            <BankCard
                                key={banks[1].id}
                                account={banks[1]}
                                userName={`${user.firstName} ${user.lastName}`}
                                showBalance={false}
                            />
                        </div>
                    )}
                </div>
                )
            }
            </section>
        </aside>
    )
}

export default RightSidebar