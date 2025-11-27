import React, { useState } from "react";
import Logo from "../components/Logo";

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) => {
    // simple RFC-5322-ish regex for basic validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setMessage("");

    if (!email || !validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    // Simulate an async submit (replace with real API call)
    setTimeout(() => {
      setStatus("success");
      setMessage(`Thanks — we'll notify ${email} when we launch!`);
      setEmail("");
    }, 900);
  };
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center px-4 py-6">

      {/* Logo Top Left */}
      <div className="w-full flex justify-start">
        <Logo />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-20 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r 
          from-green-300 via-blue-400 to-purple-400 text-transparent bg-clip-text"
        >
          Coming Soon
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl">
          From automation of people processes to creating
          an engaged and driven culture.
        </p>

        {/* Email Input */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full max-w-md"
          aria-live="polite"
        >
          <div className="flex items-center bg-neutral-800 rounded-xl px-4 py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Please enter your email address"
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400 autofill:bg-transparent"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="ml-3 bg-white text-black px-4 py-1.5 rounded-lg font-medium text-sm disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Notify Me"}
            </button>
          </div>

          {/* Message area */}
          <div className="mt-3">
            {status === "success" && (
              <div className="rounded-lg bg-emerald-900/40 border border-emerald-600 text-emerald-200 px-4 py-2 text-sm">
                {message}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-lg bg-rose-900/40 border border-rose-600 text-rose-200 px-4 py-2 text-sm">
                {message}
              </div>
            )}
          </div>
        </form>

        <p className="mt-3 text-gray-400 text-xs">Notify me when App is launched</p>

        {/* Coming Soon Appstore + Playstore */}
        <div className="mt-8 flex space-x-4">

          {/* App Store Badge */}
          <div className="flex items-center space-x-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="h-7"
            />
            <div className="text-left">
              <p className="text-xs text-gray-300">Coming Soon on</p>
              <p className="font-semibold text-white text-sm">App Store</p>
            </div>
          </div>

          {/* Google Play Badge */}
          <div className="flex items-center space-x-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo.png"
              alt="Google Play"
              className="h-7"
            />
            <div className="text-left">
              <p className="text-xs text-gray-300">Coming Soon on</p>
              <p className="font-semibold text-white text-sm">Google Play</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
