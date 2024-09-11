import { forwardRef } from 'react'

const Input = forwardRef(function Input({label, name, type, ...props}, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-slate-300 bg-slate-100 text-slate-600 focus:outline-none focus:border-slate-400"
    return (
        <div className="mb-4">
            <label className="block uppercase text-sm font-bold text-slate-600" htmlFor={name}>{label}</label>
            <input id={name} type={type} name={name} ref={ref} {...props} className={classes} />
        </div>
    )
})

export default Input