import Breadcrumb from '@/components/Common/Breadcrumb'
import Features from '@/components/Features'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrumb
        pageName="What We Offer"
        description="Empowering businesses with cutting-edge digital solutions. At 3pl Dynamics, we bring your ideas to life with innovation, expertise, and a passion for excellence."
      />
      <Features />
    </div>
  )
}

export default page
