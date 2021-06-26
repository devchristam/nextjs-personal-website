import IconGithub from './icons/IconGithub'
import Image from 'next/image'

const ProjectCard = (props) => {
   
  const openlink = () => {
    window.open(props?.detail?.url, '_blank');
  }

  const displaytech = () => {
    return props?.detail?.tech.map((obj) => {
      return <span key={obj} className="flex-grow-0 m-1 p-1 text-white bg-green-500 rounded-md">{obj}</span>
    })
  }

  return (
    <div className="max-w-xs w-full">

      <div className="flex items-center justify-center h-56 bg-white overflow-hidden rounded-t-xl shadow-lg relative">
				<Image className="object-cover" src={props?.detail?.img} alt="project image" layout="fill" objectFit="cover" priority="true"/>
      </div>

      <div className="block bg-gray-200 overflow-hidden rounded-b-xl h-56">
        <div className="py-2 px-3 text-center text-sm h-full flex flex-col justify-between">
          <div>
            <p className="text-gray-900 font-bold text-xl">{props?.detail?.title}</p>
            <p className="text-gray-700">{props?.detail?.content}</p>
            <div className="flex flex-wrap max-w">
              {displaytech()}
            </div>
          </div>
          <div>
            <button className="bg-gray-900 text-sm text-white my-2 px-2 py-1 font-semibold rounded-md hover:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none" onClick={openlink} >
              <span className="flex items-center justify-center">
                <IconGithub cl="h-5 w-5 sm:h-6 sm:w-6 fill-current"/>
                <p className="ml-1">
                  Code
                </p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 