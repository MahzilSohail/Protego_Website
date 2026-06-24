"use client"
import { motion } from "framer-motion";
export default function WhyProtego() {
  return (
    <section className="w-full py-24 bg-[#f4f7f6]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 text-center">
          Why PROTEGO?
        </h2>

        {/* Subline */}
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mt-4">
          PROTEGO is built for real-world safety.
          It works quietly in the background to keep you connected, informed,
          and protected at every step of your journey.
        </p>

        {/* Section Content */}
        <motion.div className="mt-16 space-y-12"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Point 1 */}
          <div className="border-l-4 border-[#89b2a8] pl-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Designed for real emergencies
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              When something unexpected happens, speed matters.
              PROTEGO instantly notifies your trusted contacts with accurate location
              details and situational indicators, ensuring help reaches you faster.
              There is no extra tapping or navigating through menus,
              the system reacts as soon as you need it.
            </p>
          </div>

          {/* Point 2 */}
          <div className="border-l-4 border-[#b1cbd3] pl-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              A safety network that stays aware
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Geo-fencing makes sure that your guardians are alerted
              the moment you move outside your usual safe zones.
              Whether it’s a late-night walk or a sudden detour,
              PROTEGO quietly observes the patterns and raises alarms only when it matters.
            </p>
          </div>

          {/* Point 3 */}
          <div className="border-l-4 border-[#d5e4df] pl-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Technology that guides, not distracts
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              The Safe Route system helps you choose the paths that are commonly used,
              monitored, or well-lit. Instead of complicated directions,
              the app gives clear guidance focused entirely on reaching safely
              without overwhelming the user.
            </p>
          </div>

          {/* Point 4 */}
          <div className="border-l-4 border-[#e8efec] pl-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Discreet and reliable communication
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              In situations where you cannot speak or pull out your phone,
              PROTEGO’s haptic feedback becomes your silent channel.
              A simple vibration pattern informs you that your guardians
              are on their way or that a route deviation has been detected.
              Subtle, private, and effective.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

