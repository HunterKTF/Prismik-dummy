import { DashboardContent } from "@/components/dashboard/content"

import {profitability, activity, liquidity, solvency} from "@/components/dashboard/db-data.json"

export default function Page() {
  console.log(profitability);
  console.log(activity);
  console.log(liquidity);
  console.log(solvency);
  return (
    <DashboardContent />
  )
}
