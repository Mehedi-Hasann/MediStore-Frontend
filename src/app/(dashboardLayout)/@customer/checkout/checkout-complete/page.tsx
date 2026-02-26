"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccessUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">

        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl p-16 text-center relative overflow-hidden">

          {/* Glow Effect */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

          {/* Icon */}
          <div className="flex justify-center mb-10 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-500 blur-2xl opacity-30"></div>
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-xl">
                <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-4 relative z-10">
            Checkout Completed
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-lg mb-12 relative z-10">
            Your order has been successfully placed.
            <br />
            Thank you for choosing us.
          </p>

          {/* Button */}
<Link href={'/shop'}>          <button className="relative z-10 px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-emerald-500/30 transition-all duration-300">
            Continue Shopping
          </button></Link>

        </div>

      </div>
    </div>
  );
}