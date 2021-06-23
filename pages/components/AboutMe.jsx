import IconReact from './icons/IconReact'
import IconVuejs from './icons/IconVuejs'
import IconSass from './icons/IconSass'
import IconNode from './icons/IconNode'
import IconLaravel from './icons/IconLaravel'
import IconGitAlt from './icons/IconGitAlt'
import IconPython from './icons/IconPython'
import IconDatabase from './icons/IconDatabase'

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-gray-800 pattern py-64 transform -skew-y-6 ">
      <div className="max-w-5xl px-6 mx-auto text-center transform skew-y-6">
        <h2 className="text-5xl font-semibold text-white">About Me</h2>
        <p className="text-white text-2xl mt-4">
          I am Chris Tam from Hong Kong, love to learn new technologies about web development and implement it into my work.
        </p>
      </div>
      <div className="max-w-5xl px-6 mx-auto mt-24 text-center transform skew-y-6">
        <h2 className="text-5xl font-semibold text-white"> Skills </h2>
        <div className="text-white text-xl mt-4">
          <div className="flex items-center justify-center mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:grid-cols-8">
              <span className="tooltip hover:text-yellow-200">
                <IconReact cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  React
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconVuejs cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  Vue
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconSass cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  Responsive web design with CSS, Sass, Bootstrap and Tailwindcss  
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconNode cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  NodeJS and Express
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconLaravel cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  Laravel
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconGitAlt cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  Git
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconPython cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  Python
                </span>
              </span>
              <span className="tooltip hover:text-yellow-200">
                <IconDatabase cl="h-24 w-24 fill-current"/>
                <span className='tooltip-text text-white bg-green-800 -mt-6 -ml-6 rounded opacity-80'>
                  MySQL and MongoDB
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe