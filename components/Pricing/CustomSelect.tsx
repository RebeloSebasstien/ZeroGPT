import Image from 'next/image'
import { SelectHTMLAttributes, forwardRef } from 'react'

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[]
}

export const CustomSelect = forwardRef<HTMLSelectElement, CustomSelectProps>(
    ({ options, className, ...props }, ref) => {
        return (
            <div className="relative w-full cursor-pointer">
                <select
                    ref={ref}
                    className={`w-full appearance-none outline-none px-3 cursor-pointer ${className}`}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className='w-full pt-4'>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                    <Image
                        src="/assets/arrow-select.svg"
                        alt="Dropdown arrow"
                        width={15}
                        height={15}
                    />
                </div>
            </div>
        )
    }
)

CustomSelect.displayName = 'CustomSelect'

