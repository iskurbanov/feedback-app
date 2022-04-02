import React, { useRef } from 'react'
import axios from 'axios'

const PostForm = () => {
  const title = useRef()
  const description = useRef()


  async function handleSubmit(e) {
    e.preventDefault();

    const post = {
      title: title.current.value,
      description: description.current.value
    }

    console.log(post)

    axios.post('https://daa1-142-115-39-32.ngrok.io/api/post', post)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    title.current.value = ''
    description.current.value = ''
  };

  return (
    <div className="bg-gray-100 rounded-md p-4 w-96 flex justify-center flex-col">
      <h2 className="text-center mb-4">Create Post</h2>
      <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
        <div className="bg-white p-2 rounded-md border">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            ref={title}
            className="outline-none px-0 block w-full border-none sm:text-sm pt-1 focus-visible:shadow-none"
            placeholder="Short, descriptive title"
          />
        </div>
        <div className="bg-white p-2 rounded-md border mt-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            type="textarea"
            name="description"
            id="description"
            ref={description}
            className="pb-24 px-0 outline-none border-none w-full sm:text-sm pt-1 focus-visible:shadow-none"
            placeholder="Any additional details"
          />
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-400 transition-colors text-white text-xs font-semibold p-4 rounded-lg mt-4">
          CREATE POST
        </button>
      </form>
    </div>
  )
}


export default PostForm
