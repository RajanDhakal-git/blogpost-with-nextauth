import { getPostDetails } from "@/libs/actions";


export default function PostForm() {

  

  return (
    <div className="flex  justify-center items-center min-h-screen bg-gray-50">
      <form
        action={ getPostDetails}
        className="w-full max-w-md text-black bg-white shadow-md rounded-2xl p-6 space-y-5 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Create a Post</h2>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"

            placeholder="Enter a title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"

            placeholder="Write something..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
