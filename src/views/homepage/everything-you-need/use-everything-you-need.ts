import { useState } from "react"

const useEveryThingYouNeed = () => {

  const [activeTab, setActiveTab] = useState<"shipping" | "marketing" | "website">("website")
  const handleTabChange = (tab: "shipping" | "marketing" | "website") => {
    console.log(tab)
    setActiveTab(tab)
  }

  return {
    activeTab,
    handleTabChange
  }
}

export default useEveryThingYouNeed