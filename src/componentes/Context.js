const features = [
    { name: 'America Projects Management', description: 'Power BI for Bosch Global Service, this project aims to help improve the visualization of data from projects across America under supervision of Gaston' },
    { name: 'Bosch View', description: 'Web platform that aims to help the management of the BOSCH/ETS area manager' },
    { name: 'Smart Tire', description: 'A system consisting of an application and a platform where you can manage users, tires and vehicles. With this system the user can analyze the quality of tires using AI' },
    { name: 'Glina', description: 'An Internacional digital bank focused on social security' }
  ]

const Context = () => {
    return(
        <div className="bg-green-200">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 ">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-gray-900">
            These are some of my most important projects.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-green-600 pt-4">
                <dt className="font-bold text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-900">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 ">
          <img
            src="powerBI.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 h-64"
          />
          <img
            src="boschView.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 h-64"
          />
          <img
            src="smartTire.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 h-64"
          />
          <img
            src="glina.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 h-64"
          />
        </div>
      </div>
    </div>
    )
}

export default Context