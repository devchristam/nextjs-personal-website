import IconLinkedin from './icons/IconLinkedin'
import IconGithub from './icons/IconGithub'

const MyHeader = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center" href="">
              <span className="mx-3 font-bold text-3xl bg-gradient-to-br from-green-500 to bg-green-900 text-transparent bg-clip-text">Chris Tam</span>
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
    </header>
  )
}

export default MyHeader;