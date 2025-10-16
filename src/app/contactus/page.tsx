import React from 'react'
import ConnectForm from './components/ConnectForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Third Eye Creative | Let’s Build Something Brilliant Together',
  description: 'Get in touch with Third Eye Creative, Bangalore. Let’s collaborate on your next app, brand campaign, or media story.',
};

function page() {
  return (
    <div>
      <ConnectForm />
    </div>
  )
}

export default page
