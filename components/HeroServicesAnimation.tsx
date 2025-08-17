'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaCode, FaAd, FaSearch, FaRobot, FaEye, FaMousePointer, FaChartBar, FaBullseye, FaEuroSign, FaClock, FaComments, FaCalendarAlt, FaBrain, FaCog } from 'react-icons/fa'
import { SiGoogle, SiMicrosoft } from 'react-icons/si'

// Componente per l'animazione di sviluppo web
const WebDevelopmentAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="w-full max-w-md h-56 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
        {/* Browser header */}
        <motion.div 
          className="h-10 bg-gray-100 flex items-center px-4 border-b"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex space-x-2">
            <div className="w-3.5 h-3.5 bg-red-400 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-yellow-400 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-green-400 rounded-full"></div>
          </div>
          <div className="flex-1 ml-4">
            <motion.div 
              className="h-2.5 bg-gray-300 rounded"
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
          </div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
          </div>
        </motion.div>
        
        {/* Page content */}
        <div className="p-4 space-y-3">
          {/* Header principale */}
          <motion.div 
            className="h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, delay: 1.0 }}
          />
          
          {/* Navigation menu */}
          <motion.div 
            className="flex space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            {['Home', 'About', 'Services', 'Contact'].map((item, i) => (
              <motion.div 
                key={i}
                className="h-3 bg-gray-300 rounded px-2 flex items-center"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                style={{ minWidth: `${item.length * 8 + 16}px` }}
              />
            ))}
          </motion.div>
          
          {/* Main content area */}
          <div className="space-y-2">
            {/* Hero section */}
            <motion.div 
              className="h-16 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-lg relative overflow-hidden"
              initial={{ width: 0, height: 0 }}
              animate={{ width: '100%', height: '4rem' }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {/* Testo simulato nel hero */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.4 }}
              >
                <div className="h-2 bg-white bg-opacity-60 rounded w-3/4 mb-1"></div>
                <div className="h-1.5 bg-white bg-opacity-40 rounded w-1/2"></div>
              </motion.div>
            </motion.div>
            
            {/* Content blocks */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  className="h-12 bg-gray-200 rounded-lg relative overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 + i * 0.2 }}
                >
                  {/* Icon simulato */}
                  <motion.div
                    className="w-6 h-6 bg-blue-300 rounded-full mx-auto mt-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 3.0 + i * 0.2 }}
                  />
                  {/* Testo simulato */}
                  <motion.div
                    className="h-1 bg-gray-400 rounded mx-2 mt-1"
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ duration: 0.3, delay: 3.2 + i * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Footer content */}
            <motion.div
              className="flex space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 3.8 }}
            >
              <motion.div 
                className="flex-1 h-6 bg-gray-200 rounded"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 4.0 }}
              />
              <motion.div 
                className="w-20 h-6 bg-green-400 rounded"
                initial={{ width: 0 }}
                animate={{ width: '5rem' }}
                transition={{ duration: 0.4, delay: 4.2 }}
              />
            </motion.div>
            
            {/* Text lines finali */}
            {[1, 2].map((i) => (
              <motion.div 
                key={i}
                className="h-1.5 bg-gray-300 rounded"
                style={{ width: `${85 - i * 20}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${85 - i * 20}%` }}
                transition={{ duration: 0.4, delay: 4.4 + i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente per l'animazione SEO & SEM
const SEOAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [cycleCount, setCycleCount] = useState(0)
  
  useEffect(() => {
    // Reset dell'animazione quando il componente viene montato
    setCurrentStep(0)
    setCycleCount(0)
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % 4
        // Se torniamo al passo 0, incrementa il contatore dei cicli
        if (nextStep === 0) {
          setCycleCount(count => count + 1)
        }
        return nextStep
      })
    }, 6000) // Aumentato a 6 secondi per assicurare il completamento delle animazioni
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="w-full max-w-md h-80 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden flex flex-col">
        
        {/* Header Google-style */}
        <motion.div 
          className="h-14 bg-white flex items-center px-4 border-b border-gray-200 flex-shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center space-x-3 w-full">
            <div className="text-2xl font-bold text-blue-600">G</div>
            <div className="flex-1 relative">
              <motion.div 
                className="h-8 bg-gray-100 rounded-full border border-gray-300 flex items-center px-3"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.span
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  sviluppo web milano
                </motion.span>
                <div className="flex-1"></div>
                <FaSearch className="text-gray-400 text-sm" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contenuto principale con spazio controllato */}
        <div className="flex-1 flex flex-col px-4 py-3 min-h-0">
          
          {/* Scene che cambiano in base al currentStep */}
          <motion.div 
            className="flex-1"
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* SCENA 1: Annunci SEM in evidenza */}
            {currentStep === 0 && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 mb-2 flex items-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Annunci</span>
                </div>
                
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.3 }}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <motion.div 
                        className="text-blue-600 text-sm font-semibold"
                        animate={{ color: ['#2563EB', '#1D4ED8', '#2563EB'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        GPTech Studio - Sviluppo Web
                      </motion.div>
                      <span className="text-xs text-gray-500">Annuncio</span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      Siti web professionali e moderni. Contattaci per un preventivo gratuito.
                    </div>
                    <div className="text-xs text-green-600">www.gptech.studio</div>
                  </motion.div>
                ))}
                
                {/* Indicatore performance SEM */}
                <motion.div
                  className="mt-3 flex items-center justify-between text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                >
                  <span className="text-gray-500">Posizione annunci:</span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="text-green-600 font-semibold"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 2.5 }}
                    >
                      #1-2
                    </motion.div>
                    <motion.div
                      className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 3 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* SCENA 2: Risultati organici SEO */}
            {currentStep === 1 && (
              <div className="space-y-2">
                <div className="text-xs text-gray-500 mb-2">Risultati di ricerca</div>
                
                {[
                  { title: "GPTech Studio - Agenzia Sviluppo Web Milano", pos: 3, newPos: 1 },
                  { title: "Sviluppo Siti Web Professionali | GPTech", pos: 7, newPos: 2 },
                  { title: "Portfolio GPTech Studio - Web Design", pos: 12, newPos: 4 }
                ].map((result, i) => (
                  <motion.div
                    key={i}
                    className="p-2 bg-white border border-gray-100 rounded-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                  >
                    {/* Indicatore di salita posizione */}
                    <motion.div
                      className="absolute top-1 right-1 flex items-center space-x-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
                    >
                      <motion.div
                        className="text-xs text-green-600 font-bold"
                        animate={{ y: [-2, 0, -2] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2 + i * 0.2 }}
                      >
                        #{result.newPos}
                      </motion.div>
                      <motion.div
                        className="text-green-500"
                        animate={{ y: [-3, 0, -3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2 + i * 0.2 }}
                      >
                        ↑
                      </motion.div>
                    </motion.div>
                    
                    <div className="text-blue-600 text-sm font-medium mb-1 pr-12">
                      {result.title}
                    </div>
                    <div className="text-xs text-green-600 mb-1">www.gptech.studio</div>
                    <div className="text-xs text-gray-600">
                      Agenzia specializzata in sviluppo web e design moderno...
                    </div>
                    
                    {/* Barra di progresso ranking */}
                    <motion.div
                      className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 2.5 + i * 0.2 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-green-500"
                        initial={{ width: `${(15 - result.pos) * 6}%` }}
                        animate={{ width: `${(15 - result.newPos) * 8}%` }}
                        transition={{ duration: 1.5, delay: 3 + i * 0.2 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* SCENA 3: Metriche di traffico - MIGLIORATA */}
            {currentStep === 2 && (
              <div className="space-y-2 h-full flex flex-col">
                <div className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                  <FaChartBar className="text-blue-600 mr-2" />
                  Analytics & Performance
                </div>
                
                {/* Layout migliorato con numeri a sinistra e visualizzazioni a destra */}
                <div className="flex-1 flex space-x-3">
                  {/* Colonna sinistra - Metriche principali */}
                  <div className="w-2/3 grid grid-cols-2 gap-2">
                    {[
                      { label: "Traffico", value: "2.4K", growth: "+45%", color: "text-green-600", icon: "👥" },
                      { label: "Ranking", value: "#3.2", growth: "+8", color: "text-blue-600", icon: "📈" },
                      { label: "CTR", value: "5.8%", growth: "+2.1%", color: "text-purple-600", icon: "🎯" },
                      { label: "Lead", value: "89", growth: "+67%", color: "text-orange-600", icon: "✨" }
                    ].map((metric, i) => (
                      <motion.div
                        key={i}
                        className="p-2 bg-gray-50 rounded-lg relative overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                      >
                        {/* Effetto shimmer per highlight */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                          animate={{ x: [-100, 100] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: 2 + i * 0.5,
                            repeatDelay: 3 
                          }}
                        />
                        
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xs text-gray-500">{metric.label}</div>
                          <span className="text-xs opacity-60">{metric.icon}</span>
                        </div>
                        
                        <motion.div
                          className="text-lg font-bold text-gray-800 mb-1"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 + i * 0.3 }}
                        >
                          {metric.value}
                        </motion.div>
                        
                        <motion.div
                          className={`text-xs font-semibold ${metric.color} flex items-center`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 2 + i * 0.2 }}
                        >
                          <motion.span
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: 3 + i * 0.2 }}
                          >
                            ↗
                          </motion.span>
                          <span className="ml-1">{metric.growth}</span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Colonna destra - Visualizzazione mini trend */}
                  <div className="w-1/3 flex flex-col justify-center">
                    <motion.div
                      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 h-full flex flex-col justify-center"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <div className="text-xs text-gray-600 text-center mb-2">Trend 7 giorni</div>
                      
                      {/* Mini grafico compatto che non va oltre i limiti */}
                      <div className="h-12 flex items-end justify-center space-x-1">
                        {[40, 55, 45, 70, 65, 85, 75].map((height, i) => (
                          <motion.div
                            key={i}
                            className="w-1 bg-gradient-to-t from-blue-400 to-blue-500 rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.6, delay: 3 + i * 0.1 }}
                          />
                        ))}
                      </div>
                      
                      <motion.div
                        className="text-center mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                      >
                        <div className="text-xs font-semibold text-green-600">+23% generale</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}

            {/* SCENA 4: Ottimizzazione in corso - COMPATTA */}
            {currentStep === 3 && (
              <div className="space-y-2 h-full flex flex-col">
                <div className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <FaSearch className="text-purple-600" />
                  </motion.div>
                  Ottimizzazione SEO
                </div>
                
                {/* Layout più compatto per evitare overflow */}
                <div className="flex-1 flex space-x-3">
                  {/* Colonna sinistra - Tasks principali */}
                  <div className="w-2/3 space-y-1.5">
                    {[
                      { task: "Parole chiave", status: "completed", impact: "+15%" },
                      { task: "Meta description", status: "completed", impact: "+12%" },
                      { task: "Velocità sito", status: "in_progress", impact: "..." },
                      { task: "Link building", status: "pending", impact: "..." }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                      >
                        <motion.div
                          className={`w-3 h-3 rounded-full flex items-center justify-center ${
                            item.status === 'completed' ? 'bg-green-500' :
                            item.status === 'in_progress' ? 'bg-yellow-500' : 'bg-gray-300'
                          }`}
                          animate={item.status === 'in_progress' ? { scale: [1, 1.1, 1] } : {}}
                          transition={item.status === 'in_progress' ? { duration: 1, repeat: Infinity } : {}}
                        >
                          {item.status === 'completed' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: 1.5 + i * 0.2 }}
                              className="text-white text-xs"
                            >
                              ✓
                            </motion.div>
                          )}
                          {item.status === 'in_progress' && (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                              className="w-1.5 h-1.5 border border-white border-t-transparent rounded-full"
                            />
                          )}
                        </motion.div>
                        
                        <div className="flex-1 text-sm text-gray-700">{item.task}</div>
                        
                        {item.status === 'completed' && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 2 + i * 0.1 }}
                            className="text-xs text-green-600 font-semibold"
                          >
                            {item.impact}
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Colonna destra - Progress summary */}
                  <div className="w-1/3 flex flex-col justify-center">
                    <motion.div
                      className="bg-gradient-to-br from-purple-50 to-green-50 rounded-lg p-3 h-full flex flex-col justify-center"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      <div className="text-xs text-gray-600 text-center mb-2">Progress</div>
                      
                      {/* Circular progress */}
                      <div className="relative w-16 h-16 mx-auto mb-2">
                        <svg className="w-full h-full" viewBox="0 0 32 32">
                          <circle
                            cx="16"
                            cy="16"
                            r="14"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                            fill="none"
                          />
                          <motion.circle
                            cx="16"
                            cy="16"
                            r="14"
                            stroke="#10B981"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="87.96"
                            strokeDashoffset="87.96"
                            strokeLinecap="round"
                            animate={{ strokeDashoffset: 22 }}
                            transition={{ duration: 2, delay: 2.5 }}
                          />
                        </svg>
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center text-sm font-bold text-purple-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 3 }}
                        >
                          75%
                        </motion.div>
                      </div>
                      
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5 }}
                      >
                        <div className="text-xs font-semibold text-green-600">+27% totale</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
          </motion.div>

          {/* Barra di stato in fondo con indicatore ciclo */}
          <div className="flex items-center justify-center space-x-2 mt-3 mb-1 flex-shrink-0">
            {/* Indicatori delle scene */}
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  className={`h-1 rounded-full ${
                    step === currentStep ? 'bg-purple-500 w-8' : 'bg-gray-300 w-2'
                  }`}
                  animate={{
                    width: step === currentStep ? 32 : 8,
                    backgroundColor: step === currentStep ? '#8B5CF6' : '#D1D5DB'
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
            
            {/* Indicatore ciclo (opzionale, mostrato solo dopo il primo ciclo) */}
            {cycleCount > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs text-gray-400 ml-2"
              >
                Ciclo {cycleCount + 1}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Componente per l'animazione dei contatori
const CounterAnimation = ({ from, to, duration, suffix = '', decimals = 0 }: {
  from: number
  to: number
  duration: number
  suffix?: string
  decimals?: number
}) => {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing function per un'animazione più fluida
      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)
      const easedProgress = easeOutQuart(progress)
      
      const currentCount = from + (to - from) * easedProgress
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration])

  const formatNumber = (num: number) => {
    if (decimals === 0) {
      return Math.floor(num).toLocaleString()
    }
    return num.toFixed(decimals)
  }

  return <span>{formatNumber(count)}{suffix}</span>
}

// Componente per l'animazione delle campagne pubblicitarie
const AdsAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [particles, setParticles] = useState(Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.3
  })))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4)
    }, 6000) // Rallentato a 6 secondi per scene più rilassate
    return () => clearInterval(interval)
  }, [])

  // Animazione delle particelle di sfondo
  useEffect(() => {
    const particleInterval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + 0.5) % 100,
        y: (particle.y + 0.3) % 100,
        opacity: 0.2 + Math.sin(Date.now() * 0.001 + particle.id) * 0.3
      })))
    }, 100)
    return () => clearInterval(particleInterval)
  }, [])

  return (
    <div className="w-full h-full flex items-start justify-center px-4 py-4">
      <div className="w-full max-w-lg relative">
        
        {/* Particelle di sfondo animate */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: particle.opacity
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.id * 0.3
              }}
            />
          ))}
        </div>
        
        {/* Dashboard principale */}
        <div className="w-full h-72 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden relative backdrop-blur-sm">
          
          {/* Header del dashboard migliorato */}
          <motion.div 
            className="h-12 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 flex items-center px-4 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Effetto di luce che si muove */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-100, 400] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center space-x-2 relative z-10">
              <FaAd className="text-white text-lg" />
              <span className="text-white font-semibold text-sm">Campaign Manager Pro</span>
            </div>
            <div className="flex-1"></div>
            
            {/* Indicatori di stato migliorati */}
            <div className="flex items-center space-x-2 relative z-10">
              <motion.div
                className="w-2 h-2 bg-green-300 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>

                    <div className="px-4 py-3 h-full flex flex-col justify-center">
            
            {/* Scene che cambiano in base al currentStep */}
            <motion.div 
              className="flex-1 flex items-center justify-between"
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              {/* SCENA 1: Creazione Annunci - MIGLIORATA */}
              {currentStep === 0 && (
                <>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden"
                      animate={{ 
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {/* Effetto scintilla */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-30"
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <FaAd className="text-green-600 text-2xl relative z-10" />
                    </motion.div>
                    <div className="text-center">
                      <motion.span 
                        className="text-sm font-bold text-gray-800"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Crea Annuncio
                      </motion.span>
                      <div className="text-xs text-gray-500 mt-1">Setup campagna</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex justify-center items-center px-8">
                    <div className="flex items-center space-x-4 relative">
                      {/* Linea di connessione animata */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-300 to-orange-300 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '4rem' }}
                        transition={{ duration: 1.5, delay: 2.5 }}
                      />
                      
                      <motion.div
                        className="flex flex-col items-center px-3 py-2 bg-blue-50 rounded-xl border border-blue-200 relative z-10 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20, rotateY: -45 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <SiGoogle className="text-blue-600 text-xl mb-1" />
                        <span className="text-sm font-semibold text-blue-700">Google Ads</span>
                        {/* Indicatore attività */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 3 }}
                        />
                      </motion.div>
                      
                      <motion.div
                        className="flex flex-col items-center px-3 py-2 bg-orange-50 rounded-xl border border-orange-200 relative z-10 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20, rotateY: 45 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <SiMicrosoft className="text-orange-600 text-xl mb-1" />
                        <span className="text-sm font-semibold text-orange-700">Bing Ads</span>
                        {/* Indicatore attività */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 4 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 3, type: "spring", bounce: 0.4 }}
                    >
                      <div className="flex items-center justify-end space-x-1 mb-1">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
                        >
                          <FaClock className="text-green-600 text-sm" />
                        </motion.div>
                        <motion.div 
                          className="text-2xl font-bold text-green-600"
                          animate={{ 
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: 4 }}
                        >
                          24h
                        </motion.div>
                      </div>
                      <div className="text-xs text-gray-500 text-right">Setup Rapido</div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* SCENA 2: Targeting - MIGLIORATA */}
              {currentStep === 1 && (
                <>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden"
                      animate={{ 
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {/* Effetto radar */}
                      <motion.div
                        className="absolute inset-0 border-2 border-purple-300 rounded-xl"
                        animate={{ 
                          scale: [1, 1.5, 2],
                          opacity: [1, 0.5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
                        animate={{ 
                          scale: [1, 1.3, 1.8],
                          opacity: [1, 0.7, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      <FaBullseye className="text-purple-600 text-2xl relative z-10" />
                    </motion.div>
                    <div className="text-center">
                      <motion.span 
                        className="text-sm font-bold text-gray-800"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Target Audience
                      </motion.span>
                      <div className="text-xs text-gray-500 mt-1">25-45 anni, Italia</div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex justify-center items-center px-6">
                    <div className="grid grid-cols-2 gap-3 max-w-xs relative">
                      {/* Linee di connessione animate */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      >
                        <motion.div
                          className="w-8 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full"
                          animate={{ scaleX: [0, 1] }}
                          transition={{ duration: 1, delay: 2.5 }}
                        />
                        <motion.div
                          className="w-0.5 h-8 bg-gradient-to-b from-green-300 to-orange-300 rounded-full absolute"
                          animate={{ scaleY: [0, 1] }}
                          transition={{ duration: 1, delay: 3 }}
                        />
                      </motion.div>
                      
                      {[
                        { label: "Età", value: "25-45", color: "bg-purple-400", icon: "👥" },
                        { label: "Geografia", value: "Italia", color: "bg-blue-400", icon: "🇮🇹" },
                        { label: "Interessi", value: "Tech", color: "bg-green-400", icon: "💻" },
                        { label: "Comportamento", value: "Acquisto", color: "bg-orange-400", icon: "🛒" }
                      ].map((segment, i) => (
                        <motion.div
                          key={i}
                          className="flex flex-col items-center space-y-1 p-2 bg-gray-50 rounded-lg relative z-10 backdrop-blur-sm border border-gray-200"
                          initial={{ opacity: 0, scale: 0, rotateY: 90 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: 1 + i * 0.3,
                            type: "spring",
                            bounce: 0.4 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <motion.div 
                            className={`w-8 h-8 ${segment.color} rounded-full flex items-center justify-center relative overflow-hidden`}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 + i * 0.5 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-30"
                              animate={{ x: [-20, 40] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <span className="text-sm relative z-10">{segment.icon}</span>
                          </motion.div>
                          <div className="text-center">
                            <motion.div 
                              className="text-xs font-semibold text-gray-700"
                              animate={{ color: ["#374151", "#6B7280", "#374151"] }}
                              transition={{ duration: 3, repeat: Infinity, delay: 3 + i * 0.2 }}
                            >
                              {segment.label}
                            </motion.div>
                            <div className="text-xs text-gray-500">{segment.value}</div>
                          </div>
                          
                          {/* Indicatore di targeting attivo */}
                          <motion.div
                            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                            animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 1, 0.7, 1] }}
                            transition={{ duration: 1.5, delay: 3.5 + i * 0.3 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      transition={{ duration: 1, delay: 3, type: "spring", bounce: 0.4 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-purple-600"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#7C3AED", "#8B5CF6", "#7C3AED"]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                      >
                        50K
                      </motion.div>
                      <motion.div 
                        className="text-xs text-gray-500"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4.5 }}
                      >
                        Audience
                      </motion.div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* SCENA 3: Performance - MIGLIORATA CON CONTATORI ANIMATI */}
              {currentStep === 2 && (
                <>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 4px 6px -1px rgba(59, 130, 246, 0.1)",
                          "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                          "0 4px 6px -1px rgba(59, 130, 246, 0.1)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {/* Effetto pulsazione */}
                      <motion.div
                        className="absolute inset-0 bg-blue-400 rounded-xl"
                        animate={{ 
                          scale: [1, 1.2, 1.4],
                          opacity: [0.3, 0.1, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#2563EB", "#3B82F6", "#2563EB"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaEye className="text-blue-600 text-2xl relative z-10" />
                      </motion.div>
                    </motion.div>
                    <div className="text-center">
                      <motion.span 
                        className="text-sm font-bold text-gray-800"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Impressions
                      </motion.span>
                      <motion.div 
                        className="text-xs text-gray-500 mt-1"
                        animate={{ color: ["#6B7280", "#10B981", "#6B7280"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        Oggi: +2.3K
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex justify-center items-center px-12">
                    <motion.div
                      className="text-center relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      {/* Contatore animato */}
                      <motion.div
                        className="text-4xl font-bold text-blue-600 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        <CounterAnimation from={0} to={12500} duration={3} suffix="K" />
                      </motion.div>
                      
                      {/* Barra di progresso animata e migliorata */}
                      <div className="w-20 h-3 bg-blue-100 rounded-full mx-auto mb-2 relative overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 2, delay: 2.5 }}
                        />
                        
                        {/* Indicatori di milestone */}
                        <div className="absolute inset-0 flex justify-between items-center px-1">
                          {[25, 50, 75].map((milestone, i) => (
                            <motion.div
                              key={milestone}
                              className="w-1 h-1 bg-blue-300 rounded-full"
                              animate={{ 
                                scale: milestone <= 78 ? [1, 1.5, 1] : 1,
                                backgroundColor: milestone <= 78 ? ["#93C5FD", "#FFFFFF", "#93C5FD"] : "#93C5FD"
                              }}
                              transition={{ 
                                duration: 1, 
                                repeat: milestone <= 78 ? Infinity : 0, 
                                delay: 3 + i * 0.2 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <motion.div 
                        className="text-xs text-gray-600"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                      >
                        Performance Ottima
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="text-right">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      transition={{ duration: 1, delay: 3, type: "spring", bounce: 0.4 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-blue-600"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#2563EB", "#3B82F6", "#2563EB"]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
                      >
                        <CounterAnimation from={0} to={5.2} duration={2} suffix="%" decimals={1} />
                      </motion.div>
                      <motion.div 
                        className="text-xs text-gray-500"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4.5 }}
                      >
                        CTR
                      </motion.div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* SCENA 4: Conversioni - MIGLIORATA CON EFFETTI DINAMICI */}
              {currentStep === 3 && (
                <>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center mb-3 relative overflow-hidden"
                      animate={{ 
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      {/* Effetto di successo radiante */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-xl"
                        animate={{ 
                          scale: [1, 1.3, 1.6],
                          opacity: [0.5, 0.2, 0]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-300 rounded-xl"
                        animate={{ 
                          scale: [1, 1.4, 1.8],
                          opacity: [0.3, 0.1, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#D97706", "#F59E0B", "#D97706"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaMousePointer className="text-yellow-600 text-2xl relative z-10" />
                      </motion.div>
                    </motion.div>
                    <div className="text-center">
                      <motion.span 
                        className="text-sm font-bold text-gray-800"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Conversioni
                      </motion.span>
                      <motion.div 
                        className="text-xs text-gray-500 mt-1"
                        animate={{ color: ["#6B7280", "#10B981", "#6B7280"] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        <CounterAnimation from={0} to={267} duration={2} suffix=" lead" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex justify-center items-center px-8">
                    <div className="flex items-end space-x-1 h-16 relative">
                      {/* Linea di tendenza */}
                      <motion.div
                        className="absolute inset-0 flex items-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                      >
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <motion.path
                            d="M 10,70 Q 30,45 50,30 Q 70,15 90,5"
                            stroke="#10B981"
                            strokeWidth="2"
                            fill="none"
                            strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 3 }}
                          />
                        </svg>
                      </motion.div>
                      
                      {[30, 45, 55, 70, 85, 75, 95].map((height, i) => (
                        <motion.div
                          key={i}
                          className="w-4 bg-gradient-to-t from-green-400 via-green-500 to-emerald-500 rounded-t-sm relative overflow-hidden z-10"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: 1 + i * 0.2,
                            type: "spring",
                            bounce: 0.3
                          }}
                        >
                          {/* Indicatore semplice per le barre più alte */}
                          {height > 70 && (
                            <motion.div
                              className="absolute top-0 left-0 w-full h-1 bg-white opacity-40"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0.4 }}
                              transition={{ delay: 3 + i * 0.3 }}
                            />
                          )}
                          
                          {/* Indicatore di crescita */}
                          {i > 0 && height > [30, 45, 55, 70, 85, 75, 95][i-1] && (
                            <motion.div
                              className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-green-600 text-xs"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 3.5 + i * 0.2 }}
                            >
                              ↗
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                      
                      {/* Etichette dei giorni */}
                      <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-400">
                        {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((day, i) => (
                          <motion.span
                            key={day}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 + i * 0.1 }}
                          >
                            {day}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{ duration: 1, delay: 3, type: "spring", bounce: 0.4 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-green-600 relative"
                        animate={{ 
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: 4 }}
                      >
                        {/* Effetto celebrativo */}
                        <motion.div
                          className="absolute -inset-2 bg-green-100 rounded-lg"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0, 0.3, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 4.5 }}
                        />
                        <span className="relative z-10">
                          +<CounterAnimation from={0} to={150} duration={2} suffix="%" />
                        </span>
                      </motion.div>
                      <motion.div 
                        className="text-xs text-gray-500 mt-1"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 4.5 }}
                      >
                        ROI
                      </motion.div>
                      
                      {/* Indicatore di trend positivo */}
                      <motion.div
                        className="flex items-center justify-end mt-1 text-xs text-green-600"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 5 }}
                      >
                        <span>📈</span>
                        <span className="ml-1">Trend positivo</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </>
              )}
              
                        </motion.div>

            {/* Barra di stato in fondo con padding bilanciato */}
            <div className="flex justify-center space-x-1 mt-3 mb-1">
              {[0, 1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  className={`h-1 rounded-full ${
                    step === currentStep ? 'bg-green-500 w-8' : 'bg-gray-300 w-2'
                  }`}
                  animate={{
                    width: step === currentStep ? 32 : 8,
                    backgroundColor: step === currentStep ? '#10B981' : '#D1D5DB'
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

// Componente per l'animazione dell'Intelligenza Artificiale - VERSIONE MIGLIORATA CON APPUNTAMENTI
const AIAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [appointmentsCount, setAppointmentsCount] = useState(124)
  const [successRate, setSuccessRate] = useState(91)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 2) // Due scene: Chat + Calendario
    }, 13000) // 13 secondi per scena per assicurare che lo scroll sia completato prima del cambio
    
    return () => clearInterval(interval)
  }, [])

  // Effetto scroll per la chat - MIGLIORATO per fluidità e completezza
  useEffect(() => {
    if (currentStep === 0) {
      // Reset scroll quando inizia la scena chat
      setScrollPosition(0)
      
      // Variabile per tracciare il tempo di inizio
      const startTime = Date.now()
      
      // Sistema di scroll più fluido e graduale che arriva fino alla fine
      const scrollInterval = setInterval(() => {
        setScrollPosition(prevPosition => {
          // Calcola la velocità di scroll basata sul tempo
          const timeElapsed = Date.now() - startTime
          
          // Velocità variabile: più veloce ma sempre fluida
          let targetPosition = 0
          if (timeElapsed < 1500) {
            // Primi 1.5 secondi: avvio graduale
            targetPosition = (timeElapsed / 1500) * 20
          } else if (timeElapsed < 7000) {
            // 1.5-7 secondi: scroll più veloce e costante
            targetPosition = 20 + ((timeElapsed - 1500) / 5500) * 70
          } else if (timeElapsed < 9000) {
            // 7-9 secondi: scroll finale rapido per completare
            targetPosition = 90 + ((timeElapsed - 7000) / 2000) * 20
          } else {
            // Dopo 9 secondi: mantieni la posizione finale
            targetPosition = 110
          }
          
          // Interpolazione fluida verso la posizione target (più veloce)
          const smoothedPosition = prevPosition + (targetPosition - prevPosition) * 0.16
          
          return Math.min(smoothedPosition, 110) // Cap massimo a 110%
        })
      }, 50) // Aggiornamento ogni 50ms per fluidità massima
      
      return () => clearInterval(scrollInterval)
    }
  }, [currentStep])

  // Effetto per aggiornare i contatori nella scena calendario
  useEffect(() => {
    if (currentStep === 1) {
      // Reset contatori quando inizia la scena calendario
      setAppointmentsCount(124)
      setSuccessRate(91)
      
      // Incrementa i contatori in sincronizzazione con i nuovi appuntamenti del calendario
      const counterUpdates = [
        { delay: 1500, appointments: 125, successRate: 92 },  // Giorno 12
        { delay: 3000, appointments: 126, successRate: 93 },  // Giorno 15
        { delay: 4500, appointments: 127, successRate: 94 },  // Giorno 19
        { delay: 6000, appointments: 128, successRate: 95 },  // Giorno 21
        { delay: 7500, appointments: 129, successRate: 95 },  // Giorno 2
        { delay: 9000, appointments: 130, successRate: 96 },  // Giorno 6
        { delay: 10500, appointments: 131, successRate: 97 }, // Giorno 9
        { delay: 11800, appointments: 132, successRate: 97 }  // Giorno 14
      ]
      
      const timeouts = counterUpdates.map(({ delay, appointments, successRate }) =>
        setTimeout(() => {
          setAppointmentsCount(appointments)
          setSuccessRate(successRate)
        }, delay)
      )
      
      return () => timeouts.forEach(clearTimeout)
    }
  }, [currentStep])

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="w-full max-w-lg h-80 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden relative">
        
        {/* Scena 1: Conversazione Chatbot per Appuntamento */}
        {currentStep === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex"
          >
            {/* Header compatto orizzontale */}
            <div className="w-20 bg-gradient-to-b from-blue-500 to-blue-600 flex flex-col items-center justify-center text-white">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaRobot className="text-2xl mb-2" />
              </motion.div>
              <div className="text-xs font-semibold text-center leading-tight">
                <div>Chatbot</div>
                <div>AI</div>
              </div>
            </div>
            
            {/* Chat interface per appuntamento */}
            <div className="flex-1 p-4 flex flex-col">
              {/* Header chat minimo */}
              <div className="flex items-center space-x-2 pb-2 border-b border-gray-200 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600 font-medium">Assistente AI Online</span>
              </div>
              
              {/* Conversazione appuntamento con scroll automatico */}
              <div className="flex-1 relative overflow-hidden">
                <motion.div
                  className="space-y-2 h-full"
                  animate={{ 
                    y: `-${scrollPosition}%`
                  }}
                  transition={{ 
                    type: "tween",
                    ease: "linear",
                    duration: 0.1 // Transizione molto rapida per seguire il movimento fluido
                  }}
                  style={{ paddingBottom: '200px' }} // Spazio extra aumentato per garantire scroll completo
                >
                  {/* Messaggi iniziali di contesto (nascosti all'inizio) */}
                  <div className="space-y-2 mb-4">
                    <div className="bg-gray-100 rounded-lg p-2 w-fit max-w-[75%]">
                      <p className="text-xs text-gray-600">Benvenuto nel nostro servizio di prenotazioni!</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 w-fit max-w-[80%]">
                      <p className="text-xs text-gray-600">Il nostro team è pronto per aiutarti con il tuo progetto digitale.</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-blue-100 rounded-lg p-2 w-fit max-w-[80%]"
                  >
                    <p className="text-xs text-blue-800">👋 Ciao! Come posso aiutarti oggi?</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="bg-white rounded-lg p-2 w-fit max-w-[80%] ml-auto border border-gray-200"
                  >
                    <p className="text-xs text-gray-700">Vorrei prenotare una consulenza per il mio sito web</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.8 }}
                    className="bg-blue-100 rounded-lg p-2 w-fit max-w-[85%]"
                  >
                    <p className="text-xs text-blue-800">📅 Perfetto! Ti propongo questi orari disponibili:</p>
                    <div className="mt-1 space-y-1">
                      <div className="text-xs text-blue-700 bg-blue-50 rounded px-1 py-0.5">• Martedì 15:00</div>
                      <div className="text-xs text-blue-700 bg-blue-50 rounded px-1 py-0.5">• Mercoledì 10:30</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 4.2 }}
                    className="bg-white rounded-lg p-2 w-fit max-w-[70%] ml-auto border border-gray-200"
                  >
                    <p className="text-xs text-gray-700">Martedì 15:00 va benissimo</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 5.2 }}
                    className="bg-green-100 rounded-lg p-2 w-fit max-w-[85%]"
                  >
                    <p className="text-xs text-green-800 font-medium">✅ Appuntamento confermato!</p>
                    <div className="text-xs text-green-700 mt-1">
                      📧 Ti invierò reminder via email
                    </div>
                  </motion.div>

                  {/* Messaggi aggiuntivi che appaiono durante lo scroll */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 6.0 }}
                    className="bg-blue-100 rounded-lg p-2 w-fit max-w-[85%]"
                  >
                    <p className="text-xs text-blue-800">📝 Preparo tutto per il tuo appuntamento...</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 6.8 }}
                    className="bg-white rounded-lg p-2 w-fit max-w-[75%] ml-auto border border-gray-200"
                  >
                    <p className="text-xs text-gray-700">Serve qualche documento particolare?</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 7.6 }}
                    className="bg-blue-100 rounded-lg p-2 w-fit max-w-[85%]"
                  >
                    <p className="text-xs text-blue-800">📋 Ti invierò una checklist via email con tutto il necessario per la consulenza.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 8.4 }}
                    className="bg-white rounded-lg p-2 w-fit max-w-[70%] ml-auto border border-gray-200"
                  >
                    <p className="text-xs text-gray-700">Perfetto, grazie mille!</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 9.2 }}
                    className="bg-green-100 rounded-lg p-2 w-fit max-w-[90%]"
                  >
                    <p className="text-xs text-green-800 font-medium">🎉 Perfetto! Ci vediamo martedì alle 15:00. Ti aspettiamo!</p>
                    <div className="text-xs text-green-700 mt-1">
                      📍 Ci trovi in Via Roma 123, Milano
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 10.0 }}
                    className="bg-gray-100 rounded-lg p-2 w-fit max-w-[80%]"
                  >
                    <p className="text-xs text-gray-600">✨ Conversazione salvata automaticamente</p>
                  </motion.div>

                  {/* Messaggio finale per completare lo scroll */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 10.5 }}
                    className="bg-blue-50 rounded-lg p-2 w-fit max-w-[85%] border border-blue-200"
                  >
                    <p className="text-xs text-blue-700">🤖 Grazie per aver utilizzato il nostro assistente AI!</p>
                  </motion.div>
                </motion.div>

                {/* Indicatore di scroll (scrollbar simulata) - MIGLIORATO */}
                <motion.div
                  className="absolute right-0.5 top-2 bottom-12 w-1.5 bg-gray-200 rounded-full z-10 shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 2 }}
                  style={{ zIndex: 20 }}
                >
                  <motion.div
                    className="w-full bg-blue-500 rounded-full shadow-sm"
                    animate={{ 
                      height: `${Math.max(12, 15 + scrollPosition * 0.4)}%`,
                      y: `${Math.min(scrollPosition * 0.85, 85)}%`
                    }}
                    transition={{ 
                      type: "tween",
                      ease: "linear",
                      duration: 0.1 // Stessa fluidità del contenuto
                    }}
                  />
                </motion.div>
              </div>
              
              {/* Status bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.0 }}
                className="mt-2 bg-gray-50 rounded-lg p-2"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="text-green-600 font-semibold">✓ Booking completato</span>
                  <span className="text-gray-500">2 min 34 sec</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Scena 2: Calendario Appuntamenti che si Riempie */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex"
          >
            {/* Header compatto orizzontale */}
            <div className="w-20 bg-gradient-to-b from-green-500 to-green-600 flex flex-col items-center justify-center text-white">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCalendarAlt className="text-2xl mb-2" />
              </motion.div>
              <div className="text-xs font-semibold text-center leading-tight">
                <div>Smart</div>
                <div>Calendar</div>
              </div>
            </div>
            
            {/* Calendario che si riempie automaticamente */}
            <div className="flex-1 p-4">
              {/* Header calendario con focus su IA */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-800">Novembre 2024</h3>
                <div className="flex items-center space-x-1 text-xs text-green-600">
                  <FaBrain className="text-sm" />
                  <span className="font-medium">IA Attiva</span>
                  {appointmentsCount > 124 && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: 2 }}
                      className="w-2 h-2 bg-orange-500 rounded-full"
                    />
                  )}
                </div>
              </div>
              
              {/* Mini calendario compatto */}
              <div className="grid grid-cols-7 gap-0.5 mb-3">
                {/* Header giorni */}
                {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((day) => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                    {day}
                  </div>
                ))}
                
                {/* Giorni del mese più compatti */}
                {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => {
                  const hasAppointment = [3, 5, 8, 12, 15, 17, 19, 21, 2, 6, 9, 14].includes(day)
                  const isNewBooking = [12, 15, 19, 21, 2, 6, 9, 14].includes(day) // Nuovi appuntamenti che appaiono
                  
                  return (
                    <motion.div
                      key={day}
                      className={`text-center text-xs py-1 rounded relative ${
                        hasAppointment 
                          ? 'bg-green-100 text-green-800 font-medium' 
                          : 'text-gray-500'
                      }`}
                      initial={isNewBooking ? { scale: 0, backgroundColor: '#F3F4F6' } : {}}
                      animate={isNewBooking ? { 
                        scale: [0, 1.2, 1], 
                        backgroundColor: ['#F3F4F6', '#DCFCE7', '#DCFCE7']
                      } : {}}
                      transition={isNewBooking ? { 
                        duration: 0.8, 
                        delay: day === 12 ? 1.5 : 
                               day === 15 ? 3.0 : 
                               day === 19 ? 4.5 : 
                               day === 21 ? 6.0 :
                               day === 2 ? 7.5 :
                               day === 6 ? 9.0 :
                               day === 9 ? 10.5 :
                               day === 14 ? 11.8 : 0
                      } : {}}
                    >
                      {day}
                      {hasAppointment && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"
                          animate={isNewBooking ? { scale: [0, 1] } : {}}
                          transition={isNewBooking ? { 
                            delay: day === 12 ? 1.8 : 
                                   day === 15 ? 3.3 : 
                                   day === 19 ? 4.8 : 
                                   day === 21 ? 6.3 :
                                   day === 2 ? 7.8 :
                                   day === 6 ? 9.3 :
                                   day === 9 ? 10.8 :
                                   day === 14 ? 12.1 : 0
                          } : {}}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </div>
              
              {/* Statistiche IA e Performance */}
              <div className="space-y-3">
                {/* Header con focus IA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3 border border-blue-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-semibold text-gray-700 flex items-center">
                      <FaBrain className="text-blue-600 mr-1" />
                      Assistente IA - Performance
                    </h4>
                    <motion.div
                      className="text-xs text-green-600 font-medium flex items-center"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                      Attivo 24/7
                    </motion.div>
                  </div>
                  
                  {/* Statistiche principali IA */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="grid grid-cols-2 gap-2 text-center"
                  >
                    <motion.div 
                      className="bg-white rounded-lg p-2 border border-blue-100 relative overflow-hidden"
                      animate={appointmentsCount > 124 ? {
                        boxShadow: [
                          "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                          "0 4px 6px -1px rgba(59, 130, 246, 0.3)",
                          "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                        ]
                      } : {}}
                      transition={{ duration: 1, repeat: appointmentsCount > 124 ? 2 : 0 }}
                    >
                      {/* Effetto flash quando cambia */}
                      {appointmentsCount > 124 && (
                        <motion.div
                          className="absolute inset-0 bg-blue-200"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                      <motion.div 
                        className="text-lg font-bold text-blue-600 relative z-10"
                        animate={{ 
                          scale: appointmentsCount > 124 ? [1, 1.2, 1] : [1, 1.05, 1],
                          color: appointmentsCount > 124 ? ["#2563EB", "#1D4ED8", "#2563EB"] : "#2563EB"
                        }}
                        transition={{ 
                          duration: appointmentsCount > 124 ? 0.8 : 2, 
                          repeat: appointmentsCount > 124 ? 1 : Infinity,
                          delay: appointmentsCount > 124 ? 0 : 2
                        }}
                      >
                        {appointmentsCount}
                      </motion.div>
                      <div className="text-xs text-gray-600 relative z-10">Appuntamenti prenotati dall&apos;IA</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-lg p-2 border border-green-100 relative overflow-hidden"
                      animate={successRate > 91 ? {
                        boxShadow: [
                          "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                          "0 4px 6px -1px rgba(34, 197, 94, 0.3)",
                          "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                        ]
                      } : {}}
                      transition={{ duration: 1, repeat: successRate > 91 ? 2 : 0 }}
                    >
                      {/* Effetto flash quando cambia */}
                      {successRate > 91 && (
                        <motion.div
                          className="absolute inset-0 bg-green-200"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.3, 0] }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                      <motion.div 
                        className="text-lg font-bold text-green-600 relative z-10"
                        animate={{ 
                          scale: successRate > 91 ? [1, 1.2, 1] : [1, 1.05, 1],
                          color: successRate > 91 ? ["#16A34A", "#15803D", "#16A34A"] : "#16A34A"
                        }}
                        transition={{ 
                          duration: successRate > 91 ? 0.8 : 2, 
                          repeat: successRate > 91 ? 1 : Infinity,
                          delay: successRate > 91 ? 0 : 2.5
                        }}
                      >
                        {successRate}%
                      </motion.div>
                      <div className="text-xs text-gray-600 relative z-10">Tasso di successo</div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Indicatori di scena in basso */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[0, 1].map((step) => (
            <motion.div
              key={step}
              className={`h-1 rounded-full ${
                step === currentStep ? 'bg-blue-500 w-6' : 'bg-gray-300 w-2'
              }`}
              animate={{
                width: step === currentStep ? 24 : 8,
                backgroundColor: step === currentStep ? '#3B82F6' : '#D1D5DB'
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Array dei servizi definito fuori dal componente per evitare ri-creazione ad ogni render
const services = [
  {
    icon: FaCode,
    title: 'Sviluppo Web',
    description: 'Siti web moderni',
    color: 'text-blue-600',
    bgColor: 'from-blue-500 to-blue-600',
    animationDuration: 5000 // 5 secondi per vedere l'animazione completa
  },
  {
    icon: FaAd,
    title: 'Campagne Ads',
    description: 'Marketing efficace',
    color: 'text-green-600',
    bgColor: 'from-green-500 to-green-600',
    animationDuration: 24000 // 4 scene x 6 secondi = 24 secondi totali
  },
  {
    icon: FaSearch,
    title: 'SEO & SEM',
    description: 'Visibilità online',
    color: 'text-purple-600',
    bgColor: 'from-purple-500 to-purple-600',
    animationDuration: 24000 // 4 scene x 6 secondi = 24 secondi totali
  },
  {
    icon: FaRobot,
    title: 'Intelligenza Artificiale',
    description: 'Soluzioni AI innovative',
    color: 'text-blue-600',
    bgColor: 'from-blue-500 to-blue-600',
    animationDuration: 26000 // 2 scene x 13 secondi = 26 secondi totali
  }
]

const HeroServicesAnimation = () => {
  const [currentService, setCurrentService] = useState(0)
  const [isUserControlled, setIsUserControlled] = useState(false)
  const [lastUserInteraction, setLastUserInteraction] = useState(Date.now())

  // Gestione del ciclo automatico
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      // Se l'utente non ha interagito negli ultimi 8 secondi, riprendi il ciclo automatico
      if (!isUserControlled || (now - lastUserInteraction > 8000)) {
        setCurrentService((prev) => (prev + 1) % services.length)
        setIsUserControlled(false)
      }
    }, services[currentService].animationDuration || 6000) // Usa la durata specifica di ogni servizio

    return () => clearInterval(interval)
  }, [isUserControlled, lastUserInteraction, currentService])

  // Gestione della selezione manuale
  const handleServiceSelect = (index: number) => {
    setCurrentService(index)
    setIsUserControlled(true)
    setLastUserInteraction(Date.now())
    
    // Dopo la durata dell'animazione + 2 secondi, permetti di nuovo il ciclo automatico
    const currentServiceDuration = services[index].animationDuration
    setTimeout(() => {
      setIsUserControlled(false)
    }, currentServiceDuration + 2000)
  }

  const currentServiceData = services[currentService]
  const Icon = currentServiceData.icon

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Sfondo decorativo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary-100 to-purple-100 rounded-3xl opacity-30"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Contenuto principale */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 min-h-[400px]">
          {/* Header del servizio - Layout orizzontale */}
          <motion.div
            key={currentService}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-4"
          >
            <motion.div
              className={`w-16 h-16 bg-gradient-to-r ${currentServiceData.bgColor} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0`}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon className="text-white text-2xl" />
            </motion.div>
            
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${currentServiceData.color} mb-1`}>
                {currentServiceData.title}
              </h3>
              <p className="text-secondary-600 text-sm">
                {currentServiceData.description}
              </p>
            </div>
          </motion.div>

          {/* Area dell'animazione specifica con scroll */}
          <motion.div
            key={`animation-${currentService}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-80 mb-8 overflow-hidden"
          >
            {currentService === 0 && <WebDevelopmentAnimation />}
            {currentService === 1 && <AdsAnimation />}
            {currentService === 2 && <SEOAnimation />}
            {currentService === 3 && (
              <AIAnimation />
            )}
          </motion.div>



          {/* Navigazione dei servizi */}
          <div className="flex justify-center space-x-3">
            {services.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <motion.button
                  key={service.title}
                  onClick={() => handleServiceSelect(index)}
                  className={`relative p-3 rounded-xl transition-all duration-300 ${
                    index === currentService
                      ? `bg-gradient-to-r ${service.bgColor} text-white shadow-lg`
                      : 'bg-secondary-100 text-secondary-600 hover:bg-secondary-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ServiceIcon className="text-lg" />
                  
                  {/* Progress indicator per l'animazione corrente */}
                  {index === currentService && isUserControlled && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "2rem" }}
                      transition={{ 
                        duration: services[currentService].animationDuration / 1000,
                        ease: "linear"
                      }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroServicesAnimation