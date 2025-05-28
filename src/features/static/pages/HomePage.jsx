import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import IntroSection from '../components/IntroSection'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import CompanyContentSection from '../components/CompanyContentSection'


const HomePage = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <IntroSection/>
    <CompanyContentSection/>
    <FeatureSection/>
    <Footer/>
    </>
  )
}

export default HomePage