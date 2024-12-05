export function Profile() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <section className="w-1/2 mx-auto p-6 bg-white shadow-md border-2 border-gray-200 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-lg">
            A
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-gray-500">johndoe@example.com</p>
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1" htmlFor="bio">
            Bio
          </label>
          <textarea
            id="bio"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
            placeholder="Tell us about yourself"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
}
