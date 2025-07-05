import Head from 'next/head'
import Container from '../components/ui/Container'
import About from '../components/sections/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - Tareeq Al Noor Al ArabiaConstruction</title>
        <meta name="description" content="Learn about Tareeq Al Noor Al ArabiaConstruction's history, mission, and commitment to excellence in construction services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <Container>
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Building excellence since 2008, one project at a time
              </p>
            </div>
          </Container>
        </section>

        <About />

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who lead our construction projects 
                and ensure quality delivery every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Smith',
                  role: 'CEO & Founder',
                  experience: '20+ years',
                  description: 'Licensed general contractor with expertise in commercial and residential construction.'
                },
                {
                  name: 'Sarah Johnson',
                  role: 'Project Manager',
                  experience: '15+ years',
                  description: 'Specializes in large-scale commercial projects and client relationship management.'
                },
                {
                  name: 'Mike Davis',
                  role: 'Lead Contractor',
                  experience: '18+ years',
                  description: 'Expert in residential construction and renovation projects with attention to detail.'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 text-center mb-4">{member.experience}</p>
                  <p className="text-gray-600 text-center text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Quality',
                  description: 'We never compromise on quality, ensuring every project meets the highest standards.'
                },
                {
                  title: 'Integrity',
                  description: 'Honest communication and transparent business practices in all our dealings.'
                },
                {
                  title: 'Innovation',
                  description: 'Embracing new technologies and methods to deliver better construction solutions.'
                },
                {
                  title: 'Safety',
                  description: 'Prioritizing the safety of our workers, clients, and communities in every project.'
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}