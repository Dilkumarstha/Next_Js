import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-zinc-100 px-4">
      <div className="relative w-full max-w-md">
        {/* Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur opacity-20"></div>

        {/* Card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-10">
          {/* Logo / Brand */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-lg">
              A
            </div>
            <h1 className="text-3xl font-extrabold text-zinc-800 tracking-tight">
              Welcome back
            </h1>
            <p className="text-zinc-500 mt-2">
              Sign in to access your dashboard
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-600 mb-2 uppercase tracking-wide">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent shadow-sm transition"
                />
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-400">
                  @
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-600 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent shadow-sm transition"
                />
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-zinc-400">
                  🔒
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-zinc-600">
                <input type="checkbox" className="rounded border-zinc-300" />
                Remember me
              </label>
              <a
                href="#"
                className="font-medium text-amber-600 hover:text-amber-700 transition"
              >
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="button"
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-red-100 from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              <span className="relative z-10">Sign in</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></div>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-zinc-00">
            Don’t have an account?{" "}
            <a
              href="#"
              className="font-semibold text-amber-600 hover:text-amber-700 transition"
            >
              Create one
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
