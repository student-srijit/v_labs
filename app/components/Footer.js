import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About Us</h2>
        <ul className="text-gray-600 dark:text-gray-300">
          <li className="mb-2">
            <a href="#" className="hover:underline">Overview</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Mission & Vision</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Government Leadership</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Reports & Publications</a>
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Citizen Services</h2>
        <ul className="text-gray-600 dark:text-gray-300">
          <li className="mb-2">
            <a href="#" className="hover:underline">Online Services</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Forms & Applications</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Contact Us</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Feedback & Suggestions</a>
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal Information</h2>
        <ul className="text-gray-600 dark:text-gray-300">
          <li className="mb-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Terms of Service</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Accessibility</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">Cookie Policy</a>
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 2c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4m0 2H8v12h4V4z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm3.99 16.5h-2.58c-.2 0-.38-.15-.41-.35l-.45-3.22c-.03-.19.09-.35.28-.39l1.99-.29c.18-.03.35.09.39.28l.25 1.99c.04.19-.09.37-.28.41zm-2.24-3.96l-.42 3.02h2.53l.4-3.02h-2.51zm-2.57-1.09c-.11-.06-.23-.11-.35-.17-.34-.18-.67-.38-1-.6-.1-.05-.19-.1-.28-.16-.3-.18-.56-.38-.83-.59-.35-.23-.67-.48-.98-.74-.07-.06-.15-.13-.23-.2-.34-.3-.68-.61-.99-.94-.3-.34-.59-.7-.87-1.08-.18-.25-.37-.51-.55-.78-.16-.23-.34-.48-.5-.72-.29-.42-.57-.85-.85-1.29-.39-.56-.77-1.12-1.15-1.69-.4-.63-.81-1.27-1.21-1.92-.23-.34-.47-.68-.71-1.02-.07-.1-.14-.2-.21-.31-.4-.55-.79-1.1-1.18-1.66-.31-.48-.64-.94-.97-1.42-.29-.43-.58-.86-.87-1.29-.14-.2-.29-.39-.43-.59-.39-.6-.78-1.21-1.18-1.81.43-.17.86-.35 1.29-.53.5-.29.99-.58 1.48-.88.29-.17.58-.34.87-.51-.67.63-1.34 1.27-2 1.9.2.27.39.56.59.84.63.77 1.26 1.55 1.89 2.35.31-.05.62-.1.93-.15-.29.36-.57.72-.85 1.08z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-600">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.485 0h-12a1.493 1.493 0 0 0-1.495 1.493v12a1.493 1.493 0 0 0 1.495 1.493h12a1.493 1.493 0 0 0 1.495-1.493v-12A1.493 1.493 0 0 0 16.485 0zm-5.679 2h2.698v3h-2.698V2zM10 3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM3 6.648a.345.345 0 0 1-.345.345H3a.345.345 0 0 1-.345-.345v-3.65a.345.345 0 0 1 .345-.345h12a.345.345 0 0 1 .345.345v3.65a.345.345 0 0 1-.345.345h-12z"/>
              </svg>
              <span className="sr-only">YouTube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        © Created by Pickles 2025 with ❤️. All Rights Reserved. <br />
        <a href="/terms-of-service" className="hover:underline">Terms of Service</a> | 
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </p>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

