import { AcademicCapIcon, CursorArrowRaysIcon, KeyIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Team work.',
    description:
      'Individual work is important but a good collective takes us to great places.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Lead.',
    description: 'With great power comes great responsibility.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Creativity.',
    description: 'Good ideas create great opportunities.',
    icon: KeyIcon,
  },
]

const Presentation = () => {
    return(
        <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
             <img
              src="perfil.jpg"
              alt="Product screenshot"
              className="w-[30rem] h-[40rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              

              
            />
            <div className="lg:pr-8 lg:pt-4 flex justify-center">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-green-400">Junior Digital Solutions Technician</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Back-end Developer</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Hello, my name is Nathã Wolff and I am a systems developer at Bosch.
                  When I started my career in technology I studied front and back-end but the stack I decided to follow was data and the logic behind the screens
                </p>
                <h1 className="mt-10 text-base font-semibold leading-10 text-green-400 sm:text-2xl">Skills</h1>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-green-500" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    )
}

export default Presentation