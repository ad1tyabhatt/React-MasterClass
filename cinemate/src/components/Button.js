export const Button = ({children}) => {
  return (
    <button className="w-64 text-xl text-white bg-gradient-to-r from-red-500 via-red-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">{children}</button>
  )
}