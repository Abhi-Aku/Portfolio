import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        {/* Left Side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="hidden h-full md:block"
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUyuzpuItVX8nkOBHih0ZCWRwbMQUuAGTnA&s" 
            alt="Signup" 
            className="h-full w-full object-cover"
          />
        </motion.div>
        
        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter password" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

  
