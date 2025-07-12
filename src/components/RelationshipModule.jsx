

import { useState, useEffect } from "react"
import {
  Brain,
  DollarSign,
  Calendar,
  Camera,
  Users,
  Heart,
  TrendingUp,
  AlertCircle,
  Gift,
  Target,
  Smile,
  MessageSquare,
  Mic,
  Video,
  Shield,
  Bell,
  Star,
  Trophy,
  MapPin,
  Zap,
  BookOpen,
  PlusCircle,
  Timer,
  Thermometer,
  Activity,
} from "lucide-react"

// Simple Button component to replace the missing UI components
const Button = ({ children, className = "", onClick, variant = "default", size = "default", ...props }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors"
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100"
  }
  const sizeClasses = {
    default: "px-4 py-2",
    sm: "px-3 py-1 text-sm"
  }
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

// Simple Card component
const Card = ({ children, className = "", ...props }) => (
  <div className={`p-4 rounded-lg border bg-white ${className}`} {...props}>
    {children}
  </div>
)

// Simple Avatar components
const Avatar = ({ children, className = "", ...props }) => (
  <div className={`w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ${className}`} {...props}>
    {children}
  </div>
)

const AvatarImage = ({ src, alt, ...props }) => (
  <img src={src} alt={alt} className="w-full h-full rounded-full object-cover" {...props} />
)

const AvatarFallback = ({ children, ...props }) => (
  <span className="text-sm font-medium text-gray-600" {...props}>{children}</span>
)

// Simple Progress component
const Progress = ({ value = 0, className = "", ...props }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`} {...props}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
      style={{ width: `${value}%` }}
    />
  </div>
)

// Simple Badge component
const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800"
  }
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}

// Simple Tabs components
const Tabs = ({ children, defaultValue, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
)

const TabsList = ({ children, className = "", ...props }) => (
  <div className={`flex space-x-1 rounded-lg bg-gray-100 p-1 ${className}`} {...props}>
    {children}
  </div>
)

const TabsTrigger = ({ children, value, className = "", ...props }) => (
  <button className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${className}`} {...props}>
    {children}
  </button>
)

const TabsContent = ({ children, value, className = "", ...props }) => (
  <div className={`mt-2 ${className}`} {...props}>
    {children}
  </div>
)

export function RelationshipModule({ userStatus }) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [conflictActive, setConflictActive] = useState(false)
  const [cooldownTimer, setCooldownTimer] = useState(0)
  const [currentMood, setCurrentMood] = useState("neutral")

  useEffect(() => {
    if (cooldownTimer > 0) {
      const timer = setTimeout(() => setCooldownTimer(cooldownTimer - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [cooldownTimer])

  if (userStatus === "single") {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-center">
        <div>
          <Heart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <h2 className="text-xl font-semibold mb-2">Find Your Perfect Match First</h2>
          <p className="text-gray-600 mb-4">
            The relationship management tools will be available once you're in a relationship.
          </p>
          <p className="text-sm text-gray-500">
            Switch to the Dating module to start connecting with potential partners!
          </p>
        </div>
      </div>
    )
  }

  const DashboardView = () => (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium">You</span>
          </div>
          <Heart className="h-6 w-6 text-pink-500 animate-pulse" />
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium">JS</span>
          </div>
        </div>
        <h2 className="text-lg font-semibold">You & Jessica</h2>
        <p className="text-sm text-gray-600">Together for 8 months, 12 days</p>
        <span className="mt-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
          Relationship Status: Thriving
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border">
          <Smile className="h-8 w-8 mx-auto mb-2 text-green-500" />
          <h3 className="font-semibold text-sm">Relationship Health</h3>
          <p className="text-2xl font-bold text-green-500">92%</p>
          <p className="text-xs text-green-600">+3% this week</p>
        </div>
        <div className="p-4 text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border">
          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
          <h3 className="font-semibold text-sm">Growth Score</h3>
          <p className="text-2xl font-bold text-blue-500">+15%</p>
          <p className="text-xs text-blue-600">Monthly trend</p>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-500" />
          AI Relationship Insights
        </h3>
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-sm">
            <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
            <span>
              Jessica's stress levels are elevated today - consider a surprise gesture or quality time together
            </span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Gift className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
            <span>Your 9-month anniversary is in 12 days - I've prepared some celebration ideas!</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Star className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span>You both responded positively to yesterday's date suggestion - similar activities recommended</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-16 flex-col gap-1 bg-gradient-to-br from-red-50 to-pink-50 border-pink-200"
            onClick={() => setActiveTab("ai-conflict")}
          >
            <Brain className="h-5 w-5 text-red-500" />
            <span className="text-xs">Conflict Resolution</span>
          </Button>
          <Button
            variant="outline"
            className="h-16 flex-col gap-1 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
            onClick={() => setActiveTab("finances")}
          >
            <DollarSign className="h-5 w-5 text-green-500" />
            <span className="text-xs">Financial Harmony</span>
          </Button>
          <Button
            variant="outline"
            className="h-16 flex-col gap-1 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"
            onClick={() => setActiveTab("dates")}
          >
            <Calendar className="h-5 w-5 text-blue-500" />
            <span className="text-xs">Smart Dating</span>
          </Button>
          <Button
            variant="outline"
            className="h-16 flex-col gap-1 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200"
            onClick={() => setActiveTab("communication")}
          >
            <MessageSquare className="h-5 w-5 text-purple-500" />
            <span className="text-xs">Private Hub</span>
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold mb-3">Today's Relationship Prompt</h3>
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-lg">
          <p className="text-sm font-medium text-purple-800">
            "What's one thing your partner did this week that made you feel appreciated?"
          </p>
          <div className="flex gap-2 mt-3">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Share Response
            </Button>
            <Button size="sm" variant="outline">
              Skip Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="flex-1 overflow-hidden">
        {activeTab === "dashboard" && <DashboardView />}
        {activeTab === "ai-conflict" && (
          <AIConflictView
            conflictActive={conflictActive}
            setConflictActive={setConflictActive}
            cooldownTimer={cooldownTimer}
            setCooldownTimer={setCooldownTimer}
          />
        )}
        {activeTab === "finances" && <FinancesView />}
        {activeTab === "dates" && <DatesView />}
        {activeTab === "communication" && (
          <CommunicationView currentMood={currentMood} setCurrentMood={setCurrentMood} />
        )}
        {activeTab === "memories" && <MemoriesView />}
        {activeTab === "social" && <SocialView />}
      </div>

      {/* Bottom Navigation */}
      <nav className="border-t bg-white p-1">
        <div className="flex justify-around">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("dashboard")}
            className={`flex-col gap-1 h-12 ${activeTab === "dashboard" ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}`}
          >
            <Heart className="h-4 w-4" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant={activeTab === "ai-conflict" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("ai-conflict")}
            className={`flex-col gap-1 h-12 ${activeTab === "ai-conflict" ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}`}
          >
            <Brain className="h-4 w-4" />
            <span className="text-xs">AI Help</span>
          </Button>
          <Button
            variant={activeTab === "finances" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("finances")}
            className={`flex-col gap-1 h-12 ${activeTab === "finances" ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}`}
          >
            <DollarSign className="h-4 w-4" />
            <span className="text-xs">Money</span>
          </Button>
          <Button
            variant={activeTab === "dates" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("dates")}
            className={`flex-col gap-1 h-12 ${activeTab === "dates" ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}`}
          >
            <Calendar className="h-4 w-4" />
            <span className="text-xs">Dates</span>
          </Button>
          <Button
            variant={activeTab === "memories" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("memories")}
            className={`flex-col gap-1 h-12 ${activeTab === "memories" ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}`}
          >
            <Camera className="h-4 w-4" />
            <span className="text-xs">Memories</span>
          </Button>
          <Button
            variant={activeTab === "social" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab("social")}
            className={`flex-col gap-1 h-12 ${activeTab === "social" ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""}`}
          >
            <Users className="h-4 w-4" />
            <span className="text-xs">Social</span>
          </Button>
        </div>
      </nav>
    </>
  )
}

// AI Conflict Resolution Component
const AIConflictView = ({ conflictActive, setConflictActive, cooldownTimer, setCooldownTimer }) => (
  <div className="p-4 space-y-4">
    <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
      <Brain className="h-6 w-6 text-purple-500" />
      AI Conflict Resolution
    </h2>

    {conflictActive && (
      <div className="p-4 border-red-200 bg-red-50">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <h3 className="font-semibold text-red-800">Active Conflict Detected</h3>
        </div>
        <p className="text-sm text-red-700 mb-3">
          High tension detected in recent messages about weekend plans. Emotional intensity: High
        </p>
        <div className="flex gap-2">
          <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => setCooldownTimer(600)}>
            Start Mediation
          </Button>
          <Button size="sm" variant="outline" onClick={() => setConflictActive(false)}>
            Resolve Manually
          </Button>
        </div>
      </div>
    )}

    {cooldownTimer > 0 && (
      <div className="p-4 border-blue-200 bg-blue-50">
        <div className="text-center">
          <Timer className="h-8 w-8 mx-auto mb-2 text-blue-600" />
          <h3 className="font-semibold text-blue-800">Cool-down Period Active</h3>
          <p className="text-2xl font-bold text-blue-600 my-2">
            {Math.floor(cooldownTimer / 60)}:{(cooldownTimer % 60).toString().padStart(2, "0")}
          </p>
          <p className="text-sm text-blue-700">Take this time to reflect and breathe</p>
        </div>
      </div>
    )}

    <div className="p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Thermometer className="h-5 w-5 text-orange-500" />
        Real-time Emotion Analysis
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Your Emotional State</span>
            <Badge variant="destructive">Frustrated</Badge>
          </div>
          <Progress value={75} className="h-3" />
          <p className="text-xs text-gray-600 mt-1">Stress indicators: Rapid typing, short responses</p>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Jessica's Emotional State</span>
            <Badge variant="outline" className="border-yellow-500 text-yellow-700">
              Defensive
            </Badge>
          </div>
          <Progress value={60} className="h-3" />
          <p className="text-xs text-gray-600 mt-1">Pattern: Longer pauses between messages</p>
        </div>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">AI Mediation Suggestions</h3>
      <Tabs defaultValue="immediate" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="immediate">Immediate</TabsTrigger>
          <TabsTrigger value="longterm">Long-term</TabsTrigger>
        </TabsList>
        <TabsContent value="immediate" className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-800">Suggested Response:</p>
            <p className="text-sm text-blue-700 mt-1">
              "I can see we're both feeling frustrated about this. Can we take a step back and find a solution that
              works for both of us?"
            </p>
            <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
              Use This Response
            </Button>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="text-sm font-medium text-green-800">De-escalation Technique:</p>
            <p className="text-sm text-green-700 mt-1">
              Acknowledge her feelings first: "I understand you're upset about the change in plans..."
            </p>
          </div>
        </TabsContent>
        <TabsContent value="longterm" className="space-y-3">
          <div className="p-3 bg-purple-50 rounded-lg">
            <p className="text-sm font-medium text-purple-800">Pattern Analysis:</p>
            <p className="text-sm text-purple-700 mt-1">
              This is the 3rd disagreement about weekend planning this month. Consider establishing a weekly planning
              routine.
            </p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg">
            <p className="text-sm font-medium text-orange-800">Relationship Improvement:</p>
            <p className="text-sm text-orange-700 mt-1">
              Schedule a calm discussion about decision-making preferences when you're both relaxed.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Post-Conflict Reconciliation</h3>
      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Heart className="h-4 w-4 mr-2" />
          Send Reconciliation Message Template
        </Button>
        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Gift className="h-4 w-4 mr-2" />
          Suggest Peace-Making Gesture
        </Button>
        <Button variant="outline" className="w-full justify-start bg-transparent">
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Relationship Check-in
        </Button>
      </div>
    </div>

    {!conflictActive && (
      <Button
        className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
        onClick={() => setConflictActive(true)}
      >
        Simulate Conflict Detection
      </Button>
    )}
  </div>
)

// Financial Harmony Component
const FinancesView = () => (
  <div className="p-4 space-y-4">
    <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
      <DollarSign className="h-6 w-6 text-green-500" />
      Financial Harmony Suite
    </h2>

    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Target className="h-5 w-5 text-green-600" />
        Joint Savings Goals
      </h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Dream Vacation to Japan</span>
            <span className="text-green-600 font-semibold">$2,400 / $5,000</span>
          </div>
          <Progress value={48} className="h-3" />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Started 3 months ago</span>
            <span>7 months remaining</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Emergency Fund</span>
            <span className="text-green-600 font-semibold">$8,200 / $10,000</span>
          </div>
          <Progress value={82} className="h-3" />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Almost there!</span>
            <span>$1,800 to go</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">New Apartment Down Payment</span>
            <span className="text-blue-600 font-semibold">$12,500 / $25,000</span>
          </div>
          <Progress value={50} className="h-3" />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>Halfway milestone reached!</span>
            <span>Target: Dec 2024</span>
          </div>
        </div>
      </div>
      <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add New Goal
      </Button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 text-center">
        <h4 className="font-semibold text-sm mb-2">This Month</h4>
        <p className="text-2xl font-bold text-blue-600">$2,840</p>
        <p className="text-xs text-gray-600">Total Expenses</p>
      </div>
      <div className="p-4 text-center">
        <h4 className="font-semibold text-sm mb-2">Saved Together</h4>
        <p className="text-2xl font-bold text-green-600">$1,250</p>
        <p className="text-xs text-gray-600">This Month</p>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Expense Breakdown</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span className="text-sm">Dining Out</span>
          </div>
          <span className="text-sm font-medium">$340 (12%)</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm">Groceries</span>
          </div>
          <span className="text-sm font-medium">$480 (17%)</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm">Entertainment</span>
          </div>
          <span className="text-sm font-medium">$220 (8%)</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span className="text-sm">Utilities</span>
          </div>
          <span className="text-sm font-medium">$180 (6%)</span>
        </div>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Smart Features</h3>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <Camera className="h-5 w-5 text-blue-500" />
          <span className="text-xs">Scan Receipt</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-purple-50 to-violet-50">
          <Bell className="h-5 w-5 text-purple-500" />
          <span className="text-xs">Bill Reminders</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <Activity className="h-5 w-5 text-green-500" />
          <span className="text-xs">Expense Split</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-orange-50 to-red-50">
          <TrendingUp className="h-5 w-5 text-orange-500" />
          <span className="text-xs">Budget Plan</span>
        </Button>
      </div>
    </div>

    <div className="p-4 bg-yellow-50 border-yellow-200">
      <h3 className="font-semibold mb-2 text-yellow-800">Upcoming Bills</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm">Rent</span>
          <div className="text-right">
            <p className="text-sm font-medium">$1,200</p>
            <p className="text-xs text-gray-600">Due in 3 days</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Internet</span>
          <div className="text-right">
            <p className="text-sm font-medium">$65</p>
            <p className="text-xs text-gray-600">Due in 5 days</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Smart Date Planning Component
const DatesView = () => (
  <div className="p-4 space-y-4">
    <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
      <Calendar className="h-6 w-6 text-blue-500" />
      Smart Date Planning
    </h2>

    <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="h-5 w-5 text-purple-500" />
        <h3 className="font-semibold text-purple-800">AI Date Suggestion</h3>
      </div>
      <div className="bg-white p-4 rounded-lg mb-3">
        <h4 className="font-medium text-lg mb-2">Sunset Picnic at Riverside Park</h4>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Thermometer className="h-4 w-4" />
            72°F Perfect weather
          </span>
          <span className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            $25 budget
          </span>
        </div>
        <p className="text-sm text-gray-700 mb-3">
          Based on your love for outdoor activities and Jessica's photography hobby. Golden hour lighting perfect for
          photos!
        </p>
        <div className="flex gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Outdoor
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            Photography
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            Romantic
          </Badge>
        </div>
      </div>
      <div className="flex gap-2">
        <Button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500">Plan This Date</Button>
        <Button variant="outline" className="bg-transparent">
          Get Another Idea
        </Button>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-blue-500" />
        Shared Calendar
      </h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
          <div>
            <h4 className="font-medium text-sm">Movie Night</h4>
            <p className="text-xs text-gray-600">Home • Cozy evening</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Tonight</p>
            <p className="text-xs text-gray-600">7:00 PM</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
          <div>
            <h4 className="font-medium text-sm">Dinner with Mike & Sarah</h4>
            <p className="text-xs text-gray-600">Italian Bistro • Double date</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Saturday</p>
            <p className="text-xs text-gray-600">6:00 PM</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
          <div>
            <h4 className="font-medium text-sm">Weekend Getaway</h4>
            <p className="text-xs text-gray-600">Mountain cabin • 2 days</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Next Week</p>
            <p className="text-xs text-gray-600">Fri-Sun</p>
          </div>
        </div>
      </div>
      <Button variant="outline" className="w-full mt-3 bg-transparent">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add New Date
      </Button>
    </div>

    <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-yellow-600" />
        This Week's Date Challenge
      </h3>
      <div className="bg-white p-3 rounded-lg">
        <h4 className="font-medium text-yellow-800 mb-1">Culinary Adventure</h4>
        <p className="text-sm text-yellow-700 mb-3">
          Try a cuisine neither of you has experienced before. Bonus points for cooking it together at home!
        </p>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="border-yellow-500 text-yellow-700">
            Challenge Active
          </Badge>
          <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700">
            Accept Challenge
          </Button>
        </div>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Virtual Date Options</h3>
      <p className="text-sm text-gray-600 mb-3">Perfect for long-distance moments or cozy nights in</p>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-red-50 to-pink-50">
          <Video className="h-5 w-5 text-red-500" />
          <span className="text-xs">Movie Sync</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <BookOpen className="h-5 w-5 text-blue-500" />
          <span className="text-xs">Book Club</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <Target className="h-5 w-5 text-green-500" />
          <span className="text-xs">Online Games</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-purple-50 to-violet-50">
          <Heart className="h-5 w-5 text-purple-500" />
          <span className="text-xs">Virtual Tour</span>
        </Button>
      </div>
    </div>
  </div>
)

// Private Communication Hub
const CommunicationView = ({ currentMood, setCurrentMood }) => (
  <div className="p-4 space-y-4">
    <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
      <Shield className="h-6 w-6 text-green-500" />
      Private Communication Hub
    </h2>

    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="h-5 w-5 text-green-600" />
        <h3 className="font-semibold text-green-800">End-to-End Encrypted</h3>
      </div>
      <p className="text-sm text-green-700">Your conversations are completely private and secure</p>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Daily Mood Check-in</h3>
      <p className="text-sm text-gray-600 mb-3">How are you feeling today?</p>
      <div className="grid grid-cols-5 gap-2 mb-3">
        {["😢", "😕", "😐", "😊", "😍"].map((emoji, index) => (
          <Button
            key={index}
            variant={currentMood === ["sad", "frustrated", "neutral", "happy", "love"][index] ? "default" : "outline"}
            className="h-12 text-2xl bg-transparent"
            onClick={() => setCurrentMood(["sad", "frustrated", "neutral", "happy", "love"][index])}
          >
            {emoji}
          </Button>
        ))}
      </div>
      <p className="text-xs text-gray-500 text-center">Your mood helps us provide better relationship insights</p>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Love Language Translation</h3>
      <div className="bg-purple-50 p-3 rounded-lg mb-3">
        <p className="text-sm font-medium text-purple-800">Your Love Language: Acts of Service</p>
        <p className="text-sm text-purple-700">Jessica's Love Language: Words of Affirmation</p>
      </div>
      <div className="bg-blue-50 p-3 rounded-lg">
        <p className="text-sm font-medium text-blue-800">Translation Tip:</p>
        <p className="text-sm text-blue-700">
          When Jessica says "I appreciate you," she's expressing love. Consider responding with a helpful action!
        </p>
      </div>
    </div>

    <div className="p-4">
      <h3 className="font-semibold mb-3">Communication Tools</h3>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <MessageSquare className="h-5 w-5 text-blue-500" />
          <span className="text-xs">Secure Messages</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <Mic className="h-5 w-5 text-green-500" />
          <span className="text-xs">Voice Notes</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-purple-50 to-violet-50">
          <Video className="h-5 w-5 text-purple-500" />
          <span className="text-xs">Video Messages</span>
        </Button>
        <Button variant="outline" className="flex-col gap-2 h-16 bg-gradient-to-br from-pink-50 to-red-50">
          <Heart className="h-5 w-5 text-pink-500" />
          <span className="text-xs">Love Notes</span>
        </Button>
      </div>
    </div>
    {/* The original code snippet was incomplete and ended here. */}
  </div>
)