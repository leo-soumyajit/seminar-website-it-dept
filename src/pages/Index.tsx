import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ScrollReveal from '@/components/ScrollReveal';
import { content } from '@/data/content';
import cyberSecurityLogo from '@/assets/cyber-security-logo.png';
import hitCampus from '@/assets/hit-campus.jpg';
import speaker1 from '@/assets/speaker-1.jpg';
import speaker2 from '@/assets/speaker-2.jpg';
import speaker3 from '@/assets/speaker-3.jpg';
import speaker4 from '@/assets/speaker-4.jpg';
import { Calendar, MapPin, Users, Mail, Phone, Clock, User, Award, BookOpen, Star, Zap, Shield } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const currentContent = content[language];

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };
  const highlightSpeakerNames = (text: string) => {
    const speakerNames = [
      // English names
      'Dr. Sangram Ray',
      'Prof. Dr. Sankhayan Choudhury', 
      'Mr. Aninda Sankar Sukla',
      'Dr. Debasish Giri',
      'Dr. Arup Kumar Pal',
      'Mr. Tapas Bandyopadhyay',
      'Dr. Dakshina Ranjan Kisku',
      'Mr. Anup Mondal',
      // Bengali names
      'ড. সংগ্রাম রায়',
      'প্রফেসর ড. স্যাংখায়ন চৌধুরী',
      'শ্রী অনিন্দ্য শংকর শুক্লা',
      'ড. দেবাশিস গিরি',
      'ড. অরূপ কুমার পাল',
      'শ্রী তাপস বন্দ্যাপাধ্যায়',
      'ড. দক্ষিণা রঞ্জন কিস্কু',
      'শ্রী অনুপ মণ্ডল'
    ];

    let highlightedText = text;
    speakerNames.forEach(name => {
      const regex = new RegExp(`(${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<mark class="bg-primary/20 text-primary font-bold px-1 rounded">$1</mark>');
    });

    return highlightedText;
  };

  const speakerImages = ["sangramsir.jpeg", "sankasir.jpeg", "anindasir.png", "debasisgiri.jpeg", 
    "arupsir.jpg", "tapassir.png" , "dakshsinasir.jpg", "anupsir.jpeg"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center text-white pt-24 md:pt-20 pb-8 md:pb-0" style={{ background: 'linear-gradient(90deg, rgba(28, 178, 237, 1) 0%, rgba(51, 123, 212, 1) 50%, rgba(255, 255, 255, 1) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                {/* College Logos */}
                <div className="flex items-center space-x-6 mb-8">
                  <img 
                    src="logo1.png"
                    alt="Cyber Security Logo" 
                    className="h-16 w-16" 
                  />
                  <img 
                    src="logo2.png"
                    alt="HIT Logo" 
                    className="h-16 w-16" 
                  />
                </div>

                <div className="space-y-6">
                  <h1 className={`text-4xl md:text-6xl font-bold leading-tight text-black ${language === 'bn' ? 'font-bengali' : 'font-playfair'}`}>
                    {currentContent.title}
                  </h1>
                  <p className={`text-xl md:text-2xl text-black font-medium ${language === 'bn' ? 'font-bengali' : 'font-inter'}`}>
                    {currentContent.subtitle}
                  </p>
                  <p className={`text-lg text-black ${language === 'bn' ? 'font-bengali font-medium' : 'font-space'}`}>
                    {currentContent.organizedBy}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-3 glass-morphism hover-lift">
                    <Calendar className="w-5 h-5 mr-2" />
                    10-11 September 2025
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-3 glass-morphism hover-lift">
                    <MapPin className="w-5 h-5 mr-2" />
                    Haldia Institute of Technology
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-3 glass-morphism hover-lift">
                    <Users className="w-5 h-5 mr-2" />
                    Free Registration
                  </Badge>
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-elegant animate-glow"
                    onClick={() => window.open('https://atalacademy.aicte.gov.in/signup', '_blank')}
                  >
                    {language === 'en' ? 'Register Now' : 'এখনই নিবন্ধন করুন'}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-smooth"
                    onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {language === 'en' ? 'View Schedule' : 'সময়সূচি দেখুন'}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side - College Image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant hover-lift">
                  <img 
                    src="Hithaldia.jpg"
                    alt="HIT Campus" 
                    className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Haldia Institute of Technology
                    </h3>
                    <p className="text-white/80">
                      Leading Technical Education Excellence
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full animate-float glass-morphism flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-float glass-morphism flex items-center justify-center" style={{ animationDelay: '1s' }}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

{/* Organizers Section */}
<section id="organizers" className="min-h-screen py-20 gradient-section">
  <div className="container mx-auto px-4">
    <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold text-gradient mb-4 ${language === 'bn' ? 'font-bengali' : 'font-playfair'}`}>
          {language === 'en' ? 'Organizers & Leadership' : 'আয়োজক ও নেতৃত্ব'}
        </h2>
        <p className={`text-muted-foreground text-lg max-w-2xl mx-auto ${language === 'bn' ? 'font-bengali font-medium' : 'font-inter'}`}>
          {language === 'en' 
            ? 'Meet the distinguished leaders and organizers behind this prestigious seminar'
            : 'এই মর্যাদাপূর্ণ সেমিনারের পিছনে বিশিষ্ট নেতৃবৃন্দ ও আয়োজকদের সাথে পরিচিত হন'
          }
        </p>
      </div>
    </ScrollReveal>

    <div className="max-w-6xl mx-auto">

      {/* Chief Patron single card */}
      <ScrollReveal direction="left" delay={100}>
        <Card className="gradient-card shadow-card hover-lift transition-smooth group mb-16 max-w-lg mx-auto">
          <CardContent className="p-8 text-center relative overflow-hidden">
            <div className="relative z-10">
              <Award className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
              <h3 className="text-xl font-bold text-primary mb-3 font-space">
                {currentContent.chiefPatron.title}
              </h3>
              <h4 className="font-bold mb-3 text-lg font-inter">{currentContent.chiefPatron.name}</h4>
              <p className="text-muted-foreground font-inter">
                {currentContent.chiefPatron.designation}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10 transition-transform group-hover:scale-150"></div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Patrons heading */}
      <ScrollReveal delay={200}>
        <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
          {currentContent.patrons.title}
        </h3>
      </ScrollReveal>

      {/* Patrons grid 2 columns */}
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {currentContent.patrons.list.map((patron, index) => (
          <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={300 + index * 100}>
            <Card className="gradient-card shadow-card hover-lift transition-smooth group">
              <CardContent className="p-6 relative overflow-hidden text-center">
                <div className="relative z-10">
                  <Star className="w-8 h-8 text-primary mb-3 mx-auto" />
                  <h4 className="font-bold mb-2 text-lg">{patron.name}</h4>
                  <p className="text-muted-foreground">{patron.designation}</p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-full transition-transform group-hover:scale-150"></div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* Coordinator & Co-Coordinator side by side */}
<div className="flex flex-wrap justify-center gap-8 mb-16">
  <ScrollReveal direction="up" delay={400}>
    <Card className="gradient-card shadow-card hover-lift transition-smooth group max-w-lg">
      <CardContent className="p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <User 
            className="w-16 h-16 text-accent mx-auto mb-6 animate-float" 
            style={{ animationDelay: '0.5s' }} 
          />
          <h3 className="text-xl font-bold text-accent mb-3">
            {currentContent.coordinator.title}
          </h3>
          <h4 className="font-bold mb-3 text-lg">{currentContent.coordinator.name}</h4>
          <p className="text-muted-foreground">{currentContent.coordinator.designation}</p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full 
                        -translate-y-10 translate-x-10 transition-transform group-hover:scale-150"></div>
      </CardContent>
    </Card>
  </ScrollReveal>

  <ScrollReveal direction="right" delay={500}>
    <Card className="gradient-card shadow-card hover-lift transition-smooth group max-w-lg">
      <CardContent className="p-8 text-center relative overflow-hidden">
        <div className="relative z-10">
          <User 
            className="w-16 h-16 text-accent mx-auto mb-6 animate-float" 
            style={{ animationDelay: '1s' }} 
          />
          <h3 className="text-xl font-bold text-accent mb-3">
            {currentContent.coCoordinator.title}
          </h3>
          <h4 className="font-bold mb-3 text-lg">{currentContent.coCoordinator.name}</h4>
          <p className="text-muted-foreground">{currentContent.coCoordinator.designation}</p>
        </div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full 
                        -translate-y-10 translate-x-10 transition-transform group-hover:scale-150"></div>
      </CardContent>
    </Card>
  </ScrollReveal>
</div>


      {/* Organizing Committee unchanged */}
      <ScrollReveal delay={600}>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
            {currentContent.organizingCommittee.title}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentContent.organizingCommittee.list.map((member, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={700 + index * 50}
              >
                <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    <div className="relative z-10">
                      <User className="w-10 h-10 text-accent mx-auto mb-3 animate-float" />
                      <h4 className="font-bold text-lg">{member}</h4>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-accent/5 rounded-full transition-transform group-hover:scale-150"></div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </div>
  </div>
</section>



      {/* Speakers Section */}
      <section id="speakers" className="min-h-screen py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-playfair">
                {currentContent.speakers.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
                {language === 'en' 
                  ? 'Distinguished experts sharing cutting-edge insights in cybersecurity and technology'
                  : 'সাইবার নিরাপত্তা ও প্রযুক্তিতে অন্তর্দৃষ্টি ভাগ করে নিচ্ছেন বিশিষ্ট বিশেষজ্ঞরা'
                }
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentContent.speakers.list.map((speaker, index) => (
              <ScrollReveal key={index} direction="scale" delay={100 + index * 100}>
                <Card className="gradient-card shadow-card hover-lift transition-smooth group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={speakerImages[index % speakerImages.length]} 
                        alt={speaker}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <BookOpen className="w-2 h-1 text-primary mb-2" />
                          <p className="font-medium text-sm text-gray-900">Expert Speaker</p>
                        </div> */}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors font-space">
                        {speaker}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="min-h-screen py-20 gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-playfair">
                {currentContent.schedule.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
                {language === 'en' 
                  ? 'Comprehensive program schedule for both days of the seminar'
                  : 'সেমিনারের উভয় দিনের জন্য বিস্তৃত কর্মসূচির সময়সূচি'
                }
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 */}
            <ScrollReveal direction="left">
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-8 text-primary text-center">
                      {currentContent.schedule.day1.title}
                    </h3>
                    <div className="space-y-6">
                      {currentContent.schedule.day1.sessions.map((session, index) => (
                        <div key={index} className="border-l-4 border-primary pl-6 py-3 hover:bg-primary/5 rounded-r-lg transition-colors">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-primary mr-3" />
                            <span className="font-bold text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">{session.time}</span>
                          </div>
                          <h4 className="font-bold mb-2 text-lg" dangerouslySetInnerHTML={{ __html: highlightSpeakerNames(session.topic) }}></h4>
                          <p className="text-muted-foreground">{session.speaker}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Day 2 */}
            <ScrollReveal direction="right">
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-accent/10 p-4 rounded-full">
                        <Calendar className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-8 text-accent text-center">
                      {currentContent.schedule.day2.title}
                    </h3>
                    <div className="space-y-6">
                      {currentContent.schedule.day2.sessions.map((session, index) => (
                        <div key={index} className="border-l-4 border-accent pl-6 py-3 hover:bg-accent/5 rounded-r-lg transition-colors">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-accent mr-3" />
                            <span className="font-bold text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full">{session.time}</span>
                          </div>
                          <h4 className="font-bold mb-2 text-lg" dangerouslySetInnerHTML={{ __html: highlightSpeakerNames(session.topic) }}></h4>
                          <p className="text-muted-foreground">{session.speaker}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Registration & Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Seminar Details */}
            <ScrollReveal direction="left">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {currentContent.seminarDetails.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <p className="text-sm font-medium">{currentContent.seminarDetails.registrationLink}</p>
                    </div>
                    <p className="text-green-600 font-medium">{currentContent.seminarDetails.registrationFree}</p>
                    <p className="text-sm">{currentContent.seminarDetails.deadline}</p>
                    <p className="text-sm">{currentContent.seminarDetails.mode}</p>
                    <p className="text-sm">{currentContent.seminarDetails.language}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Date & Venue */}
            <ScrollReveal direction="right">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {currentContent.dateVenue.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-primary mr-3" />
                      <span>{currentContent.dateVenue.schedule}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                      <span>{currentContent.dateVenue.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Purpose & Outcomes */}
<section className="py-16 gradient-section">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <ScrollReveal direction="left">
        <Card className="gradient-card shadow-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {currentContent.purpose.title}
            </h3>
            <p className="text-sm leading-relaxed text-justify">
              {currentContent.purpose.description}
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>

      <ScrollReveal direction="right">
        <Card className="gradient-card shadow-card">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              {currentContent.outcomes.title}
            </h3>
            <p className="text-sm leading-relaxed text-justify">
              {currentContent.outcomes.description}
            </p>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  </div>
</section>

{/* Institution Description */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <ScrollReveal>
      <Card className="max-w-4xl mx-auto gradient-card shadow-card">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-primary text-center">
            {currentContent.institutionDescription.title}
          </h3>
          <p className="text-sm leading-relaxed text-justify">
            {currentContent.institutionDescription.description}
          </p>
        </CardContent>
      </Card>
    </ScrollReveal>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-primary">
                  {currentContent.contact.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                  {language === 'en' 
                    ? 'Connect with us for inquiries, registration assistance, or additional information about the seminar.'
                    : 'অনুসন্ধান, নিবন্ধন সহায়তা বা সেমিনার সম্পর্কে অতিরিক্ত তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।'
                  }
                </p>
              </div>
              
              {/* Single column layout on mobile, two columns on larger screens */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                
                {/* Contact Information Cards */}
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-1 gap-4">
                    
                    {/* Email Card */}
                    <ScrollReveal direction="left" delay={100}>
                      <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                        <CardContent className="p-4 md:p-6 text-center relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                              <Mail className="w-6 h-6 text-primary animate-float" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">
                              Email Address
                            </h3>
                            <p className="text-muted-foreground mb-3 text-sm">
                              Send us your questions and we'll respond promptly
                            </p>
                            <div className="space-y-1">
                              <a 
                                href="mailto:soumen.paul@hithaldia.in" 
                                className="block text-sm font-medium text-primary hover:text-primary/80 transition-colors break-all"
                              >
                                soumen.paul@hithaldia.in
                              </a>
                              <a 
                                href="mailto:ghoshmoumita06@gmail.com" 
                                className="block text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                              >
                                ghoshmoumita06@gmail.com
                              </a>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -translate-y-8 translate-x-8 transition-transform group-hover:scale-150"></div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>

                    {/* Phone Card */}
                    <ScrollReveal direction="left" delay={200}>
                      <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                        <CardContent className="p-4 md:p-6 text-center relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="bg-accent/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                              <Phone className="w-6 h-6 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
                            </div>
                            <h3 className="text-lg font-bold text-accent mb-2">
                              Phone Number
                            </h3>
                            <p className="text-muted-foreground mb-3 text-sm">
                              Call us for immediate assistance and support
                            </p>
                            <div className="space-y-1">
                              <a 
                                href="tel:+919433366493" 
                                className="block text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                              >
                                +91 9433366493
                              </a>
                              <a 
                                href="tel:+916294520107" 
                                className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                              >
                                +91 6294520107
                              </a>
                            </div>
                          </div>
                          <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-full -translate-y-8 translate-x-8 transition-transform group-hover:scale-150"></div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>

                    {/* Location Card */}
                    <ScrollReveal direction="left" delay={300}>
                      <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                        <CardContent className="p-4 md:p-6 text-center relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="bg-secondary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                              <MapPin className="w-6 h-6 text-secondary animate-float" style={{ animationDelay: '1s' }} />
                            </div>
                            <h3 className="text-lg font-bold text-secondary mb-2">
                              Location
                            </h3>
                            <p className="text-muted-foreground mb-3 text-sm">
                              Visit us at our campus for in-person assistance
                            </p>
                            <address className="text-sm text-muted-foreground not-italic font-medium">
                              Haldia Institute of Technology
                            </address>
                          </div>
                          <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 rounded-full -translate-y-8 translate-x-8 transition-transform group-hover:scale-150"></div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </div>
                </div>

                {/* Contact Form - Full width on mobile */}
                <ScrollReveal delay={400}>
                  <div className="order-1 lg:order-2">
                    <Card className="gradient-card shadow-card h-full">
                      <CardContent className="p-4 md:p-6 lg:p-8 h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gradient">
                          Send us a Message
                        </h3>
                        <form action="https://formspree.io/f/mdkdjdwn" method="POST" className="space-y-4 h-full flex flex-col">
                          
                          <div className="flex-1 space-y-4">
                            {/* Name Field */}
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Name *
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm md:text-base"
                                placeholder="Your full name"
                              />
                            </div>

                            {/* Email Field */}
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email *
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm md:text-base"
                                placeholder="your.email@example.com"
                              />
                            </div>

                            {/* Subject Field */}
                            <div>
                              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject *
                              </label>
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm md:text-base"
                                placeholder="Subject of your message"
                              />
                            </div>

                            {/* Message Field */}
                            <div className="flex-1">
                              <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message *
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className="w-full h-32 md:h-40 px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-sm md:text-base"
                                placeholder="Your message here..."
                                required
                              ></textarea>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="pt-4">
                            <Button
                              type="submit"
                              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 md:py-4 rounded-lg font-medium transition-colors shadow-elegant text-sm md:text-base"
                            >
                              Send Message
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="text-center mt-8 md:mt-12">
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold shadow-elegant hover-scale w-full sm:w-auto"
                    onClick={() => window.open('https://atalacademy.aicte.gov.in/signup', '_blank')}
                  >
                    {language === 'en' ? 'Register Now' : 'এখনই নিবন্ধন করুন'}
                  </Button>
                  
                  <div className="text-sm text-muted-foreground text-center px-4">
                    {language === 'en' 
                      ? 'Or contact us directly for personalized assistance'
                      : 'অথবা ব্যক্তিগত সহায়তার জন্য সরাসরি আমাদের সাথে যোগাযোগ করুন'
                    }
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Institution Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <img src={"logo1.png"} alt="HIT Logo" className="h-10 w-10" />
                <div>
                  <h3 className="font-bold text-foreground">
                    {language === 'en' ? 'Department of Information Technology' : 'তথ্য প্রযুক্তি বিভাগ'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Haldia Institute of Technology' : 'হলদিয়া ইনস্টিটিউট অফ টেকনোলজি'}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
                {language === 'en' 
                  ? 'Empowering students with cutting-edge technology and innovative learning experiences.'
                  : 'অত্যাধুনিক প্রযুক্তি এবং উদ্ভাবনী শিক্ষার অভিজ্ঞতার মাধ্যমে শিক্ষার্থীদের ক্ষমতায়ন।'
                }
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4">
                {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
              </h4>
              <div className="space-y-2">
                <a href="#home" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Home' : 'হোম'}
                </a>
                <a href="#speakers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Speakers' : 'বক্তাগণ'}
                </a>
                <a href="#schedule" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Schedule' : 'সময়সূচী'}
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Contact' : 'যোগাযোগ'}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-foreground mb-4">
                {language === 'en' ? 'Contact Information' : 'যোগাযোগের তথ্য'}
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 soumen.paul@hithaldia.in</p>
                <p>📞 +91 94333 66493</p>
                <p>📍 {language === 'en' ? 'Haldia, West Bengal, India' : 'হলদিয়া, পশ্চিমবঙ্গ, ভারত'}</p>
              </div>
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2025 {language === 'en' ? 'Department of Information Technology, HIT Haldia' : 'তথ্য প্রযুক্তি বিভাগ, এইচআইটি হলদিয়া'}. {language === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {language === 'en' ? 'Terms of Service' : 'সেবার শর্তাবলী'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
