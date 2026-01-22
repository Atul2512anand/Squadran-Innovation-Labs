'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"


export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-neutral-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <div className="bg-white rounded-xl p-2 w-20 h-20 flex items-center justify-center overflow-hidden mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <img
              src="/logo-squadran.jpg"
              alt="Squadran Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Squadran Innovation Labs
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Empowering campuses with an intelligent digital ecosystem 

          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
