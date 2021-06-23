import IconLinkedin from './icons/IconLinkedin'
import IconGithub from './icons/IconGithub'
import IconEnvelope from './icons/IconEnvelope'

const MyFooter = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center mx-2 text-gray-800">
              <IconEnvelope cl="h-5 w-5 sm:h-6 sm:w-6 fill-current"/>
              <p className="ml-1">
                devchristam@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center mx-2">
            <a className="flex items-center mx-2 text-gray-800 hover:text-green-700" href="https://www.linkedin.com/in/devchristam/" target="_blank" rel="noreferrer">
              <IconLinkedin cl="h-5 w-5 sm:h-6 sm:w-6 fill-current"/>
            </a>
            <a className="flex items-center mx-2 text-gray-800 hover:text-green-700" href="https://github.com/devchristam" target="_blank" rel="noreferrer">
              <IconGithub cl="h-5 w-5 sm:h-6 sm:w-6 fill-current"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MyFooter