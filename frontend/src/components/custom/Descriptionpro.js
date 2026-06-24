"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ProtegoTabs() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full max-w-2xl sm:max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden font-sans">
      {/* Tabs Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <ul className="flex flex-wrap justify-between list-none m-0 p-0">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#f3f3f3" : "white",
              }}
              className="flex-1 text-center p-2 sm:p-3 cursor-pointer relative font-semibold text-gray-800 hover:text-blue-900"
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
              {item === selectedTab && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded"
                />
              )}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Tab Content */}
      <main className="flex justify-center items-start p-4 sm:p-6 text-justify">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full text-gray-800 leading-relaxed text-sm sm:text-base"
          >
            <p className="whitespace-pre-line">{selectedTab ? selectedTab.text : ""}</p>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Data   ================
 */

const tabs = [
  {
    label: "Description",
    text: `Stay protected in style with our Protego ring — sleek design, smart security, and comfortable wear. Perfect for everyday confidence and effortless safety wherever you go.Whether it’s a late-night walk, a solo trip, or a daily commute — Protego ensures help is always one touch away.`,
  },
  {
    label: "Care",
    text: `• Do not tamper with electronic components.
• Do not immerse in water; wipe clean with a soft cloth.
• Avoid dropping or strong impacts.
• Charge only via supported solar or kinetic methods.
• Keep away from magnetic fields or high-voltage sources.
• Store in a safe, dry place when not in use.
• Use the mobile app for firmware updates and safe route settings.`,
  },
  {
    label: "Features",
    text: `• SOS Trigger
• Real-Time Location Sharing
• Live Audio Recording
• Video Auto Recording
• Anti-Theft Shock
• AI Sound Detection
• Voice-Command SOS
• False Alert Prevention (5 sec)
• Solar/Kinetic Charging Support
• Geo-fencing Alerts
• Safe Route Suggestion (via App)
• Haptic Communication
• Guardian Integration
• Trusted Ride Mode
• App Support`,
  },
  {
    label: "How to Use",
    text: `Press the small button located beneath the ring to activate it. Once pressed, your guardians will immediately receive an emergency notification on their mobile devices. At the same time, the ring will start recording audio and video automatically. It also activates a mild electric current feature designed for emergency self-protection.`,
  },
];
