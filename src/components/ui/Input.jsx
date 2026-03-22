import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const Input = ({ label, type, value, onChange, placeHolder }) => {
  const [show, setShow] = useState(false)

  const isPassword = type === "password"

  return (
    <div className="space-y-1">
      <label className="text-sm text-[var(--text-secondary)]">
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          className="w-full px-4 py-2.5 rounded-xl 
          bg-transparent border border-[var(--border)] 
          focus:outline-none focus:ring-2 
          focus:ring-[var(--primary)]"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default Input