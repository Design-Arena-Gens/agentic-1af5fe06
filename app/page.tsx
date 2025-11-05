'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen w-full wet-road-effect overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neon Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 243, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center',
          }} />
        </div>

        {/* Volumetric Light Rays */}
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-neon-blue/50 via-neon-blue/20 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ filter: 'blur(30px)' }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-neon-purple/50 via-neon-purple/20 to-transparent"
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ filter: 'blur(40px)' }}
        />

        {/* Ambient Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{ filter: 'blur(2px)' }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-7xl w-full">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-4 neon-text text-neon-blue">
              FuelNow
            </h1>
            <p className="text-xl text-gray-400">Premium On-Demand Fuel Delivery</p>
          </motion.div>

          {/* Phones Container */}
          <div className="flex items-center justify-center gap-12 perspective-1000">

            {/* Customer App Phone */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 8 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Phone Frame */}
              <div className="relative w-[340px] h-[700px] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[50px] p-3 shadow-2xl"
                   style={{
                     boxShadow: '0 30px 80px rgba(0, 243, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                     border: '2px solid rgba(255, 255, 255, 0.2)'
                   }}>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-950 to-black rounded-[42px] overflow-hidden">

                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 pt-2 z-10">
                    <span className="text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm relative">
                        <div className="absolute inset-0.5 bg-white rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Customer App Content */}
                  <div className="relative h-full pt-12 pb-6 px-5">

                    {/* Header */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold mb-1">Hi, Sarah 👋</h2>
                      <p className="text-gray-400 text-sm">Need fuel delivered?</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="glass-effect rounded-2xl p-4">
                        <div className="text-neon-blue text-2xl font-bold">₹89.50</div>
                        <div className="text-xs text-gray-400 mt-1">Price/Liter</div>
                      </div>
                      <div className="glass-effect rounded-2xl p-4">
                        <div className="text-neon-green text-2xl font-bold">12 min</div>
                        <div className="text-xs text-gray-400 mt-1">Avg Delivery</div>
                      </div>
                    </div>

                    {/* Book Now Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl py-4 px-6 mb-6 font-semibold text-lg shadow-neon-glow"
                    >
                      🚚 Book Fuel Delivery
                    </motion.button>

                    {/* Mini Map */}
                    <div className="relative glass-effect rounded-3xl overflow-hidden h-64 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-purple-950/50" />

                      {/* Map Grid */}
                      <div className="absolute inset-0 opacity-30">
                        <div style={{
                          backgroundImage: `linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px',
                        }} className="w-full h-full" />
                      </div>

                      {/* Nearby Trucks */}
                      <motion.div
                        className="absolute top-1/4 left-1/4 w-3 h-3 bg-neon-blue rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute top-1/2 right-1/3 w-3 h-3 bg-neon-blue rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div
                        className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-neon-blue rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />

                      {/* User Location */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                          className="w-6 h-6 bg-neon-purple rounded-full flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </motion.div>
                      </div>

                      <div className="absolute bottom-3 left-3 glass-effect rounded-xl px-3 py-2">
                        <div className="text-xs font-semibold text-neon-green">3 trucks nearby</div>
                      </div>
                    </div>

                    {/* Recent Orders */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Orders</h3>
                      <div className="glass-effect rounded-2xl p-3 flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">50L Petrol</div>
                          <div className="text-xs text-gray-400">2 days ago</div>
                        </div>
                        <div className="text-neon-green text-sm font-semibold">₹4,475</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Shine Effect */}
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Phone Glow */}
              <div className="absolute inset-0 bg-neon-blue/20 rounded-[50px] blur-3xl -z-10" />
            </motion.div>

            {/* Fuel Truck Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative z-20"
            >
              <div className="text-8xl">
                🚛
              </div>
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-neon-blue rounded-full"
                animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ filter: 'blur(4px)' }}
              />
            </motion.div>

            {/* Driver App Phone */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: -8 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Phone Frame */}
              <div className="relative w-[340px] h-[700px] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-[50px] p-3 shadow-2xl"
                   style={{
                     boxShadow: '0 30px 80px rgba(176, 0, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                     border: '2px solid rgba(255, 255, 255, 0.2)'
                   }}>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-950 to-black rounded-[42px] overflow-hidden">

                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 pt-2 z-10">
                    <span className="text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm relative">
                        <div className="absolute inset-0.5 bg-white rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Driver App Content */}
                  <div className="relative h-full pt-12 pb-6 px-5">

                    {/* Active Order Badge */}
                    <div className="mb-4 glass-effect rounded-2xl p-3 border-2 border-neon-purple">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-neon-purple">ACTIVE ORDER</span>
                        <motion.div
                          className="w-2 h-2 bg-neon-purple rounded-full"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                      <div className="text-2xl font-bold">#FD-2847</div>
                    </div>

                    {/* Customer Info */}
                    <div className="glass-effect rounded-2xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-xl">
                          👤
                        </div>
                        <div>
                          <div className="font-semibold">Sarah Johnson</div>
                          <div className="text-xs text-gray-400">⭐ 4.9 Rating</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-gray-400 text-xs">Fuel Type</div>
                          <div className="font-semibold text-neon-blue">Petrol 95</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs">Quantity</div>
                          <div className="font-semibold text-neon-green">40 Liters</div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Map */}
                    <div className="relative glass-effect rounded-3xl overflow-hidden h-72 mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 to-blue-950/50" />

                      {/* Map Grid */}
                      <div className="absolute inset-0 opacity-30">
                        <div style={{
                          backgroundImage: `linear-gradient(rgba(176, 0, 255, 0.2) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(176, 0, 255, 0.2) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px',
                        }} className="w-full h-full" />
                      </div>

                      {/* Route Line */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.path
                          d="M 80 250 Q 150 180, 220 120"
                          stroke="url(#routeGradient)"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="10 5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <defs>
                          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#b000ff" />
                            <stop offset="100%" stopColor="#00f3ff" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Truck Location */}
                      <motion.div
                        className="absolute bottom-1/4 left-1/4 text-3xl"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🚚
                      </motion.div>

                      {/* Destination */}
                      <div className="absolute top-1/4 right-1/4">
                        <motion.div
                          className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          📍
                        </motion.div>
                      </div>

                      {/* ETA Badge */}
                      <div className="absolute top-3 left-3 glass-effect rounded-xl px-4 py-2">
                        <div className="text-xs text-gray-400">ETA</div>
                        <div className="text-lg font-bold text-neon-purple">8 min</div>
                      </div>

                      {/* Distance Badge */}
                      <div className="absolute top-3 right-3 glass-effect rounded-xl px-4 py-2">
                        <div className="text-xs text-gray-400">Distance</div>
                        <div className="text-lg font-bold text-neon-blue">2.4 km</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="glass-effect rounded-xl py-3 px-4 font-semibold text-sm border border-gray-700"
                      >
                        📞 Call Customer
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl py-3 px-4 font-semibold text-sm shadow-neon-purple"
                      >
                        ✓ Start Delivery
                      </motion.button>
                    </div>

                    {/* Today's Stats */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="glass-effect rounded-xl p-2 text-center">
                        <div className="text-lg font-bold text-neon-green">12</div>
                        <div className="text-xs text-gray-400">Deliveries</div>
                      </div>
                      <div className="glass-effect rounded-xl p-2 text-center">
                        <div className="text-lg font-bold text-neon-blue">₹8.2K</div>
                        <div className="text-xs text-gray-400">Earnings</div>
                      </div>
                      <div className="glass-effect rounded-xl p-2 text-center">
                        <div className="text-lg font-bold text-neon-purple">4.9⭐</div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Shine Effect */}
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Phone Glow */}
              <div className="absolute inset-0 bg-neon-purple/20 rounded-[50px] blur-3xl -z-10" />
            </motion.div>

          </div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-500 text-sm">
              Premium On-Demand Fuel Delivery • Available 24/7 • Real-Time Tracking
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Neon Reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neon-blue/10 via-neon-purple/5 to-transparent pointer-events-none" style={{ filter: 'blur(50px)' }} />
    </main>
  )
}
