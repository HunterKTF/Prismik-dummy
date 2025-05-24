import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Boxes,
  Gauge,
  Wallet,
  LayoutDashboard,
  CreditCard,
  ChartNoAxesCombined
} from "lucide-react"

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Horizontal & Vertical",
      url: "/analysis",
      icon: Gauge,
    },
    {
      name: "Cashflow",
      url: "/cashflow",
      icon: Wallet,
    },
    {
      name: "Credit",
      url: "/credit",
      icon: CreditCard,
    },
    {
      name: "Projections",
      url: "/projections",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Dupont Analysis",
      url: "/dupont",
      icon: Boxes,
    },
  ],
}