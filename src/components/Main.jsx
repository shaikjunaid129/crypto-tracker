
import { Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'

function Main() {
  console.log("Main page is rendering");
  return (
    <>
      <Navbar />
      <Typography
       variant='h4'
       color = 'primary'>
      What Is Cryptocurrency?
      </Typography>

      <Typography
       variant='body1'
       style={{ padding: '9px 16px' }}>
         Cryptocurrency is decentralized digital money that’s based on blockchain technology.
      You may be familiar with the most popular versions, Bitcoin and Ethereum, but there are
      more than 19,000 different cryptocurrencies in circulation
      </Typography>

      <Typography
       variant='h4'
       color = 'primary'>
      How Does Cryptocurrency Work?

      </Typography>

      <Typography
       variant='body1'
       textAlign = 'center'
       style={{ padding: '9px 16px' }}>
       
         You can use crypto to buy regular goods and services, although most people invest in
        cryptocurrencies as they would in other assets, like stocks or precious metals. While
        cryptocurrency is a novel and exciting asset class, purchasing it can be risky as you 
        must take on a fair amount of research to understand how each system works fully.
      </Typography>

      <Typography
      variant = "body1"
      textAlign = 'center'
      style={{ padding: '9px 16px' }}>
    
        Bitcoin was the first cryptocurrency,first outlined in principle by Satoshi Nakamoto in
        a 2008 paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System.” Nakamoto described
        the project as “an electronic payment system based on cryptographic proof instead of trust.”
        That cryptographic proof comes in the form of transactions that are verified and recorded on
        a blockchain.
      </Typography>

      <Typography
       variant='h4'
       color = 'primary'>
      What Is a Blockchain?

      </Typography>
     
     <Typography variant = "body1"
     style={{ padding: '9px 16px' }}>
     A blockchain is an open, distributed ledger that records transactions in code. In practice, it’s 
     a little like a checkbook that’s distributed across countless computers around the world.
     Transactions are recorded in “blocks” that are then linked together on a “chain” of previous
    cryptocurrency transactions.
     </Typography>

     <Typography variant = "body1" style={{ padding: '9px 16px' }}>
     “Imagine a book where you write down everything you spend money on each day,” says Buchi
      Okoro, CEO and co-founder of African cryptocurrency exchange Quidax. “Each page is similar
      to a block, and the entire book, a group of pages, is a blockchain.”
     </Typography>

     <Typography variant = "body1" style={{ padding: '9px 16px' }}>
     With a blockchain, everyone who uses a cryptocurrency has their own copy of this book to
     create a unified transaction record.  Each new transaction as it happens is logged, and
     every copy of the blockchain is updated simultaneously with the new information, keeping
     all records identical and accurate.
     </Typography>
    </>
  )



}

export default Main