import React from 'react'
import { formatAmount } from '../lib/utils'
import CountUp from 'react-countup/build/CountUp'
import AnimatedCounter from './AnimatedCounter'
import DonutChart from './DonutChart'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DonutChart accounts={accounts}/>
        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                {totalBanks} Bank Accounts
            </h2>
            <div className='flex flex-col gap-6'>
            <p className='total-balance-label'>
                    Total Current Balance
            </p>
            <div className='total-balance-amount flex-center gap-2'>
            
                <AnimatedCounter 
                        amount={totalCurrentBalance}/>
            </div>
                
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox