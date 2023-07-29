import React, { createContext, useContext, useState } from 'react'

interface ContinentContextProps {
  checkedCountries: string[]
  setCheckedCountries: React.Dispatch<React.SetStateAction<string[]>>
}

const ContinentContext = createContext<ContinentContextProps | null>(null)

export const useContinentContext = () => {
  const context = useContext(ContinentContext)
  if (!context) {
    throw new Error(
      'useContinentContext must be used within a ContinentProvider'
    )
  }
  return context
}

// Define the "children" prop in the React.FC type
export const ContinentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [checkedCountries, setCheckedCountries] = useState<string[]>([])

  return (
    <ContinentContext.Provider
      value={{ checkedCountries, setCheckedCountries }}
    >
      {children}
    </ContinentContext.Provider>
  )
}
