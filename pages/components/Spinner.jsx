import IconSpinner from "./icons/IconSpinner"
const Spinner = () => {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div className="animate-spin h-24 w-24 text-green-700">
        <IconSpinner />
      </div>
    </div>
  )
}

export default Spinner